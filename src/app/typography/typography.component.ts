import {Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import {MediaService} from "../services/media.service";

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']

})
export class TypographyComponent implements OnInit {


  foto = [];

  constructor(private mediaservice : MediaService) { }

  ngOnInit() {
    this.foto = this.mediaservice.getfotoblobs();
  }

  nascosto = true;

  messaggioerrore = true;

  @ViewChild('infile') infile;

  handleFileInput(files){
    if(files[0] === '') {
      return;
    }
    const formData = new FormData();
    formData.append('file', files[0]);
    console.log(files);
    this.mediaservice.uploadfoto(formData).subscribe(result => {
      console.log(result);
      this.nascosto = false;
      this.infile.nativeElement.value = '';
       } ,
            error => {
         this.messaggioerrore = false;
              this.infile.nativeElement.value = '';
        });
  }


  deletemedia(video){
    this.mediaservice.deletemedia(video.idTuttifile).subscribe(result => {
      if(result){
        console.log("ELIMINATO");
        this.foto.splice(this.foto.indexOf(video) , 1);
      }else{
        console.log("NON ELIMINATO");
      }
    });
  }

}

