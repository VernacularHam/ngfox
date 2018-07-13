import { State, Action, StateContext } from '@ngxs/store';
import { SetUsername, SetPageConfigUrl } from './app.actions';

export interface IAppState {
    username: string;
    orderId: number;
    status?: 'pending' | 'confirmed' | 'declined';
    pageUrl?: string;
}

@State<IAppState>({
    name: 'app',
    defaults: {
        username: '',
        orderId: Math.floor(Math.random() * 23000)
    }
})
export class AppState {
    @Action(SetUsername)
    setUserName({ patchState }: StateContext<IAppState>, { payload }: SetUsername) {
        patchState({ username: payload });
    }

    @Action(SetPageConfigUrl)
    SetPageConfigUrl({ patchState }: StateContext<IAppState>, { payload }: SetPageConfigUrl) {
        patchState({ pageUrl: payload });
    }

}
