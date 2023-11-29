const datos = [
  {
    id:0,
    img: crearImagen("/img/ensalada.jpg"),
    nombre: "Primero",
    descripcion: "Ensalada con ingredientes variados...",
    tipo: "Ensalada",
    precio: 10000,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: "4",
  },
  {
    id:1,
    img: crearImagen("/img/ensalada.jpg"),
    nombre: "Segundo",
    descripcion: "Ensalada con ingredientes variados...",
    tipo: "Ensalada",
    precio: 10000,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: "4",
  },

  {
    id:2,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "Tacos al Pastor",
    descripcion: "Tacos con carne al pastor",
    tipo: "Tacos",
    origen: "México",
    precio: 15000,
    disponibilidad: false,
    promocion: "No",
    cantidadPorcion: "Individual",
    puntuacion: 5,
  },

  {
    id:3,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },

  {
    id:4,
    img: crearImagen("/img/ensalada.jpg"),
    nombre: "Ensalada César",
    descripcion: "Ensalada con ingredientes variados...",
    tipo: "Ensalada",
    precio: 10000,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:5,
    img: crearImagen("/img/ensalada.jpg"),
    nombre: "primero",
    descripcion: "Ensalada con ingredientes variados...",
    tipo: "Ensalada",
    precio: 10000,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:6,
    img: crearImagen("/img/ensalada.jpg"),
    nombre: "Ensalada César",
    descripcion: "Ensalada con ingredientes variados...",
    tipo: "Ensalada",
    precio: 10000,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:7,
    img: crearImagen("/img/ensalada.jpg"),
    nombre: "Ensalada César",
    descripcion: "Ensalada con ingredientes variados...",
    tipo: "Ensalada",
    precio: 10000,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:8,
    img: crearImagen("/img/ensalada.jpg"),
    nombre: "Ensalada César",
    descripcion: "Ensalada con ingredientes variados...",
    tipo: "Ensalada",
    precio: 10000,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:9,
    img: crearImagen("/img/ensalada.jpg"),
    nombre: "ultimo",
    descripcion: "Ensalada con ingredientes variados...",
    tipo: "Ensalada",
    precio: 10000,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:10,
    img: crearImagen("/img/ensalada.jpg"),
    nombre: "Ensalada César",
    descripcion: "Ensalada con ingredientes variados...",
    tipo: "Ensalada",
    precio: 10000,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:11,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:12,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:13,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:14,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:15,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:16,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:17,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:18,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:19,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:19,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:20,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:21,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:22,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:23,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:24,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:25,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:26,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:27,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:28,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:29,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:30,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:31,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:32,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:33,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:34,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:35,
    img: crearImagen("/img/tacos.jpg"),
    nombre: "11",
    descripcion: "11",
    tipo: "11",
    precio: 11,
    disponibilidad: true,
    origen: "No especificado",
    promocion: "2x1",
    cantidadPorcion: "Individual",
    puntuacion: 4,
  },

  {
    id:37,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
  {
    id:38,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
  {
    id:39,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
  {
    id:40,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
  {
    id:41,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
  {
    id:42,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
  {
    id:43,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
  {
    id:44,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
  {
    id:45,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
  {
    id:46,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
  {
    id:47,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
  {
    id:48,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Cariñoso",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
  {
    id:49,
    img: crearImagen("/img/vino.jpg"),
    nombre: "Ultimo",
    descripcion: "Vino con notas de uva",
    tipo: "Vino",
    origen: "España",
    precio: 120000,
    disponibilidad: true,
    promocion: "Acompañante incluido",
    cantidadPorcion: "10 copas",
    puntuacion: 5,
  },
];

let data = [];
let datosFiltrados = [];
let paginaActual = 1;

const elementosPorPagina = 10;

const llenarTabla = function () {
  const indiceInicio = (paginaActual - 1) * elementosPorPagina;
  const indiceFin = paginaActual * 10;
  data = []
  if(datosFiltrados.length>0){
    for (let i = indiceInicio; i < indiceFin; i++) {
      if(datosFiltrados[i]){
        data[i] = datosFiltrados[i];
      }
    }
  } else{
    for (let i = indiceInicio; i < indiceFin; i++) {
      data[i] = datos[i];
    }
  }

  // Accede a las filas de la tabla y llena los datos
  const filasTabla = document.querySelectorAll("table tr");
  // Renderiza los datos


  console.log('Data final');
  console.log(data);
  var obj;
    for (let i = 0; i < 10; i++) {
      const fila = filasTabla[i + 1]; // Omite la fila de encabezado
      // Limpia la celda de imagen antes de agregar la nueva imagen
      const celdaImagen = fila && fila.children && fila.children[1]; // Accede a la celda de imagen en la fila actual
      // Mientras haya algún hijo (elemento secundario) en la celda de imagen
      while (celdaImagen.firstChild) {
        // Elimina el primer hijo de la celda de imagen
        celdaImagen.removeChild(celdaImagen.firstChild);
      }

      if (data[indiceInicio + i]) {
        obj = data[indiceInicio + i];
        fila.children[0].innerHTML = `platillo ${indiceInicio + i + 1}`;
        celdaImagen.appendChild(obj.img);
        fila.children[2].innerHTML = obj.nombre;
        fila.children[3].innerHTML = obj.descripcion;
        fila.children[4].innerHTML = obj.tipo;
        fila.children[5].innerHTML = obj.precio;
      } else {
        fila.children[0].innerHTML = '';
        fila.children[2].innerHTML = '';;
        fila.children[3].innerHTML = '';;
        fila.children[4].innerHTML = '';;
        fila.children[5].innerHTML = '';;
        fila.children[6].innerHTML = '';;
      }
      
      
    }
  actualizarBotonesPaginacion();
};

function cambiarPagina(direccion) {
  paginaActual = paginaActual + direccion;

  if (paginaActual < 1) {
    paginaActual = 1;
  }
  var ultimaPagina = 0;
  if (datosFiltrados.length > 0) {
    ultimaPagina = Math.ceil(datosFiltrados.length / elementosPorPagina);
  } else {
    ultimaPagina = Math.ceil(datos.length / elementosPorPagina);
  }

  if (paginaActual > ultimaPagina) {
    paginaActual = ultimaPagina;
  }

  document.getElementById("pag").innerHTML = "Pagina " + paginaActual;
  llenarTabla();
}

function actualizarBotonesPaginacion() {
  var totalPaginas = 0;
  if (datosFiltrados.length > 0) {
    totalPaginas = Math.ceil(datosFiltrados.length / elementosPorPagina);
  } else {
    totalPaginas = Math.ceil(datos.length / elementosPorPagina);
  }
  const btnAnterior = document.getElementById("anterior");
  const btnSiguiente = document.getElementById("siguiente");
  if (paginaActual === 1) {
    btnAnterior.disabled;
    btnAnterior.style.backgroundColor = "red";
  } else {
    btnAnterior.style.backgroundColor = null;
  }
  if (paginaActual === totalPaginas) {
    btnSiguiente.disabled;
    btnSiguiente.style.backgroundColor = "red";
  } else {
    btnSiguiente.style.backgroundColor = null;
  }
}

document.getElementById("anterior").addEventListener("click", function () {
  cambiarPagina(-1);
});

document.getElementById("siguiente").addEventListener("click", function () {
  cambiarPagina(1);
});

function crearImagen(src) {
  const imagen = new Image();
  imagen.src = src;
  return imagen;
}

const limpiar = function () {
  datosFiltrados = [];
  paginaActual = 1;
  document.getElementById("pag").innerHTML = "Pagina " + paginaActual;
  llenarTabla();
};

const filtrar = function () {
  const filtroNombre = document
    .getElementById("filtroNombre")
    .value.toLowerCase();
  const filtroTipo = document.getElementById("filtroTipo").value.toLowerCase();

  // Filtrar datos según los criterios de búsqueda
  datosFiltrados = datos.filter(
    (item) =>
      item.nombre.toLowerCase().includes(filtroNombre) &&
      item.tipo.toLowerCase().includes(filtroTipo),
  );
  console.log(datosFiltrados);
  // Reiniciar la paginación y mostrar los datos filtrados en la primera página
  paginaActual = 1;
  document.getElementById("pag").innerHTML = "Pagina " + paginaActual;
  
  llenarTabla();
};

document.getElementById("filtrar").addEventListener("click", function () {
  filtrar();
});

llenarTabla();

function info(id) {
  // Abre el modal
  const modal = document.getElementById("myModal");
  
  const span = document.getElementsByClassName("span")[0];

  // Llenar el contenido del modal con la información del platillo y campos editables
  modalDetalles.innerHTML = `
  <img src="${datos.imagen}" alt="Imagen de referencia">
  <p>Nombre: <input type="text" id="Nombre" value="${datos.nombre}"></p>
  <p>Descripcion: <input type="text" id="Descripcion" value="${datos.descripcion}"></p>
  <p>Tipo: <input type="text" id="Tipo" value="${datos.tipo}"></p>
  <p>Precio: <input type="text" id="Precio" value="${datos.precio}"></p>
  <p>Origen: <input type="number" id="Origen" value="${datos.origen}"></p>
  <p>Promocion: <input type="number" id="Promocion" value="${datos.promocion}"></p>
  <p>Cant. Porciones: <input type="number" id="Cant" value="${datos.cantidadPorcion}"></p>
  <p>Puntuacion: <input type="number" id="Puntuacion" value="${datos.puntuacion}"></p>
  <button onclick="guardarCambios(${datos.id})">Guardar cambios</button>
`;
  modal.style.display = "block";
}

function cerrarModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

