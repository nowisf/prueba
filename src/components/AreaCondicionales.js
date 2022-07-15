import { useEffect, useState } from "react";
import { Button, FlopFlip } from "./Buttons";
import { CondicionalAtomico } from "./CondicionalAtomico";
import { ResultadoCondicional } from "./ResultadoCondicional";

export const AreaCondicionales = (props) => {
  //En esta area se muestra un recuadro con
  const { sensors, setSelectedSensor, selectedSensor } = props;

  let [orOrAnd, setOrOrAnd] = useState("and");
  const orOrAndAct = () => {
    setOrOrAnd(orOrAnd === "and" ? "or" : "and");
  };
  let [ofreciendoDependencias, setOfreciendoDependencias] = useState(false);
  const ofrecerDependencias = () => {
    setOfreciendoDependencias(true);
  };
  const accionDependenciaOfrecida = () => {
    setOfreciendoDependencias(false);
  };

  const [condicionEscogida, setCondicionEscogida] = useState(true);
  const [nuevosCondicionales, setNuevosCondicionales] = useState([]);
  const [resultadoNuevoCondicional, setResultadoNuevoCondicional] = useState(
    null
  );
  useEffect(() => {
    let valorFinal = null;
    if (nuevosCondicionales.length) {
      if (orOrAnd === "or") {
        valorFinal = false;
        nuevosCondicionales.forEach((nuevoCondicional) => {
          const sensorMatch = sensors.find((sensor) => {
            if (sensor.id === nuevoCondicional.selectedSensor.id) {
              return sensor;
            }
          });

          if (sensorMatch.enabled === nuevoCondicional.condicionEscogida) {
            valorFinal = true;
          }
        });
      } else {
        valorFinal = true;
        nuevosCondicionales.forEach((nuevoCondicional) => {
          const sensorMatch = sensors.find((sensor) => {
            if (sensor.id === nuevoCondicional.selectedSensor.id) {
              return sensor;
            }
          });
          if (sensorMatch.enabled !== nuevoCondicional.condicionEscogida) {
            valorFinal = false;
          }
        });
      }

      setResultadoNuevoCondicional(valorFinal);
    }
  }, [nuevosCondicionales, sensors, orOrAnd]);

  return (
    <>
      <hr />
      {selectedSensor ? (
        <>
          <Button
            style={{
              backgroundColor: selectedSensor.enabled ? "green" : "red"
            }}
          >
            {selectedSensor.id}
          </Button>

          <button
            onClick={() => {
              setCondicionEscogida(!condicionEscogida);
            }}
            style={{
              backgroundColor: condicionEscogida ? "green" : "red"
            }}
          >
            {condicionEscogida.toString()}
          </button>
        </>
      ) : null}
      {sensors.map((sensor) => {
        return (
          <button
            onClick={() => {
              setSelectedSensor(sensor);
              accionDependenciaOfrecida();
            }}
            key={"hola" + sensor.id}
            style={{
              backgroundColor: sensor.enabled ? "green" : "red",
              display: ofreciendoDependencias ? "block" : "none"
            }}
          >
            {sensor.id}
          </button>
        );
      })}
      <button
        onClick={() => {
          if (selectedSensor) {
            setNuevosCondicionales([
              ...nuevosCondicionales,
              { selectedSensor, condicionEscogida }
            ]);
            setSelectedSensor(null);
          } else {
            ofrecerDependencias();
          }
        }}
      >
        new
      </button>
      <br />
      <br />
      <CondicionalAtomico
        nuevosCondicionales={nuevosCondicionales}
        sensors={sensors}
      />
      <br />
      <br />
      <FlopFlip
        onClick={orOrAndAct}
        valorComparacion={orOrAnd}
        botones={["||", "&&"]}
      />
      <br />
      <br />
      Valor:
      <ResultadoCondicional
        resultadoNuevoCondicional={resultadoNuevoCondicional}
      />
    </>
  );
};
