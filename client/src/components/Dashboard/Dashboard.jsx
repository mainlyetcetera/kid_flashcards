import { GameCard } from '../GameCard/GameCard'

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
          <GameCard text="Colors" img="blue.jpg" />
          <GameCard text="Numbers" img="fox.jpg" destination="numbers" />
          <GameCard text="Letters" img="owl.jpg" />
        </div>
      </div>
    </>
  );
}
