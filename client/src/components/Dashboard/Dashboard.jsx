import { GameSelectionCard } from '../Cards/GameSelectionCard/GameSelectionCard'

export const Dashboard = () => {
  return (
    <>
      <h1>
        Welcome to Miren and Conor's Flashcards Game!
      </h1>
      <div>
        <h3>
          Which game would you like to play?
        </h3>
        <div className="card-holder">
          <GameSelectionCard text="Colors" img="blue.jpg" />
          <GameSelectionCard text="Numbers" img="fox.jpg" destination="numbers" />
          <GameSelectionCard text="Letters" img="owl.jpg" />
        </div>
      </div>
    </>
  );
}
