import { Activities } from "./activities.model";

export class TrackedDays {
  constructor(
    public date: string,
    public activities: Activities,
    public totalPointsEarned: number
  ) {}
}
