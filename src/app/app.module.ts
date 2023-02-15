import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrCodeMakerComponent } from './qr-code-maker/qr-code-maker.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'qr-maker', component: QrCodeMakerComponent },
  { path: 'resume', component: ResumeComponent },
]; 
@NgModule({
  declarations: [
    AppComponent,
    QrCodeMakerComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
