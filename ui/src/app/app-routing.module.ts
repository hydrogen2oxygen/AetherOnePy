import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {HomeComponent} from "./components/home/home.component";
import {DocumentationComponent} from "./components/documentation/documentation.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {MobileComponent} from "./components/mobile/mobile.component";
import {CaseComponent} from "./components/case/case.component";
import {RateCardsComponent} from "./components/rate-cards/rate-cards.component";
import {HotbitsComponent} from "./components/hotbits/hotbits.component";
import {AppsComponent} from "./components/apps/apps.component";
import {RadionicsDeviceBase44Component} from "./components/radionics-device-base44/radionics-device-base44.component";
import { VersionComponent } from './components/version/version.component';
import {BroadcastComponent} from "./components/broadcast/broadcast.component";

const routes: Routes = [
  {path: '', redirectTo: 'HOME', pathMatch: 'full'},
  {path: 'HOME', component: HomeComponent},
  {path: 'BROADCAST', component: BroadcastComponent},
  {path: 'CARDS', component: RateCardsComponent},
  {path: 'MANUAL', component: DocumentationComponent},
  {path: 'SETTINGS', component: SettingsComponent},
  {path: 'MOBILE', component: MobileComponent},
  {path: 'CASE', component: CaseComponent},
  {path: 'APPS', component: AppsComponent},
  {path: 'HOTBITS', component: HotbitsComponent},
  {path: 'RADIONICS_DEVICE_BASE44', component: RadionicsDeviceBase44Component},
  {path: 'VERSION', component: VersionComponent},
];

@NgModule({ exports: [RouterModule], imports: [RouterModule.forRoot(routes)], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppRoutingModule { }
