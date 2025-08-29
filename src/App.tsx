import React, { useState, useEffect } from 'react';
import './App.css';
import DecolonizationMap from './components/DecolonizationMap';
import Timeline from './components/Timeline';
import IndependenceSidebar from './components/IndependenceSidebar';
import { IndependenceEvent } from './types';
import { countries } from './data/countries';

const App: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(1945);
  const [independenceEvents, setIndependenceEvents] = useState<IndependenceEvent[]>([]);
  const [shouldStopFlickering, setShouldStopFlickering] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [hasSimulationStarted, setHasSimulationStarted] = useState(false);

  // Updated independence events data with accurate historical information
  useEffect(() => {
    const events: IndependenceEvent[] = [
      { year: 1847, country: 'Liberia', description: 'Founded by former slaves and designed for former slaves with heavy U.S. backing.' },
      { year: 1910, country: 'South Africa', description: 'Union of South Africa formed as self-governing dominion of British Empire.' },
      { year: 1922, country: 'Egypt', description: 'Formally independent from Britain, but strong British influence continued.' },
      { year: 0, country: 'Ethiopia', description: 'Ancient kingdom that successfully resisted European colonization, especially Italy.' },
      { year: 1951, country: 'Libya', description: 'First African nation to gain independence after WWII, freed under a UN plan and declared a kingdom under Idris I' },
      { year: 1956, country: 'Sudan', description: 'Became independent with the North and South joining in one fragile state, becoming largest country in Africa until South Sudan was freed in 2011' },
      { year: 1956, country: 'Morocco', description: 'Regained sovereignty through negotiations and frequent revolts, under King Mohammed V' },
      { year: 1956, country: 'Tunisia', description: 'Won independence under Habib Bourguiba\'s leadership, who focused on peaceful negotiations before engaging in armed unrest to acquire independence' },
      { year: 1957, country: 'Ghana', description: 'First sub-Saharan African country to gain independence, led by Kwame Nkrumah, who was a main leader of the pan-Africanism movement' },
      { year: 1958, country: 'Guinea', description: 'First French African colony to gain independence after voting for immediate independence instead of a new constitution' },
      { year: 1960, country: 'Cameroon', description: 'French Cameroon gained independence first with British Cameroon joining a year later. First country to gain independence in 1960, Year of Africa' },
      { year: 1960, country: 'Senegal', description: 'Became independent after having a short federation with Mali' },
      { year: 1960, country: 'Togo', description: 'Former Germany colony under French mandate, becoming first UN Trust Territory in the world to gain independence' },
      { year: 1960, country: 'Benin', description: 'Former French colony of Dahomey, gained independence peacefully and changed name in 1975 to represent pre-colonial history' },
      { year: 1960, country: 'Madagascar', description: 'Highlighted by nationalist uprisings in the late 1940s, including a blood 1947 rebellion, before being free as the Malagasy Republic' },
      { year: 1960, country: 'Democratic Republic of the Congo', description: 'Immediately descended into the Congo Crisis, a Cold War proxy conflict, where resource-rich regions of Katanga and South Kasai seceded' },
      { year: 1960, country: 'Mali', description: 'Officially independent when Senegal withdrew from the federation of the two countries' },
      { year: 1960, country: 'Niger', description: 'Peaceful independence from France, home to world\'s largest uranium mines' },
      { year: 1960, country: 'Burkina Faso', description: 'Wouldn\'t adopt name until 1984, which means "Land of Upright People", symbolizing the country\'s integrity' },
      { year: 1960, country: 'Ivory Coast', description: 'Independence under President Félix Houphouët-Boigny, known as the Sage of Africa who became the longest-serving leader in Africa\'s history at time of death' },
      { year: 1960, country: 'Chad', description: 'Declared independence under the leadership of François Tombalbaye, whose one party rule sparked rebellions in the North' },
      { year: 1960, country: 'Central African Republic', description: 'Achieved independence after voting in the 1958 referendum, characterized by multiple autocratic rulers afterwards' },
      { year: 1960, country: 'Republic of the Congo', description: 'Independence led by Fulbert Youlou, who faced heavy opposition from France due to his dictatorial policies marked with financial corruption' },
      { year: 1960, country: 'Gabon', description: 'Peacefully left French Equatorial Africa, but kept close ties to France with its rich oil reserves' },
      { year: 1960, country: 'Nigeria', description: 'Largest African colony of Britain with diverse ethnic groups united as a federal system to become Africa\'s most populous country' },
      { year: 1960, country: 'Mauritania', description: 'Last of eight French West African colonies to gain independence' },
      { year: 1960, country: 'Somalia', description: 'Brought British Somaliland and Italian Somaliland into one republic' },
      { year: 1961, country: 'Sierra Leone', description: 'Initially founded as a settlement for freed slaves, peacefully gained independence under Milton Margai, who was well-renowned across the whole country' },
      { year: 1961, country: 'Tanzania', description: 'Later merged with Zanzibar in 1964 after violent Zanzibar Revolution to form Tanzania' },
      { year: 1962, country: 'Rwanda', description: 'Abolished their century-long monarchy to become a republic' },
      { year: 1962, country: 'Burundi', description: 'Declared independence as a monarchy under King Mwambutsa IV' },
      { year: 1962, country: 'Algeria', description: 'France\'s most prized colony and Africa\'s largest country; won independence after brutal eight year war that was marked by widespread war crimes' },
      { year: 1962, country: 'Uganda', description: 'Peacefully won under Prime Minister Milton Obote' },
      { year: 1963, country: 'Kenya', description: 'Violent path to independence with Mau Mau Rebellion from 1952-1956 resulting in British victory, but sped up process for freedom' },
      { year: 1964, country: 'Malawi', description: 'Formerly known as British Nyasaland, independent under oppressive leader Hastings Banda, a strong anti-communist heavily supported in the West during the Cold War' },
      { year: 1964, country: 'Zambia', description: 'Formerly a British protectorate named Northern Rhodesia' },
      { year: 1965, country: 'The Gambia', description: 'Smallest mainland African state that won independence peacefully' },
      { year: 1966, country: 'Botswana', description: 'Transformed from one of the poorest to Africa\'s most firm democracies' },
      { year: 1966, country: 'Lesotho', description: 'Mountain kingdom that gained independence as a constitutional monarchy under King Moshoeshoe II' },
      { year: 1968, country: 'Equatorial Guinea', description: 'Only Spanish colony in sub-Saharan Africa under Francisco Nugeuma, one of the most brutal despots in history with many believing he was insane' },
      { year: 1968, country: 'Mauritius', description: 'Indian Ocean island colony that gained independence, becoming a multiethnic parliamentary democracy' },
      { year: 1968, country: 'Eswatini', description: 'Independence restored Africa\'s last absolute monarchy under King Sobhuza II' },
      { year: 1973, country: 'Guinea-Bissau', description: 'Fought brutal war of independence characterized by lots of guerilla warfare that put lots of strain on Portugal, making it known as Portugal\'s Vietnam' },
      { year: 1975, country: 'Mozambique', description: 'Independence after Carnation Revolution, a military coup in Portugal, that finally ended guerilla warfare' },
      { year: 1975, country: 'Angola', description: 'Carnation Revolution also brought independence here, but plunged into decades long civil war that was a major Cold War proxy conflict' },
      { year: 1975, country: 'Cape Verde', description: 'Island nation with very strong diaspora ties' },
      { year: 1975, country: 'São Tomé and Príncipe', description: 'Tiny island state that received independence peacefully via negotiations' },
      { year: 1975, country: 'Comoros', description: 'Within just a month after independence, first president, Ahmed Abdallah, overthrown in a coup' },
      { year: 1976, country: 'Seychelles', description: 'Smallest African country by area, became a republic within the Commonwealth' },
      { year: 1977, country: 'Djibouti', description: 'Last French colony in Africa to gain independence' },
      { year: 1980, country: 'Zimbabwe', description: 'Formerly Rhodesia under white minority rule, finally recognized internationally under majority rule after long civil war' },
      { year: 1990, country: 'Namibia', description: 'Freed from South Africa\'s apartheid rule in 1990' },
      { year: 1993, country: 'Eritrea', description: 'Annexed by Ethiopia in 1963, fought long war of independence to be free in 1993' },
      { year: 2011, country: 'South Sudan', description: 'Broke away from Sudan after decades of civil war, becoming world\'s newest country in 2011' },
      { year: 1976, country: 'Western Sahara', description: 'After Spain withdrew, Morocco and Mauritania both claimed the territory, sparking conflict' }
    ];
    setIndependenceEvents(events);
  }, []);

  const handleIndependenceYear = (year: number) => {
    // This will be handled by the Timeline component
    console.log(`Independence year: ${year}`);
  };

  const handleStopFlickering = () => {
    setShouldStopFlickering(true);
    setShowSidebar(false);
    setHasSimulationStarted(true);
    // Reset after a short delay
    setTimeout(() => setShouldStopFlickering(false), 100);
  };

  // Handle independence year events
  useEffect(() => {
    const countriesGainingIndependence = independenceEvents.filter(event => event.year === currentYear);
    
    if (countriesGainingIndependence.length > 0) {
      setShowSidebar(true);
    } else if (currentYear === 1945 && !hasSimulationStarted) {
      // Show disclaimer sidebar at the start
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, [currentYear, independenceEvents, hasSimulationStarted]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Decolonization Simulation: 1945-1980</h1>
        <p>Watch as African nations gain independence from European colonial powers after World War II</p>
      </header>
      
      <main className="App-main">
        <div className="map-container">
          <DecolonizationMap 
            currentYear={currentYear} 
            independenceEvents={independenceEvents}
            onIndependenceYear={handleIndependenceYear}
            shouldStopFlickering={shouldStopFlickering}
          />
        </div>
        
        <div className="controls-container">
          <Timeline 
            currentYear={currentYear} 
            onYearChange={setCurrentYear}
            minYear={1945}
            maxYear={1980}
            onIndependenceYear={handleIndependenceYear}
            independenceEvents={independenceEvents}
            onStopFlickering={handleStopFlickering}
          />
          
          <IndependenceSidebar
            currentYear={currentYear}
            independenceEvents={independenceEvents}
            isVisible={showSidebar}
            countriesData={countries}
            hasSimulationStarted={hasSimulationStarted}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
