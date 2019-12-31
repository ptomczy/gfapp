export interface IGoal {
    id: string;
    parentId: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    timeSpent: Date;
    lastActivityDate: Date;
}