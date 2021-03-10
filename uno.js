
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var puesto;
	var sueldo;
	var continuar
	//A
	var contadorProgramador=0;
	var contadorAnalista=0;
	var contadorQa=0;
	var acumuladorProgramador=0;
	var acumuladorAnalista=0;
	var acumuladorQa=0;
	var promedioSueldoProgramador;
	var promedioSueldoAnalista;
	var promedioSueldoQa;
	//B
	var flagmaxMayorSueldo=true;
	var maxMayorSueldo;
	var sexoMaxMayorsueldo;
	//C
	var flagMayorsueldoFemenino;
	var mayorsueldoFemenino;
	var nombreMayorSueldoFemenino;
	//D
	var contadorProgramadoresNoBinario=0;

	do 
	{
		nombre=prompt("Ingrese nombre");
		while (isNaN(nombre)==false)
		{
			nombre=prompt("ERROR!!!. Ingrese nombre");
		}

		edad=parseInt(prompt("Ingrese edad"));
		while (isNaN(edad)||edad<18||edad>90)
		{
			edad=parseInt(prompt("ERROR!!!. Ingrese edad"));
		}

		sexo=prompt("Ingrese sexo (masculino, femenino, no binario)");
		while (sexo!="masculino"&&sexo!="femenino"&&sexo!="no binario")
		{
			sexo=prompt("ERROR!!!. Ingrese sexo (masculino, femenino, no binario)");
		}

		puesto=prompt("Ingrese puesto(programador, analista, qa)");
		while (puesto!="programador"&&puesto!="analista"&&puesto!="qa")
		{
			puesto=prompt("ERROR!!!. Ingrese puesto(programador, analista, qa)");
		}

		sueldo=parseInt(prompt("Ingrese el sueldo (entre 15000 y 70000)"));
		while (isNaN(sueldo)||sueldo<15000||sueldo>70000)
		{
			sueldo=parseInt(prompt("ERROR!!!. Ingrese el sueldo (entre 15000 y 70000)"));
		}
		//Fin pedir informacion
		//A
		switch(puesto)
		{
			case "programador":
				contadorProgramador++;
				acumuladorProgramador=acumuladorProgramador+sueldo;
				break;
			case "analista":
				contadorAnalista++;
				acumuladorAnalista=acumuladorAnalista+sueldo;
				break;
			case "qa":
				contadorQa++;
				acumuladorQa=acumuladorQa+sueldo;
				break;
		}

		//B
		if (flagmaxMayorSueldo==true)
		{
			maxMayorSueldo=sueldo;
			sexoMaxMayorsueldo=sexo;
			flagmaxMayorSueldo=false;
		}
		else if (maxMayorSueldo<sueldo)
		{
			maxMayorSueldo=sueldo;
			sexoMaxMayorsueldo=sexo;
		}

		//C
		if (sexo=="femenino")
		{
			if(flagMayorsueldoFemenino==true)
			{
				mayorsueldoFemenino=sueldo;
				nombreMayorSueldoFemenino=nombre;
				flagMayorsueldoFemenino=false;
			}
			else if (mayorsueldoFemenino<sueldo)
			{
				mayorsueldoFemenino=sueldo;
				nombreMayorSueldoFemenino=nombre;
			}
		}

		//D
		if (puesto=="programador"&&sexo=="no binario"&&sueldo>20000&&sueldo<55000)
		{
			contadorProgramadoresNoBinario++;
		}

	}while (continuar)
	//A
	promedioSueldoProgramador=acumuladorProgramador/contadorProgramador;
	promedioSueldoAnalista=acumuladorAnalista/contadorAnalista;
	promedioSueldoQa=acumuladorQa/contadorQa;
	document.write("El promedio de sueldo para cada puesto es de: <br>Programador: " + promedioSueldoProgramador);
	document.write("<br>Analista: "+ promedioSueldoAnalista);
	document.write("<br>Qa: "+ promedioSueldoQa);
	//B
	document.write("<br>El sexo que tiene el mayor sueldo es: " + sexoMaxMayorsueldo);
	//C
	if (flagMayorsueldoFemenino==false)
	{
		document.write("<br>El nombre de la empleada con mas sueldo es: "+nombreMayorSueldoFemenino);
	}
	else
	{
		document.write("<br>No se ingresaron empleados femeninos.");
	}
	//D
	if (contadorProgramadoresNoBinario!=0)
	{
		document.write("<br>La cantidad de programadores no binario que cobran sueldos entre 20000 y 55000 es de: "+contadorProgramadoresNoBinario);
	}

}
