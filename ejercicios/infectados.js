/*
  Quiero hacer una funcion que admita de parametro un array de pacientes
  La funcion devuelve los que estan infectados al dia siguiente
  Pero no no modifica los que estaban infectados originalmente
  Si alguien esta infectado, al dia siguiente estan infectados los que estan justo al lado

  Otro virus
  Infecta igual que el anterior,
  la diferencia es que el que estaba inicialmente infectado al dia siguiente esta sano
  */

function comprobarSiHayElemento(arr, index, contagiado) {
  if (arr[index] !== undefined) {
    arr[index] = contagiado;
  }
}

function consultaMedica(arr) {
  let resultado = [...arr];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) {
      resultado[index] = true;
      comprobarSiHayElemento(resultado, index - 1, true);
      comprobarSiHayElemento(resultado, index + 1, true);
    }
  }
  return resultado;
}

function consultaMedica2(arr) {
  let resultado = [...arr];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) {
      resultado[index] = false;
    } else if (arr[index] === arr[index + 1] && arr[index] === arr[index - 1]) {
      resultado[index] = false;
    } else {
      resultado[index] = true;
    }
  }
  return resultado;
}
console.log(patients);
console.log(consultaMedica(patients));
console.log(consultaMedica2(patients));

// PROFE

const patients = [true, false, true, false, false, false, true, true];
const infected = [true, true, true, true, false, true, true, true];

const infected2 = [false, true, false, true, false, true, false, false];

function infect(patients) {
  const patientsCopy = [...patients];

  for (let i = 0; i < patientsCopy.length; i++) {
    if (patients[i - 1] || patients[i + 1]) {
      patientsCopy[i] = true;
    }
  }

  return patientsCopy;
}

const infected = infect(patients);
console.log(infected);

function infecta2(patients) {
  const patientsCopy = [...patients];

  for (let i = 0; i < patients.length; i++) {
    if (patients[i]) {
      if (i > 0) {
        patientsCopy[i - 1] = true;
      }
      if (i < patients.length - 1) {
        patientsCopy[i + 1] = true;
      }
    }
  }
  return patientsCopy;
}

function otraCepa(patients) {
  let infectedPatients = infecta2(patients);
  for (let i = 0; i < patients.length; i++) {
    if (patients[i]) {
      infectedPatients[i] = false;
    }
  }
  return infectedPatients;
}

console.log(patients);
console.log(otraCepa(patients));
