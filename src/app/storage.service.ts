import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage:Storage,
    private api:ApiService) { 
    this.init();
  }

  async init(){
    await this.storage.create();
  }

}
