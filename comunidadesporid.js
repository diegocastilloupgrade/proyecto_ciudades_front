const apiUrl = 'http://localhost:8000/ccaa';
//const ciudadesNameAsturias = 'http://localhost:8000/ccaa/name/Asturias';

const getComunidadesPorId = async () => {
  const comunidadData = await fetch(apiUrl);
  const comunidadDataJSON = await comunidadData.json();
  const datosComunidades = comunidadDataJSON.comunidades;

  // const miInput$$ = document.querySelector('.miInput');

  for (let i = 0; i < datosComunidades.length; i++) {
    const myComunidadData$$ = document.querySelector('.comunidades');
    const ccaaContainer$$ = document.createElement('div');
    ccaaContainer$$.className = 'divPadre';
    const ccaaName$$ = document.createElement('h1');
    const ccaaPopulation$$ = document.createElement('p');
    const ccaaCapital$$ = document.createElement('p');
    const ccaaBandera$$ = document.createElement('img');
    ccaaBandera$$.setAttribute('src', datosComunidades[i].bandera);
    ccaaName$$.innerText = datosComunidades[i].name;
    ccaaPopulation$$.innerText = datosComunidades[i].poblacion;
    ccaaCapital$$.innerText = datosComunidades[i].capital;
    myComunidadData$$.appendChild(ccaaContainer$$);

    ccaaContainer$$.appendChild(ccaaBandera$$);
    ccaaContainer$$.appendChild(ccaaName$$);
    ccaaContainer$$.appendChild(ccaaPopulation$$);
    ccaaContainer$$.appendChild(ccaaCapital$$);
  }
};
getComunidadesPorId();
/*
const getComunidadesPorId = async () => {
  const comunidadData = await fetch(apiUrl);
  const comunidadDataJSON = await comunidadData.json();
  const datosComunidades = comunidadDataJSON.comunidades;

  // const miInput$$ = document.querySelector('.miInput');

  for (let i = 0; i < datosComunidades.length; i++) {
    const myComunidadData$$ = document.querySelector('.comunidades');
    const ccaaContainer$$ = document.createElement('div');
    ccaaContainer$$.className = 'divPadre';
    const ccaaName$$ = document.createElement('h1');
    const ccaaPopulation$$ = document.createElement('p');
    const ccaaCapital$$ = document.createElement('p');
    const ccaaBandera$$ = document.createElement('img');
    ccaaBandera$$.setAttribute('src', datosComunidades[i].bandera);
    ccaaName$$.innerText = datosComunidades[i].name;
    ccaaPopulation$$.innerText = datosComunidades[i].poblacion;
    ccaaCapital$$.innerText = datosComunidades[i].capital;
    myComunidadData$$.appendChild(ccaaContainer$$);

    ccaaContainer$$.appendChild(ccaaBandera$$);
    ccaaContainer$$.appendChild(ccaaName$$);
    ccaaContainer$$.appendChild(ccaaPopulation$$);
    ccaaContainer$$.appendChild(ccaaCapital$$);
  }
};
*/
//getComunidadesPorNamexxx();
