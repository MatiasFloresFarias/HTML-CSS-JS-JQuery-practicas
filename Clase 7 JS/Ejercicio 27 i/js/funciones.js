function validar() {
  //Validar Nombre
  if (document.Registro.Nombre.value.length == 0) {
    alert("Error, El espacio NOMBRE esta en blanco.");
  }
  if (
    document.Registro.Nombre.value.length <= 5 ||
    document.Registro.Nombre.value.length >= 30
  ) {
    alert("Error, El espacio Nombre tiene menos o mas caracteres permitidos.");
  }
  //  Validar Apellido
  if (document.Registro.Apellido.value.length == 0) {
    alert("Error, El espacio APELLIDO esta en blanco.");
  }
  if (document.Registro.Nombre.value.length >= 50) {
    alert("Error, El espacio APELLIDO tiene mas de 50 caracteres.");
  }
  //  Validar Telefono
  if (document.Registro.Telefono.value.length == 0) {
    alert("Error, El espacio TELEFONO esta en blanco.");
  }
  if (
    document.Registro.Telefono.value.length <= 7 ||
    document.Registro.Telefono.value.length >= 12
  ) {
    alert(
      "Error, El espacio TELEFONO tiene menos o mas caracteres permitidos."
    );
  }
  //  Validar Direccion
  if (document.Registro.Apellido.value.length == 0) {
    alert("Error, El espacio DIRECCION esta en blanco.");
  }
  if (document.Registro.Nombre.value.length >= 100) {
    alert("Error, El espacio DIRECCION tiene mas de 100 caracteres.");
  }
  // Validar Ciudad
  if (document.Registro.Ciudad.value.length == 0) {
    alert("Error, El espacio CIUDAD esta en blanco.");
  }
  if (document.Registro.Ciudad.value.length >= 30) {
    alert("Error, El espacio CIUDAD tiene mas de 30 caracteres.");
  }

  //   Validar Estudios
  if (document.Registro.Estudio.value == 1) {
    alert("Error, Seleccione un nivel de estudio");
  }
  //   Validar Region
  if (document.Registro.Region.value == 1) {
    alert("Error, Seleccione una region");
  }

  //   Registrar Datos
  var MostrarNombre = document.Registro.Nombre.value;
  var MostrarApellido = document.Registro.Apellido.value;
  var MostrarFecha = document.Registro.FechaDeNacimiento.value;
  var MostrarTelefono = document.Registro.Telefono.value;
  var NivelEducacional = document.Registro.Estudio.value;
  var MostrarDireccion = document.Registro.Direccion.value;
  var MostrarCiudad = document.Registro.Ciudad.value;
  var MostrarRegion = document.Registro.Region.value;

  document.write("<link rel='stylesheet' href='css/style.css'>");
  document.write("<center>");
  document.write("<h1>Alumno Registrado</h1>");
  document.write("<fieldset class='fieldset'>");
  document.write("<legend class='legend'>");
  document.write("<span>Alumno</span>");
  document.write("</legend>");
  document.write(
    "<form action='' method='post' name='Registro' enctype='multipart/form-data'>"
  );
  document.write("<table>");
  document.write("<tr>");
  document.write(
    "<td><label>Nombre:</td><td>" + MostrarNombre + "</label></td>"
  );
  document.write("</tr>");
  document.write("<tr>");
  document.write(
    "<td><label>Apellido:</td><td>" + MostrarApellido + "</label></td>"
  );
  document.write("</tr>");
  document.write("<tr>");
  document.write(
    "<td><label>Fecha de nacimiento: </td><td>" + MostrarFecha + "</label></td>"
  );
  document.write("</tr>");
  document.write("<tr>");
  document.write(
    "<td><label>Telefono: </td><td>" + MostrarTelefono + "</label></td>"
  );
  document.write("</tr>");
  document.write("<tr>");
  document.write(
    "<td><label>Nivel Educacion: </td><td>" + NivelEducacional + "</label></td>"
  );
  document.write("</tr>");
  document.write("<tr>");
  document.write(
    "<td><label>Direccion: </td><td>" + MostrarDireccion + "</label></td>"
  );
  document.write("</tr>");
  document.write("<tr>");
  document.write(
    "<td><label>Ciudad: </td><td>" + MostrarCiudad + "</label></td>"
  );
  document.write("</tr>");
  document.write("<tr>");
  document.write(
    "<td><label>Region: </td><td>" + MostrarRegion + "</label></td>"
  );
  document.write("</tr>");
  document.write("<tr><td colspan='2'>");
  document.write("<a href='Ejercicio27.html' class='volver'>Volver</a>");
  document.write("</td></tr>");
  document.write("</table>");
  document.write("</center>");
  document.write("</form>");
  document.write("</fieldset>");
}
