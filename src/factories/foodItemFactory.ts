export type FoodItem = {
  time: number,
  calories: number,
  description: string,
}

/**
 * Creates a new FoodItem object
 * @param calories 
 * @param description 
 * @returns 
 */
export function createFoodItem(calories: number, description: string): FoodItem {
  return {
    time: Date.now(),
    calories,
    description,
  };
}