/* INSTRUCCIONES:
   1.- Solicitar un día de la semana = de LUNES a VIERNES;
   2.- Solicitar un hora = hora + minutos;
   3.- Calcular cuantos minutos faltan para el fin de semana = empezando VIERNES a las 1500hr;
   4.- Mostrar el resultado en consola;
   5.- Ser capaz de verificar datos... en caso contrario, mandar mensaje de error y volver a solicitarlos;
   6.- Evaluar con: LUNES, 1430 hrs; otros.
   */

package ejercicio7;

import java.util.*;

public class EjercicioSiete {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int hora;
		int minutos;

		
		Scanner s = new Scanner (System.in);
		
		//Solicitar día
		System.out.println("¡Hola! Coloca un día de la semana laboral (de LUNES a VIERNES)...");
		String dia = s.nextLine().toUpperCase();
		//Verificar si lo que se solicita está dentro del rango solicitado
		if(dia != "LUNES" && dia != "MARTES" && dia != "MIERCOLES" && dia != "MIÉRCOLES" && dia != "JUEVES" && dia != "VIERNES"){
			System.out.println(dia + " no es válido. Por favor, coloca un día exclusivamente de la semana laboral (de lunes a viernes). Vuelve a intentar: ");
			//PEDIR NUEVAMENTE EL VALOR PERO NO DEJA USAR "String dia = s.nextLine().toUpperCase();"
			
			
		}else if(dia == "LUNES" && dia == "MARTES" && dia == "MIERCOLES" && dia == "MIÉRCOLES" && dia == "JUEVES" && dia == "VIERNES") {
			//Solicitar hora
			System.out.println("A continuación, coloca la hora en formato 24 horas. NOTA: contempla que al ser 24 horas se hacen las 0 horas. Es decir, de 0 a 23. ");
			hora = s.nextInt();
			//Verificar si lo que se solicita está dentro del rango solicitado
			if(hora < 0 || hora > 23) {
				System.out.println(hora +" no entra de los valores solicitados. Por favor, coloca hora entre 0 y 23. Vuelve a intentar: ");
				//PEDIR NUEVAMENTE EL VALOR
				
				
			}else if(hora >= 0 || hora <= 23) {
				//Solicitar minutos
				System.out.println("Ahora, coloca los minutos (de 0 a 59).");
				minutos = s.nextInt();
				//Verificar si lo que se solicita está dentro del rango solicitado
				if(minutos < 0 || minutos > 59) {
					System.out.println(minutos + " no entra de los valores solicitados. Por favor, coloca hora entre 0 y 23. Vuelve a intentar: ");
					//PEDIR NUEVAMENTE EL VALOR 
					
					
				}else if(minutos >= 0 || minutos <= 59) {
					//Mostrar resultado, es decir, la diferencia en minutos entre ambos días y hora seleccionada (horas y minutos)
					int minutosDelDia;
					int resultadoDiferencia;
					
					if (dia == "VIERNES" && hora >= 15) {
						System.out.println("¡Qué chido! Tu fin de semana ya comenzó.");
					} else {
						if (dia == "LUNES") {
							hora = 23 - hora;
							minutos = (59 - minutos) + 1; //Se tiene que añadir uno por el minuto 60 para llegar a 1 hora más
							minutosDelDia = (hora * 60) + minutos;
							resultadoDiferencia = minutosDelDia + ((24*60)*3) + (15*60);
						} else if(dia == "MARTES") {
							hora = 23 - hora;
							minutos = (59 - minutos) + 1;
							minutosDelDia = (hora * 60) + minutos;
							resultadoDiferencia = minutosDelDia + ((24*60)*2) + (15*60);
						} else if(dia == "MIERCOLES" || dia == "MIÉRCOLES") {
							hora = 23 - hora;
							minutos = (59 - minutos) + 1;
							minutosDelDia = (hora * 60) + minutos;
							resultadoDiferencia = minutosDelDia + (24*60) + (15*60);
						} else if(dia == "jueves") {
							hora = 23 - hora;
							minutos = (59 - minutos) + 1;
							minutosDelDia = (hora * 60) + minutos;
							resultadoDiferencia = minutosDelDia + (15*60);
						} else {
							hora = 14 - hora;
							minutos = (59 - minutos) + 1;
							minutosDelDia = (hora * 60) + minutos;
							resultadoDiferencia = minutosDelDia;
						}
						System.out.println("¡Seamos pacientes! Solamente faltan " + resultadoDiferencia + " minutos para que comience el próximo fin de semana.");
					}
					
				}
				
			}

		}
	}

}
