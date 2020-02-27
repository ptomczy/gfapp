import { IGoal } from "src/app/workplan/models/workplan.model";
import { ITask } from 'src/app/taskplan/models/taskplan.model';
import { IAchievement, AchievementCategory } from '../achievements/models/achievement.model';
import { IAffirmation } from '../affirmations/models/affirmations.model';

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
    {order: 1, tag: AchievementCategory.personal, name: "Osiągnięcie A"},
    {order: 2, tag: AchievementCategory.personal, name: "Osiągnięcie B"},
    {order: 3, tag: AchievementCategory.professional, name: "Osiągnięcie C"},
    {order: 4, tag: AchievementCategory.professional, name: "Osiągnięcie D"},
    {order: 5, tag: AchievementCategory.professional, name: "Osiągnięcie E"},
    {order: 6, tag: AchievementCategory.personal, name: "Osiągnięcie F"},
    {order: 7, tag: AchievementCategory.personal, name: "Osiągnięcie G"},
    {order: 8, tag: AchievementCategory.professional, name: "Osiągnięcie H"},
    {order: 9, tag: AchievementCategory.personal, name: "Osiągnięcie I"},
    {order: 10, tag: AchievementCategory.personal, name: "Osiągnięcie J"},
    {order: 11, tag: AchievementCategory.professional, name: "Osiągnięcie K"},
    {order: 12, tag: AchievementCategory.professional, name: "Osiągnięcie L"},
    {order: 13, tag: AchievementCategory.personal, name: "Osiągnięcie M"},
    {order: 14, tag: AchievementCategory.personal, name: "Osiągnięcie N"},
    {order: 15, tag: AchievementCategory.personal, name: "Osiągnięcie O"},
    {order: 16, tag: AchievementCategory.professional, name: "Osiągnięcie P"},
    {order: 17, tag: AchievementCategory.professional, name: "Osiągnięcie R"},
    {order: 18, tag: AchievementCategory.personal, name: "Osiągnięcie S"},
    {order: 19, tag: AchievementCategory.personal, name: "Osiągnięcie T"},
    {order: 20, tag: AchievementCategory.personal, name: "Osiągnięcie U"},
    {order: 21, tag: AchievementCategory.professional, name: "Osiągnięcie V"},
    {order: 22, tag: AchievementCategory.personal, name: "Osiągnięcie W"},
    {order: 23, tag: AchievementCategory.personal, name: "Osiągnięcie Y"},
    {order: 24, tag: AchievementCategory.personal, name: "Osiągnięcie Z"}
];

export let mockAffirmations: IAffirmation[] = [
    {order: 1, name: "Jestem zajebisty", toPresent: false},
    {order: 2, name: "Jestem zwycięzcą", toPresent: true},
    {order: 3, name: "Jestem najpiękniejszy", toPresent: true},
    {order: 4, name: "Jestem najmądrzejszy", toPresent: false},
    {order: 5, name: "Jestem superprzystojny", toPresent: false},
    {order: 6, name: "Jestem najsprytniejszy", toPresent: true},
    {order: 7, name: "Jestem najinteligentniejszy", toPresent: false},
    {order: 8, name: "Jestem najzdolniejszy", toPresent: false},
    {order: 9, name: "Jestem niesamowicie bystry", toPresent: false},
    {order: 10, name: "Jestem uprzejmy", toPresent: true},
    {order: 11, name: "Jestem zaskakujący", toPresent: false},
    {order: 12, name: "Jestem nieprzewidywalny", toPresent: false}
]