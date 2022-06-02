
const comunidadesApis = "http://localhost:8000/ccaa";
 

const comuni = [];

const allComunidades = async () => {
    const comunidades$$ = document.querySelector(".comunidades");

    const comunidadesApi = await fetch (comunidadesApis);

    const comunidadesJSON = await comunidadesApi.json();

    const comunidadesDataJSON = comunidadesJSON.comunidades


    for (let i = 0; i < comunidadesDataJSON.length; i++) {


    console.log(comunidadesDataJSON);

   
    const ccaaDiv$$ = document.createElement("div");
    const name$$ = document.createElement("h2");
    const capital$$ = document.createElement("p");
    const poblacion$$ = document.createElement("p");
    const img$$ = document.createElement("img")

    name$$.innerText = comunidadesDataJSON[i].name;
    poblacion$$.innerText = comunidadesDataJSON[i].poblacion;
    img$$.src = comunidadesDataJSON[i].bandera;
    capital$$.innerText = comunidadesDataJSON[i].capital;
    ccaaDiv$$ .classList.add("divPadre");

    comunidades$$.appendChild(ccaaDiv$$);

    ccaaDiv$$.appendChild(name$$)
    ccaaDiv$$.appendChild(poblacion$$)
    ccaaDiv$$.appendChild(capital$$)
    ccaaDiv$$.appendChild(img$$) 
    


   
    }

};


allComunidades();

