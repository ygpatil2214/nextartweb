export interface FAQItem {
  question: string;
  answer: string;
}

export interface TechnicalSpec {
  parameter: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: 'servo' | 'apfc' | 'panel' | 'automation';
  image: string;
  features: string[];
  advantages: string[];
  applications: string[];
  specifications: TechnicalSpec[];
  industries: string[];
  faqs: FAQItem[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  year: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string; // lucide icon name
  description: string;
  benefits: string[];
}
