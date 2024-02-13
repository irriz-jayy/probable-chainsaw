import "./App.css";
import Accordion from "./components/accordion/Accordion";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <>
      <div className="flex justify-center items-center border h-[80vh]">
        {/* accordion component */}
        <Accordion />
      </div>
      <div className="flex  justify-center items-center border h-[80vh]">
        <Slider url={"https://picsum.photos/v2/list"} limit={"10"} />
      </div>
    </>
  );
}

export default App;
