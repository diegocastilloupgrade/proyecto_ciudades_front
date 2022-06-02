const BBDD = 'http://localhost:8000/ccaa';

const getComunidadesPorId = async () => {
  //Nos traemos todos los datos
  let comunidadData = await fetch(BBDD);
  let comunidadDataJSON = await comunidadData.json();
  let datosComunidades = comunidadDataJSON.comunidades;

  const myComunidadData$$ = document.querySelector('.divPadre');
  const miInput$$ = document.querySelector('.miInput');

  if (miInput$$.value) {
    for (let i = 0; i < datosComunidades.length; i++) {
      if (
        datosComunidades.name
          .toLowerCase()
          .trim()
          .includes(miInput$$.value.toLowerCase().trim())
      ) {
        const ccaaContainer$$ = document.createElement('div');
        const ccaaName$$ = document.createElement('h1');
        const ccaaPopulation$$ = document.createElement('p');
        const ccaaCapital$$ = document.createElement('p');
        ccaaName$$.innerText = datosComunidades[i].name;
        ccaaPopulation$$.innerText = datosComunidades[i].poblacion;
        ccaaCapital$$.innerText = datosComunidades[i].capital;
  
        myComunidadData$$.appendChild(ccaaContainer$$);
        ccaaContainer$$.appendChild(ccaaName$$);
        ccaaContainer$$.appendChild(ccaaPopulation$$);
        ccaaContainer$$.appendChild(ccaaCapital$$);
      }
    }
  }
};

getComunidadesPorId();
