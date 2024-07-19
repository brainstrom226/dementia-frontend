import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  photoName: string = '';
  selectedFile: File | null = null; // Variable to store the selected file

  // Dummy photos array for demonstration
  photos: any[] = [
    { url: 'https://via.placeholder.com/150' },
    { url: 'https://via.placeholder.com/150' }
  ];

  // Event handler for file selection
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  // Placeholder function for upload logic
  onUpload() {
    if (this.selectedFile) {
      // Perform upload logic here (e.g., send file to server)
      // For demonstration purposes, just add the selected file to photos array
      this.photos.push({ url: URL.createObjectURL(this.selectedFile) });

      // Reset selectedFile to clear the selection after upload
      this.selectedFile = null;

      // Clear the name input
      this.photoName = '';
    }
  }
}
