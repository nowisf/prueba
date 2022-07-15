const neuronas = {};
const condicionales = {};
const historial = [];

const getNPorRuta = (ruta) => {
  //retorna la neurona de la id
  var puntero = neuronas;
  ruta.forEach((pasaje) => {
    puntero = puntero[pasaje];
  });
  return puntero;
};

export const addNeuronas = (neurona) => {};

export const getSensores = () => {
  return neuronas;
};

export const input = (props) => {
  const tipo = props.tipo;
};

const crearNeurona = (props) => {
  const id = props.id;
  const valor = props.valor;
  const tipo = props.tipo; //dafault:entrada, condicionada
  const listeners = []; //id

  neuronas[id] = { id: id, valor: valor, tipo: tipo, listeners: listeners };
};

const crearPercutorCondicional = (props) => {
  const id = props.id;
  const condicion = props.condicion; //condicion.tipo && .regla .condicionales{id:true}
  const reaccion = props.condicion; //cambiarEstadoDeVerdad
  const autonomo = props.autonomo;
  this.condicionales[id] = {
    condicion: condicion,
    reaccion: reaccion,
    id: id,
    autonomo: autonomo
  };
};

const cambiarEstadoValoricoN = (props) => {
  //reaccion en cadena de listeners y condicionales
  const idNeurona = props.idNeurona;
  const valorNuevo = props.valorNuevo;

  const neurona = neuronas[idNeurona];

  historial.append(`${idNeurona} paso de ${neurona} a: ${valorNuevo}`);

  neurona.valor = valorNuevo;
  neurona.listeners.array.forEach((listener) => {
    const output = {};

    procesarCondicional(output);
  });
};

const procesarCondicional = (props) => {
  const condicional = condicionales[props.idCondicional];

  let valorFinal = null;

  switch (
    condicional.condicion.tipo //segun el tipo del MACRO CONDICONAL
  ) {
    case "or":
      valorFinal = false;
      condicional.condicionales.forEach((condicional) => {
        //por cada micro condicional

        const valorA = getNPorRuta(condicional.a);
        const valorB = getNPorRuta(condicional.b);

        switch (condicional.tipo) {
          case "a es b":
            //is

            if (valorA === valorB) {
              valorFinal = true;
            }
            break;

          case "a no es b":
            //not

            if (valorA !== valorB) {
              valorFinal = true;
            }
            break;
          default:
        }
      });
      break;
    case "atomicNot":
      break;
    default:
      console.log(`default case 292929`);
      break;
  }
  condicional.valor = valorFinal;
};
