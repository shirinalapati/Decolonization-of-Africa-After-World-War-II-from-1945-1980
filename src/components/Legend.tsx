import React from 'react';
import './Legend.css';

const Legend: React.FC = () => {
  const colonialPowers = [
    { name: 'French 🇫🇷', color: '#3B82F6', description: 'West Africa, North Africa, Central Africa' },
    { name: 'British 🇬🇧', color: '#EF4444', description: 'East Africa, Southern Africa, West Africa' },
    { name: 'Belgian 🇧🇪', color: '#000000', description: 'Central Africa (Congo, Rwanda, Burundi)' },
    { name: 'Portuguese 🇵🇹', color: '#10B981', description: 'Angola, Mozambique, Guinea-Bissau' },
    { name: 'Spanish 🇪🇸', color: '#FBBF24', description: 'Western Sahara, Equatorial Guinea' },
    { name: 'Italian 🇮🇹', color: '#8B5CF6', description: 'Libya (until 1951)' },
    { name: 'Independent', color: '#FFFFFF', description: 'Countries that were already independent' },
  ];

  return (
    <div className="legend-container">
      <h3>Colonial Powers</h3>
      <div className="legend-items">
        {colonialPowers.map((power, index) => (
          <div key={index} className="legend-item">
            <div className="color-box" style={{ backgroundColor: power.color }}></div>
            <div className="legend-text">
              <span className="power-name">{power.name}</span>
              <span className="power-description">{power.description}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="legend-note">
        <p><strong>Note:</strong> As countries gain independence, they turn white on the map.</p>
        <p>Click on any country to see its colonial history and independence details.</p>
        <p><strong>1960:</strong> Known as the "Year of Africa" when 17 countries gained independence.</p>
      </div>
    </div>
  );
};

export default Legend;
