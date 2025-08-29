import { CountryData } from '../types';

// Country data with arrow coordinates pointing right next to country names on the map
export const countries: CountryData[] = [
  // North Africa - positioned next to visible country names
  { name: 'Morocco', colonialPower: 'Spanish and French', independenceYear: 1956, coordinates: '18,15', color: '#3B82F6' },
  { name: 'Algeria', colonialPower: 'French', independenceYear: 1962, coordinates: '32,22', color: '#3B82F6' },
  { name: 'Tunisia', colonialPower: 'French', independenceYear: 1956, coordinates: '45,12', color: '#3B82F6' },
  { name: 'Libya', colonialPower: 'Italian', independenceYear: 1951, coordinates: '58,18', color: '#8B5CF6' },
  { name: 'Egypt', colonialPower: 'British', independenceYear: 1922, coordinates: '78,10', color: '#FFFFFF' },
  { name: 'Western Sahara', colonialPower: 'Spanish', independenceYear: 1976, coordinates: '25,20', color: '#FBBF24' },

  // West Africa - positioned next to visible country names
  { name: 'Mauritania', colonialPower: 'French', independenceYear: 1960, coordinates: '22,28', color: '#3B82F6' },
  { name: 'Senegal', colonialPower: 'French', independenceYear: 1960, coordinates: '30,35', color: '#3B82F6' },
  { name: 'The Gambia', colonialPower: 'British', independenceYear: 1965, coordinates: '32,37', color: '#EF4444' },
  { name: 'Guinea-Bissau', colonialPower: 'Portuguese', independenceYear: 1973, coordinates: '26,40', color: '#10B981' },
  { name: 'Guinea', colonialPower: 'French', independenceYear: 1958, coordinates: '35,42', color: '#3B82F6' },
  { name: 'Sierra Leone', colonialPower: 'British', independenceYear: 1961, coordinates: '30,45', color: '#EF4444' },
  { name: 'Liberia', colonialPower: 'Independent', independenceYear: 1847, coordinates: '35,48', color: '#FFFFFF' },
  { name: 'Ivory Coast', colonialPower: 'French', independenceYear: 1960, coordinates: '45,48', color: '#3B82F6' },
  { name: 'Ghana', colonialPower: 'British', independenceYear: 1957, coordinates: '55,50', color: '#EF4444' },
  { name: 'Togo', colonialPower: 'French', independenceYear: 1960, coordinates: '60,48', color: '#3B82F6' },
  { name: 'Benin', colonialPower: 'French', independenceYear: 1960, coordinates: '65,48', color: '#3B82F6' },
  { name: 'Nigeria', colonialPower: 'British', independenceYear: 1960, coordinates: '62,60', color: '#EF4444' },
  { name: 'Cameroon', colonialPower: 'British and French', independenceYear: 1960, coordinates: '68,58', color: '#3B82F6' },
  { name: 'Chad', colonialPower: 'French', independenceYear: 1960, coordinates: '70,40', color: '#3B82F6' },
  { name: 'Central African Republic', colonialPower: 'French', independenceYear: 1960, coordinates: '68,52', color: '#3B82F6' },
  { name: 'Republic of the Congo', colonialPower: 'French', independenceYear: 1960, coordinates: '62,64', color: '#3B82F6' },
  { name: 'Gabon', colonialPower: 'French', independenceYear: 1960, coordinates: '62,68', color: '#3B82F6' },
  { name: 'Equatorial Guinea', colonialPower: 'Spanish', independenceYear: 1968, coordinates: '65,66', color: '#FBBF24' },
  { name: 'São Tomé and Príncipe', colonialPower: 'Portuguese', independenceYear: 1975, coordinates: '60,70', color: '#10B981' },

  // Central Africa - positioned next to visible country names
  { name: 'Democratic Republic of the Congo', colonialPower: 'Belgian', independenceYear: 1960, coordinates: '68,74', color: '#000000' },
  { name: 'Rwanda', colonialPower: 'Belgian', independenceYear: 1962, coordinates: '75,70', color: '#000000' },
  { name: 'Burundi', colonialPower: 'Belgian', independenceYear: 1962, coordinates: '75,72', color: '#000000' },

  // East Africa - positioned next to visible country names
  { name: 'Sudan', colonialPower: 'British and Egyptian', independenceYear: 1956, coordinates: '78,38', color: '#EF4444' },
  { name: 'South Sudan', colonialPower: 'Independent', independenceYear: 0, coordinates: '75,44', color: '#FFFFFF' },
  { name: 'Ethiopia', colonialPower: 'Independent', independenceYear: 0, coordinates: '80,50', color: '#FFFFFF' },
  { name: 'Eritrea', colonialPower: 'Independent', independenceYear: 0, coordinates: '82,44', color: '#FFFFFF' },
  { name: 'Djibouti', colonialPower: 'French', independenceYear: 1977, coordinates: '84,48', color: '#3B82F6' },
  { name: 'Somalia', colonialPower: 'Italian and British', independenceYear: 1960, coordinates: '85,54', color: '#EF4444' },
  { name: 'Kenya', colonialPower: 'British', independenceYear: 1963, coordinates: '80,60', color: '#EF4444' },
  { name: 'Uganda', colonialPower: 'British', independenceYear: 1962, coordinates: '78,58', color: '#EF4444' },
  { name: 'Tanzania', colonialPower: 'British', independenceYear: 1961, coordinates: '78,62', color: '#EF4444' },
  { name: 'Madagascar', colonialPower: 'French', independenceYear: 1960, coordinates: '85,80', color: '#3B82F6' },
  { name: 'Comoros', colonialPower: 'French', independenceYear: 1975, coordinates: '87,78', color: '#3B82F6' },
  { name: 'Mauritius', colonialPower: 'British', independenceYear: 1968, coordinates: '88,84', color: '#EF4444' },
  { name: 'Seychelles', colonialPower: 'British', independenceYear: 1976, coordinates: '82,72', color: '#EF4444' },

  // Southern Africa - positioned next to visible country names
  { name: 'Malawi', colonialPower: 'British', independenceYear: 1964, coordinates: '78,68', color: '#EF4444' },
  { name: 'Zambia', colonialPower: 'British', independenceYear: 1964, coordinates: '78,72', color: '#EF4444' },
  { name: 'Zimbabwe', colonialPower: 'British', independenceYear: 1980, coordinates: '78,76', color: '#EF4444' },
  { name: 'Botswana', colonialPower: 'British', independenceYear: 1966, coordinates: '75,80', color: '#EF4444' },
  { name: 'South Africa', colonialPower: 'Independent', independenceYear: 1910, coordinates: '75,84', color: '#FFFFFF' },
  { name: 'Namibia', colonialPower: 'Independent', independenceYear: 0, coordinates: '72,86', color: '#FFFFFF' },
  { name: 'Lesotho', colonialPower: 'British', independenceYear: 1966, coordinates: '76,82', color: '#EF4444' },
      { name: 'Eswatini', colonialPower: 'British', independenceYear: 1968, coordinates: '77,82', color: '#EF4444' },
  { name: 'Mozambique', colonialPower: 'Portuguese', independenceYear: 1975, coordinates: '82,74', color: '#10B981' },
  { name: 'Angola', colonialPower: 'Portuguese', independenceYear: 1975, coordinates: '65,80', color: '#10B981' },
  { name: 'Cape Verde', colonialPower: 'Portuguese', independenceYear: 1975, coordinates: '10,32', color: '#10B981' },

  // Additional West African countries
  { name: 'Mali', colonialPower: 'French', independenceYear: 1960, coordinates: '48,38', color: '#3B82F6' },
  { name: 'Niger', colonialPower: 'French', independenceYear: 1960, coordinates: '65,35', color: '#3B82F6' },
  { name: 'Burkina Faso', colonialPower: 'French', independenceYear: 1960, coordinates: '50,46', color: '#3B82F6' }
];
