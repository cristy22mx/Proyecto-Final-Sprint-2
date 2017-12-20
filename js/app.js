
/*
 * Funcionalidad de tu producto
 */

//Puedes hacer uso de la base de datos a través de la variable `data`
var filtrarLab = document.getElementById("sede");
filtrarLab.addEventListener("change",clicOpcion);
function clicOpcion() {
	var sedes = filtrarLab.value;
	//console.log(sedes)
	//console.log(filtrarLab.options[filtrarLab.selectedIndex].dataset.generacion);
 	var generation = filtrarLab.options[filtrarLab.selectedIndex].dataset.generacion;
 	// console.log( "Generacion selecionada "+ generation)
 	var totalStudents = data[sedes][generation]["students"].length;
 	var totalStudents2 = data[sedes][generation]["students"];
 	// console.log("Estudiantes selecionadas "+ totalStudents)

 	var totalStudentsRatings = data[sedes][generation]["ratings"].length;
 	// console.log("Ratings selecionados " + totalStudentsRatings)
 	// console.log(totalStudentsGlobal);
 
console.log("Estudiantes totales " + totalStudents)

var totalStudentsShow = document.getElementById("totalShow");
totalStudentsShow.textContent=totalStudents;
var activas = 0; // Total general
var inActivas = 0;
var porcentajeActivos = 0;
var porcentajeInactivos = 0;
var promTotalH = 0;
var promTotalT = 0;


//Para que cuente cuantas alumnas hay en lista

for (var i = 0; i < totalStudents; i++ ) {
var alumnActiva = data[sedes][generation].students[i].active;
//console.log(totalStudents[i].active)
	//studentsNum[i]["sprints"][j]["score"]["hse"]
	if (alumnActiva===true){
		activas++;
	}
	else {
		inActivas++;
		
	}
	}

console.log("Alumnas Activas "+ activas)

var totalActivasShow = document.getElementById("activasShow");
totalActivasShow.textContent=activas;

console.log("Alumnas Inactivas "+ inActivas)
var totalInactivasShow = document.getElementById("inActivasShow");
totalInactivasShow.textContent=inActivas;

porcentajeActivos = ((activas / totalStudents) * 100).toFixed(1);
porcentajeInactivos = ((inActivas / totalStudents) * 100).toFixed(1);

console.log("Porcentaje de Activas " + porcentajeActivos)
var totalActivasShow = document.getElementById("porActivasShow");
totalActivasShow.textContent=porcentajeActivos;

console.log("Porcentaje de Inactivas " + porcentajeInactivos)
var porcentajeInactivasShow = document.getElementById("porInActivasShow");
porcentajeInactivasShow.textContent=porcentajeInactivos;

for (var i = 0; i < totalStudents; i++ ) {
	var totalH = 0;
	var totalT = 0;
	

	if (totalStudents2[i].active === true){
		 for (var j = 0; j < totalStudents2[i]["sprints"].length; j++){

		 	//console.log("tamaño"+ studentsNum[i]["sprints"].length);
		 totalH += totalStudents2[i]["sprints"][j]["score"]["hse"];
		 totalT += totalStudents2[i]["sprints"][j]["score"]["tech"];
		 }
		promTotalH = totalH / totalStudents2[i]["sprints"].length;
		promTotalT = totalT / totalStudents2[i]["sprints"].length;


		 }


}
console.log("Promedio total en HSE " + promTotalH);
var promHseShow = document.getElementById("promHseShow");
promHseShow.textContent=promTotalH;

console.log("Promedio total en TECH " + promTotalT);
var promTechShow = document.getElementById("promTechShow");
promTechShow.textContent=promTotalT;


}