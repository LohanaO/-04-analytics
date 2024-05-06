## RETO N° 4 100 DAYS OF PROYECTS 

### 04-Analytics

<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1714100055958/4fe1e0e8-8b1a-4307-b5e9-6a26585a175e.png?auto=compress,format&format=webp" alt="Texto alternativo" width="400"/>

### Tecnologias
[![HTML](https://img.shields.io/badge/HTML5-orange?style=flat&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS](https://img.shields.io/badge/CSS3-blue?style=flat&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=flat&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Ver demo

[Demo](https://lohanao.github.io/-04-analytics/)

## Desafio
### Los usuarios deberían poder:

1-Ver el diseño óptimo en pantallas grandes(1200px).

2-Ver porcentajes(tooltip) al pasar el mouse sobre el gráfico circular.

3-Ver un color de sombra(box-shadow) sobre el gráfico circular.

4-Bonus: Agrega efecto contador a los números de las barritas.n.

### Importante:

Agrega icono favicon al proyecto.

Agrega una URL fácil de recordar (ej. 04-analytics).

Agrega un título al proyecto (ej. Analytics - Frontend Club).

Bonus: Agrega un archivo readme.md al proyecto.

## Solución
### Implementación con HTML, CSS y JavaScript
En este proyecto, utilicé HTML, CSS y JavaScript para crear una tarjeta que muestra información de análisis, incluyendo fuentes de tráfico y sus respectivos porcentajes.

### Estructura HTML
El contenido de la tarjeta de análisis está estructurado utilizando elementos HTML semánticos para mejorar la accesibilidad y el SEO. A continuación se muestra un resumen de la estructura HTML utilizada:
---
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="img/toppng.com-estadistica-grafica-490x490.png" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="css/style.css" />
    <title>Analytics - Frontend Club</title>
  </head>
  <body>
    <main class="container">
      <div class="card">
        <h1>Traffic source types</h1>
        <p>Views · Last 28 days</p>
        <div class="content">
          <div class="chart-section">
            <div class="chart">
                <canvas id="doughnut" width="400" height="400"></canvas>
                <span class="text">Traffic sources</span>
                
             
            </div>
          </div>
          <div class="progress-section">
            <div class="progress-bar">
              <p>Channel pages</p>
              <div class="progress-content ">
                <div class="progress bar1" style="width: 37.5%"></div>
                <span class="porc inicio">0%</span>
               
              </div>
            </div>
            <div class="progress-bar">
              <p>Direct or unknown</p>
              <div class="progress-content ">
                <div id="bar2" class="progress bar2" style="width: 33.6%"></div>
                <span class="porc inicio">0%</span>
               
              </div>
            </div>
            <div class="progress-bar">
              <p>Search</p>
              <div class="progress-content">
                <div class="progress  bar3" style="width: 11%"></div>
                <span class=" porc inicio">0%</span>
               
              </div>
            </div>
            <div class="progress-bar">
              <p>External</p>
              <div class="progress-content ">
                <div class="progress bar4" style="width: 6%"></div>
                <span class=" porc inicio">0%</span>
                
              </div>
            </div>
            <a class="see" target="_blank" href="https://github.com/LohanaO">See more</a>
          </div>
        </div>
       
      </div>
    </main>
  </body>
  <script src="
https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js
"></script>
  <script src="js/Chart.js"></script>
</html>

```


Para lograr el diseño deseado de la tarjeta de producto, sigue estos pasos:

### Definir estilos básicos para el contenedor y la tarjeta:
#### El contenedor debe tener un estilo para centrar su contenido verticalmente y horizontalmente. Puedes lograr esto usando display: flex, justify-content: center y align-items: center.
#### La tarjeta debe tener un fondo blanco y algún relleno para separar su contenido del borde. Puedes aplicar esto usando background-color: white y padding.
### Para la grafica circular utilice Chart.js
### Agregar efectos de sombra a la tarjeta en un color claro:
```
.card {
  padding: 60px;
  width: 966px;
  height: 504px;
  background-color: #f6f9ff;
  border-radius: 50px;
  box-shadow: 15px 20px #e5edff;
 
  
}
```
#### Para agregarle sombra al grafico utilice filter, tambien position relative para poder centrar el titulo al centro y el z-index en 100 para que los tootips se muestren por encima del texto.
```
.chart {
  position: relative;
  width: 250px; 
  height: 250px; 
  z-index: 100;
  filter: drop-shadow(8px 8px 2px #cfdcff);
}

```
#### Para mostrar las barras de progreso utilice los siguientes estilos:

```
.progress-bar {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  gap: 10px;
}

.progress-bar p {
  margin-right: 10px;
  width: 80%;
}

.progress-content {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5px;
  justify-content: flex-end;
}

.progress-content span {
  font-size: 18px;
  width: 40px;
}

.progress {
  height: 6px; 
  background-color: #6792ff;
  border-radius: 10px;
}

.bar1{
    background-color: #6792FF;
    width: 180px !important;
}

.bar2{
    background-color: #4473EA;
    width: 151px !important;
}

.bar3{
    background-color: #1A52E1;
    width: 93px !important;  
}

.bar4{
    background-color: #96B3FF;
    width: 35px !important;
}

```
## Javascript 
Utilice Javascript para  añadir interactividad a la tarjeta de análisis, como mostrar tooltips y animar las barras de progreso con contador de porcentaje.
```
const nums = document.querySelectorAll(".porc");

nums.forEach((num, index) => {
  const progressBar = num.parentElement.querySelector(".progress");
  const targetWidth = parseFloat(progressBar.style.width);

  let currentValue = 0;

  const interval = setInterval(() => {
    currentValue += 0.3;

    currentValue = Math.min(currentValue, targetWidth);

    const formattedValue = currentValue.toFixed(1);

    num.textContent = formattedValue.replace(".", ",") + "%";

    if (currentValue >= targetWidth) {
      clearInterval(interval);
    }
  }, 10);
});
```
Utilice la libreria Chart.js para crear el grafico circular y mostrar los tooltips.

```
const ctx = document.getElementById("doughnut");

    const data = {
        labels: ["Channel pages", "Direct or unknow", "Search", "External"],
        datasets: [
          {
            
            data: [37.5, 33.6, 11.0, 6.0],
            backgroundColor: ["#6792FF", "#4473EA", "#1A52E1", "#96B3FF"],
            borderColor: '#ffffff',
            borderWidth: 2 ,
            hoverOffset: 10,
            spacing: 5,
          },
          
        ],
      };
    
      const config = {
        type: "doughnut",
        data: data,
        options: {
          animation: {
            animateRotate: true,
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          tooltip: {
            position: "nearest",
          },
          cutout: "80%",
        },
      }

      new Chart(ctx, config)

```

## Conclusión
En conclusión, la implementación de este proyecto de tarjeta de análisis me permitió practicar y demostrar mis habilidades en HTML, CSS y, especialmente, JavaScript junto con la biblioteca Chart.js. 

La utilización de JavaScript fue fundamental para agregar interactividad a la tarjeta de análisis, permitiendo mostrar tooltips al pasar el mouse sobre el gráfico circular y animar las barras de progreso para que aumenten desde cero hasta el porcentaje deseado.

Además, la integración de Chart.js simplificó enormemente la creación y visualización del gráfico circular de fuentes de tráfico, lo que facilitó la presentación de datos complejos de una manera clara y atractiva.

Espero que este README proporcione una buena comprensión del proyecto y de mi capacidad para trabajar con estas tecnologías. Si tienes alguna pregunta o comentario, no dudes en contactarme por correo electrónico: [lohaorellano13@gmail.com](lohaorellano13@gmail.com).

¡Gracias por revisar mi proyecto!
