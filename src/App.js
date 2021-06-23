import React from 'react';
import './App.css';
// import GrandParent from './components/GrandParent'
import FocusInput from './components/FocusInput';
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'Nabendu'}>
        <ChannelContext.Provider value={'TheWebDev'}>
          <GrandParent />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <FocusInput />
    </div>
  );
}

export default App;
