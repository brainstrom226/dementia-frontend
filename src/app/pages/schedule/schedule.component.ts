// schedule.component.ts
import { Component } from '@angular/core';
import moment from 'moment';
import { Events } from '../../models/events.model';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  scheduleEntries: Events[] = [];
  showSaveButton: boolean = false;

  addEntry() {
    this.scheduleEntries.push({ name: '',dateTime: new Date(), description: ''});
    this.showSaveButton = true;
  }

  onDateChange(): void {
    // if (event) {
    //   const formattedDate = moment(event).format('YYYY-MM-DD');
      console.log('Selected date:');
    // }
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
