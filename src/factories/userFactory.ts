export type User = {
  activityMultiplier: number;
  baseCalories: number;
  bodyFat: number;
  height: number;
  minCalories: number;
  targetDeficit: number;
  weight: number;
};

/**
 * Creates a default User object
 * @returns
 */
export function createUser(): User {
  return {
    activityMultiplier: 1,
    baseCalories: 2000,
    minCalories: 0,
    bodyFat: 20,
    height: 180,
    targetDeficit: 0,
    weight: 80,
  };
}
