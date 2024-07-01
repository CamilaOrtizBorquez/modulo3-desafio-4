const contenedor = document.querySelector('#contenedor');


const propiedades_venta = [
    {
        nombre: 'Casa en Residencial, Villas de Entreverde',
        src: './assets/img/venta_1.jpg',
        descripcion: 'Rodeado de áreas verdes para disfrutar de un entorno natural con excelente ubicación, Cercano a comercio, Cesfam y con excelente conectividad al centro de Talagante.',
        ubicacion: '9460 Francisco Station Apt. 176',
        habitaciones: 4,
        baños: 2,
        costo: '3.000 UF',
        smoke: false,
        pets: false
    },

    {
        nombre: 'Condominio de 6 casas, tipo Townhouse, de 3 pisos',
        src: './assets/img/venta_2.jpg',
        descripcion: 'Un barrio consolidado con variedad de comercios, servicios, centros deportivos y establecimientos educacionales, cercano a importantes autopistas',
        ubicacion: '7435 Boehm Lake Apt. 489',
        habitaciones: 3,
        baños: 3,
        costo: '4.300 UF',
        smoke: true,
        pets: true
    },

    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este lugar acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: '1.200 UF',
        smoke: false,
        pets: true
    },

    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 1,
        costo: '4.500 UF',
        smoke: true,
        pets: true
    },

    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 2,
        costo: '5.000 UF',
        smoke: false,
        pets: true
    }
]


const list_ventas = () =>{

    let list = '';

    for(const cards of propiedades_venta){

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

list_ventas();