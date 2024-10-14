import { Route } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';

export const ROUTES: Route[] = [
    {
        path: '',
        canActivate: [AuthGuard],
        loadComponent: () => import('./modules/marketplace/usuario-marketplace.component').then(m => m.UsuarioMarketplaceComponent),
        children: [
            {
                path: '',
                loadChildren: () => import('./modules/marketplace/marketplace.routes'),
            },
        ],
    },
] as Route[];
