const ciudades$$= document.querySelector(".ciudadess");
const ciudadesApis="http://localhost:8000/ciudades"

const ciudadesAll= async ()=>{
    const ciudadesApi= await fetch(ciudadesApis);
    const ciudadesJSON = await ciudadesApi.json();
    console.log(ciudadesJSON);

    paintCiudades(ciudadesJSON);
}


const paintCiudades= (array) => {
    const ciudadesHTML=array.cities.map((ciudad)=>`
    <div class="ciudadBox">
    <h2>${ciudad.name}</h2>
    <img
    src=${ciudad.escudo}
    alt=${ciudad.name}
    >
    <h3>${ciudad.capital}</h3>
    <h3>${ciudad.comunidad}</h3>

    <p>${ciudad.poblacion}</p>
    <p>${ciudad.extension}</p></div>
    `

    ).join("");
    ciudades$$.innerHTML= ciudadesHTML;


}

ciudadesAll();

