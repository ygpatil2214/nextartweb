import React, { useState } from 'react';
import { Calculator, Zap, Shield, HelpCircle, ArrowRight } from 'lucide-react';

interface CalculatorsProps {
  onOpenInquiry: (subject: string) => void;
}

export default function Calculators({ onOpenInquiry }: CalculatorsProps) {
  // Stabilizer State
  const [phase, setPhase] = useState<'single' | 'three'>('three');
  const [loadType, setLoadType] = useState<string>('cnc');
  const [loadValue, setLoadValue] = useState<number>(50);
  const [loadUnit, setLoadUnit] = useState<'kw' | 'hp' | 'kva'>('kw');
  const [voltageRange, setVoltageRange] = useState<string>('300-470');

  // APFC State
  const [activeLoad, setActiveLoad] = useState<number>(100);
  const [currentPf, setCurrentPf] = useState<number>(0.8);
  const [targetPf, setTargetPf] = useState<number>(0.99);

  // Servo Sizer Logic
  const calculateServo = () => {
    // Convert all to kW first
    let kw = loadValue;
    if (loadUnit === 'hp') {
      kw = loadValue * 0.746;
    } else if (loadUnit === 'kva') {
      kw = loadValue * 0.8; // assume 0.8 PF
    }

    // Safety multiplier based on load type (inductive load starting currents)
    let multiplier = 1.25; // standard buffer
    if (loadType === 'cnc') multiplier = 1.35;
    if (loadType === 'motor') multiplier = 1.5;
    if (loadType === 'compressor') multiplier = 1.8;
    if (loadType === 'stone_crusher') multiplier = 2.0;
    if (loadType === 'medical') multiplier = 1.4;

    const baseKva = kw / 0.8; // standard transformer conversion
    const recommendedKva = Math.ceil(baseKva * multiplier);

    return {
      connectedKw: Math.round(kw * 10) / 10,
      safetyMultiplier: multiplier,
      recommendedKva: recommendedKva < 5 ? 5 : recommendedKva
    };
  };

  // APFC Logic
  const calculateApfc = () => {
    if (currentPf >= targetPf) return 0;
    
    // KVAR = kW * (tan(acos(initial_pf)) - tan(acos(target_pf)))
    const angleInitial = Math.acos(currentPf);
    const angleTarget = Math.acos(targetPf);
    
    const tanInitial = Math.tan(angleInitial);
    const tanTarget = Math.tan(angleTarget);
    
    const requiredKvar = activeLoad * (tanInitial - tanTarget);
    
    // Standard APFC bank sizes are increments of 5 or 25 KVAR
    const rawKvar = Math.round(requiredKvar);
    let standardSize = Math.ceil(rawKvar / 5) * 5;
    if (standardSize > 100) {
      standardSize = Math.ceil(rawKvar / 25) * 25;
    }
    
    return {
      rawKvar: rawKvar,
      standardSize: standardSize
    };
  };

  const servoResult = calculateServo();
  const apfcResult = calculateApfc();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="industrial-calculators">
      {/* Servo Stabilizer Sizer */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl pointer-events-none"></div>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-orange-600/20 text-orange-500 rounded-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display">Servo Stabilizer Size Calculator</h3>
              <p className="text-xs text-slate-400">Calculate the ideal KVA stabilizer for your machinery</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {/* Phase Selector */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Phase Type</label>
              <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
                <button
                  type="button"
                  onClick={() => setPhase('single')}
                  className={`py-1.5 text-xs font-semibold rounded-md transition-all ${
                    phase === 'single'
                      ? 'bg-orange-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Single Phase (230V)
                </button>
                <button
                  type="button"
                  onClick={() => setPhase('three')}
                  className={`py-1.5 text-xs font-semibold rounded-md transition-all ${
                    phase === 'three'
                      ? 'bg-orange-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Three Phase (415V)
                </button>
              </div>
            </div>

            {/* Load Input */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Connected Load</label>
                <input
                  type="number"
                  min="1"
                  value={loadValue}
                  onChange={(e) => setLoadValue(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-orange-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Unit</label>
                <select
                  value={loadUnit}
                  onChange={(e) => setLoadUnit(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-orange-500 text-sm"
                >
                  <option value="kw">kW</option>
                  <option value="hp">HP</option>
                  <option value="kva">KVA</option>
                </select>
              </div>
            </div>

            {/* Equipment Type (Safety Margin trigger) */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-1.5">
                Load Type &amp; Safety Factor
                <span className="group relative text-slate-400 hover:text-white cursor-pointer">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-950 text-[10px] text-slate-300 rounded border border-slate-800 hidden group-hover:block z-10 font-normal leading-normal">
                    Inductive loads like motors and compressors draw massive surge currents when starting. We apply industry-standard sizing buffers.
                  </span>
                </span>
              </label>
              <select
                value={loadType}
                onChange={(e) => setLoadType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-orange-500 text-sm"
              >
                <option value="cnc">CNC / Precision Tools (1.35x buffer)</option>
                <option value="motor">Standard Inductive Motors (1.50x buffer)</option>
                <option value="compressor">Air Compressors / Chillers (1.80x buffer)</option>
                <option value="stone_crusher">Stone Crusher / Heavy RADI (2.00x buffer)</option>
                <option value="medical">Medical Imaging / MRI / Lab (1.40x buffer)</option>
                <option value="resistive">Resistive Heater / Lighting (1.10x buffer)</option>
              </select>
            </div>

            {/* Incoming Voltage Range */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Fluctuation Range (Input Voltages)</label>
              <select
                value={voltageRange}
                onChange={(e) => setVoltageRange(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-orange-500 text-sm"
              >
                <option value="340-460">Standard Fluctuations (340V - 460V)</option>
                <option value="300-470">Heavy Fluctuations (300V - 470V) - *Nashik MIDC Standard*</option>
                <option value="260-480">Extreme Low Voltage (260V - 480V)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sizer Outputs */}
        <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 mt-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-slate-400">Equivalent Load:</span>
            <span className="text-sm font-semibold">{servoResult.connectedKw} kW</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-slate-400">Sizing Buffer Applied:</span>
            <span className="text-sm font-semibold text-orange-500">+{Math.round((servoResult.safetyMultiplier - 1) * 100)}%</span>
          </div>
          <div className="border-t border-slate-800 my-2 pt-3 flex flex-col sm:flex-row justify-between items-stretch sm:items-end gap-4">
            <div>
              <span className="text-xs text-slate-400 block">Recommended Stabilizer:</span>
              <span className="text-2xl font-black text-white font-display">
                {servoResult.recommendedKva} KVA
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                {phase === 'single' ? 'Single Phase (230V)' : 'Three Phase (415V)'}
              </span>
            </div>
            <button
              onClick={() => onOpenInquiry(`Inquiry for ${servoResult.recommendedKva} KVA ${phase === 'single' ? 'Single' : 'Three'} Phase Servo Stabilizer (${voltageRange}V range)`)}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all w-full sm:w-auto shrink-0"
            >
              Get Custom Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* APFC Panel Calculator */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-blue-600/20 text-blue-400 rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display">APFC Capacitor Bank Sizer</h3>
              <p className="text-xs text-slate-400">Calculate the required KVAR to eliminate power factor fines</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {/* Active Load */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">Connected Factory Load (kW)</label>
                <span className="text-sm font-bold text-slate-200">{activeLoad} kW</span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={activeLoad}
                onChange={(e) => setActiveLoad(parseInt(e.target.value))}
                className="w-full accent-orange-500 h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>10 kW</span>
                <span>250 kW</span>
                <span>500 kW</span>
                <span>750 kW</span>
                <span>1000 kW</span>
              </div>
            </div>

            {/* Current PF */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">Existing Power Factor (Average PF)</label>
                <span className="text-sm font-bold text-red-400">{currentPf} PF</span>
              </div>
              <input
                type="range"
                min="0.60"
                max="0.95"
                step="0.01"
                value={currentPf}
                onChange={(e) => setCurrentPf(parseFloat(e.target.value))}
                className="w-full accent-orange-500 h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>0.60 (Poor)</span>
                <span>0.70</span>
                <span>0.80 (Average)</span>
                <span>0.90</span>
                <span>0.95 (Good)</span>
              </div>
            </div>

            {/* Target PF */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">Target Power Factor</label>
                <span className="text-sm font-bold text-green-400">{targetPf} PF</span>
              </div>
              <input
                type="range"
                min="0.95"
                max="1.00"
                step="0.01"
                value={targetPf}
                onChange={(e) => setTargetPf(parseFloat(e.target.value))}
                className="w-full accent-orange-500 h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>0.95 (Incentive Level)</span>
                <span>0.97</span>
                <span>0.99 (Optimal)</span>
                <span>1.00 (Unity)</span>
              </div>
            </div>
          </div>
        </div>

        {/* APFC Sizer Outputs */}
        <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 mt-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-slate-400">Theoretical KVAR Required:</span>
            <span className="text-sm font-semibold">{apfcResult ? apfcResult.rawKvar : 0} KVAR</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-slate-400">Recommended Panel Detuned Reactor:</span>
            <span className="text-sm font-semibold text-orange-500">7% Copper Detuned</span>
          </div>
          <div className="border-t border-slate-800 my-2 pt-3 flex flex-col sm:flex-row justify-between items-stretch sm:items-end gap-4">
            <div>
              <span className="text-xs text-slate-400 block">Recommended APFC Panel:</span>
              <span className="text-2xl font-black text-white font-display">
                {apfcResult ? apfcResult.standardSize : 0} KVAR
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Capacitor Duty Contactor Switched
              </span>
            </div>
            <button
              onClick={() => onOpenInquiry(`Inquiry for ${apfcResult ? apfcResult.standardSize : 0} KVAR APFC Panel with 7% detuned reactors for ${activeLoad}kW load`)}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all w-full sm:w-auto shrink-0"
            >
              Request Custom Build
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
