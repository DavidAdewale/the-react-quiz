import Header from './Header';
import Main from './Main';

import AppComponent from './AppComponent';
import GameScreen from './GameScreen';
import StartScreen from './StartScreen';
import FinishScreen from './FinishScreen';
import { AppProvider } from '../context/AppContext';

export default function App() {
  return (
    <AppProvider>
      <AppComponent>
        <Header />
        <Main>
          <StartScreen />
          <GameScreen />
          <FinishScreen />
        </Main>
      </AppComponent>
    </AppProvider>
  );
}
