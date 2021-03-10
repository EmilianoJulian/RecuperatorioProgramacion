function mostrar()
{
    function mostrar()
{
    var nombre;
    var carrera;
    var sexo;
    var cantidadMaterias;
    var notaPromedio;
    var edad;
    //A
    var maximoNota;
    var nombreMaximoNota;
    var flagMaximoNota=true;
    //B
    var flagAlumnaMasJoven=true;
    var minimoEdadFemenino;
    var nombreMinimoEdadFemenino;
    //C
    var contadorQuimica=0;
    var contadorFisica=0;
    var contadorSistemas=0;
    var porcentajeEstudiantesQuimica;
    var porcentajeEstudiantesFisica;
    var porcentajeEstudiantesSistemas;
    //D
    var edadAlumnoMaxiMaterias;
    var nombreAlumnoMaxiMaterias;
    var alumnoMaxiMaterias;
    var flagAlumnoMaxiMaterias=true;

    
    for (var i=1;i<2;i++)
    {
        nombre=prompt("Ingrese nombre");
		while (isNaN(nombre)==false)
		{
			nombre=prompt("ERROR!!!. Ingrese nombre");
		}

        carrera=prompt("Ingrese carrera. (quimica, fisica, sistemas)");
        while (isNaN(nombre)==false||carrera!="quimica"&&carrera!="fisica"&&carrera!="sistemas")
        {
            carrera=prompt("ERROR!!!. Ingrese carrera. (quimica, fisica, sistemas)"); 
        }

        sexo=prompt("Ingrese sexo (masculino, femenino, no binario)");
		while (sexo!="masculino"&&sexo!="femenino"&&sexo!="no binario")
		{
			sexo=prompt("ERROR!!!. Ingrese sexo (masculino, femenino, no binario)");
		}

        cantidadMaterias=parseInt(prompt("Ingrese la cantidad de materias. (Entre 1 y 5)"));
        while (isNaN(cantidadMaterias)||cantidadMaterias<1||cantidadMaterias>5)
        {
            cantidadMaterias=parseInt(prompt("ERROR!!!. Ingrese la cantidad de materias. (Entre 1 y 5)"));
        }

        notaPromedio=parseInt(prompt("Infrese la nota promedio. (Entre 0 y 10)"));
        while (isNaN(notaPromedio)||notaPromedio<0||notaPromedio>10)
        {
            notaPromedio=parseInt(prompt("ERROR!!!. Infrese la nota promedio. (Entre 0 y 10)"));
        }
        
        edad=parseInt(prompt("Ingrese edad"));
		while (isNaN(edad)||edad<18||edad>90)
		{
			edad=parseInt(prompt("ERROR!!!. Ingrese edad"));
		}
        //Fin pedir datos
        //A
       if (carrera=="fisica")
       {
           if (i==1)
           {
                maximoNota=nota;
                nombreMaximoNota=nombre;
                flagMaximoNota=false;
           }
           else if (maximoNota<nota)
           {
                maximoNota=nota;
                nombreMaximoNota=nombre;
                flagMaximoNota=false;  
           }
       } 
       //B
       if (sexo=="femenino")
       {
           if (i==1)
           {
               minimoEdadFemenino=edad;
               nombreMinimoEdadFemenino=nombre;
               flagAlumnaMasJoven=false;
           }
           else if (minimoEdadFemenino>edad)
           {
                minimoEdadFemenino=edad;
                nombreMinimoEdadFemenino=nombre;  
           }
       }
       //C
       switch (carrera)
       {
            case "quimica":
                contadorQuimica++;
                break;
            case "fisica":
                contadorFisica++;
                break;
            case "sistemas":
                contadorSistemas++;
                break;
       }

       //D
       if (carrera!="quimica")
       {
           if (i==1)
           {
            edadAlumnoMaxiMaterias=edad;
            nombreAlumnoMaxiMaterias=nombre;
            alumnoMaxiMaterias=cantidadMaterias;
            flagAlumnoMaxiMaterias=false
           }
           else if (alumnoMaxiMaterias<cantidadMaterias)
           {    
            edadAlumnoMaxiMaterias=edad;
            nombreAlumnoMaxiMaterias=nombre;
            alumnoMaxiMaterias=cantidadMaterias;
           }
       }
    }//Termina el for
    //A
    if (flagMaximoNota==false)
    {
        document.write("El nombre del mejor promedio de los alumnos que estudian fisica es "+ nombreMaximoNota);
    }
    else
    {
        document.write("<br>No se ingresaron alumnos a la carrera fisica");
    }
    //B
    if (flagAlumnaMasJoven==false)
    {
        document.write("<br>el nombre de la alumna mas joven es: "+nombreMinimoEdadFemenino );
    }
    else
    {
        document.write("<br>No se ingresaron alumnos femeninos")
    }
    //C
    porcentajeEstudiantesQuimica=contadorQuimica*100/i;
    porcentajeEstudiantesFisica=contadorFisica*100/i;
    porcentajeEstudiantesSistemas=contadorSistemas*100/i;

    document.write("<br>El porcentaje de estudiantes para cada carrera es de :");
    document.write("<br>Quimica: "+porcentajeEstudiantesQuimica);
    document.write("<br>Fisica: "+porcentajeEstudiantesFisica);
    document.write("<br>Sistemas: "+porcentajeEstudiantesSistemas);

    //D
    if (flagAlumnoMaxiMaterias==false)
    {
        document.write("<br>La edad del estudiante que cursa mas materias exceptuando la carrera quimica es de "+edadAlumnoMaxiMaterias+" y el nombre es "+nombreAlumnoMaxiMaterias);
    }
    else
    {
        document.write("<br>No se ingresaron alumnos en otra carrera que no sea quimica.")
    }
}

}
