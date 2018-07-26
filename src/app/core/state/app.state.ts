import { State, Action, StateContext } from '@ngxs/store';
import { SetUsername, SetPageConfigUrl } from './app.actions';

export interface IAppState {
    awsUrl: string;
    userToken?: string;
    pageUrl?: string;
}

@State<IAppState>({
    name: 'ngFoxApp',
    defaults: {
        awsUrl: ''
    }
})
export class AppState {
    // @Action(SetUsername)
    // setUserName({ patchState }: StateContext<IAppState>, { payload }: SetUsername) {
    //     patchState({ username: payload });
    // }

    // @Action(SetPageConfigUrl)
    // SetPageConfigUrl({ patchState }: StateContext<IAppState>, { payload }: SetPageConfigUrl) {
    //     patchState({ pageUrl: payload });
    // }

}
