import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { HomePage }											from '../pages/home/home';
import { ListPage }											from '../pages/list/list';
import { TabsPage }											from '../pages/tabs/tabs';
import { FavoritesPage }								from '../pages/favorites/favorites';
import { QuotePage }										from '../pages/quote/quote';
import { QuotesPage }										from '../pages/quotes/quotes';
import { LibraryPage }									from '../pages/library/library';
import { SettingsPage }									from '../pages/settings/settings';

import { QuotesService }								from '../services/quotes';
import { SettingsService }							from '../services/settings';

@NgModule({
  declarations: [
    MyApp,
		HomePage, ListPage,
		TabsPage, FavoritesPage, QuotePage, QuotesPage, LibraryPage, SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
		HomePage, ListPage,
		TabsPage, FavoritesPage, QuotePage, QuotesPage, LibraryPage, SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		
		QuotesService, SettingsService
  ]
})
export class AppModule {}
