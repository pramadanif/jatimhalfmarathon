
export interface RaceCategory {
  id: string;
  name: string;
  distance: string;
  price: number;
  earlyBird: number;
  minAge: number;
  color: string;
  features: string[];
}

export interface Sponsor {
  name: string;
  logo: string;
}

export interface RuleSection {
  title: string;
  items: string[];
}
