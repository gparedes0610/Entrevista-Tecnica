import { useEffect, useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import data from "./services/data.json";
function App() {
  const [index, setIndex] = useState(0);
  const [ejemplares, setEjemplares] = useState(data.ejemplares);

  useEffect(() => {
    console.log("ver data =>", ejemplares);
  }, []);
  console.log("data =>", data);

  // función para cambiar el índice del elemento a mostrar
  const handleNext = () => {
    if (index < ejemplares.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handlePrevius = () => {
    if (index > 0) {
      console.log("ver index", index);
      setIndex(index - 1);
    } else {
      setIndex(2);
    }
  };
  return (
    <div className="container">
      <h1>
        Conoce nuestros
        <b> Padrillos</b>
      </h1>
      <div className="container-ejemplares">
        <img src={ejemplares[index].img} alt={ejemplares[index].title} className="a" />

        <div>
        <Buttons
            handleNext={handleNext}
            handlePrevius={handlePrevius}
            index={index}
            className='b'
          ></Buttons>
          
          <div className="container-data c">
            <p>Padrillo</p>
            <h2>{ejemplares[index].title}</h2>

            <table >
              <body>
                <tr>
                  <td>
                    <b>Placa</b>
                  </td>
                  <td>{ejemplares[index].placa}</td>
                </tr>

                <tr>
                  <td>
                    <b>Peso</b>
                  </td>
                  <td>{ejemplares[index].peso}</td>
                </tr>

                <tr>
                  <td>
                    <b>Fecha de nacimiento</b>
                  </td>
                  <td>{ejemplares[index].fecha}</td>
                </tr>
              </body>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
