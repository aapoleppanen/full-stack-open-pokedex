module.exports = {
	env: {
		node: true,
		browser: true,
		es6: true,
		jest: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"prettier",
		"plugin:cypress/recommended",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react", "jest", "cypress"],
	rules: {
		"react/prop-types": 0,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
