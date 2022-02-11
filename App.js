import React from 'react';
import {Provider} from 'react-redux';
import store from './lib/core/redux/store';
import NavigationViews from './lib/core/navigation/navigations';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationViews />
    </Provider>
  );
};
export default App;
