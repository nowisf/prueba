import { useEffect, useState } from "react";
import { AreaInputs } from "./components/AreaInputs";
import { AreaDescriptiva } from "./components/AreaDescriptiva";
import { AreaCondicionales } from "./components/AreaCondicionales";
import { getSensores } from "./Controlador.js";

import { pom } from ".";

export default function App() {
  // Ya no es un arreglo de Buttons
  // Guardar componentes en arreglos es mala práctica
  // Se debe guardar la información necesaria para "crear"
  // los componentes según se necesiten.
  //
  // Ahora es un arreglo de objetos:
  // {
  //   id: "lnjjlk",
  //   enabled: true
  //   texto: "1"
  // }
  const [sensors, setSensors] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState(null);

  useEffect(() => {
    sensors.map((sensor) => {
      if (sensor.id === selectedSensor?.id) {
        setSelectedSensor(sensor);
      }
    });
  }, [sensors]);

  return (
    <div>
      {/* Le pasamos la lista de sensores y el cambiador de estados a las dos areas */}
      <AreaInputs sensors={sensors} setSensors={setSensors} />

      <AreaCondicionales
        setSelectedSensor={setSelectedSensor}
        selectedSensor={selectedSensor}
        sensors={sensors}
      />

      <AreaDescriptiva sensors={sensors} />
    </div>
  );
}
