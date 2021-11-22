import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage:Storage) { 
    this.init();
  }

  async init(){
    await this.storage.create();
  }

}
