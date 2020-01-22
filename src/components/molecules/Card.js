import React from 'react';
import { CardShell, CardScroll } from '../atoms';

export default ({ title, children }) => {
  return (
    <CardShell>
      <CardScroll>{children}</CardScroll>
    </CardShell>
  );
};
