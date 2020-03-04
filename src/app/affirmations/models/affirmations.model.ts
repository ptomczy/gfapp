export interface IAffirmation {
    order: number,
    name: string,
    toPresent: boolean
}

export enum IMode {
    new = 0,
    edit
}