import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { foto } from '../models/Foto.interface';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  //cria lista de fotos que vão estar armazenadas no dispoditivo
  fotos: foto[] = []
  //cria a variavel que armazena o local fisico (pasta) de armazenamento das fotos
  private FOTO_ARMAZENAMENTO: string = 'fotos';


  constructor() { }

  // Função para tirar / buscar novas fotos
  async tirarFoto() {
    // chama a função de câmera e armazena o arquivo na constante
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri, //dados baseados em arquivos / oferece melhor desempenho
      source: CameraSource.Camera, // tira automaticamente uma nova foto com a camera
      quality: 100 // qualidade dad imagem tirada, vai de 0 a 1000
      
    });
  }
}
