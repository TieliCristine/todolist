import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Task } from "../../domain/interface/task.interface";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiService: ApiService) {
  }

  save(title: string, description: string, status: string): Observable<any> {
    return this.apiService.post('save', { title, description, status }).pipe(
      tap(response => {
        if (response.status === 200) {
          console.log("Tarefa salva.")
        }
      })
    )
  }

}
