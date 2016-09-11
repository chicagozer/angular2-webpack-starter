import { Transform } from './transform';

export class Dealer {

  code: string;
  name: string;
  dmsType: string;
  agentType: string;
  poolName: string;
  timeZone: string;
  countryCode: string;
  state: string;
  id: number;
  webKey: string;
  transforms:  Map<string, Transform>;
  schemaName: string;
  integrationAllowed: boolean;
  migrationAllowed: boolean;
  defaultStore: string;
  defaultMakeCode: string;
  currencyCode: string;
  properties: Map<string, string>;

}
