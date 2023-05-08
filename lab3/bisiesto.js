(() =>{
    const App ={
        htmlElements:{
            form3: document.getElementById("ano"),

        },
        init: ()=>{
            App.htmlElements.form3.addEventListener(
                'submit',
                App.handlers.formBisisesto
            )},
        methods:{
            puntoAnoBi(a){
                if (((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0)){
                respuesta =console.log("El Año es Bisiesto Papushis")
                }
                else{
                respuesta = console.log("El Año no es Bisiesto, que sad , intenta de nuevo o google que significa bisiesto")
                
                }
                return respuesta
              },
            
        },
        handlers:{

            formBisisesto(event){
                event.preventDefault();
                const bisi = parseInt(event.target.bisi.value);
                const solution = App.methods.puntoAnoBi(bisi);
                console.log(bisi);
            
            }
        }
    }
    App.init();
    })();