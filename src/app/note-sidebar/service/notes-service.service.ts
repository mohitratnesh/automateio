import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  private notes_url = "/assets/notes.json";

  constructor(private http:HttpClient) { }

  getNotes(){
    return this.http.get<any>(this.notes_url);
  }
}
