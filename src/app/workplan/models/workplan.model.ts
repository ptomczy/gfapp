export interface IGoal {
    id: string;
    parentId: string;
    name: string;
    description: string;
    startDate: Date | string;
    endDate: Date | string;
    timeSpent: Date | string;
    lastActivityDate: Date | string;
}