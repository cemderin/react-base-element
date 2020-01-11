import React from 'react';
import Base from './Base';
import BaseHeader from './Base/Header';
import BaseBody from './Base/Body';
import BaseFooter from './Base/Footer';

function App() {
  return (
    <div className="App">
      <Base>
        <BaseHeader>
          Header
        </BaseHeader>

        <BaseBody>
          Body
        </BaseBody>

        <BaseFooter>
          Footer
        </BaseFooter>
      </Base>
    </div>
  );
}

export default App;
