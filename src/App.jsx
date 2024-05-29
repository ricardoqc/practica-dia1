import React from 'react'
import Text from './components/Text';
import Lists from './components/Lists';

export const App = () => {
  return (
    <div className="container">
      <div className="col-1">
          <Text />
      </div>
      <div className="col-2">
        <div className="list">
          <Lists />
        </div>
      </div>
    </div>
  )
}

export default App;