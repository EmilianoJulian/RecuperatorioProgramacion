function mostrar()
{
	var continuar;
	var nombreCliente;
	var cantidadLamparas;
	var marcaLampara;
	var precioTotalLamparas;
	var descuentoFelipe;//Si supera las 5 lamparas 10%descuento
	var descuentoArgentina;//Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%.
	var descuentoIlluminatis;
	var contadorCantidadDeVentas;
	//A
	var recaudoDeLaEmpresa;
	var acumuladorPrecioTotalLampara;
	//B
	var acumuladorPerdidaEmpresa;
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

		precioTotalLamparas=parseInt(prompt("Ingrese el precio de la lampara"));
		while (isNaN(precioTotalLamparas))
		{
			precioTotalLamparas=parseInt(prompt("ERROR!!!. Ingrese el precio de la lampara"));	
		}
		//Fin pedir datos

		contadorCantidadDeVentas++;

		//A
		acumuladorPrecioTotalLampara=acumuladorPrecioTotalLampara+precioTotalLamparas;
		recaudoDeLaEmpresa=acumuladorPrecioTotalLampara;
		//B
		acumuladorPerdidaEmpresa=

		

		continuar=confirm("Desea reingresar datos?")
	}while(continuar);
	

	

	//A
	document.write("El recaudo del la empresa fue "+recaudoDeLaEmpresa+" en "+ contadorCantidadDeVentas+" compras");
	//B

	



}
