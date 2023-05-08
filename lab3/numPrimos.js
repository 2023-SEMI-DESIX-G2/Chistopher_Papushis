(() =>{
    const App ={
        htmlElements:{
            form4: document.getElementById("primo"),

        },
        init: ()=>{
            App.htmlElements.form4.addEventListener(
                'submit',
                App.handlers.formPrimos
            )},
        methods:{
            puntoPrimos(b){
                let sum = 0
                const isprime = n => {
                    for(let i = 2  ; i < n ; i++)
                        if(n % i === 0) return false
                    return n ;
                }
    
                for (i = 2; i<= b; i++){
                    if(isprime(i)){
                        sum += i;
                        console.log("+"+i);
                    }
                }
                console.log("La Suma de los Numeros primos es de: " +sum);
            
            },

        },
        handlers:{

            formPrimos(event){
                event.preventDefault();
                const n = parseInt(event.target.n.value);
                const suma = App.methods.puntoPrimos(n);
                console.log(n);
                console.log(suma);
            },
        }
    }
    App.init();
    })();