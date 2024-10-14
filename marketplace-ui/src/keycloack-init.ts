import { KeycloakService } from 'keycloak-angular';

export function initialize(keycloack: KeycloakService) {
    return () => {
        return keycloack.init({
            config: {
                clientId: 'angular-client',
                realm: 'marketplace',
                url: 'http://localhost:8280',
            },
            initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: false,
            },
            bearerExcludedUrls: [],
        });
    };
}
