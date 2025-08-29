import React, { useState } from 'react';
import { IndependenceEvent } from '../types';
import './IndependenceSidebar.css';

interface IndependenceSidebarProps {
  currentYear: number;
  independenceEvents: IndependenceEvent[];
  isVisible: boolean;
  countriesData: Array<{ name: string; colonialPower: string; independenceYear: number; color: string }>;
  hasSimulationStarted: boolean;
}

interface CountryData {
  name: string;
  colonialPower: string;
  independenceYear: number;
  description: string;
}

const IndependenceSidebar: React.FC<IndependenceSidebarProps> = ({ 
  currentYear, 
  independenceEvents, 
  isVisible,
  countriesData,
  hasSimulationStarted
}) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);

  // Disclaimer countries that should be shown at the start
  const disclaimerCountryNames = new Set(['Liberia', 'South Africa', 'Egypt', 'Ethiopia', 'Namibia', 'Eritrea', 'South Sudan']);
  const countriesWithoutIndependenceYear = new Set(['Liberia', 'South Africa', 'Egypt']);
  const disclaimerCountries = [
    { name: 'Liberia', colonialPower: 'Independent', independenceYear: 1847, description: 'Founded by former slaves and designed for former slaves with heavy U.S. backing in 1847' },
    { name: 'South Africa', colonialPower: 'Independent', independenceYear: 1910, description: 'Union of South Africa formed in 1910 as self-governing dominion of British Empire' },
    { name: 'Egypt', colonialPower: 'Independent', independenceYear: 1922, description: 'Formally independent from Britain in 1922, but strong British influence continued' },
    { name: 'Ethiopia', colonialPower: 'Independent', independenceYear: 0, description: 'Ancient kingdom that successfully resisted European colonization, especially Italy' },
    { name: 'Namibia', colonialPower: 'Independent', independenceYear: 0, description: 'Freed from South Africa\'s apartheid rule in 1990' },
    { name: 'Eritrea', colonialPower: 'Independent', independenceYear: 0, description: 'Annexed by Ethiopia in 1963, fought long war of independence to be free in 1993' },
    { name: 'South Sudan', colonialPower: 'Independent', independenceYear: 0, description: 'Broke away from Sudan after decades of civil war, becoming world\'s newest country in 2011' }
  ];

  // Get countries that gained independence in the current year
  const countriesGainingIndependence = independenceEvents.filter(event => event.year === currentYear);

  // Show disclaimer countries at the start (1945) if simulation hasn't started
  const shouldShowDisclaimers = currentYear === 1945 && !hasSimulationStarted;
  
  // If no countries gained independence this year and we're not showing disclaimers, don't show sidebar
  if (!isVisible || (countriesGainingIndependence.length === 0 && !shouldShowDisclaimers)) {
    return null;
  }

  const handleCountryClick = (event: IndependenceEvent) => {
    const countryInfo = countriesData.find(country => country.name === event.country);
    const countryData: CountryData = {
      name: event.country,
      colonialPower: countryInfo ? countryInfo.colonialPower : 'Various',
      independenceYear: event.year,
      description: event.description
    };
    setSelectedCountry(countryData);
  };

  return (
    <div className="independence-sidebar">
      <div className="sidebar-header">
        {shouldShowDisclaimers ? (
          <>
            <h3>Disclaimer</h3>
            <p>Countries independent before 1945 or independent after 1980 from non-European countries</p>
          </>
        ) : (
          <>
            <h3>Independence {currentYear}</h3>
            <p>{countriesGainingIndependence.length} countr{countriesGainingIndependence.length === 1 ? 'y' : 'ies'} gained independence</p>
          </>
        )}
      </div>
      
      <div className="countries-list">
        {shouldShowDisclaimers ? (
          disclaimerCountries.map((country, index) => (
            <button
              key={index}
              className="country-button disclaimer-button"
              onClick={() => setSelectedCountry(country)}
            >
              {country.name}
            </button>
          ))
        ) : (
          countriesGainingIndependence.map((event, index) => (
            <button
              key={index}
              className="country-button"
              onClick={() => handleCountryClick(event)}
            >
              {event.country}
            </button>
          ))
        )}
      </div>

      {/* Popup for country information */}
      {selectedCountry && (
        <div className="sidebar-popup">
          <div className="popup-content">
            <h3>{selectedCountry.name}</h3>
            {!disclaimerCountryNames.has(selectedCountry.name) && (
              <p><strong>Colonial Power:</strong> {selectedCountry.colonialPower}</p>
            )}
            {selectedCountry.independenceYear > 0 && !countriesWithoutIndependenceYear.has(selectedCountry.name) && (
              <p><strong>Independence Year:</strong> {selectedCountry.independenceYear}</p>
            )}
            <p><strong>Description:</strong> {selectedCountry.description}</p>
            <button onClick={() => setSelectedCountry(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndependenceSidebar;
