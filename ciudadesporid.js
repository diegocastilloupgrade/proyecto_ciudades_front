const ciudadesIDApi = 'http://localhost:8000/ciudades';
const selectorComunidades$$=document.querySelector(".selectorComunidades");

console.log(selectorComunidades$$);
const getCiudadesPorId = async () => {
  let ciudadidData = await fetch(ciudadesIDApi);
  let ciudadIdDataJSON = await ciudadidData.json();


    paintCiudadesID(ciudadIdDataJSON);
}

const paintCiudadesID= (array) => {
    const ciudadesIdHTML=array.cities.map((ciudad)=>`
    <option value="value${ciudad.name}" selected>${ciudad.name}</option>
    `

    ).join("");
console.log(ciudadesIdHTML);


    selectorComunidades$$.innerHTML= ciudadesIdHTML;

}

getCiudadesPorId();