// var resultado = window.confirm("Estas seguro?");
// if (resultado === true) {
//   window.alert("BIENVENIDO A MI SITIO WEB");
// } else {
//   window.alert("Pareces indeciso");
// }

function changeView(type) {
  if (type === "HOME") {
    const path = window.location.pathname;
    if (path === "/index.html") {
      document.body.style.backgroundColor = "red";
      return false;
    } else {
      window.location.href = "index.html";
    }
  } else if (type === "REGISTRO") {
    window.location.href = "registro.html";
  } else {
    window.location.href = "rutas.html";
  }
}
