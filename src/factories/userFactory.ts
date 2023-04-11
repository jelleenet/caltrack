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
    bodyFat: 0,
    height: 0,
    targetDeficit: 0,
    weight: 0,
  };
}