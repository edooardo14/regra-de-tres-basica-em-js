function calcuLar(){
    let valor1 = parseFloat(document.getElementById('valueOne').value)
    let valor2 = parseFloat(document.getElementById('valueTwo').value)
    let valor3 = parseFloat(document.getElementById('valueThree').value)
    
    let x = (valor3 * valor2) / valor1

    if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)){
        window.alert('Valores inválidos :(')
    }else{
        document.getElementById('valorX').textContent = x
    }
}