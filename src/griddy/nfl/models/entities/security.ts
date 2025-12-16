/**
 * Security model for NFL SDK authentication.
 */

/**
 * Security configuration for API authentication.
 */
export interface Security {
	/** NFL authentication token (Bearer) */
	nflAuth?: string | null;
}

/**
 * Create a Security object from an access token.
 */
export function createSecurity(accessToken: string | undefined): Security {
	return {
		nflAuth: accessToken,
	};
}

/**
 * Security metadata for field annotations.
 */
export interface SecurityMetadata {
	/** Whether this is a security scheme */
	scheme: boolean;
	/** Type of security scheme */
	schemeType: "http" | "apiKey" | "oauth2";
	/** Subtype (e.g., 'bearer') */
	subType?: string;
	/** Field name in the request */
	fieldName: string;
}

/**
 * Default security metadata for NFL auth.
 */
export const NFL_AUTH_METADATA: SecurityMetadata = {
	scheme: true,
	schemeType: "http",
	subType: "bearer",
	fieldName: "Authorization",
};
