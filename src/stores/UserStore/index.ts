import {observable, action, computed} from 'mobx';

export interface IUserStore {
  setToken: (token: string) => void;
  toggleIsLogin: () => void;
  readonly token: string | undefined;
  readonly isLogin: boolean;
}

export class UserStore implements IUserStore{

  @observable
  private _token: string | undefined;

  @observable
  private _isLogin = false;

  @action
  setToken = (token: string): void => {
    this._token = token;
  }

  @action
  toggleIsLogin = (): void => {
    this._isLogin = !this._isLogin;
  }

  @computed
  get token(): string | undefined {
    return this._token;
  }

  @computed
  get isLogin(): boolean {
    return this._isLogin;
  }

}
