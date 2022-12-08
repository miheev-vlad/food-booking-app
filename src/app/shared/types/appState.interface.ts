import { AuthStateInterface } from 'src/app/auth/shared/types/authState.interface';
import { DashboardStateInterface } from 'src/app/dashboard/types/dashboardState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  dashboard: DashboardStateInterface;
}
