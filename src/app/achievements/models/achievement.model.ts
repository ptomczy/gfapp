export enum AchievementCategory {
    personal = "Personal",
    professional = "Professional"
}

export interface IAchievement {
    order: number;
    tag: AchievementCategory,
    name: string
}