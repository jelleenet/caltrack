export type FoodItem = {
  time: number,
  calories: number,
  name: string,
}

/**
 * Creates a new FoodItem object
 * @param calories 
 * @param name 
 * @returns 
 */
export function createFoodItem(calories: number, name: string): FoodItem {
  return {
    time: Date.now(),
    calories,
    name,
  };
}