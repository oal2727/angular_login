export class Auth{
    constructor(){}
    getToken(){
       return localStorage.getItem('token')
    }
    setToken(data){
       return localStorage.setItem('token',data)
    }
    removeToken(){
       return localStorage.removeItem('token')
    }

}