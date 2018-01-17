import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { HTTP_INTERCEPTORS  ,HttpClientModule } from '@angular/common/http';
// import { HTTP_INTERCEPTORS } from '@angular/common/http/src/interceptor.d';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {  BaseRequestOptions, HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { Routes, RouterModule } from '@angular/router';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import {NavbarService} from './_services/navbar.service';
import { MessageService } from './_services/MessageService';
import { loginedUserService } from './_services/loginedUserService';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {HightlightDirective} from './home/highlight.directive';
import {NavbarComponent } from './core/navbar.component';
import {SidebarComponent} from './core/sidebar.component';
import {ToggleclassComponent} from './core/toggleclass.component';
import {PageForTablesComponent} from './home/PageForTables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { successorComponent } from './home/successor.component';
import {sptoolUserListComponent } from './home/sptoolUserListComponent';

import { TokenInterceptor } from './_helpers/token.interceptor';
// import { HttpClient } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        // HttpClient,
        HttpModule,
        // HttpClientModule,
        BrowserAnimationsModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HightlightDirective,
        NavbarComponent,
        SidebarComponent,
        ToggleclassComponent,
        PageForTablesComponent,
        successorComponent,
        sptoolUserListComponent
    ],
    providers: [
        //  {
        //      provide:HTTP_INTERCEPTORS,
        //      useClass:TokenInterceptor,
        //      multi:true
        //  },
        AuthGuard,
        AlertService,
        
        UserService,
        NavbarService,
        MessageService,
        loginedUserService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        AuthenticationService,
       
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }