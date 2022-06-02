
const comunidadesApis = "http://localhost:5000/ccaa";
 

const comuni = [];

const allComunidades = async () => {
    const comunidades$$ = document.querySelector(".comunidades");

    const comunidadesApi = await fetch (comunidadesApis);

    const comunidadesJSON = await comunidadesApi.json();

    const comunidadesDataJSON = comunidadesJSON.comunidades


    for (let i = 0; i < comunidadesDataJSON.length; i++) {


    console.log(comunidadesDataJSON);

   
    const ccaaDiv$$ = document.createElement("div");
    const name$$ = document.createElement("h1");
    const capital$$ = document.createElement("p");
    const poblacion$$ = document.createElement("p");
    const img$$ = document.createElement("img")

    img$$.src = comunidadesDataJSON[i].bandera;
    name$$.innerText = comunidadesDataJSON[i].name;
    poblacion$$.innerText = "Población " + comunidadesDataJSON[i].poblacion;
    capital$$.innerText = "Capital " + comunidadesDataJSON[i].capital;
    ccaaDiv$$ .classList.add("divPadre");

    comunidades$$.appendChild(ccaaDiv$$);

    ccaaDiv$$.appendChild(img$$) 
    ccaaDiv$$.appendChild(name$$)
    ccaaDiv$$.appendChild(poblacion$$)
    ccaaDiv$$.appendChild(capital$$)
   
    }

};


allComunidades();

