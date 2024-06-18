var propiedadesAlquiler = [
  {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: 'No se permite fumar',
    pet: 'Mascotas permitidas',
  },
];

var propiedadesVenta = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: 'No se permite fumar',
    pet: 'No se permiten mascotas',
  },
];

var sections = {
  venta: document.getElementById('venta'),
  alquiler: document.getElementById('alquiler'),
  detalleVenta: document.getElementById('detalleVenta'),
  detalleAlquiler: document.getElementById('detalleAlquiler'),
};

function initialLoad() {
  const newPropiedadesAlquiler = [
    {
      nombre: 'Apartamento luminoso con vista al mar',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: 3,
      banos: 3,
      costo: 2500,
      smoke: true,
      pet: true,
    },
    {
      nombre: 'Condominio moderno en zona residencial',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      banos: 2,
      costo: 2200,
      smoke: false,
      pet: false,
    },
    {
      nombre: 'Casa familiar en zona residencial',
      src: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      descripcion: 'Sherman, 42 wallaby way, Sydney. ¡Lo recordé!',
      ubicacion: 'P Sherman calle Wallaby 42 Sidney',
      habitaciones: 3,
      banos: 2,
      costo: 2500,
      smoke: false,
      pet: true,
    },
    {
      nombre: 'Casa familiar en zona residencial',
      src: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      descripcion: 'Sherman, 42 wallaby way, Sydney. ¡Lo recordé!',
      ubicacion: 'P Sherman calle Wallaby 42 Sidney',
      habitaciones: 3,
      banos: 2,
      costo: 2500,
      smoke: false,
      pet: true,
    },
  ];

  const newPropiedadesVenta = [
    {
      nombre: 'Apartamento acogedor en la montaña',
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 2,
      banos: 1,
      costo: 1200,
      smoke: 'Permitido fumar',
      pet: 'Mascotas permitidas',
    },
    {
      nombre: 'Penthouse de lujo con terraza panorámica',
      src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: 3,
      banos: 3,
      costo: 4500,
      smoke: 'No se permite fumar',
      pet: 'Mascotas permitidas',
    },
    {
      nombre: 'Casa familiar en zona residencial',
      src: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      descripcion: 'Sherman, 42 wallaby way, Sydney. ¡Lo recordé!',
      ubicacion: 'P Sherman calle Wallaby 42 Sidney',
      habitaciones: 3,
      banos: 2,
      costo: 2500,
      smoke: false,
      pet: true,
    },
    {
      nombre: 'Casa familiar en zona residencial',
      src: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      descripcion: 'Sherman, 42 wallaby way, Sydney. ¡Lo recordé!',
      ubicacion: 'P Sherman calle Wallaby 42 Sidney',
      habitaciones: 3,
      banos: 2,
      costo: 2500,
      smoke: false,
      pet: true,
    },
  ];

  // Se agregan 4 propiedades a cada arreglo
  for (const propiedad of newPropiedadesAlquiler) {
    propiedadesAlquiler.push(propiedad);
  }

  for (const propiedad of newPropiedadesVenta) {
    propiedadesVenta.push(propiedad);
  }
}

function renderSections() {
  if (sections.venta && sections.alquiler) {
    // Mostramos 3 propiedades en venta y 3 propiedades en alquiler
    renderPropiedades('venta', propiedadesVenta.slice(0, 3));
    renderPropiedades('alquiler', propiedadesAlquiler.slice(0, 3));
  }

  if (sections.detalleVenta) {
    renderPropiedades('detalleVenta', propiedadesVenta);
  }

  if (sections.detalleAlquiler) {
    renderPropiedades('detalleAlquiler', propiedadesAlquiler);
  }
}

function renderPropiedades(section, propiedades) {
  const container = sections[section].querySelector('.row');
  container.innerHTML = '';

  for (const propiedad of propiedades) {
    const { nombre, src, descripcion, ubicacion, habitaciones, banos, costo, smoke, pet } = propiedad;
    container.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img
          src=${src}
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${nombre}
          </h5>
          <p class="card-text">
            ${descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> 
            ${ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${banos} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${costo}</p>
          ${
            smoke
              ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
              : `<p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>`
          }
          ${
            pet
              ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
              : `<p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>`
          }
        </div>
      </div>
    </div>
  `;
  }
}

initialLoad();
renderSections();
