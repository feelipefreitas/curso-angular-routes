import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ClientsComponent } from "./pages/clients/clients.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ClientDescriptionComponent } from "./pages/client-description/client-description.component";

const ROUTES: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'clients', component: ClientsComponent, children: [
        { path: ':id', component: ClientDescriptionComponent },
    ] },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent },
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