const contenedor = document.querySelector('#contenedor');

const propiedades_alquiler = [
    {
        nombre: 'Arriendo Casa Grande Con Piscina Y Quincho',
        src: './assets/img/arriendo_2.jpg',
        descripcion: 'Hermosa casa de 3 pisos en unos de los mejores Barrios. Cómoda y con excelente conectividad. cercana autopista',
        ubicacion: 'Avenida Miraflores 900 - 1200, Penaflor, Peñaflor, Chile, Malloco, Peñaflor, RM',
        habitaciones: 4,
        baños: 2,
        costo: '20 UF',
        smoke: true,
        pets: true
    },

    {
        nombre: 'Departamento - Proyecto Fam Heumul',
        src: './assets/img/arriendo_1.jpg',
        descripcion: 'Edificio 100% dedicado al arriendo con gastos comunes fijos. Cuenta con administración y mantención profesional.',
        ubicacion: 'Centenario 1329, Santiago, Chile, Franklin - Biobío, Santiago, RM',
        habitaciones: 1,
        baño: 1,
        costo: '7 UF',
        smoke: false,
        pets: true
    },

    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: '16 UF',
        smoke: false,
        pets: true
    },

    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: '13 UF',
        smoke: true,
        pets: false
    },

    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: '15 UF',
        smoke: false,
        pets: false
    }
]

const list_alquiler = () =>{

    let list = '';

    for(const cards of propiedades_alquiler){

        const {nombre, src, descripcion, ubicacion, habitaciones, baños,costo, smoke, pets} = cards;


        list += `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title"> ${nombre} </h5>
                <p class="card-text"> ${descripcion} </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${ubicacion} </p>
                <p>
                  <i class="fas fa-bed"></i> ${habitaciones} |
                  <i class="fas fa-bath"></i> ${baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${costo} </p>

                <p class="${smoke ? "text-success":"text-danger"}">
                  <i class="${smoke?"fas fa-smoking" : "fas fa-smoking-ban"}"></i> ${smoke ? "Permitido fumar" : "No se permite fumar"} 
                  </p>
                <p class="${pets ? "text-success" : "text-danger"}">
                  <i class="${pets ? "fas fa-paw" : "fa-solid fa-ban"}"></i> ${pets ? "Mascotas permitidas" : "No se permiten mascotas"}
                </p>
              </div>
            </div>
          </div>`;
    }

    contenedor.innerHTML = list;

}

list_alquiler();