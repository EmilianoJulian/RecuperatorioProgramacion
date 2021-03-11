function mostrar()
{
	var continuar;
	var nombreCliente;
	var cantidadLamparas;
	var marcaLampara;
	var precioLampara;
	var descuentoFelipe;//Si supera las 5 lamparas 10%descuento
	var descuentoArgentina;//Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%.
	var descuentoIlluminatis;

	do
	{
		nombreCliente=prompt("Ingrese el nombre del cliente");
		while (isNaN(nombre==false))
		{
			nombreCliente=prompt("ERROR!!!. Ingrese el nombre del cliente");
		}

		cantidadLamparas=parseInt(prompt("Ingrese la cantidad de lamparas"));
		while (isNaN(cantidadLamparas))
		{
			cantidadLamparas=parseInt(prompt("ERROR!!!. Ingrese la cantidad de lamparas"));
		}

		marcaLampara=prompt("ingrese marca de la lampara. (felipeLamparas - argentinaLuz - illuminatis)");
		while (isNaN(marcaLampara)==false||marcaLampara!="felipeLamparas"&&marcaLampara!="argentinaLuz"&&marcaLampara!="illuminatis")
		{
			marcaLampara=parseInt("ERROR!!!. ingrese marca de la lampara. (felipeLamparas - argentinaLuz - illuminatis)");
		}

		precioLampara=parseInt(prompt("Ingrese el precio de la lampara"));
		while (isNaN(precioLampara))
		{
			precioLampara=parseInt(prompt("ERROR!!!. Ingrese el precio de la lampara"));	
		}
	
		continuar=confirm("Desea reingresar datos?")
	}while(continuar);
	//Fin pedir datos

	switch (marca)
	{
		case "felipeLamparas":
			if (cantidadLamparas>5)
			{
				descuentoFelipe=0.90;
			}
			break;
		case "argentinaLuz":
			if (cantidadLamparas>2)
			{
			descuentoArgentina=0.95;				
			}
			break;
		case "illuminatis":
			descuentoIlluminatis=1;
			break;
	}

	//A



}
