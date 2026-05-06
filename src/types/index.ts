// src/types/index.ts

export interface Specialty {
  name: string;
  image: string;
  description: string;
}

export interface Chef {
  id: string;
  name: string;
  experience: string;
  rating: string;
  image: string;
  specialties: Specialty[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  cta: string;
  iconName: string; // Used to dynamically render Lucide icons
}

export interface HeroProps {
  name: string;
  experience: string;
  rating: string;
  image: string;
  specialties: Specialty[];
}
