import { Product, BlogPost, ProjectItem, IndustryItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'three-phase-servo',
    slug: 'three-phase-servo-stabilizer',
    name: 'Three Phase Servo Voltage Stabilizer',
    category: 'servo',
    shortDescription: 'Industrial-grade balanced and unbalanced voltage stabilizers designed to protect expensive CNC machinery, packaging lines, and manufacturing plants from heavy fluctuations.',
    fullDescription: 'Nextart Three Phase Servo Voltage Stabilizers are engineered to deliver constant stable output voltage regardless of incoming grid line fluctuations. These stabilizers are custom-built for unbalanced three-phase loads, featuring independent phase control with high-speed microcontrollers. By ensuring consistent power, Nextart stabilizes your business operations, prevents expensive machinery breakdowns, and significantly reduces downtime.',
    image: 'three_phase_servo',
    features: [
      'Microcontroller-based control system with high-speed response',
      'Independent phase correction for highly unbalanced load configurations',
      'High-grade grain-oriented silicon steel (CRGO) lamination for high efficiency',
      '99.9% pure copper winding for minimal heat loss and long life',
      'Over-voltage and under-voltage protection with auto-trip',
      'Digital LCD display showing Input/Output Voltages, Currents, and Fault codes',
      'No wave distortion — absolute sinusoidal output wave preservation'
    ],
    advantages: [
      'Increases operational lifespan of CNC machinery, VFDs, and PLC systems by up to 45%',
      'Saves energy by minimizing core losses and stabilizing motor terminal voltage',
      'Robust construct built to withstand high-surge inductive starting currents',
      'Requires virtually zero maintenance due to premium quality carbon brushes and drive motors',
      'Full backup support from local Nashik engineering teams with rapid response times'
    ],
    applications: [
      'CNC and VMC Machining Centers in Satpur and Ambad MIDC',
      'Packaging and Plastics Molding Machinery',
      'Pharma and Chemical Manufacturing Cleanrooms',
      'Large Hospitals, Diagnostic Centers, and MRI Machines',
      'Textile Weaving and Spinning Mills'
    ],
    specifications: [
      { parameter: 'Capacity Range', value: '10 KVA to 2000 KVA' },
      { parameter: 'Input Voltage Range', value: '340V - 460V / 300V - 470V / 260V - 480V AC (Standard & Custom)' },
      { parameter: 'Output Voltage', value: '415V AC ± 1% (Adjustable between 380V to 420V)' },
      { parameter: 'Frequency', value: '47 Hz to 53 Hz' },
      { parameter: 'Correction Rate', value: 'Up to 35V per second per phase' },
      { parameter: 'Cooling Method', value: 'Air Cooled or Oil Cooled (depending on capacity/site conditions)' },
      { parameter: 'Efficiency', value: '> 98.5% at full load' },
      { parameter: 'Duty Cycle', value: '100% Continuous 24/7 duty' },
      { parameter: 'Insulation', value: 'Class H / Class F' }
    ],
    industries: ['Manufacturing', 'Pharma', 'Food Processing', 'Cold Storage', 'Hospitals', 'Textile'],
    faqs: [
      {
        question: 'What is the difference between balanced and unbalanced type stabilizers?',
        answer: 'A balanced stabilizer corrects all three phases based on the feedback of a single phase, which is only suitable if your input voltage and load are completely balanced. An unbalanced stabilizer utilizes three independent control cards and motors to correct each phase individually, making it the perfect choice for real-world industrial sites with uneven phase loading and incoming line imbalances.'
      },
      {
        question: 'Does Nextart provide site inspection in Nashik MIDC?',
        answer: 'Yes! Our Nashik-based engineering team provides a free comprehensive site power quality audit, measuring voltage fluctuations and load patterns to suggest the exact KVA rating and input window suitable for your facility.'
      }
    ]
  },
  {
    id: 'oil-cooled-servo',
    slug: 'oil-cooled-servo-stabilizer',
    name: 'Oil Cooled Servo Voltage Stabilizer',
    category: 'servo',
    shortDescription: 'Heavy-duty oil-cooled stabilizers for outdoor installations, high-capacity industrial plants, and dusty, harsh workshop environments.',
    fullDescription: 'Designed for ultimate durability under severe industrial stress, Nextart Oil Cooled Servo Voltage Stabilizers utilize premium electrical grade transformer oil (conforming to IS:335) for cooling and insulation. These units are completely sealed, protecting the inner carbon assemblies and variacs from heavy dust, moisture, corrosive chemical fumes, and extreme ambient temperatures. Perfect for high-capacity applications from 50 KVA up to 2000 KVA.',
    image: 'oil_cooled_servo',
    features: [
      'Hermetically sealed sheet-steel enclosure with high-durability epoxy paint',
      'Fin-type radiators for highly effective thermal oil dissipation',
      'Oil level indicator with magnetic level gauges and thermal sensor alarms',
      'Unbalanced correction system with heavy-duty variacs and carbon brushes',
      'Double wound buck-boost transformers for maximum reliability',
      'Overload and short-circuit protection via integrated MCCB/ACB'
    ],
    advantages: [
      'Exceptional thermal performance under continuous full-load operations',
      'Completely impervious to suspended dust and humidity common in stone crushers and foundries',
      'Superior dielectric strength and cooling efficiency compared to dry air-cooled designs',
      'Significantly higher overload surge capacity for motor starting currents',
      'Expected service life of over 15 to 20 years with periodic oil filtration'
    ],
    applications: [
      'Stone Crusher units in Sinnar and Igatpuri',
      'Steel Rolling Mills and Induction Foundries',
      'Chemical Process Industries and Paper Mills',
      'Infrastructure projects, large multi-story commercial projects',
      'High capacity central power plants'
    ],
    specifications: [
      { parameter: 'Capacity Range', value: '30 KVA to 2500 KVA' },
      { parameter: 'Input Voltage Window', value: '300V - 460V / 280V - 460V / 240V - 470V AC' },
      { parameter: 'Output Regulation', value: '415V AC ± 1.0% (Zero-error control option available)' },
      { parameter: 'Cooling', value: 'Oil Cooled (ONAN - Oil Natural Air Natural)' },
      { parameter: 'Transformer Oil', value: 'Class I Transformer Oil conforming to IS:335 standards' },
      { parameter: 'Response Time', value: 'Less than 10 milliseconds' },
      { parameter: 'Waveform Distortion', value: 'None (True Sine Wave)' },
      { parameter: 'Protection Grade', value: 'IP-55 / IP-65 Enclosure for outdoor use' }
    ],
    industries: ['Stone Crusher', 'Engineering', 'Agriculture', 'Manufacturing', 'Infrastructure'],
    faqs: [
      {
        question: 'How often does the transformer oil need to be replaced or filtered?',
        answer: 'For optimal performance, we recommend testing the dielectric breakdown voltage (BDV) of the oil once a year. Filtration is typically required only every 2-3 years, and complete replacement is rarely necessary unless the oil suffers from severe contamination or degradation.'
      }
    ]
  },
  {
    id: 'air-cooled-servo',
    slug: 'air-cooled-servo-stabilizer',
    name: 'Air Cooled Servo Voltage Stabilizer',
    category: 'servo',
    shortDescription: 'Sleek, low-noise, and highly compact dry-type air-cooled stabilizers optimized for indoor workshops, labs, and commercial buildings.',
    fullDescription: 'Nextart Air Cooled (Dry-Type) Servo Stabilizers provide high-speed, high-efficiency voltage regulation in a clean, quiet, and lightweight vertical enclosure. These stabilizers are designed for indoor installations where oil leakage is a hazard or space is at a premium. Equipped with low-noise forced-air cooling fans and a high-performance microcontroller, they respond instantly to dynamic voltage variations.',
    image: 'air_cooled_servo',
    features: [
      'Compact vertical structure occupying minimum floor space',
      'Forced air cooling with intelligent, temperature-activated high-velocity fans',
      'Low acoustic noise — ideal for medical diagnostic centers and office spaces',
      'Easy access front/rear panels for rapid routine maintenance',
      'Double-wound isolated buck-boost configuration'
    ],
    advantages: [
      'Zero oil-hazard — safe for cleanroom and pharmaceutical applications',
      'Lightweight and easily movable on heavy-duty caster wheels',
      'Virtually instant installation and commissioning with plug-and-play terminal blocks',
      'Highly economical pricing with robust electrical performance'
    ],
    applications: [
      'Pharma Packaging and Quality Control Laboratories in Sinnar',
      'Surgical and ICU Equipment, CT Scan and MRI machines in Nashik Hospitals',
      'IT Servers, Data Centers, and Commercial Office Buildings',
      'Printing Presses and Digital Labeling Lines'
    ],
    specifications: [
      { parameter: 'Capacity Range', value: '5 KVA to 150 KVA' },
      { parameter: 'Input Voltage Options', value: '170V - 270V (1-Phase) / 300V - 460V (3-Phase)' },
      { parameter: 'Output Voltage', value: '230V / 415V ± 1.0%' },
      { parameter: 'Cooling', value: 'Forced Air Cooled (Anodized fin panels with cooling fans)' },
      { parameter: 'Cabinet Protection', value: 'IP-21 / IP-31 Indoor Grade' },
      { parameter: 'Operating Temp', value: '0°C to 50°C' },
      { parameter: 'Efficiency', value: '> 98%' }
    ],
    industries: ['Pharmaceutical', 'Hospitals', 'Packaging', 'Commercial Buildings'],
    faqs: [
      {
        question: 'Are air-cooled stabilizers suitable for highly dusty areas?',
        answer: 'For heavy dust, soot, or metal shavings (like foundries or stone crushers), an oil-cooled stabilizer is much better suited. Air-cooled units are perfect for clean, ventilated indoor environments such as hospitals, diagnostic clinics, printing setups, and clean manufacturing zones.'
      }
    ]
  },
  {
    id: 'apfc-panel',
    slug: 'automatic-power-factor-control-panel',
    name: 'Automatic Power Factor Control (APFC) Panel',
    category: 'apfc',
    shortDescription: 'High-precision APFC panels designed to eliminate power factor penalties, reduce electricity bills, and optimize transformer loading.',
    fullDescription: 'Nextart Automatic Power Factor Control (APFC) Panels are the ultimate solution to power quality issues, low power factor penalties, and excessive utility bills. Fluctuating inductive loads in factories (such as motors, welding machines, and transformers) degrade your power factor, leading to severe utility fines. Our intelligent APFC panels continuously monitor your reactive power demand and dynamically switch heavy-duty capacitor banks in and out using fast microprocessors to maintain a power factor of 0.99 lag or unity.',
    image: 'apfc_panel',
    features: [
      'Intelligent microprocessor-based APFC controller (up to 16 stages)',
      'Dual-safety heavy-duty metallized polypropylene (MPP) capacitors with overpressure disconnector',
      'Thyristorized or capacitor-duty contactor switching to eliminate inrush current spikes',
      'Built-in series detuned reactors (5.7% / 7% / 14%) for harmonic mitigation and capacitor safety',
      'Real-time display showing PF, KVAR, voltage, current, and active/reactive power metrics',
      'Forced ventilation system with automatic thermal sensor control'
    ],
    advantages: [
      'Guaranteed elimination of low power factor penalty from MSEDCL (Maharashtra State Electricity Distribution Company)',
      'Substantial savings on monthly electricity bills (typically 5% to 15% reduction in billing)',
      'Reduces total KVA demand, freeing up spare capacity on your existing transformer and cables',
      'Minimizes voltage drops and line losses across internal distribution networks',
      'Extends the operating life of motors and switches by smoothing voltage levels'
    ],
    specifications: [
      { parameter: 'KVAR Rating', value: '20 KVAR to 1000 KVAR (Standard sizes: 50, 100, 150, 200, 300, 500 KVAR)' },
      { parameter: 'Operating Voltage', value: '415V / 440V AC, 3 Phase, 50Hz' },
      { parameter: 'Target Power Factor', value: 'Programmable from 0.80 lag to 1.00 (Typically set at 0.99 lag)' },
      { parameter: 'Switching Elements', value: 'Capacitor Duty Contactors or Ultra-Fast Thyristor Modules (for rapid welding/press loads)' },
      { parameter: 'Capacitor Type', value: 'Heavy Duty Gas-Filled or Resin-Filled MPP Cylindrical Capacitors' },
      { parameter: 'Detuned Reactor', value: 'Copper/Aluminum dry type, 7% detuned (189Hz tuning) for general harmonic filtration' },
      { parameter: 'Controller Brand', value: 'L&T / Epcos / Schneider / Trinity (as per custom preference)' },
      { parameter: 'Enclosure Protection', value: 'IP-42 / IP-52 dust and vermin proof sheet steel' }
    ],
    applications: [
      'Plastic Processing and Molding Units in Satpur MIDC',
      'Cold Storage Plants and Food Processing Factories',
      'Automotive Ancillaries and Forging Units in Ambad & Sinnar',
      'Commercial Malls, Multiplexes, and Large IT Parks',
      'Continuous Process Industries with heavy motor loads'
    ],
    industries: ['Manufacturing', 'Food Processing', 'Cold Storage', 'Engineering', 'Water Treatment'],
    faqs: [
      {
        question: 'Why should I choose Thyristor switching over Contactor switching?',
        answer: 'Standard contactor-duty APFC panels take 10-60 seconds to switch capacitor banks to allow discharging. This is fine for steady, slow-changing loads. However, for rapid cyclic loads like spot welding, punch presses, and high-speed cranes, contactors cannot keep up. Thyristor-switched APFC panels provide transient-free switching within milliseconds (real-time correction) without damaging the capacitors.'
      },
      {
        question: 'How quickly does a Nextart APFC panel pay for itself?',
        answer: 'In most factories in Maharashtra, the payback period is incredibly short—ranging between 6 to 12 months. This is driven by both the elimination of active PF penalties and the lucrative PF incentives (up to 7% discount on energy charges) provided by MSEDCL for maintaining high power factor.'
      }
    ]
  },
  {
    id: 'plc-panel',
    slug: 'plc-automation-panel',
    name: 'PLC Automation & SCADA Panel',
    category: 'automation',
    shortDescription: 'Custom programmable logic controller (PLC) panels with SCADA / HMI integration for smart, centralized industrial process automation.',
    fullDescription: 'Nextart PLC Automation Panels are designed to revolutionize your shop-floor operations. We manufacture fully integrated control panels using world-leading PLC brands (Siemens, Rockwell/Allen Bradley, Schneider, Delta) coupled with responsive HMI touch panels. We provide turn-key hardware design, drafting, wiring, programming, and on-site deployment, allowing you to monitor and run complex assembly, mixing, and process cycles with zero manual intervention.',
    image: 'plc_panel',
    features: [
      'Custom fabricated premium sheet-metal panels with elegant inner layout and wire ducting',
      'Integrated high-speed PLC CPUs with digital and high-resolution analog I/O modules',
      'Responsive touch HMI (Human Machine Interface) screen on the panel door',
      'Seamless industrial networking (Modbus TCP, Profinet, EtherNet/IP)',
      'Highly secure power supply circuits with redundant SMPS and surge protection',
      'Fully labeled wiring matching EPLAN schematic drawings'
    ],
    advantages: [
      'Replaces massive manual wiring with clean, program-driven intelligent control logic',
      'Provides real-time process monitoring, fault logging, and sensor diagnostics',
      'Highly scalable design allowing future additions of I/O cards and safety interlocks',
      'Maximizes plant safety with integrated emergency stops and limit-switch monitoring'
    ],
    applications: [
      'Automated Batching and Mixing plants in Chemical industries',
      'Material Handling Systems and Conveyor automation',
      'Water Treatment Plant (STP/WTP/ETP) cycle automation',
      'Special Purpose Machinery (SPM) controls'
    ],
    specifications: [
      { parameter: 'PLC Brands', value: 'Siemens S7-1200/1500, Allen Bradley Micro800/CompactLogix, Schneider Modicon, Delta' },
      { parameter: 'HMI Screen Sizes', value: '4.3", 7", 10", 12", 15" TFT Touch Displays' },
      { parameter: 'Communication Protocol', value: 'Profinet, Modbus, Ethernet/IP, RS485/RS232' },
      { parameter: 'Internal Voltage levels', value: '24V DC for control, 110V/230V AC for signaling, 415V for power' },
      { parameter: 'Protection Rating', value: 'IP-54 Dust & Vermin proof with cooling fan/filters' }
    ],
    industries: ['Water Treatment', 'Chemical Industry', 'Pharma', 'Food Processing', 'Engineering'],
    faqs: [
      {
        question: 'Does Nextart provide PLC programming services as well?',
        answer: 'Yes, we are a comprehensive industrial automation solution provider. We don’t just wire panels—our in-house software engineers design and write custom PLC code, design intuitive HMI screens, and build custom SCADA monitoring dashboards.'
      }
    ]
  },
  {
    id: 'mcc-panel',
    slug: 'motor-control-centre-mcc-panel',
    name: 'Motor Control Centre (MCC) Panel',
    category: 'panel',
    shortDescription: 'Centralized motor controllers with DOL, Star-Delta, and VFD starters, featuring fully draw-out or non-draw-out compartments.',
    fullDescription: 'Nextart Motor Control Centre (MCC) Panels are engineered for safe, centralized control of electric motors in industrial complexes. We manufacture custom single-front or double-front MCC panels with both draw-out and fixed type compartments. Each feeder represents a motor starter equipped with short-circuit, overload, and single-phasing protections. High-quality internal busbar systems ensure flawless continuous power distribution to your entire plant.',
    image: 'mcc_panel',
    features: [
      'Modular compartment design with high-strength structural metal sheets',
      'Fully tested copper or aluminum main busbars up to 4000A capacity',
      'Starters include DOL, Star-Delta, Soft Starters, or VFD configurations',
      'Rigorous electrical interlock safety systems preventing panel doors from opening when switched ON',
      'Transparent viewing windows for protection relay and current meter monitoring'
    ],
    advantages: [
      'Centralizes control of hundreds of electric motors, simplifying diagnostic operations',
      'Enhanced worker safety with isolated power bus compartments and ground buses',
      'Modular configuration makes fast swapping of individual starter buckets easy',
      'Tested to withstand heavy prospective short circuit faults'
    ],
    applications: [
      'Heavy conveyor lines and crushing motors in Sinnar Stone Quarries',
      'Agitators, blenders, and pumps in Chemical processing lines',
      'HVAC Chiller plants and large ventilation systems in commercial buildings',
      'Agricultural pumping and large lifting irrigation projects'
    ],
    specifications: [
      { parameter: 'Main Busbar Rating', value: 'Up to 4000 Amps with high short circuit rating (50KA for 1 sec)' },
      { parameter: 'Busbar Material', value: '99.9% Electrolytic Grade Copper or EC Grade Aluminum (Tin-plated)' },
      { parameter: 'Starter Options', value: 'Direct On-Line (DOL), Automatic Star-Delta (ASD), VFD, Soft Starter' },
      { parameter: 'Form of Separation', value: 'Form 3b / Form 4b (Highly isolated compartments)' },
      { parameter: 'Control Voltage', value: '110V AC / 230V AC / 24V DC' }
    ],
    industries: ['Manufacturing', 'Stone Crusher', 'Chemical Industry', 'Water Treatment', 'Infrastructure'],
    faqs: [
      {
        question: 'What is the main benefit of modular compartmentalized MCC panels?',
        answer: 'Modular separation ensures that if an electrical fault or short circuit occurs in one motor starter feeder, the damage is completely contained within that specific sheet-metal compartment. It prevents catastrophic collateral damage to other feeders, ensuring the rest of your manufacturing plant remains powered.'
      }
    ]
  },
  {
    id: 'pcc-panel',
    slug: 'power-control-centre-pcc-panel',
    name: 'Power Control Centre (PCC) Panel',
    category: 'panel',
    shortDescription: 'Main low-tension (LT) distribution panels with heavy-duty Air Circuit Breakers (ACBs) for main power plants and industrial power inlets.',
    fullDescription: 'Nextart Power Control Centre (PCC) Panels serve as the main nervous system for your factory’s low tension power supply. Typically installed directly after the HT transformer, our PCC panels handle currents up to 6300A safely. Engineered with premium Air Circuit Breakers (ACBs) and Moulded Case Circuit Breakers (MCCBs), they distribute primary electrical power to secondary panels (such as APFC, MCC, and distribution DBs) while protecting your entire electrical infrastructure against short circuits, earth faults, and severe overloads.',
    image: 'pcc_panel',
    features: [
      'High fault ride-through withstand capacity (up to 85KA for 1 sec)',
      'Draw-out or fixed Air Circuit Breakers (ACBs) with micro-processor based protection releases',
      'Sufficient cable alloy termination space with premium gland plates',
      'Dual-source automatic transfer switching (AMF / ATS) for seamless DG set transition',
      'Integrated multifunction power meters displaying active, reactive, harmonic, and energy metrics'
    ],
    advantages: [
      'Engineered with premium busbar support structures to withstand immense electrodynamic forces',
      'Highly reliable switching and fault isolation protects precious downstream machinery and cabling',
      'Clean internal physical spacing ensures safe access for thermographic inspections',
      'Conforms strictly to IEC 61439-1/2 panel design and manufacturing standards'
    ],
    applications: [
      'Main incoming LT panel for massive manufacturing plants in Nashik MIDC',
      'Grid-to-DG set automatic synchronization centers',
      'Central commercial developments, large hospitals, and IT parks',
      'Government infrastructure and lifting water schemes'
    ],
    specifications: [
      { parameter: 'Current Rating', value: '800 Amps to 6300 Amps' },
      { parameter: 'Short Circuit Rating', value: '50 KA to 85 KA for 1 second' },
      { parameter: 'Breaker Types', value: 'Air Circuit Breakers (ACB), Moulded Case Circuit Breakers (MCCB)' },
      { parameter: 'Internal Isolation', value: 'Form 4b standard' },
      { parameter: 'Enclosure Thickness', value: '2.0 mm / 2.5 mm Cold Rolled Close Annealed (CRCA) steel sheet' }
    ],
    industries: ['Manufacturing', 'Infrastructure', 'Hospitals', 'Cold Storage', 'Warehouses'],
    faqs: [
      {
        question: 'Do you offer custom busbar configurations for retrofitting existing facilities?',
        answer: 'Absolutely. We specialize in designing custom PCC panels. Our technical team visits your site to match busbar profiles, heights, and cable drop-down points of your existing transformer so our panels slot in and bolt up perfectly without complex structural modifications.'
      }
    ]
  },
  {
    id: 'vfd-panel',
    slug: 'vfd-control-panel',
    name: 'Variable Frequency Drive (VFD) Control Panel',
    category: 'panel',
    shortDescription: 'Energy-saving speed control panels for electric motors, featuring advanced bypass mechanisms and integrated thermal management.',
    fullDescription: 'Nextart Variable Frequency Drive (VFD) Control Panels are designed to optimize the speed and energy consumption of industrial electric motors, pumps, and exhaust fans. By dynamically adjusting the supply frequency to match operational demands, our VFD panels can slash motor electricity usage by up to 30% to 50%. Standard features include advanced heat sink ventilation systems, line-chokes to eliminate harmonic feedback, and dual bypass contactors to run motors on raw line power in emergencies.',
    image: 'vfd_panel',
    features: [
      'Pre-wired high-quality Variable Frequency Drives (Schneider, Danfoss, ABB, Siemens, Yaskawa)',
      'Input/Output line reactors to protect motor winding and filter harmonic distortion',
      'Integrated bypass starter circuitry (DOL/Star-Delta) ensuring zero downtime',
      'High-velocity fan extraction panels with washable dust filters for thermal safety',
      'External speed control potentiometers and digital rpm indicators on the panel door'
    ],
    advantages: [
      'Delivers soft-starting (zero inrush currents), completely eliminating electrical and mechanical stresses',
      'Unlocks substantial electricity bill savings on centrifugal pumps, cooling towers, and heavy fans',
      'Provides micro-fine control over process flows, speeds, and conveyor operations',
      'Comprehensive motor protection: over-current, under-voltage, ground fault, phase loss'
    ],
    applications: [
      'Pumping systems and agitators in Chemical & Pharma manufacturing',
      'Cooling tower fans, air handling units (AHUs) in commercial HVAC networks',
      'High capacity material handling cranes and precision assembly lines',
      'Water supply booster pumps in municipal systems'
    ],
    specifications: [
      { parameter: 'Power Rating', value: '0.75 kW to 500 kW' },
      { parameter: 'VFD Brands', value: 'Danfoss, ABB, Schneider Electric, Siemens, Yaskawa, Delta' },
      { parameter: 'Harmonic Filter', value: 'AC Line Choke (Standard) / DC Choke / Passive Harmonic Filters' },
      { parameter: 'Cooling System', value: 'Forced ventilation, thermo-regulated fan' },
      { parameter: 'Operating Protections', value: 'Phase loss, over-temp, over-load, high-torque trip' }
    ],
    industries: ['Water Treatment', 'Engineering', 'Food Processing', 'Cold Storage', 'Manufacturing'],
    faqs: [
      {
        question: 'Do VFD panels generate high harmonics, and how does Nextart handle it?',
        answer: 'Yes, VFDs are non-linear loads that inject harmonic distortions into the electrical system. At Nextart, we build standard high-grade input/output AC reactors (chokes) or active/passive harmonic filters into our VFD panels to protect nearby sensitive PLCs and prevent issues with power providers.'
      }
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'stone-crusher',
    name: 'Stone Crusher & Mining',
    icon: 'Hammer',
    description: 'Stone crushing environments suffer from high mechanical vibrations, severe voltage drops under heavy load start-ups, and dense suspended dust. Nextart heavy-duty Oil-Cooled Servo Stabilizers and dust-proof MCC panels are built with hermetically sealed enclosures to withstand these harsh conditions.',
    benefits: [
      'Prevents crusher conveyor motor burnout from voltage drops',
      'IP-65 dust-sealed electrical panels avoid tracking and short circuits',
      'Vast surge capacity easily handles massive starting currents of crushing rollers'
    ]
  },
  {
    id: 'food-industry',
    name: 'Food & Beverage Processing',
    icon: 'Utensils',
    description: 'Food processing lines utilize sensitive PLC controls, color sorting machines, and wrapping units. Even a split-second voltage dip can ruin entire batches or halt packaging. Our Air-Cooled Stabilizers and PLC panels ensure continuous clean power and automated hygiene cycles.',
    benefits: [
      'Avoids raw food batch wastage due to unexpected line stoppages',
      'Ensures precise heating and packaging temperatures for quality consistency',
      'Custom rust-free panel choices conforming to food-grade standards'
    ]
  },
  {
    id: 'chemical-pharma',
    name: 'Chemical & Pharmaceuticals',
    icon: 'FlaskConical',
    description: 'Pharma manufacturing demands flawless cleanroom stability, precise mixing speeds, and strict compliance. Nextart builds high-precision stabilizers and sophisticated automation panels with detailed SCADA trails to meet strict quality guidelines.',
    benefits: [
      'Provides constant stable voltage to cleanroom ventilation systems',
      'Detailed automated process control panels with sensory fault alarms',
      'Protects expensive lab chromatography and analytical equipment'
    ]
  },
  {
    id: 'water-treatment',
    name: 'Water & Wastewater Treatment',
    icon: 'Droplet',
    description: 'Pumping stations, aeration fans, and chemical dosing pumps must run continuously to prevent environmental hazards. Nextart supplies complete automation panels, VFD control systems, and durable LT distribution panels for massive STP and WTP plants.',
    benefits: [
      'Automated remote cycle monitoring with HMI & PLC control panels',
      'Massive power savings on blower motors using customized VFD panels',
      'Robust weather-proof outdoor enclosures'
    ]
  },
  {
    id: 'cold-storage',
    name: 'Cold Storage & Refrigeration',
    icon: 'Snowflake',
    description: 'Cold storage plants run high-capacity compressors around the clock. Sub-standard power factors trigger heavy penalties, and voltage spikes risk burning compressor motors. Nextart APFC panels and high-capacity Servo Stabilizers prevent both issues.',
    benefits: [
      'Reduces heavy utility bills via dynamic power factor correction (0.99 PF)',
      'Protects multimillion-rupee compressor motors from single-phasing and low voltage',
      'Continuous uninterrupted cold-cycle preservation'
    ]
  },
  {
    id: 'engineering-mfg',
    name: 'Engineering & Manufacturing',
    icon: 'Cpu',
    description: 'Engineering workshops, sheet metal units, and automotive ancillaries rely on precision CNC, VMC, and laser cutting machines. These tools are highly sensitive to voltage sags. Our Servo stabilizers are designed to keep modern machine tools humming.',
    benefits: [
      'Eliminates micro-faults and dimensional deviations in finished CNC products',
      'Protects sensitive high-speed servo drives from utility surges',
      'Improves over-all factory productivity and efficiency indicators'
    ]
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'choose-servo-stabilizer',
    slug: 'how-to-choose-servo-voltage-stabilizer',
    title: 'How to Choose the Right Servo Voltage Stabilizer for Your Industry',
    summary: 'A step-by-step guide to calculating your total industrial load, determining the appropriate input voltage window, and choosing between air-cooled and oil-cooled models.',
    content: `### Why Choosing the Right Stabilizer is Critical for Your Factory

Industrial machines—especially **CNC machining centers, automated packaging lines, plastic extruders, and laser cutters**—run on sophisticated electronic controls and motors. These components are highly sensitive to voltage sags, swells, and random surges. Operating them under unstable voltages leads to premature card failures, motor winding stress, and expensive shopfloor downtime.

A **Servo Voltage Stabilizer** corrects fluctuating utility power, protecting your capital investments. But how do you select the correct unit? Let's break down the mathematical steps.

---

### Step 1: Calculate Your Total Connected Load

The primary parameter of a stabilizer is its **KVA (Kilo-Volt-Amperes) rating**. To find this:
1. **List all equipment** that will be connected to the stabilizer.
2. Note down their power ratings in **kW (kilowatts)** or **HP (horsepower)**.
3. Convert all units to KVA:
   * **From kW**: \`KVA = kW / Power Factor\` (Use a standard industrial power factor of 0.8 if unknown).
   * **From HP**: \`KVA = (HP * 0.746) / Power Factor\`.
4. **Sum the KVAs** to get your total connected load.

> **CRITICAL RULE OF THUMB (Safety Factor):** Always size the stabilizer with a minimum **25% to 30% safety margin** above your calculated connected load to handle high-inductive motor starting currents and future load expansion.
> 
> *Example:* If your total load is 100 KVA, you should purchase at least a **125 KVA** or **150 KVA** Servo Stabilizer.

---

### Step 2: Determine Your Input Voltage Fluctuations

You must specify the range of voltage fluctuations the stabilizer will receive from the utility grid. Nextart manufactures various standard input windows:
* **Standard Range:** 340V to 460V (3-Phase) - Suitable for areas with mild voltage drops.
* **Wide Range:** 300V to 470V (3-Phase) - Ideal for Nashik MIDC zones suffering from heavy midday load drops.
* **Ultra-Wide Range:** 260V to 480V (3-Phase) - Necessary for rural manufacturing units or sites at the tail-end of supply lines.

*Note: Selecting an unnecessarily ultra-wide range increases the size of the buck-boost transformer and costs more. Select the range that matches your actual logged voltage fluctuations.*

---

### Step 3: Choose the Cooling Method — Air Cooled vs. Oil Cooled

Nextart manufactures both dry-type air-cooled and oil-cooled stabilizers. Use this quick comparison:

| Parameter | Air Cooled (Dry Type) | Oil Cooled |
| :--- | :--- | :--- |
| **Capacity** | Typically 5 KVA to 150 KVA | 30 KVA up to 2500 KVA |
| **Cooling** | Forced air fans | Transformer oil (Class I, IS:335) |
| **Dust Resistance**| Medium (Needs clean air ventilation) | Excellent (Hermetically sealed enclosure) |
| **Installation** | Indoor only (Compact vertical cabinet) | Outdoor or Indoor (Radiator fins) |
| **Maintenance** | Minimal (Blowing dust occasionally) | Periodic oil filtration (Every 2-3 years) |

For harsh environments like **stone crushers, foundries, or chemical processors**, **Oil-Cooled Servo Stabilizers** are the gold standard. For clean facilities like **pharmaceutical packaging, diagnostic labs, and IT spaces**, **Air-Cooled Stabilizers** are highly recommended.

---

### Need Expert Assistance?
Nextart Power Controller offers a **free onsite power audit in Nashik, Maharashtra** to log your voltages and load profiles. Contact us today to size the perfect stabilizer!`,
    image: 'blog_servo_guide',
    date: '2026-06-15',
    category: 'Servo Stabilizers',
    readTime: '6 min read',
    tags: ['Servo Stabilizer', 'Voltage Fluctuations', 'Industrial Safety']
  },
  {
    id: 'apfc-panel-guide',
    slug: 'what-is-apfc-panel-benefits',
    title: 'What is an APFC Panel and How It Reduces Electricity Bills',
    summary: 'Discover how industrial power factor correction can completely eliminate low power factor penalties and unlock lucrative incentives from MSEDCL.',
    content: `### Understanding the Invisible Cost of Power: Power Factor

If you run an industrial facility in Maharashtra with heavy inductive loads like motors, compressors, and transformers, you might be paying thousands of rupees extra on your utility bills without realizing it. 

Power providers like MSEDCL charge industries for **apparent power (KVAh)** rather than **active power (kWh)**. The ratio of active power to apparent power is called the **Power Factor (PF)**. 
* A power factor of **1.00 (Unity)** is ideal.
* A power factor of **0.80** means you are wasting 20% of the energy in the form of reactive currents.

---

### What does an APFC Panel do?

An **Automatic Power Factor Control (APFC) Panel** is an intelligent cabinet filled with industrial capacitors, contactors, detuned reactors, and a microchip-based controller. 

The controller continuously monitors the incoming voltage and current waveforms. When it detects the power factor dropping (due to inductive motors running), it automatically switches in the precise amount of **KVAR (capacitive power)** to counteract the inductive load, bringing your power factor back to **0.99 lag or Unity**.

---

### How Nextart APFC Panels Slash Your Bills

#### 1. Zero Low Power Factor Penalties
MSEDCL levies extremely heavy financial penalties if your average monthly power factor drops below **0.90**. A Nextart APFC panel guarantees your average PF stays above **0.98**, saving you from these costly fines.

#### 2. Earn Lucrative Power Factor Incentives
Did you know that Maharashtra utilities offer **discounts (incentives)** on your total energy billing for keeping high power factor?
* Maintaining a PF of **0.99** grants you a **5% to 7% incentive discount** on your monthly electricity bill.
* This discount alone often completely pays off the investment of the APFC panel within **6 to 12 months**!

#### 3. Free Up Transformer Capacity
Low power factor draws unnecessary high currents, overheating your cables and saturating your main LT transformer. By correcting the PF at the panel, you lower your total KVA demand. This means you can add more machines to your factory without paying the utility for a transformer upgrade!

---

### Calculating Required KVAR

To calculate the size of the capacitor bank you need:
\`Required KVAR = kW * (tan(acos(Initial PF)) - tan(acos(Target PF)))\`

Nextart provides an easy-to-use calculator tool on our website, or you can contact our Nashik engineering branch for a comprehensive load analysis.`,
    image: 'blog_apfc_guide',
    date: '2026-07-02',
    category: 'APFC Panels',
    readTime: '5 min read',
    tags: ['APFC Panel', 'Energy Savings', 'Power Factor']
  },
  {
    id: 'pcc-vs-mcc-panels',
    slug: 'difference-between-pcc-and-mcc-panels',
    title: 'Difference Between PCC (Power Control Centre) and MCC (Motor Control Centre) Panels',
    summary: 'Clear technical breakdown between the main power distribution board (PCC) and motor starters panel (MCC) for plant engineers.',
    content: `### Demystifying Industrial LT Panels: PCC vs. MCC

For any electrical engineer, plant manager, or builder planning a new factory in Nashik MIDC, structuring the low tension (LT) distribution room can be confusing. Two acronyms dominate: **PCC (Power Control Centre)** and **MCC (Motor Control Centre)**. 

While both are sheet-metal LT panels designed to manage electricity, they serve distinct functions. Let's compare their designs, configurations, and core components.

---

### 1. Power Control Centre (PCC) — The Main Incomer

Think of the PCC as the **heart and brain** of your plant's electrical distribution. It is located directly after the main HT step-down transformer or the backup DG (Diesel Generator) sets.

* **Primary Function:** Receives massive primary power from the source and distributes it to major secondary panels (like the MCC, APFC panels, and auxiliary lighting boards) across different areas of the plant.
* **Key Components:**
  * High-capacity **Air Circuit Breakers (ACBs)** up to 6300A.
  * Multi-function protection relays (overcurrent, short circuit, earth fault, under/over-voltage).
  * High-current electrolytic copper or aluminum busbars with immense fault withstand capacity (e.g., 50KA to 85KA for 1 second).
* **Location:** Installed in a dedicated main electrical substation or clean LT room.

---

### 2. Motor Control Centre (MCC) — Centralized Motor Master

The MCC, on the other hand, is dedicated specifically to **controlling electric motors**. Electric motors draw immense starting currents and require constant start/stop triggers and status monitors. Grouping these controls together forms an MCC.

* **Primary Function:** Feeds, controls, and protects electric motors throughout the factory floor.
* **Key Components:**
  * **Motor Starters:** Direct On-Line (DOL), Automatic Star-Delta, Soft Starters, or Variable Frequency Drives (VFDs).
  * Contactors, thermal overload relays, and circuit breakers (MPCBs) for motor protection.
  * Push-buttons, run/trip indicating lamps, and speed-control HMIs on front doors.
* **Configuration:** Often modular and compartmentalized, featuring separate "draw-out" buckets for each motor. This allows engineers to pull out a single motor starter bucket for maintenance without shutting off power to the rest of the factory.

---

### Summary Comparison Table

| Feature | Power Control Centre (PCC) | Motor Control Centre (MCC) |
| :--- | :--- | :--- |
| **Primary Focus** | Power reception and bulk distribution | Centralized motor switching and protection |
| **Incoming Source**| Main HT Transformer / DG Grid | Main PCC panel output |
| **Current Rating** | Very high (800A to 6300A) | Medium (100A to 2500A) |
| **Switchgear** | Air Circuit Breakers (ACB), Heavy MCCBs | Starters, Contactors, MPCBs, Soft Starters, VFDs |
| **Complexity** | High fault withstand busbar layouts | High control logic, interlocking, and wiring |

---

### Nextart Custom Built Panels
Nextart Power Controller is a registered panel builder based in Nashik, fabricating CPRI-standard PCC and MCC panels with top-tier components like L&T, Schneider, and Siemens. Contact us with your single-line diagram (SLD) to receive an optimized quote!`,
    image: 'blog_panel_guide',
    date: '2026-07-10',
    category: 'Electrical Panels',
    readTime: '4 min read',
    tags: ['PCC Panel', 'MCC Panel', 'Electrical Engineering']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sinnar-steel-mill',
    title: '500 KVA Oil-Cooled Servo Stabilizer Installation',
    category: 'Servo Stabilizers',
    location: 'Sinnar MIDC, Nashik, Maharashtra',
    description: 'Successfully installed and commissioned a heavy-duty 500 KVA oil-cooled stabilizer for a leading steel extrusion foundry, protecting automated rolling mills and heating coils.',
    image: 'project_servo_heavy',
    year: '2026'
  },
  {
    id: 'ambad-apfc-install',
    title: '300 KVAR Harmonics Filter APFC Panel System',
    category: 'APFC Panels',
    location: 'Ambad MIDC, Nashik, India',
    description: 'Designed and implemented a 300 KVAR APFC panel with 7% detuned reactors for a major automotive parts manufacturer, lifting power factor from 0.81 to 0.995 and earning PF incentives.',
    image: 'project_apfc_install',
    year: '2025'
  },
  {
    id: 'satpur-pharma-automation',
    title: 'Centralized PLC Automation & MCC Panel Board',
    category: 'Industrial Automation',
    location: 'Satpur MIDC, Nashik, India',
    description: 'Built a Siemens S7-1200 PLC automation system with integrated MCC and VFD panels for an FDA-approved sterile pharmaceutical liquid filling line.',
    image: 'project_pharma_mcc',
    year: '2026'
  }
];
