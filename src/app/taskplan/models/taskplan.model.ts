export enum IStatus {
    set = 1, 
    done
}

export interface ITask {
    id: string;
    name: string;
    date: string;
    status: IStatus;
    isObsolete: boolean;
}