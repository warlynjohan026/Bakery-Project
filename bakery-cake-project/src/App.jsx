import "tailwindcss";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation-Wall/Presentation";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <div className="mx-auto grid grid-cols-12">
        <div className="col-span-12">
          <Header />
        </div>
        <div className="col-span-12">
          <Presentation />
        </div>
        <div className="col-span-12">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
