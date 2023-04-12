export declare interface User {
  activityMultiplier: number;
  bodyFat: number;
  height: number;
  targetDeficit: number;
  weight: number;
}

export function createUser(): User {
  return {
    activityMultiplier: 1,
    bodyFat: 20,
    height: 180,
    targetDeficit: 0,
    weight: 80,
  };
}