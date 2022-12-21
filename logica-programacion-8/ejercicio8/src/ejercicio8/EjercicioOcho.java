/* INSTRUCCIONES:
    
   1.- Solicitar 10 números y almacenarlos en un arreglo;
   2.- Pasar los que sean PRIMOS a las primeras posiciones, desplazando todos los demás al final (sin perder ninguno);
   3.- Mostrar el arreglo original, con el índice (posición) seguido del valor;
   4.- Mostrar el arreglo modificado, con el índice (posición) seguido del valor (sin importar el orden, mientras se muestren los PRIMOS al inicio);
   5.- Evaluar con: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10; otros.
      
    */

package ejercicio8;

import java.util.*;

public class EjercicioOcho {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner s = new Scanner(System.in);
		
		//Solicitar valores
		System.out.println("Hola. Necesito 10 números diferentes. A continuación, coloca el primer número: ");
		int numUno = s.nextInt();
		
		System.out.println("Coloca el segundo número: ");
		int numDos = s.nextInt();
		
		System.out.println("Coloca el tercer número: ");
		int numTres = s.nextInt();
		
		System.out.println("Coloca el cuarto número: ");
		int numCuatro = s.nextInt();
		
		System.out.println("Coloca el quinto número: ");
		int numCinco = s.nextInt();
		
		System.out.println("Coloca el sexto número: ");
		int numSeis = s.nextInt();
		
		System.out.println("Coloca el séptimo número: ");
		int numSiete = s.nextInt();
		
		System.out.println("Coloca el octavo número: ");
		int numOcho = s.nextInt();
		
		System.out.println("Coloca el noveno número: ");
		int numNueve = s.nextInt();
		
		System.out.println("Coloca el décimo número: ");
		int numDiez = s.nextInt();
		
		int[] arregloOrig = {numUno, numDos, numTres, numCuatro, numCinco, numSeis, numSiete, numOcho, numNueve, numDiez};
	
		System.out.println(arregloOrig); //Lo imprime raro
	}

}
