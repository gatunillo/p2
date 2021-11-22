import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  listado = [];
  id = "";
  post = "";

  constructor(private router:Router,
    private api:ApiService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getComments();
    this.getPost();
  }

  async getComments(){
    this.activatedRoute.paramMap.subscribe(async p => {
      this.id = p.get('id');
      //console.log(this.id);
    });
    await this.api.getComments(this.id);
    this.listado = this.api.listado;
    //console.log(this.listado);
  }

  async getPost(){
    this.activatedRoute.paramMap.subscribe(async p => {
      this.id = p.get('id');
      //console.log(this.id);
    });
    await this.api.getPost(this.id);
    this.post = this.api.datos;
  }

}
