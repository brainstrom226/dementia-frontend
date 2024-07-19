import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apiUrl = 'http://your-api-url/gallery'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  uploadPhoto(file: File) {
    const formData: FormData = new FormData();
    formData.append('photo', file, file.name);

    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }

  getPhotos() {
    return this.http.get<any[]>(`${this.apiUrl}/photos`);
  }
}
