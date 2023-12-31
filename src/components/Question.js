import Options from './Options';
import { useAppContext } from '../context/AppContext';

function Question() {
  const { question } = useAppContext();
  // console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
