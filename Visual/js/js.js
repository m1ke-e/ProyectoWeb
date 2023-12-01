const data = [
    {
      correo: "michael00@gmail.com",
      contra: "Michael00",
    },
    {
      correo: "michael01@gmail.com",
      contra: "Michael01",
    },
    {
      correo: "michael02@gmail.com",
      contra: "Michael02",
    },
  ];
  const limpiar = function () {
    document.getElementById("correo").value = "";
    document.getElementById("contra").value = "";
    document.getElementById("error").innerHTML = "";
  };
  
  const continuar = function () {
    return new Promise((resolve) => {
      const correo = document.getElementById("correo").value;
      const contra = document.getElementById("contra").value;
      const result = document.getElementById("error");
      const result2 = document.getElementById("cargando");
      const validEmail =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; /*Expresiones regulares*/
      let contraValida = false;
      let correoValido = false;
  
      if (correo == "" || contra == "") {
        result.innerHTML = "Ambos campos son obligatorios";
        return;
      }
  
      if (!validEmail.test(correo)) {
        result.innerHTML = "Correo electrónico inválido";
        return;
      }
  
      if (contra.length < 8) {
        result.innerHTML = "Contraseña incorrecta.\nContraseña demasiado corta";
        contraValida = false;
        return;
      }
  
      let contador = 0;
      for (let i = 0; i < contra.length; i++) {
        if (!isNaN(parseInt(contra[i]))) {
          contador++;
        }
      }
  
      if (contador < 2) {
        contraValida = false;
        result.innerHTML =
          "Contraseña incorrecta.\nDebe contener minimo dos numeros";
        return;
      }
  
      const mayus = /[A-Z]/g;
      if (!mayus.test(contra)) {
        contraValida = false;
        result.innerHTML =
          "Contraseña incorrecta\nDebe contener al menos una letra mayuscula";
        return;
      }
  
      const minus = /[a-z]/g;
      if (!minus.test(contra)) {
        contraValida = false;
        result.innerHTML =
          "Contraseña incorrecta\nDebe contener menos una letra minuscula";
        return;
      }
  
      let pos = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].correo === correo) {
          correoValido = true;
          pos = i;
          break;
        }
      }
  
      if (data[pos].contra === contra) {
        contraValida = true;
      }
  
      if (!contraValida) {
        result.innerHTML =
          "Cumple todas las condiciones pero la contraseña es incorrecta";
        return;
      }
  
      if (!correoValido) {
        result.innerHTML =
          "Cumple todas las condiciones pero el correo no existe";
        return;
      }
  
      if (contraValida == true && correoValido == true) {
        result.innerHTML = "";
        result2.innerHTML = "Cargando...";
        console.log("Usuario y contraseña correctos");
        setTimeout(() => {
          resolve();
          location.href = "/paginas/listas.html";
        }, 2000);
      }
    });
  };
  
  document.getElementById("continuar").addEventListener("click", function () {
    continuar().then(() => {
      console.log("Redirigido con éxito");
    });
  });
  