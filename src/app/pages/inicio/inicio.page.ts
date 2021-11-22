import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  listado = [];
  id = "";
  user = "";

  constructor(private router:Router,
    private api:ApiService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getPost();
    this.getUser();
  }

  async getPost(){
    this.activatedRoute.paramMap.subscribe(async p => {
      this.id = p.get('id');
      //console.log(this.id);
    });
    await this.api.getPosts(this.id);
    this.listado = this.api.listado;
    //console.log(this.listado);
  }

  async getUser(){
    this.activatedRoute.paramMap.subscribe(async p => {
      this.id = p.get('id');
      //console.log(this.id);
    });
    await this.api.getUser(this.id);
    this.user = this.api.datos;
  }

  listar(){

  }

  logout(){
    localStorage.removeItem('ingresado');
    this.router.navigateByUrl('login');
  }

}
