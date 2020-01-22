import React from 'react';
import { mannequinns, windows, displays } from '../../images';
import { Nav, UL, LI } from '../atoms';

export default ({ imageSet, setImageSet, setCurrentImage }) => {
  // const handleClick = ( set ) => {
  //   setImageSet(set);
  //   setCurrentImage(set[0].source);
  // };
  return (
    <Nav>
      <UL>
        <LI
          onClick={() => {
            setImageSet(mannequinns);
            setCurrentImage(mannequinns[0].source);
          }}
        >
          MANNEQUINNS
        </LI>
        <LI
          onClick={() => {
            setImageSet(windows);
            setCurrentImage(windows[0].source);
          }}
        >
          TRIM
        </LI>
        <LI
          onClick={() => {
            setImageSet(displays);
            setCurrentImage(displays[0].source);
          }}
        >
          DISPLAYS
        </LI>
      </UL>
    </Nav>
  );
};
