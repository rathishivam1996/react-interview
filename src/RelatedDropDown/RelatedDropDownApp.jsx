import React, { useState } from 'react';
import './RelatedDropDownApp.css';

const countries = [
  { name: 'India', value: 'IN', cities: ['Delhi', 'Rajasthan'] },
  { name: 'Japan', value: 'JPN', cities: ['Kyoto', 'Tokyo'] },
  { name: 'UK', value: 'UK', cities: ['York', 'London'] },
];

function RelatedDropDownApp() {
  const [selectedCountry, setSelectedCountry] = useState(0);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="container">
      {/** drop down 1 */}
      <h1>Select a Country:</h1>
      <select
        id="countries-dropdown"
        aria-label="countries-dropdown"
        name="countries-dropdown"
        defaultValue={countries[selectedCountry].name}
        onChange={handleChange}
      >
        {countries.map((item, index) => (
          <option key={item.name} label={item.name} value={index} />
        ))}
      </select>
      <p>Selected Country is {countries[selectedCountry].name}!</p>
      {/** drop down 2 */}
      <h1>Select a City:</h1>
      <select
        id="cities-dropdown"
        aria-label="cities-dropdown"
        name="cities-dropdown"
      >
        {countries[selectedCountry].cities.map((item, index) => (
          <option key={item} label={item} value={index} />
        ))}
      </select>
    </div>
  );
}

export default RelatedDropDownApp;
