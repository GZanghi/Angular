import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';

import {EventsListComponent,  EventThumbnailComponent, EventService,
        EventDetailsComponent, CreateEventComponent , EventRouteActivator ,  EventListResolver, CreateSessionComponent, SessionListComponent }
         from './events/index';
import { NavBarComponent } from './nav/navbar.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { RouterModule, ActivatedRouteSnapshot} from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';

 declare let toastr:Toastr

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN, useValue: toastr
    },
    EventRouteActivator,
    EventListResolver,
    AuthService,
  { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(Component: CreateEventComponent){
  if(Component.isDirty)
  return window.confirm('Non ti pagano!? Ti vuoi licenziare?')
  return true;

}
