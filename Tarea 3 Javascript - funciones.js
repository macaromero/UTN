const trabajadores = [
    {
        nombre: "Ramiro",
        apellido: "Pérez",
        edad: 34,
        email: "soyrama@gmail.com",
        dni: 24654987,
        puesto: "Empleado"
    },

    {
        nombre: "Mariana",
        apellido: "Tolana",
        edad: 47,
        email: "mari@gmail.com",
        dni: 25123654,
        puesto: "Empleado"
    },
    
    {
        nombre: "Rocío",
        apellido: "Ramírez",
        edad: 54,
        email: "rochi@gmail.com",
        dni: 20789520,
        puesto: "Gerente"
    },

    {
        nombre: "Carlos",
        apellido: "Salmerón",
        edad: 41,
        email: "carli@gmail.com",
        dni: 30245368,
        puesto: "Gerente"
    },

    {
        nombre: "Luciana",
        apellido: "Rodríguez",
        edad: 22,
        email: "luli@gmail.com",
        dni: 40874963,
        puesto: "Empleado"
    },

    {
        nombre: "Ricardo",
        apellido: "Almira",
        edad: 60,
        email: "rocky@gmail.com",
        dni: 9147852,
        puesto: "Empleado"
    },

    {
        nombre: "Laura",
        apellido: "Estabile",
        edad: 41,
        email: "lau@gmail.com",
        dni: 29753951,
        puesto: "Empleado"
    },

    {
        nombre: "Valeria",
        apellido: "Salma",
        edad: 34,
        email: "vale@gmail.com",
        dni: 24458624,
        puesto: "Gerente"
    },

    {
        nombre: "Hernán",
        apellido: "Gómez",
        edad: 44,
        email: "mari@gmail.com",
        dni: 33321789,
        puesto: "Empleado"
    }
    
];

const empleadosMayores = (trabajadores, edad, puesto) => {
    const mayores = trabajadores.filter ((trabajador) => trabajador.edad > edad && trabajador.puesto == puesto);
    console.log (mayores);
};


const gerentes = (trabajadores, puesto) => {
    const g = trabajadores.filter ((trabajador) => trabajador.puesto == puesto);
    console.log (g)
}



empleadosMayores(trabajadores, 40, "Empleado");
gerentes (trabajadores, "Gerente");

