import { Data } from "../../App";
import "./Character.scss";

type CharacterProps = {
  character: Data;
};

const Character = ({ character }: CharacterProps) => {
  const characterStatusColor =
    character.status === "Alive"
      ? "color-green"
      : character.status === "Deceased"
      ? "color-red"
      : "color-yellow";
  return (
    <div className='character'>
      <div className='character-inner'>
        <div className='character-front'>
          <img
            src={character.img}
            alt={character.name}
            className='character-image'
          />
        </div>

        <div className='character-back'>
          <h2 className='character-title'>{character.name}</h2>
          <ul
            className='character-list'
            role='list'>
            <li className='character-item'>
              <span className='character-subtitle'>Actor Name:</span>{" "}
              {character.portrayed}
            </li>
            <li className='character-item'>
              <span className='character-subtitle'>Nickname:</span>{" "}
              {character.nickname}
            </li>
            <li className='character-item'>
              <span className='character-subtitle'>Birthday:</span>{" "}
              {character.birthday}
            </li>
            <li className='character-item'>
              <span className='character-subtitle'>Status:</span>{" "}
              <span className={characterStatusColor}>{character.status}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;
