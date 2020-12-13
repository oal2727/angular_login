export class Usuario{
    constructor(
        public nombre:string,
        public apellido:string,
        public email:string,
        public password:string
    ) {
     }
}

export interface User{
    nombre:string,
     apellido:string,
     email:string,
    password:string
}