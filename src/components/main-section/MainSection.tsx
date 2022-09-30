import { Data } from '../../App';
import Character from '../character/Character';
import './MainSection.scss';

type CharactersProps = {
  characters: Data[];
};

const MainSection = ({ characters }: CharactersProps) => {
  return (
    <main className='main'>
      {characters.map((character) => (
        <Character
          key={character.char_id}
          character={character}
        />
      ))}
    </main>
  );
};

export default MainSection;
