import Progress from './Progress';
import Question from './Question';
import Footer from './Footer';
import Timer from './Timer';
import NextButton from './NextButton';
import { useAppContext } from '../context/AppContext';

function GameScreen() {
  const { status } = useAppContext();

  if (status === 'active')
    return (
      <>
        <Progress />
        <Question />
        <Footer>
          <Timer />
          <NextButton />
        </Footer>
      </>
    );
}

export default GameScreen;
