/**
 * Base models and common data structures for Griddy SDK.
 */


/**
 * Helper type for creating optional properties.
 */
export type Nullable<T> = T | null;

/**
 * Helper type for creating optional nullable properties.
 */
export type OptionalNullable<T> = T | null | undefined;

/**
 * Sentinel value for unset optional parameters.
 * In TypeScript, we use a symbol to represent this.
 */
export const UNSET = Symbol("UNSET");

/**
 * Type for optional parameters that can be unset.
 */
export type Unset = typeof UNSET;

/**
 * Helper to check if a value is the UNSET sentinel.
 */
export function isUnset(value: unknown): value is Unset {
	return value === UNSET;
}

/**
 * Helper to get a value or a default if the value is UNSET.
 */
export function valueOrDefault<T>(value: T | Unset, defaultValue: T): T {
	return isUnset(value) ? defaultValue : value;
}
