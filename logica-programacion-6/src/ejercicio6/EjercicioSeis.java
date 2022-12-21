package ejercicio6;

import java.util.*;

public class EjercicioSeis {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 String texto = "";
		 
	      if (args.length == 1) {
		  texto = args[0];
	      }
	      
	      if (texto.equals("")) {
	          Scanner s = new Scanner(System.in);
	          System.out.print("Introduzca una palabra o texto y pulse ENTER: ");
	          texto = s.nextLine();
	      }
	      if (!texto.isEmpty()) {
	          System.out.print("El texto \"" + texto + "\" al REVÉS es: " + InvertirTexto(texto));
	      } else {
	          System.out.println("No ha introducido ninguna palabra o texto. Vuelva a intentar.");
	      }
	    }
	 
	    //Se requiere de un método para pasar como parámetro el texto y lo devuelve invertido
	    public static String InvertirTexto(String texto) {
	        String textoInvertido = "";
	        for (int x = texto.length() - 1; x >= 0; x--)
	        	textoInvertido = textoInvertido + texto.charAt(x);
	        return textoInvertido;
	    }
	}
	
