import "tailwindcss";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation-Wall/Presentation";

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
      </div>
    </>
  );
}

export default App;
