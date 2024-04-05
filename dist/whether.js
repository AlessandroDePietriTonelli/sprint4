"use strict";
function getWhether() {
    fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019')
        .then(res => res.json())
        .then(datos => {
        console.log(datos.stateSky);
        let whetBox = document.getElementById('whetBox');
        if (whetBox !== null) {
            whetBox.innerHTML = `${datos.temperatura_actual} - ${datos.stateSky.description}`;
        }
    });
}
getWhether();
