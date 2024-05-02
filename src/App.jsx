import Buttons from "./components/Buttons/Buttons";
import Text from "./components/Text/Text";
import Input from "./components/Input/Input";
import "./App.css";

function App() {
  return (
    <>
      <Input />
      <div className="cont">
        <Buttons />
        <Text />
      </div>
    </>
  );
}

export default App;
