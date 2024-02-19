import "./App.css";
import Accordion from "./components/accordion/Accordion";
import Darkmode from "./components/light-dark-mode/Darkmode";
import LoadingScreen from "./components/loading/LoadingScreen";
import Codegen from "./components/qr-code-generator/Codegen";
import Slider from "./components/slider/Slider";
import Typewriter from "./components/typewriter/Typewriter";

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
      <div className="flex  justify-center items-center border h-[80vh]">
        <LoadingScreen />
      </div>
      <div className="flex  justify-center items-center border h-[80vh]">
        <Codegen />
      </div>
      <div className="flex  justify-center items-center border h-[80vh]">
        <Typewriter />
      </div>
      <div className="flex  justify-center items-center border h-[80vh]">
        <Darkmode />
      </div>
    </>
  );
}

export default App;
