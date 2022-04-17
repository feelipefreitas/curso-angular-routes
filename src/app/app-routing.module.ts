import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ClientsComponent } from "./pages/clients/clients.component";

const ROUTES: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }