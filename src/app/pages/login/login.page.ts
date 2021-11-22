import { Component, OnInit } from '@angular/core';
import { 
  FormGroup, 
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  listado = [];
  userNames = [];

  constructor(public fb:FormBuilder,
    public alertController: AlertController,
    public router: Router,
    private api:ApiService,
    private toast:ToastController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    });

   }

  ngOnInit() {
    localStorage.clear();
    this.api.getUsers();
    this.listado = this.api.listado;
    console.log(this.listado);
  }

  async ingresar(){
    var f = this.formularioLogin.value;
    var user = f.nombre;
    var pass = f.password;
  
    for(let item of this.listado){
      if(user == item.username && pass == 1234){
        localStorage.setItem('ingresado','true');
        this.router.navigate(['inicio',item.id]);
      }
    }
    /*
    if (!localStorage) {
      const toast = await this.toast.create({
        message : 'Datos incorrectos',
        duration: 1400,
        color   : "danger",
        position: "middle"
      });
      toast.present();
    }
*/


/*
    let dato = null;
    this.listado.forEach((v,k) => {
      if(v[0].username == user){
        dato = v;
        console.log(dato);
      }else{
        console.log('Error');
      }
    })
*/
    /*
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log("Ingresao");
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('inicio');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    */
  }

}
