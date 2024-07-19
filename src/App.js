import "./App.css";
import Header from "./components/header/Header";
import { Main1, Main2 } from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Hook from "./components/header/Hook_e";
import Hook2 from "./components/header/Hook_2";
function App() {
    const X = 5;
    const name = " LMao"
    const naming1 = " New test name"
    const naming2 = " New test name2"
  return (
    <div className="App">
      <Header/>
      <Main1 number={X}/>
      <Main2 name1={naming1}name2={naming2}/>
      <Hook/>
      <Hook2/>
      <Footer />
    </div>
  );
}
export default App;
