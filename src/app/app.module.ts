import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitComponent } from './components/init/init.component';
import { ResultComponent } from './components/result/result.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent, InitComponent, ResultComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
