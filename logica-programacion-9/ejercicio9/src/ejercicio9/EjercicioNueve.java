/* INSTRUCCIONES:
   1.- Crear un DICCIONARIO Español-Inglés, que contenga al menos 20 palabras (con traducción);
   2.- Utilizar HashMap para almacenar los pares de palabras;
   3.- Solicitar una palabra en español;
   4.- Imprimir la palabra en inglés;
   5.- Si no se encuentra, mandar mensaje "La palabra no se encuentra en este diccionario";
   6.- Evaluar con: gato; otras.
 */

package ejercicio9;

import java.util.*;

public class EjercicioNueve {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//Crear diccionario
		HashMap <String, Object> diccio = new HashMap <String, Object> ();
		
		diccio.put("gato", "cat");
		diccio.put("perro", "dog");
		diccio.put("pato", "duck");
		diccio.put("español", "Spanish");
		diccio.put("inglés", "English");
		diccio.put("diccionario", "dictionary");
		diccio.put("celular", "cellphone");
		diccio.put("computadora", "computer");
		diccio.put("papel", "paper");
		diccio.put("cargador", "charger");
		diccio.put("comida", "food");
		diccio.put("hola", "hi");
		diccio.put("adiós", "bye");
		diccio.put("cuchara", "spoon");
		diccio.put("agua", "water");
		diccio.put("dinero", "money");
		diccio.put("trabajo", "job");
		diccio.put("coche", "car");
		diccio.put("bicicleta", "bike");
		diccio.put("avión", "airplane");
		
		 //Solicitar palabra
		Scanner s = new Scanner(System.in);
		
		System.out.println("Hola. Tengo un diccionario español-inglés que probar. Coloca una palabra en ESPAÑOL: ");		
		String word = s.nextLine();
		// if (String key está dentro del HashMap, imprimir el Object value correspondiente)
		//else (System.print.ln("Lo siento. La palabra no se encuentra en este diccionario."))
		
		
		
	}

}
