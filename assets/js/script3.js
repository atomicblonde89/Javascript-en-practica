var suma = document.getElementById("btn-sumar");
suma.addEventListener("click",sumatoria);

function sumatoria () {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let resultadosuma = parseInt(valor1+valor2);

    if (isNaN (resultadosuma)){
        document.querySelector(".resultado").innerHTML = `Ingresar valores válidos`;
    } else {
        document.querySelector(".resultado").innerHTML = `${resultadosuma}`
    }
};

var resta = document.getElementById("btn-restar");
resta.addEventListener("click", sustraccion)

function sustraccion () {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let resultadoresta = parseInt(valor1 - valor2);

    if (isNaN (resultadoresta)){
        document.getElementById(".resultado").innerHTML = `Ingresar valor válidos`;
    } else {
        if (resultadoresta < 0) {
            resultadoresta = 0;
        }
        document.querySelector(".resultado").innerHTML = `${resultadoresta}`
    }
};
