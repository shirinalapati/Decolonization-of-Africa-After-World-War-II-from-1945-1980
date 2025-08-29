import React, { useState, useEffect } from 'react';
import { CountryData, IndependenceEvent } from '../types';
import { countries } from '../data/countries';
import './DecolonizationMap.css';

interface DecolonizationMapProps {
  currentYear: number;
  independenceEvents: IndependenceEvent[];
  onIndependenceYear?: (year: number) => void;
  shouldStopFlickering?: boolean;
}

const DecolonizationMap: React.FC<DecolonizationMapProps> = ({ 
  currentYear, 
  independenceEvents, 
  onIndependenceYear,
  shouldStopFlickering = false
}) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);

  // PNG mapping for different years
  const getMapImage = (year: number): string => {
    // Define the year-to-image mapping
    const yearToMapImage: Record<number, string> = {
      1951: '/africa-1951.png',
      1956: '/africa-1956.png',
      1957: '/africa-1957.png',
      1958: '/africa-1958.png',
      1960: '/africa-1960.png',
      1961: '/africa-1961.png',
      1962: '/africa-1962.png',
      1963: '/africa-1963.png',
      1964: '/africa-1964.png',
      1965: '/africa-1965.png',
      1966: '/africa-1966.png',
      1968: '/africa-1968.png',
      1973: '/africa-1973.png',
      1975: '/africa-1975.png',
      1976: '/africa-1976.png',
      1977: '/africa-1977.png',
      1980: '/africa-1980.png'
    };

    // Find the most recent map for the given year
    const availableYears = Object.keys(yearToMapImage)
      .map(Number)
      .filter(y => y <= year)
      .sort((a, b) => b - a);

    // Return the appropriate map or the base colonial map
    return yearToMapImage[availableYears[0]] || '/africa-colonial-map.png';
  };

  // Country data with arrow coordinates pointing right next to country names on the map
  const countries: CountryData[] = [
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
    { name: 'Gambia', colonialPower: 'British', independenceYear: 1965, coordinates: '32,37', color: '#EF4444' },
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

  // Get country color based on independence status
  const getCountryColor = (country: CountryData) => {
    if (country.independenceYear <= currentYear) {
      return '#FFFFFF'; // White for independent countries
    }
    return country.color; // Original colonial power color
  };

  // Handle country click
  const handleCountryClick = (country: CountryData) => {
    setSelectedCountry(country);
  };

  // Get independence description
  const getIndependenceDescription = (country: CountryData) => {
    const event = independenceEvents.find(e => e.country === country.name);
    return event ? event.description : 'No independence information available.';
  };

  return (
    <div className="map-container">
      <p className="map-description">
        As the simulation progresses, countries that gain independence will turn white on the map
      </p>
      <p className="color-legend-text">
        Dark Green = Portuguese, Red = British, Blue = French, Black = Belgian, Light Yellow = Spanish, Purple = Italian, Orange = Spanish and French, Gold = British and Egyptian, Blue and White = Overseas Department, Pink = British and French, Yellow = Italian and British, Turquoise = Independent before 1945 or gained independence after 1980
      </p>
      <h2 className="map-title">Africa: Colonial Territories to Independence</h2>
      
      <div className="image-map-container">
        {/* Color-coded base map */}
        <img 
          src={getMapImage(currentYear)} 
          alt="Africa Colonial Map" 
          className="africa-map-image"
        />
        
        {/* Independence arrows - COMMENTED OUT FOR SIDEBAR APPROACH */}
        {/* 
        <div className="independence-arrows">
          {countries.map((country, index) => {
            const [x, y] = country.coordinates.split(',').map(Number);
            const isIndependent = country.independenceYear <= currentYear;
            const isFlickeringNow = flickeringCountries.includes(country.name) && isFlickering;
            const shouldShow = country.independenceYear <= 1945 || country.independenceYear <= currentYear;
            
            return (
              <div
                key={index}
                className={`independence-arrow ${isIndependent ? 'independent' : ''} ${isFlickeringNow ? 'flickering' : ''}`}
                style={{
                  position: 'absolute',
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  display: shouldShow ? 'block' : 'none'
                }}
                onClick={() => handleCountryClick(country)}
              >
                <div className="arrow-point"></div>
                <div className="arrow-label">
                  {country.name}
                </div>
              </div>
            );
          })}
        </div>
        */}
      </div>

      {/* Popup for country information */}
      {selectedCountry && (
        <div className="popup">
          <div className="popup-content">
            {/* Close button in top-right corner */}
            <button 
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                backgroundColor: '#ef4444',
                border: '2px solid #dc2626',
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'white',
                cursor: 'pointer',
                padding: '8px 12px',
                borderRadius: '6px',
                zIndex: 30,
                minWidth: '40px',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setSelectedCountry(null)}
              title="Close"
            >
              ×
            </button>
            
            <h3>{selectedCountry.name}</h3>
            <p><strong>Colonial Power:</strong> {selectedCountry.colonialPower}</p>
            {selectedCountry.independenceYear > 0 && (
              <p><strong>Independence Year:</strong> {selectedCountry.independenceYear}</p>
            )}
            <p><strong>Description:</strong> {getIndependenceDescription(selectedCountry)}</p>
            <button onClick={() => setSelectedCountry(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DecolonizationMap;
