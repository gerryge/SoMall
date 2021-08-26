// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseUrl = 'http://localhost:4200';

export const environment = {
  SERVER_URL: ``,
  production: false,
  useHash: false,
  hmr: false,

  application: {
    name: 'SoMall',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44380',
    redirectUri: baseUrl,
    clientId: 'SoMall_App',
    // responseType: 'code',
    scope: 'SoMall',
    // showDebugInformation: true,
    // oidc: true,
    //requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44340',
      signalR: "ws://localhost:44340",
      rootNamespace: 'TT.SoMall',
    },
  },
  localization: {
    defaultResourceName: 'SoMall',
  }
};





/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
