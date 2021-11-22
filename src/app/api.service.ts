import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  listado = [];
  item : any;
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
        this.item = data;
      },
      error =>{
        console.log("Error al comunicarse con el servidor");
      }
      )
    })
  }


}
