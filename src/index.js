import React from 'react';

import { Logo } from './components/Logo';
import { Photo } from './components/Photo';

export default function Main() {
  return (
    <>
      <Logo />
      <Photo count={10} file={require('./images/cat.png')} />
      <Photo count={13} file={require('./images/cat2.png')} />
    </>
  );
}
