import { Route } from '@angular/router';

export const ROUTES: Route[] = [
 {
     path: 'marketplace',
     loadComponent: () => import('./modules/marketplace/usuario-marketplace.component').then(m => m.UsuarioMarketplaceComponent),
 }
] as Route[];
