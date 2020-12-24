module.exports = {
	globals: {
		window: {},
	},
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
	moduleNameMapper: {
		// 절대 경로
		'^src/(.*)': '<rootDir>/src/$1',
	},
	transformIgnorePatterns: ['./node_modules/'],
	preset: 'ts-jest',
	testMatch: ['<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}'],
	testEnvironment: 'jsdom',
	coverageThreshold: {
		global: {
			statements: 80,
			branches: 80,
			lines: 80,
			functions: 80,
		},
	},
};
