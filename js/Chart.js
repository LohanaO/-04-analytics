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

    
      const nums = document.querySelectorAll('.porc');

      // Itera sobre cada elemento y obtiene su porcentaje final
      nums.forEach((num, index) => {
        const progressBar = num.parentElement.querySelector('.progress');
        const targetWidth = parseFloat(progressBar.style.width);
        
        // Define el valor inicial como 0
        let currentValue = 0;
        
        // Define el intervalo para animar el contador
        const interval = setInterval(() => {
            // Incrementa el valor actual en cada paso del intervalo
            currentValue += 0.3; // Incremento de 0.1 para ajustar la velocidad de la animación
            // Limita el valor máximo al valor objetivo
            currentValue = Math.min(currentValue, targetWidth);
            
            // Formatea el valor actual como un número de coma flotante con un decimal
            const formattedValue = currentValue.toFixed(1);
            // Actualiza el texto del span con el valor formateado y el símbolo de porcentaje
            num.textContent = formattedValue.replace('.', ',') + '%'; // Reemplaza el punto decimal con coma
            
            // Si se alcanza el valor final, se detiene el intervalo
            if (currentValue >= targetWidth) {
                clearInterval(interval);
            }
        }, 10); // Ajusta el tiempo del intervalo según la velocidad deseada de la animación
    });