(() =>{
    const App ={
        htmlElements:{
            form2: document.getElementById("chara"),

        },
        init: ()=>{
            App.htmlElements.form2.addEventListener(
                'submit',
                App.handlers.formCaracteres
            )},
        methods:{
            puntoCaracteres(str) {
                str = str.replace(/\s/g, "");
        final = {} 
        for(let char in str){ 
            if(str[char] in final) { 
                final[str[char]] = final[str[char]] + 1
            } else { 
                final[str[char]] = 1
            }
        }
        tmp = ``
        Object.keys(final).forEach(function(letra){
            tmp += `La cantidad de ${letra} es: ${final[letra]} \n`
        })
        return console.log(tmp)
            },

        },
        handlers:{

            formCaracteres(event){
                event.preventDefault();
                const txt = event.target.caracter.value;
                const replay = App.methods.puntoCaracteres(txt);
                console.log(txt);
                console.log(replay);
            }
        }
    }
    App.init();
    })();