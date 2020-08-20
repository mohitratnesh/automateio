import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from './service/notes-service.service';

@Component({
  selector: 'app-note-sidebar',
  templateUrl: './note-sidebar.component.html',
  styleUrls: ['./note-sidebar.component.css']
})
export class NoteSidebarComponent implements OnInit {

  public noteLists = [];

  constructor(private noteService: NotesServiceService) { }

  ngOnInit() {
    this.getNoteList();
  }

getNoteList(){
  this.noteService.getNotes()
                         .subscribe(data => {this.noteLists = data;
                        console.log(this.noteLists)});
}

}
