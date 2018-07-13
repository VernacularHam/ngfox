export class SetUsername {
    static readonly type = '[app] set username';
    constructor(public payload: string) {}
}

export class SetPageConfigUrl {
    static readonly type = '[app] set page config url';
    constructor(public payload: string) {}
}
