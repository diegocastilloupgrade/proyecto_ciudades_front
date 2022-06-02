const ciudades$$= document.querySelector(".ciudadess");
const ciudadesApis="http://localhost:5000/ciudades"

const ciudadesAll= async ()=>{
    const ciudadesApi= await fetch(ciudadesApis);
    const ciudadesJSON = await ciudadesApi.json();
    console.log(ciudadesJSON);

    paintCiudades(ciudadesJSON);
}


const paintCiudades= (array) => {
    const ciudadesHTML=array.cities.map((ciudad)=>`
    <div class="divPadre">
    <img
    src=${ciudad.escudo}
    alt=${ciudad.name}
    >
    <h1>${ciudad.name}</h1>
    <p><span>Capital</span>: ${ciudad.capital}</p>
    <p><span>Comunidad</span>: ${ciudad.comunidad}</p>

    <p><span>Población</span>: ${ciudad.poblacion}</p>
    <p><span>Extensión</span>: ${ciudad.extension}</p></div>
    `

    ).join("");
    ciudades$$.innerHTML= ciudadesHTML;


}

ciudadesAll();

