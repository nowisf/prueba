export const CondicionalAtomico = (props) => {
  const { nuevosCondicionales, sensors } = props;

  return (
    <div style={{ display: "flex" }}>
      {nuevosCondicionales.map((nuevoCondicional) => {
        const sensorMatch = sensors.find((sensor) => {
          if (sensor.id === nuevoCondicional.selectedSensor.id) {
            return sensor;
          }
        });

        return (
          <div
            key={nuevoCondicional.selectedSensor.id}
            style={{ flexDirection: "column", display: "flex" }}
            className="truncar"
          >
            <span
              style={{
                backgroundColor: sensorMatch.enabled ? "green" : "red",
                padding: "5px"
              }}
            >
              {nuevoCondicional.selectedSensor.id}
            </span>
            <span
              style={{
                backgroundColor: nuevoCondicional.condicionEscogida
                  ? "green"
                  : "red",
                padding: "5px"
              }}
            >
              {nuevoCondicional.condicionEscogida.toString()}
            </span>
          </div>
        );
      })}
    </div>
  );
};
