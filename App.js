import SplashScreen from 'react-native-splash-screen';
import MyCamera from './src/component/MyCamera';
import Navigation from './src/navigation/navigation';
import {useEffect} from 'react';
const App = () => {
  useEffect(() => {
    // setTimeout(() => {
      
      SplashScreen.hide();
      
    // }, 1000);

  }, []);
  return (

    <Navigation />
  );
};
export default App;