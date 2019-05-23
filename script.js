	function Orden(arreglo) {
		//Validando que si el arreglo esta vacia.
			if (arreglo.length < 1) {
				return [];
			}
			//n1= primer numero del arreglo, a partir de ahi se debe separar y empezar a crear 2 arreglos mas.
				var n1=arreglo[0];
				var left=[];
				var rigth=[];
			// Se hace un recorrido del arreglo desde la posicion 1 y si es menor que "n1" se añadira al arreglo
			// que	ira a la izquierda y si es mayor se añadira al arreglo de la derecha.
					for(var i=1; i<arreglo.length; i++){
						if (arreglo[i]<n1) {
							left.push(arreglo[i]);
						} else{
							rigth.push(arreglo[i]);
						}
					}
			// Ahora concatenamos el arreglo de la izquierda seguido al "n1" y el arreglo de la derecha.		
				return [].concat(Orden(left),n1,Orden(rigth));
		}
		//ejemplo de uso
		document.write(Orden([6,4,2,7,8,9,1,10,3,-1,-3,0,11,5,-2,12,13,15]));