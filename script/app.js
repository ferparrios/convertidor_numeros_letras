
function getData(){
  var ingreso = document.getElementById("ingreso").value
  console.log(ingreso)
  var resultado = ''
  var1 = ''

  for(var i = 0; i < ingreso.length; i++){
    document.form.dniobtenido.value = ingreso[i]
    switch(ingreso[i]){
      case '0': var1 = "A"
      break

      case '1': var1 = "B"
      break

      case '2': var1 = "C"
      break

      case '3': var1 = 'D'
      break

      case '4': var1 = 'E'
      break

      case '5': var1 = 'F'
      break

      case '6': var1 = 'G'
      break

      case '7': var1 = 'H'
      break

      case '8': var1 = 'I'
      break

      case '9': var1 = 'J'
      break

      default: var1 = '\n'
    }
    resultado += var1
    
    
  }

  document.form.dniobtenido.value = resultado
  return resultado
  

}


    
  
    


    

    