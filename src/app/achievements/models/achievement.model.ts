export enum AchievementCategory {
    personal = "Personal",
    professional = "Professional"
}

export interface IAchievement {
    tag: AchievementCategory,
    name: string
}