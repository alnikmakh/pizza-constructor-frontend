import {UserStore, IUserStore} from './UserStore';


export interface IGlobalStore {
  userStore: IUserStore;
}

export class GlobalStore {

  userStore = new UserStore();

}
