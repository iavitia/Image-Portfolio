import React from 'react';

import Nav from '../atoms/Nav';
import Button from '../atoms/Button';

function Navbar() {
  return (
    <Nav>
      <Button onClick={() => console.log('hello')}>Click</Button>
    </Nav>
  );
}

export default Navbar;
