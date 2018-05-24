import { NgModule } from '@angular/core' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule
 } from '@angular/material' ;
@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule
    ]
})
export class Material {}
