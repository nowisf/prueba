// Esta área muestra una lista de los estados de sensores

export const AreaDescriptiva = (props) => {
  const { sensors } = props;

  return (
    <div>
      <hr />
      <p>Estados (area2)</p>
      <ul>
        {sensors.map((sensor) => {
          return (
            <li key={sensor.id}>
              Sensor {sensor.id}: {sensor.enabled ? "activado" : "desactivado"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
