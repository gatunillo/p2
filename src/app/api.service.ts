import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  listado = [];
  datos : any;
  private urlApi = 'https://jsonplaceholder.typicode.com/'; //url base de la API

  constructor(private httpClient:HttpClient) { }

  //método para obtener a todos los usuarios de la API
  getUsers(){
    //definir url para solicitud
    let url = this.urlApi + 'users';
    this.listado = []; //limpiar propiedad

    return new Promise((resolve, reject) =>{
      this.httpClient.get(url).subscribe((data : []) => {
        resolve(data);
        data.forEach(item => {this.listado.push(item);})
      },
      error =>{
        console.log("Error al comunicarse con el servidor");
      }
      )
    })
  }

  //método para obtener solo un usuario
  getUser(id:String){
    let url = this.urlApi + 'users/' + id;
    return new Promise((resolve, reject) =>{
      this.httpClient.get(url).subscribe((data : any) => {
        resolve(data);
        this.datos = data;
      },
      error =>{
        console.log("Error al comunicarse con el servidor");
      }
      )
    })
  }

  //metodo para obtener todos los posts de un usuario
  getPosts(id:String){
    let url = this.urlApi + 'users/' + id + '/posts';
    this.listado = []; //limpiar propiedad

    return new Promise((resolve, reject) =>{
      this.httpClient.get(url).subscribe((data : []) => {
        resolve(data);
        data.forEach(item => {this.listado.push(item);})
      },
      error =>{
        console.log("Error al comunicarse con el servidor");
      }
      )
    })
  }

  //método para obtener todos los comentarios de un post
  getComments(id:String){
    let url = this.urlApi + 'posts/' + id + '/comments';
    this.listado = []; //limpiar propiedad

    return new Promise((resolve, reject) =>{
      this.httpClient.get(url).subscribe((data : []) => {
        resolve(data);
        data.forEach(item => {this.listado.push(item);})
      },
      error =>{
        console.log("Error al comunicarse con el servidor");
      }
      )
    })
  }

  //método para obtener un post
  getPost(id:String){
    let url = this.urlApi + 'posts/' + id;
    return new Promise((resolve, reject) =>{
      this.httpClient.get(url).subscribe((data : any) => {
        resolve(data);
        this.datos = data;
      },
      error =>{
        console.log("Error al comunicarse con el servidor");
      }
      )
    })
  }


}
