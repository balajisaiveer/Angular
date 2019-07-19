import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import {OnePieceModule} from './one-piece/one-piece.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule ,
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule ,
        MatIconModule ,
        MatToolbarModule,
        MatSidenavModule,
        MatExpansionModule ,
        MatGridListModule ,
        MatCheckboxModule,
        MatMenuModule,
        MatTooltipModule
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    OrderModule,
    FilterPipeModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatGridListModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTooltipModule,
    OnePieceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


