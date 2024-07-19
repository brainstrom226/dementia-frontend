// schedule.component.ts
import { Component } from '@angular/core';

interface ScheduleEntry {
  eventName: string
  startTime: string;
  endTime: string;
  occurrence: string;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  scheduleEntries: ScheduleEntry[] = [];
  showSaveButton: boolean = false;

  addEntry() {
    this.scheduleEntries.push({ eventName: '',startTime: '', endTime: '', occurrence: '' });
    this.showSaveButton = true;
  }

  removeEntry(index: number) {
    this.scheduleEntries.splice(index, 1);
    // Check if there are any entries left to decide if "Save" button should be hidden
    this.showSaveButton = this.scheduleEntries.length > 0;
  }

  saveEntries() {
    console.log(this.scheduleEntries);
    // Implement your saving logic here (e.g., call a service to save data)
  }

}
