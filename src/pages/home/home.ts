import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureAudioOptions, CaptureVideoOptions } from '@ionic-native/media-capture';
//import { VideoCapturePlus, VideoCapturePlusOptions} from '@ionic-native/video-capture-plus';
//import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(private mediaCapture: MediaCapture) { }


  onMedia(){  let options: CaptureImageOptions = { limit: 3 };
  this.mediaCapture.captureImage(options)
  .then(
    (data: MediaFile[]) => console.log(data),
    (err: CaptureError) => console.error(err)
  );
}


onAudio(){
 
  let options: CaptureAudioOptions = { limit: 3 };
  this.mediaCapture.captureAudio(options)
  .then(
    (data: MediaFile[]) => console.log(data),
    (err: CaptureError) => console.error(err)
  );

}

onVideo(){
  
  let options: CaptureVideoOptions = { limit: 3 };
  this.mediaCapture.captureVideo(options)
  .then(
    (data: MediaFile[]) => console.log(data),
    (err: CaptureError) => console.error(err)
  );
}


}

