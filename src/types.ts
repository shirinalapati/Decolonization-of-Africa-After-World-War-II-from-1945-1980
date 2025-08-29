export interface IndependenceEvent {
  year: number;
  country: string;
  description: string;
}

export interface CountryData {
  name: string;
  colonialPower: 'French' | 'British' | 'Belgian' | 'Portuguese' | 'Spanish' | 'Italian' | 'South African' | 'Spanish and French' | 'Italian and British' | 'British and French' | 'British and Egyptian' | 'Independent' | 'None';
  independenceYear: number;
  coordinates: string; // Format: "x,y" for arrow point positioning
  color: string;
}

export type ColonialPower = 'French' | 'British' | 'Belgian' | 'Portuguese' | 'Spanish' | 'Italian' | 'South African' | 'Spanish and French' | 'Italian and British' | 'British and French' | 'British and Egyptian' | 'Independent' | 'None';
