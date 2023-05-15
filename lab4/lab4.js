/*function generar() {

    var cantidad = document.getElementById("cantidad").value;
    var cartas = document.getElementById("cartas");
    var fib;
    var fib1 = 0;
    var fib2 = 1;
    var proxFib;
  
    if (cantidad >= 1) {
          cartas.innerHTML = '';
          
          for (var x = 1; x <= cantidad; x++) {
              fib = fib1;
              proxFib = fib1 + fib2;
              fib1 = fib2;
              fib2 = proxFib;
  
              var carta = '<div class="card" id="carta_' + x + '" onclick="eliminar(' + x + ')">' +
                  '<div class="container">' +
                  '<h4 class="valor">' + fib + '</h4>' +
                  '</div>' +
                  '</div>';
              cartas.innerHTML += carta;
          }
    }
    return false;
  }
  
  function eliminar(index) {
  
    if (window.confirm("¿Eliminar esta carta?")) {
          document.getElementById('carta_' + index).outerHTML = '';
    } else {
        return false;
    }
  
  }*/



  (() =>{
    const App ={
        htmlElements:{
            form1: document.getElementById("cantidad"),
            cartas: document.getElementById("cartas"),
           
        },
        init: ()=>{
           App.htmlElements.form1.addEventListener(
                'submit',
                App.handlers.formfibonnaci
            ),
            App.htmlElements.cartas.addEventListener(
                'click',
                App.handlers.eliminar
              )
            
        },
        
        methods:{         
            //verifica si un numero es primo
             generar(num) {

                var cantidad = document.getElementById("cantidad").value;
                var cartas = document.getElementById("cartas");
                var fib;
                var fib1 = 0;
                var fib2 = 1;
                var proxFib;
              
                if (num >= 1) {
                      cartas.innerHTML = '';
                      
                      for (var x = 1; x <= num; x++) {
                          fib = fib1;
                          proxFib = fib1 + fib2;
                          fib1 = fib2;
                          fib2 = proxFib;
              
                 var carta = '<div class="card" id="carta_'+ x +'"'+'onclick="eliminar('+x+')">'+
                  '<div class="container">' +
                  '<h4 class="valor">' + fib + '</h4>' +
                  '</div>' +
                  '</div>';
              cartas.innerHTML += carta;
                      }
                      console.log(proxFib)
                }
                return false;
              },
              
             eliminar (index) {
              
                if (window.confirm("¿Eliminar esta carta?")) {
                      document.getElementById('carta_' + index).outerHTML = '';
                } else {
                    return false;
                }
              
              }
        
        },
        handlers:{
            formfibonnaci(event){
                event.preventDefault();
                const num = parseInt(event.target.num.value);
                App.methods.generar(num)
                console.log(num)
                
            },
            eliminar(event) {
                const index = event.target.id.slice(-1);
                App.methods.eliminar(index)
              },
            
        }
    }
    App.init();
}       
)();