import { IGoal } from "src/app/workplan/models/workplan.model";
import { ITask } from 'src/app/taskplan/models/taskplan.model';
import { IAchievement, AchievementCategory } from '../achievements/models/achievement.model';

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
    {userId: 'df', id: 't1', name: 'Task mockowy 1', date: 'dataTaskaToday', status: 1, isObsolete: false, category: 1, priority: 1},
    {userId: 'df', id: 't2', name: 'Task mockowy 2', date: 'dataTaskaToday', status: 1, isObsolete: false, category: 1, priority: 2},
    {userId: 'df', id: 't3', name: 'Task mockowy 3', date: 'dataTaskaToday', status: 1, isObsolete: false, category: 1, priority: 3},
    {userId: 'df', id: 't4', name: 'Task mockowy 4', date: 'dataTaskaToday', status: 1, isObsolete: false, category: 2, priority: 1},
    {userId: 'df', id: 't5', name: 'Task mockowy 5', date: 'dataTaskaTommorow', status: 1, isObsolete: false, category: 3, priority: 1},
    {userId: 'df', id: 't6', name: 'Task mockowy 6', date: 'dataTaskaTommorow', status: 1, isObsolete: false, category: 3, priority: 2},
    {userId: 'df', id: 't7', name: 'Task mockowy 7', date: 'dataTaskaTommorow', status: 1, isObsolete: false, category: 3, priority: 3},
];

export let mockAchievements: IAchievement[] = [
    {tag: AchievementCategory.personal, name: "Osiągnięcie A"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie B"},
    {tag: AchievementCategory.professional, name: "Osiągnięcie C"},
    {tag: AchievementCategory.professional, name: "Osiągnięcie D"},
    {tag: AchievementCategory.professional, name: "Osiągnięcie E"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie F"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie G"},
    {tag: AchievementCategory.professional, name: "Osiągnięcie H"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie I"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie J"},
    {tag: AchievementCategory.professional, name: "Osiągnięcie K"},
    {tag: AchievementCategory.professional, name: "Osiągnięcie L"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie M"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie N"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie O"},
    {tag: AchievementCategory.professional, name: "Osiągnięcie P"},
    {tag: AchievementCategory.professional, name: "Osiągnięcie R"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie S"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie T"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie U"},
    {tag: AchievementCategory.professional, name: "Osiągnięcie V"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie W"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie Y"},
    {tag: AchievementCategory.personal, name: "Osiągnięcie Z"}
]