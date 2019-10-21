import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';
import { MainbarComponent } from './mainbar/mainbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { CustompipePipe } from './custompipe.pipe';
import {TableModule} from 'primeng/table';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';
import { MatSidenavModule,} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    SidebarModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    TableModule,
    ContextMenuModule,
    ToastModule,
    MatSidenavModule,
    DragDropModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule
    ],

  declarations: [
    AppComponent,
    MenuComponent,
    MainbarComponent,
    AboutComponent,
    ServiceComponent,
    CustompipePipe,
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
