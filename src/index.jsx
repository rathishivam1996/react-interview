import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import InfiniteScrollReact from './InfiniteScrollReact/InfiniteScrollReact';
// import MoveListItemApp from './MoveListItems/MoveListItemsApp';
// import SwapOddsApp from './SwapOdds/SwapOddsApp';
// import RelatedDropDownApp from './RelatedDropDown/RelatedDropDownApp';
// import RadioButtonApp from './RadioButton/RadioButtonApp';
// import SwapOdds from './SwapOdds/SwapOddsApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InfiniteScrollReact />
    {/* <SwapOddsApp /> */}
    {/* <MoveListItemApp /> */}
    {/* <RelatedDropDownApp /> */}
    {/* <RadioButtonApp /> */}
    {/* <SwapOdds /> */}
  </React.StrictMode>,
);
