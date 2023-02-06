import SplashScreen from 'react-native-splash-screen';
import MyCamera from './src/component/MyCamera';
import Navigation from './src/navigation/navigation';
import {useEffect} from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import InspectionScreen from './src/screens/InspectionScreen'
const App = () => {
  useEffect(() => {
    // setTimeout(() => {
      
      SplashScreen.hide();
      
    // }, 1000);

  }, []);
 
  return (
    <Provider store={store}>
     <Navigation />
     {/* <InspectionScreen/> */}
    </Provider>

  
  );
};
export default App;