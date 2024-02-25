import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <Body />
        {/**
         * Header
         * Body
         * Sidebar
         *  Menuitem
         * MaiContainer
         *  ButtonList
         * VkideoContainer
         *  videoCard
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
