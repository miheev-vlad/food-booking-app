import { RegisterResponseInterface } from 'src/app/shared/types/registerResponse.interface';

export interface LoginResponseInterface extends RegisterResponseInterface {
  registered: boolean;
}
