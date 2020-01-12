import { IGoal } from "src/app/workplan/models/workplan.model";
import { ITask } from 'src/app/taskplan/models/taskplan.model';

export const mockGoals: IGoal[] = [
    {id: 'n1', parentId: null, name: 'Cel mockowy nr 1', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'},
    {id: 'n2', parentId: null, name: 'Cel mockowy nr 2', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'},
    {id: 'n3', parentId: null, name: 'Cel mockowy nr 3', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'},
    {id: 'n4', parentId: 'n1', name: 'Cel mockowy nr 4', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'},
    {id: 'n5', parentId: 'n3', name: 'Cel mockowy nr 5', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'},
    {id: 'n6', parentId: 'n5', name: 'Cel mockowy nr 6', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'},
    {id: 'n7', parentId: null, name: 'Cel mockowy nr 7', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'},
    {id: 'n8', parentId: null, name: 'Cel mockowy nr 8', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'},
    {id: 'n9', parentId: 'n8', name: 'Cel mockowy nr 9', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'},
    {id: 'n10', parentId: 'n9', name: 'Cel mockowy nr 10', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'},
    {id: 'n11', parentId: null, name: 'Cel mockowy nr 11', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'},
    {id: 'n12', parentId: null, name: 'Cel mockowy nr 12', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'},
    {id: 'n13', parentId: null, name: 'Cel mockowy nr 13', description: 'brak opisu', startDate: 'dataS', endDate: 'dataK', timeSpent: 'x', lastActivityDate: 'y'}
];

export const mockTasks: ITask[] = [
    {id: 't1', name: 'Task mockowy 1', date: 'dataTaska', status: 1, isObsolete: false},
    {id: 't2', name: 'Task mockowy 2', date: 'dataTaska', status: 1, isObsolete: false},
    {id: 't3', name: 'Task mockowy 3', date: 'dataTaska', status: 1, isObsolete: false},
    {id: 't4', name: 'Task mockowy 4', date: 'dataTaska', status: 1, isObsolete: false},
    {id: 't5', name: 'Task mockowy 5', date: 'dataTaska', status: 1, isObsolete: false},
    {id: 't6', name: 'Task mockowy 6', date: 'dataTaska', status: 1, isObsolete: false},
    {id: 't7', name: 'Task mockowy 7', date: 'dataTaska', status: 1, isObsolete: false},
]