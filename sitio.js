//variables que toman valor a partir de las funciones//



medidaf =  0;
areaint =  0;
pulgada1 = 0;
precio_int = 0;
precio_con = undefined;


function cond(){
    let precio_con = document.getElementById("precio").value;
    precio_int = parseInt(precio_con);
    console.log(precio_int);
    
    return precio_int;
    
}  

function keyup() 
{    let area = document.getElementById("inp").value;  
     areaint = parseFloat(area)
     console.log(areaint);
     return areaint;
    } 

//let para obtener el arreglo de los radiobutons de PULGADAS//
let opciones = document.getElementsByName("pb");

//funcion para hacer tranformar los radiobuton a la medidas de pulgadas a //MUTLIPLICAR//
function pulgadas(){
    let opciones = document.getElementsByName("pb");
    for (let i = 0; i < opciones.length; i++) {
    
    if (opciones[0].checked){
        let pulgada = 13.68;
        pulgada1 = parseFloat(pulgada);
        return pulgada1;

    }
    else if (opciones[1].checked){
        let pulgada = 9.84;
        pulgada1 = parseFloat(pulgada);
        return pulgada1;
    } 
    else if (opciones[2].checked){
        let pulgada = 7.87;
        return pulgada1 = parseFloat(pulgada);
    }
    else if (opciones[3].checked){
        let pulgada = 5.56;
        pulgada1 = parseFloat(pulgada);
        return pulgada1;
    }               

    return pulgada1; 
} } 

//funcion para pasar los radiosbuttons a longitud a //DIVIDIR//
  function medidas(){
    //variable para tener el arreglo de los radiobuttons de MEDIDAS//
    let arreglo = document.getElementsByName("medi");
    for (let i = 0; i < arreglo.length; i++) {
    
    if (arreglo[0].checked){
        let medida = 2.45;
        medidaf = parseFloat(medida);
        return medidaf;
    }
    else if (arreglo[1].checked){
        let medida = 2.75;
        medidaf = parseFloat(medida);
        return medidaf;
    } 
    else if (arreglo[2].checked){
        let medida = 3;
        medidaf = parseFloat(medida);
        return medidaf;
    }
    else if (arreglo[3].checked){
        let medida = 3.30;
        medidaf = parseFloat(medida);
        return medidaf;
    }
    else if (arreglo[4].checked){
        let medida = 3.65;
        medidaf = parseFloat(medida);
        return medidaf;
    }
    else if (arreglo[5].checked){
        let medida = 4.00;
        medidaf = parseFloat(medida);
        return medidaf;
    }
    else if (arreglo[6].checked){
        let medida = 4.20;
        medidaf = parseFloat(medida);
        return medidaf;
    }
    else if (arreglo[7].checked){
        let medida = 4.50;
        medidaf = parseFloat(medida);
        return medidaf;
    }
 //si no se llega a tener la medida en los radiobuttons de los //medidas especificadas// este input lo controla
    else if (arreglo[8].checked){
        
        }}}


//funcion para conseguir medidas especiales mediante el input//
function keyup2(){
    let medidaespe = document.getElementById('MR').value;
    medidaf = parseFloat(medidaespe);
    return medidaf;
} 

function calcular(){
    
    //cuenta para sacar resultado de tablas necesarias para m2//
    
    if (areaint && medidaf && pulgada1 && precio_int > 0){
    
    
    resultado = areaint * pulgada1 / medidaf;
    resultado_entero = Math.round(resultado);
    
      console.log(resultado);
      let tabla  = document.getElementById("tabl");

      //lugar para insertar celdas en la tabla//
      let nueva_hilera = tabla.insertRow(-1);
      let nueva_celda  = nueva_hilera.insertCell(0);
      let nueva_celda2 = nueva_hilera.insertCell(1);
      let nueva_celda3 = nueva_hilera.insertCell(2);
      let nueva_celda4 = nueva_hilera.insertCell(3);
      let nueva_celda5 = nueva_hilera.insertCell(4);
      let nueva_celda6 = nueva_hilera.insertCell(5);
      let nueva_celda7 = nueva_hilera.insertCell(6);
      let nueva_celda8 = nueva_hilera.insertCell(7);
      
      
//creacion de boton_borrar y fijar su funcion//
      let boton_borrar = document.createElement("button");
      nueva_celda8.appendChild(boton_borrar)
      boton_borrar.textContent = "X";
      boton_borrar.style.color = 'black';
      boton_borrar.setAttribute("class","btn btn-default");
      
      nueva_celda8.appendChild(boton_borrar)
      boton_borrar.addEventListener("click",(event) => {
      event.target.parentNode.parentNode.remove()

      })

      //condicional para definir precio de cada tabla //
      if(precio_int >= 1){
          precio_float = parseFloat(precio_int);
          nueva_celda5.textContent = "$" + precio_float;
          let precio_total = precio_float * resultado_entero;
          nueva_celda6.textContent = "$" + precio_total; 
     }

      else{
        alert("Ingresar un numero valido en precio unitario ")
      }


      //substraer nueva hilera//
      nueva_hilera.setAttribute("id","nueva");
      nueva_hilera_var = document.getElementById("nueva");

      //agregar un tag o id a las celdas//
      nueva_celda.setAttribute("id", "cantidad_tablas");
      nueva_celda2.setAttribute("id", "tipo_madera");
      nueva_celda3.setAttribute("id", "pulga");
      nueva_celda4.setAttribute("id", "longitud");
      nueva_celda5.setAttribute("id", "precios");
      nueva_celda6.setAttribute("id", "ptotal");
      

      n = new Date();
      y = n.getFullYear();
      m = n.getMonth() + 1;
      d = n.getDate();
      tiempo = d + '/' + m + '/' + y;
      

      nueva_celda7.textContent = tiempo;
      
      //agregar contenido obtenido//
      nueva_celda.textContent = resultado_entero;
      nueva_celda4.textContent = medidaf;
      
      //conidicional para deifinir las pulgadas de la tabla//
      if (pulgada1 = 13.68){
        let p_tranf = "1X3";
        nueva_celda3.textContent = p_tranf;
        
        }
        else if (pulgada1 = 9.84){
        let p_tranf = "1X4";
        nueva_celda3.textContent = p_tranf;
        
        } 
        else if (pulgada1 = 7.87){
        let p_tranf = "1X5";
        nueva_celda3.textContent = p_tranf;
        
        }
        else if (pulgada1 = 5.56){
        let p_tranf = "1X6";
        nueva_celda3.textContent = p_tranf;
        
        }           
      
      //ciclo para controlar los tipos de maderas//
      let maderas = document.getElementsByName("maderas");
      for (let i = 0; i < maderas.length; i++) {
    
      if (maderas[0].checked){
        let pinos = "Salina";
        nueva_celda2.textContent = pinos;
        return pinos;
        }
        else if (maderas[1].checked){
        let pinos = "Pino";
        nueva_celda2.textContent = pinos;
        return pinos;
        } 
        else if (maderas[2].checked){
        let pinos = "Impregnado";
        nueva_celda2.textContent = pinos;
        return pinos;
        }}
    
    
    }
    else {
        alert("ERROR COMPLETAR LOS CAMPOS");
    }

}   
      
