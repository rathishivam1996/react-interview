import React, { useState } from 'react';
import './MoveListItemApp.css';
import List from './List';
import Actions from './Actions';
import data from './data';

function MoveListItemApp() {
  const [items, setItems] = useState(data);
  const [leftList, setLeftList] = useState(items);
  const [rightList, setRightList] = useState([]);

  const handleLeftCheckboxToggle = (index) => {
    const updatedLeftList = [...leftList];
    updatedLeftList[index].isChecked = !updatedLeftList[index].isChecked;
    setItems(updatedLeftList);
  };

  const handleRightCheckboxToggle = (index) => {
    const updatedRightList = [...rightList];
    updatedRightList[index].isChecked = !updatedRightList[index].isChecked;
    setItems(updatedRightList);
  };

  const moveLeft = () => {
    const rightRemaining = rightList.filter((elem) => !elem.isChecked);
    const newLeft = rightList.filter((elem) => elem.isChecked);
    newLeft.forEach((elem) => {
      // eslint-disable-next-line no-param-reassign
      elem.isChecked = false;
    });

    const updatedLeftList = [...leftList, ...newLeft];
    setLeftList(updatedLeftList);
    setRightList(rightRemaining);
  };

  const moveRight = () => {
    const leftRemaining = leftList.filter((elem) => !elem.isChecked);
    const newRight = leftList.filter((elem) => elem.isChecked);
    newRight.forEach((elem) => {
      // eslint-disable-next-line no-param-reassign
      elem.isChecked = false;
    });

    const updatedRightList = [...rightList, ...newRight];

    setLeftList(leftRemaining);
    setRightList(updatedRightList);
  };

  return (
    <div id="container">
      <List data={leftList} handleChange={handleLeftCheckboxToggle} />
      <Actions moveRight={moveRight} moveLeft={moveLeft} />
      <List data={rightList} handleChange={handleRightCheckboxToggle} />
    </div>
  );
}

export default MoveListItemApp;
