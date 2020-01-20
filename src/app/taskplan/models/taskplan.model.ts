export enum TaskStatus {
    set = 1, 
    done
}

export enum TaskCategory {
    A,
    B,
    C
}

export interface ITask {
    id: string;
    name: string;
    date: string;
    status: TaskStatus;
    isObsolete: boolean;
    category: TaskCategory;
    priority: number;
}