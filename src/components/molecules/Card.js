import React from 'react';
import { CardShell, CardTitle, CardScroll } from '../atoms';

export default ({ title, children }) => {
  return (
    <CardShell>
      <CardTitle>{title}</CardTitle>
      <CardScroll>
        {children}
      </CardScroll>
    </CardShell>
  )
}
