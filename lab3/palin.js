(() =>{
    const App ={
        htmlElements:{
            form1: document.getElementById("Palin"),



        },
        init: ()=>{
            App.htmlElements.form1.addEventListener(
                'submit',
                App.handlers.formPalindromo
            )},
        methods:{
                puntoPalindromo(t){
                    const num = t.toString();
                    if (num === num.split("").reverse().join("")) {
                        const bin = parseInt(num).toString(2);
                        if (bin === bin.split("").reverse().join("")) {
                            return "El numero " + num + " es un palindromo de doble base mi king.";
                        } else {
                            return "El numero " + num + " es un palindromo en base decimal, más no de base binaria.";
                        }
                    } else {
                        return "eL numero " + num + " no es palindromo mi king , google que significa palindromo.";
                    }         
                },

        },
        handlers:{

            formPalindromo(event){
                event.preventDefault();
                const number = event.target.pali.value;
                const response = App.methods.puntoPalindromo(number);
                console.log(number);
                console.log(response);
            }
        }
    }
    App.init();
    })();