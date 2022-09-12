import React from 'react';
import { RecoilRoot } from 'recoil';
import CahracterCounter from './CharacterCounter';

const App = () => {
  return (
    <RecoilRoot>
      <CahracterCounter />
    </RecoilRoot>
  );
};

export default App;
