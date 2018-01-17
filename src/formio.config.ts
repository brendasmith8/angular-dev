import { Injectable } from '@angular/core';

@Injectable()
export class FormioAppConfig {
  appUrl: string;
  apiUrl: string;
  icons?: string;
  formOnly?: boolean;
}
