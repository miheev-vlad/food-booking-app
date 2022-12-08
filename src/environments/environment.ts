// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentInterface } from 'src/environments/environment.interface';

export const environment: EnvironmentInterface = {
  production: false,
  Web_API_Key: 'AIzaSyAOo3hR_wn04fmo1D_5UOO_M4UmHVkXMgw ',
  DB_URL: 'https://ng-recipe-book-6ae40-default-rtdb.firebaseio.com',
  Auth_URL: 'https://identitytoolkit.googleapis.com/v1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
