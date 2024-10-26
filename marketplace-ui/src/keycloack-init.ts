import { KeycloakService } from 'keycloak-angular';

// export function initialize(keycloack: KeycloakService) {
//     return () => {
//         return keycloack
//             .init({
//                 config: {
//                     clientId: 'angular-client',
//                     realm: 'marketplace',
//                     url: 'http://localhost:8280',
//                 },
//                 initOptions: {
//                     onLoad: 'login-required',
//                     checkLoginIframe: false,
//                 },
//                 // bearerExcludedUrls: [],
//                 enableBearerInterceptor: true,
//                 bearerPrefix: 'Bearer',
//                 bearerExcludedUrls: ['/assets', '/public'],
//             })
//             .then(async () => {
//                 tokenUpdate(keycloack);
//             });
//     };

//     function tokenUpdate(keycloack: KeycloakService) {
//         const refreshToken = 60000;

//         setInterval(async () => {
//             if (await keycloack.isLoggedIn()) {
//                 keycloack
//                     .updateToken(30)
//                     .then(refreshed => {
//                         if (refreshed) {
//                             console.debug('[Token] atualizado');
//                         } else {
//                             console.debug('[Token] ainda válido');
//                         }
//                     })
//                     .catch(error => {
//                         console.error('[Token] erro ao atualizar', error);
//                         keycloack.login();
//                     });
//             }
//         });
//     }
// }

export function initialize(keycloak: KeycloakService) {
    return () =>
        keycloak
            .init({
                config: {
                    clientId: 'angular-client',
                    realm: 'marketplace',
                    url: 'http://localhost:8280',
                },
                initOptions: {
                    onLoad: 'login-required',
                    checkLoginIframe: false,
                },
                enableBearerInterceptor: true,
                bearerPrefix: 'Bearer',
                bearerExcludedUrls: ['/assets', '/public'],
            })
            .then(async () => {
                const token = await keycloak.getToken();
                if (token) {
                    localStorage.setItem('access_token', token);
                }
                tokenUpdate(keycloak);
            });
}

function tokenUpdate(keycloak: KeycloakService) {
    const refreshInterval = 60000;

    setInterval(async () => {
        if (await keycloak.isLoggedIn()) {
            keycloak
                .updateToken(30)
                .then(async refreshed => {
                    if (refreshed) {
                        const updatedToken = await keycloak.getToken();
                        localStorage.setItem('access_token', updatedToken || '');
                    } else {
                    }
                })
                .catch(error => {
                    keycloak.login(); // Redireciona para login se a atualização falhar
                });
        }
    }, refreshInterval);
}
