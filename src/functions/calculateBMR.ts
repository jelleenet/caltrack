import type { User } from '@/factories/userFactory';

/**
 * Calculates the BMR of the provided User object
 * @param { User } user
 * @returns { number }
 */
export function calculateBMR(user: User): number {
  // Katch-McArdle Formula
  return Math.round(370 + 21.6 * ((user.weight * (100 - user.bodyFat)) / 100));
}