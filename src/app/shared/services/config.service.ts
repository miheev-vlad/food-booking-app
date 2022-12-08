import { Injectable } from '@angular/core';

import devConfig from 'src/config/dev.config';
import prodConfig from 'src/config/prod.config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config: any;
  isProduction: boolean;

  constructor() {
    this.isProduction = environment.production;
    this.config = this.isProduction ? prodConfig : devConfig;
  }

  getOption(optionName: string): any {
    return this.config[optionName];
  }
}
