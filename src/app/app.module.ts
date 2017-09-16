import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserService } from './services/user/user.service';
import { AppendorPipe } from './pipes/appendor/appendor.pipe';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { SpecificUsersPipe } from './pipes/specific-users/specific-users.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent,
    AppendorPipe,
    PlaceholderComponent,
    SpecificUsersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
