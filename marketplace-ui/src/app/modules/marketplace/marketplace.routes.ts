import { Route } from "@angular/router";
import { UsuarioMarketplaceComponent } from "src/app/modules/marketplace/usuario-marketplace.component";

export default [
{
  path: '',
  component: UsuarioMarketplaceComponent,
  children: [
    {
      path: '',
      loadComponent: () => import('./home/usuario-home.component').then(m => m.UsuarioHomeComponent)
    },
  ],
},
] as Route[];
