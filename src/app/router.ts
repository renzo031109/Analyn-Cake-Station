import { Routes,RouterModule } from "@angular/router";
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
    { path: "", redirectTo: "/gallery", pathMatch: 'full' },
    { path: 'gallery', component: GalleryComponent},
    { path: 'image/:id', component: ImageComponent},
    // { path: 'home', component:HomeComponent},
    { path: 'about', component:AboutComponent}
]
