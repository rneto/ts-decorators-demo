import { logClass, logMethod, logProperty, logParam } from './log-decorators';

@logClass
export class User {
  @logProperty
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  @logMethod
  public synchronize(@logParam source: any): void {
    setTimeout(() => { console.log('User synchronized!'); }, 2000);
  }
}