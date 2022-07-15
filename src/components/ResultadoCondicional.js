export const ResultadoCondicional = (props) => {
  const { resultadoNuevoCondicional } = props;

  return (
    <span
      style={{
        padding: "5px",
        backgroundColor:
          resultadoNuevoCondicional == null
            ? ""
            : resultadoNuevoCondicional
            ? "green"
            : "red"
      }}
    >
      {resultadoNuevoCondicional == null
        ? "X"
        : resultadoNuevoCondicional.toString()}
    </span>
  );
};
