import { useState } from "react";
import "./App.css";
import imgbiscoito from "../src/assets/img/biscoito.png";
import imgbiscoitoquebrado from "../src/assets/img/biscoitoquebrado.png";
import Api from "./Api";
import CardComponent from "./components/CardComponent";
function App() {
  const [message, setmessage] = useState("");
  const [img, setimg] = useState(false);
  const [btn, setbtn] = useState(true);

  async function HandleBiscoito() {
    try {
      setbtn(false);

      const response = await Api.get("messagerandom");
      setmessage(response.data.data.Message);
      setimg(true);
      setbtn(true);
    } catch {
      console.log("erros");
    }
  }

  async function HandleLimpar() {
    setmessage("");
    setimg(false);
  }

  return (
    <div className="container">
      <h1>Biscoito da Sorte 🍀</h1>
      <div className="img">
        <img src={img ? imgbiscoitoquebrado : imgbiscoito} alt="img" />
      </div>

      {message != "" ? <CardComponent msg={message} /> : ""}

      <div className="btn">
        {btn ? (
          <button
            type="button"
            onClick={() => {
              HandleBiscoito();
            }}
          >
            Quebra Biscoito
          </button>
        ) : (
          ""
        )}
        <button
          type="submit"
          onClick={() => {
            HandleLimpar();
          }}
        >
          Limpar
        </button>
      </div>
    </div>
  );
}

export default App;
