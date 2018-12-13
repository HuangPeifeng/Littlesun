import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopContentComponent } from './top-content/top-content.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { AudioBookComponent } from './audio-book/audio-book.component';
import { RedBlockComponent } from './red-block/red-block.component';
import { FooterComponent } from './footer/footer.component';
import { GoTopComponent } from './go-top/go-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopContentComponent,
    ParentChildComponent,
    AudioBookComponent,
    RedBlockComponent,
    FooterComponent,
    GoTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
