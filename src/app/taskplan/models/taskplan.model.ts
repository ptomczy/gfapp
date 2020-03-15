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
    userId: string;
    id: string;
    goalId: string;
    name: string;
    date: string;
    status: TaskStatus;
    isObsolete: boolean;
    category: TaskCategory;
    priority: number;
}

export enum taskScopeInfo {
    today = "Plan for today",
    tommorow = "Plan for tommorow"
}

export enum TaskListViewMode {
    todayTasks,
    tommorowTasks
}