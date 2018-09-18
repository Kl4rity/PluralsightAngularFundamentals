import {Component, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class = 'row'>
            <div *ngFor="let event of eventSource" class='col-md-5'>
                <event-thumbnail [event] = "event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit{
    eventSource:any[];

    constructor(private eventservice: EventService, private toastr: ToastrService){
        
    }

    ngOnInit(){
        this.eventSource = this.eventservice.getEvents();
    }

    handleThumbnailClick(eventName: string){
        this.toastr.success(eventName);
    }
}