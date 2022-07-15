import { Button, BinaryButton } from "./Buttons";
import { nanoid } from "nanoid";
import { random } from "random-unicode-emoji";
export const AreaInputs = (props) => {
  const { sensors, setSensors } = props;

  // Función que crea sensores (agrega un objeto al arreglo)
  const createSensor = () => {
    setSensors([
      ...sensors,
      {
        // Para generar ID Automáticos y únicos recomiendo "nanoid" (https://www.npmjs.com/package/nanoid)
        id: random({ count: 1 }), // Idealmente generar un ID único (para poder borrar)
        enabled: false // Botones nuevos desactivados por defecto
      }
    ]);
  };

  // Función que revierte los estados de todos los sensores
  const reverseStates = () => {
    const newSensors = [];

    for (const sensor of sensors) {
      newSensors.push({
        ...sensor,
        enabled: !sensor.enabled
      });
    }

    setSensors(newSensors);
  };

  return (
    <div>
      <Button onClick={createSensor}>Agregar botón</Button>

      {/* Es necesario pasarle la lista de sesores y el cambiador de sensores al botón
      {/* para que este los pueda usar (para cambiar estado al hacer click) */}
      {sensors.map((sensor) => {
        return (
          <BinaryButton
            key={sensor.id}
            id={sensor.id}
            enabled={sensor.enabled}
            sensors={sensors}
            setSensors={setSensors}
          />
        );
      })}

      <Button onClick={reverseStates}>Invertir Estados</Button>
    </div>
  );
};
