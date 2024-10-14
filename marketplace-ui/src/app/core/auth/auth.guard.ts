import { inject, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    protected readonly authService: KeycloakService = inject(KeycloakService);

    async canActivate(): Promise<boolean> {
        const isLoggedIn = await this.authService.isLoggedIn();
        if (!isLoggedIn) {
            await this.authService.login();
            return false;
        }
        return true;
    }
}
