// El botón binario recibe un ID, si está ENABLED, la lista de SENSORES y el cambiador de sensores
export const BinaryButton = (props) => {
  const { id, enabled = false, sensors, setSensors } = props;

  return (
    <button
      onClick={() => {
        // Hace un nuevo arreglo (porque no puedo mutar el original),
        // filtrando por el sensor que tenga el mismo ID
        // Para recorrer sensors, me gusta mucho usar FOR..OF
        // Aunque de preferencia usaría un MAP con return (para mutar)
        // Una vez que lo encuentra, invierte su ENABLED usando un toggle
        // enabled: !sensor.enabled
        const newSensors = [];

        for (const sensor of sensors) {
          if (sensor.id === id) {
            newSensors.push({
              ...sensor,
              enabled: !sensor.enabled
            });
          } else {
            newSensors.push(sensor);
          }
        }

        setSensors(newSensors);
      }}
      // Si es ENABLED fondo verde, sino rojo.
      style={{ backgroundColor: enabled ? "green" : "red" }}
      className="truncar"
    >
      {id}
    </button>
  );
};

// Botón cuma y simple, hasta es innecesario xd
export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export const FlopFlip = (props) => {
  //style es necesario para ver quien resulta estar activado
  const { onClick, valorComparacion, botones } = props;
  return (
    <>
      <button
        onClick={onClick}
        style={{
          backgroundColor: valorComparacion === "and" ? "" : "lightBlue"
        }}
      >
        {botones[0]}
      </button>
      <button
        onClick={onClick}
        style={{
          backgroundColor: valorComparacion === "and" ? "lightBlue" : ""
        }}
      >
        {botones[1]}
      </button>
    </>
  );
};
