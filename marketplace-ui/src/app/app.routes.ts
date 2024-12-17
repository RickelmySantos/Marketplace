import { Route } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';

export const ROUTES: Route[] = [
    {
        path: '',
        canActivate: [AuthGuard],
        loadComponent: () => import('./core/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                loadChildren: () => import('./modules/marketplace/marketplace.routes'),
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'pages/not-found',
    },
] as Route[];
