// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  // return Object.entries(objeto)  Orea forma más compleja

  /*
  var arreglo = [];
  for (var keys in objeto) {
    arreglo.push([keys, objeto[keys]]);
  }
  return arreglo
  */


  var arreglo = [];
  for (var clave in objeto) {
    arreglo.push([clave, objeto[clave]]);
  }
  return arreglo
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {}
  for (let i = 0; i < string.length; i++) {
    if (!obj[string[i]]){ //si no existe en el obj el string determinado con la posición i
      obj[string[i]]=0;   // que lo agregue y que su valor sea cero
    };                    // Omitir el else para que sigua haciendo, pasa en conjunto
    obj[string[i]] +=1    //si existe que le sume 1, sin ELSE
  }
  return obj;

  /*
  var obj = {}
  for (let i = 0; i < string.length; i++) {
    if (!obj[string[i]]){ //si no existe en el obj el string determinado con la posición i
      obj[string[i]]=1;   // que lo agregue y que su valor sea 1
    } else{                
    obj[string[i]] +=1    //si existe que le sume 1
  }
  return obj;

  */
  
  /*var objeto = {};
  for (let i = 0; i < string.length; i++) {
    if (!objeto.hasOwnProperty(string[i])) { //Si el objeto no tiene esa propiedad (letra) con sus valores
      objeto[string[i]] = 0
    }
    objeto[string[i]] += 1      // objeto[string[i]]++ otra forma
  }
  return objeto;
  */
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  /*
  var minusculas = "";
  var mayusculas = "";
  for (var i = 0; i < s.length; i++) 
    if (s[i]=== s[i].toLowerCase()) {
     minusculas = minusculas + s[i];    
    }else{      
    mayusculas = mayusculas + s[i];
  }
  return mayusculas + minusculas

  */

  var minusculas = "";
  var mayusculas = "";
  for (var i = 0; i < s.length; i++)
    if (s[i] === s[i].toUpperCase()) {
      mayusculas = mayusculas + s[i];
    } else {
      minusculas = minusculas + s[i]
    }
  return mayusculas + minusculas  // return mayusculasconcat(minusculas); Otra forma
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

    
  var invertida = str.split(" ").map(function (elemento) {  //split separa la cadena donde tenga espacios separado por espacios y lo convierte en arreglo, map para hacer en cada elemento del arreglo lo mismo, que es todo lo de abajo
    return elemento.split("").reverse().join("")  //split  separa caracter por caracter con "" y lo convierte en arreglo, cuando la separemos aplicamos reverse al string para darlo vuelta, luego con join convierte el arreglo en string separandolo con " "
  })                                              
  return invertida.join(" ")                      // join convierte a un string separdo por " ",lo que estaba en la matriz hguardada en invertida
  
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var string = numero.toString();
  var stringInvertida = "";
  stringInvertida = string.split("").reverse().join("");
  if (string === stringInvertida) {
    return "Es capicua";

  } else {
    return "No es capicua"
  }

}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var filtro = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      filtro = filtro + cadena[i]
    }
  }
  return filtro


}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  /* Mas complejo
  var recorrido = true;
  while (recorrido){
    recorrido = false;
    for (var i = 0; i < arr.length -1; i++) {
      if(arr[i].length > arr[i+1].length {
        var palabralarga=arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = palabralarga;
        recorrido=true;
      }
    }
  }
  return arr


  */

  for (let i = 0; i < arr.length -1; i++) {  //Hasta el penultimo por el i+1, para que no se vuelva undefined
     while (arr[i].length > arr[i+1].length){ //Si va if,una vez se cumple la condición, deja de ejecutarlo. while hará que el ciclo se repita pero con i-- para que no sea loop infinito
      var aux=arr[i];  //Guarda en el auxiliar la palabra más larga
      arr[i] = arr[i+1];   //la palabra mas corta pasa al la izquierda
      arr[i+1] = aux;      //la palabra más larga, guardada en aux, pasa a la derecha
      i--;        // decremento, por cada iteración disminuye el valor de i para que no sea loop infinito
      }
    
  }
  return arr
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i]===arreglo2[j]) {
        arreglo.push(arreglo1[i])
        
      }          
    } 
    
  }
  return arreglo
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

