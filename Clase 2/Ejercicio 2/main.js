var color = document.getElementById("color"),
    resultado = document.getElementById("cuadroResultado"),
    i = "0";

    function aleatorio(inferior,superior){
        numPosibilidades = superior - inferior
        aleat = Math.random() * numPosibilidades
        aleat = Math.floor(aleat)
        return parseInt(inferior) + aleat
    }

    function dame_color_aleatorio(){
        hexadecimal = new
        Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
        color_aleatorio = "#"
        posarray = aleatorio(0, hexadecimal.length)
        color_aleatorio += hexadecimal[posarray]
        }
        return color_aleatorio
    }
    
    function cambio(){
        color.addEventListener("click", cambio)
        if (i == 0){
            resultado.classList.add(color_aleatorio);
            i = 1;
        }
        else{
            resultado.classList.remove(color_aleatorio);
            i = 0;
        }

        color.addEventListener("click", cambio, true)
    }