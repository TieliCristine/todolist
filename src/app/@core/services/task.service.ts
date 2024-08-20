import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiService: ApiService) {
  }

  save(title: string, content: string): void {}

}
