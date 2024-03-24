import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyDemoComponent } from './lazy-demo/lazy-demo.component';
import { CrudComponent } from './crud/crud.component';

export const routes: Routes = [
    {
        path:'',
        component:AppComponent,
    },
    {
        path:'lazy-loading',
        component:LazyDemoComponent,
    },
    {
        path:'crud',
        component:CrudComponent,
    },
    // {
    //     path: 'lazy-'oading',
    //   ' loadChildren: () => import('./lazy-loading/lazy-loading.module')
    //     .then(m => m.LazyLoadingModule)
    //  },
];
