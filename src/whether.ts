function getWhether() {
    
    fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019')
        .then(res => res.json())
        .then(datos => {
            let myDatos = {temperatura: datos.temperatura_actual, description: datos.stateSky.description};
            let {temperatura, description} = myDatos
            let whetBox = document.getElementById('whetBox');
            if (whetBox !== null){
                whetBox.innerHTML = `${putIcon(description)}  ${`<h4>|    ${temperatura}°</h4>`}`
                }
            }   
        )
    
   
        
}

getWhether();

function putIcon(str:string) {
    switch(str) {
        case 'Nubes altas':
            return '<img src="./img-whether/cloudy.svg">'
            break;
        case 'Despejado':
            return '<img src="./img-whether/day.svg">'
            break;
        case 'Poco nuboso':
            return '<img src="./img-whether/cloudy-day-2.svg">'
            break;
        case 'Cubierto con lluvia escasa':
            return '<img src="./img-whether/rainy-2.svg">'
            break;
        default:
            return '<img src="./img-whether/cloudy-day-3.svg">'
    }
}