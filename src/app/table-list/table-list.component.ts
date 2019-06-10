import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MediaService} from "../services/media.service";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


  video = [];


  file;

  constructor(private mediaservice : MediaService) { }

  ngOnInit() {
    this.video = this.mediaservice.getblobs();
  }


  nascosto = true;

  handleFileInput(files){
    const formData = new FormData();
    formData.append('file', files[0]);
    console.log(files);
    this.mediaservice.uploadvideo(formData).subscribe(result => {
       this.nascosto = false;
    });
  }


  deletemedia(video){
    this.mediaservice.deletemedia(video.idTuttifile).subscribe(result => {
      if(result){
        console.log("ELIMINATO");
        this.video.splice(this.video.indexOf(video) , 1);
      }else{
        console.log("NON ELIMINATO");
      }
    });
  }

}
