/*(() => {
    let App = {
      init: () => {
        // Ejecución de eventos
        App.htmlElements.btn.addEventListener('click', App.handlers.agregarInput);
        App.htmlElements.formPromedio.addEventListener('submit', App.handlers.mostrarPromedio);
      },
      
      htmlElements: {
        // Elementos de nuestro HTML
        btn: document.getElementById('agregarInput'),
        formPromedio: document.getElementById('promedio'),
        resultPromedio: document.getElementById('resultadoPromedio'),
        progressBar: document.getElementById('progress-bar'),
      },
      
      handlers: {
        // Manejadores de eventos
        agregarInput(event) {
          event.preventDefault();
          let input = document.createElement('input');
          input.setAttribute('type', 'number');
          input.setAttribute('name', 'nuevoinput');
          input.setAttribute('placeholder', 'Ingrese un número');
          App.htmlElements.formPromedio.appendChild(input);
        },
        
        calcularPromedio(event) {
          event.preventDefault();
          let notas = App.methods.capturarNotas();
          let suma = 0;
          let promedio = 0;
          
          for (let nota of notas) {
            suma += nota;
          }
          
          promedio = (suma / notas.length).toFixed(2);
          return promedio;
        },
        
        mostrarPromedio(event) {
          event.preventDefault();
          let promedio = App.handlers.calcularPromedio(event);
          let resultado = document.createElement('p');
          resultado.setAttribute('id', 'resultado');
          
          // Si PROMEDIO ES IGUAL A NAN NO MUESTRA NADA
          if (isNaN(promedio)) {
            return;
          } else {
            resultado.innerHTML = `El promedio es: ${promedio}`;
          }
          
          // SI EXISTE EL RESULTADO, LO BORRA Y LO VUELVE A CREAR
          if (document.getElementById('resultado')) {
            App.htmlElements.resultPromedio.removeChild(document.getElementById('resultado'));
            App.htmlElements.resultPromedio.appendChild(resultado);
          } else {
            App.htmlElements.resultPromedio.appendChild(resultado);
          }
        }
      },
      
      methods: {
        // Funciones de nuestro programa
        capturarNotas: () => {
          let notas = [];
          let inputs = document.getElementsByName('nuevoinput');
          
          for (let i = 0; i < inputs.length; i++) {
            let nota = inputs[i].value;
            
            if (nota == '' || nota < 0 || isNaN(nota)) {
              // Mostrar mensaje de error en el HTML y luego borrarlo
              let error = document.createElement('p');
              error.setAttribute('id', 'error');
              error.innerHTML = `Ingrese un número válido`;
              App.htmlElements.resultPromedio.appendChild(error);
              
              // Estilo del mensaje de error
              error.style.color = 'red';
              setTimeout(() => {
                App.htmlElements.resultPromedio.removeChild(document.getElementById('error'));
              }, 1000);
              
              return;
            } else {
              notas.push(parseInt(nota));
            }
          }
          
          return notas;
        },
      },
    };
    
    App.init();
  })();*/

  (() => {
    let App = {
      init: () => {
  
        App.htmlElements.btn.addEventListener('click', App.handlers.agregarInput);
        App.htmlElements.formPromedio.addEventListener('submit', App.handlers.mostrarPromedio);
      },
      
      htmlElements: {
        
        btn: document.getElementById('agregarInput'),
        formPromedio: document.getElementById('promedio'),
        resultPromedio: document.getElementById('resultadoPromedio'),
        progressBarFill: document.getElementById('progressBarFill'),
      },
      
      handlers: {
       
        agregarInput(event) {
          event.preventDefault();
          let input = document.createElement('input');
          input.setAttribute('type', 'number');
          input.setAttribute('name', 'nuevoinput');
          input.setAttribute('placeholder', 'Ingrese un número');
          App.htmlElements.formPromedio.appendChild(input);
        },
        
        calcularPromedio(event) {
          event.preventDefault();
          let notas = App.methods.capturarNotas();
          let suma = 0;
          let promedio = 0;
          
          for (let nota of notas) {
            suma += nota;
          }
          
          promedio = (suma / notas.length).toFixed(2);
          App.handlers.updateProgressBar(promedio);
          return promedio;
        },
        
        mostrarPromedio(event) {
          event.preventDefault();
          let promedio = App.handlers.calcularPromedio(event);
          let resultado = document.getElementById('resultado');
          
          if (isNaN(promedio)) {
            resultado.innerHTML = '';
          } else {
            resultado.innerHTML = `El promedio es: ${promedio}`;
          }
        },
        
        updateProgressBar(promedio) {
          let progressBarFill = App.htmlElements.progressBarFill;
          progressBarFill.style.transform = `rotate(${promedio * 3.6}deg)`;
        }
      },
      
      methods: {
        // Funciones de nuestro programa
        capturarNotas: () => {
          let notas = [];
          let inputs = document.getElementsByName('nuevoinput');
          
          for (let i = 0; i < inputs.length; i++) {
            let nota = inputs[i].value;
            
            if (nota == '' || nota < 0 || isNaN(nota)) {
              let error = document.createElement('p');
              error.setAttribute('id', 'error');
              error.innerHTML = `Ingrese un número válido`;
              App.htmlElements.resultPromedio.appendChild(error);
              
            
              error.style.color = 'red';
              setTimeout(() => {
                App.htmlElements.resultPromedio.removeChild(document.getElementById('error'));
              }, 1000);
              
              return;
            } else {
              notas.push(parseInt(nota));
            }
          }
          
          return notas;
        },
      },
    };
    
    App.init();
  })();
  
  
  
  