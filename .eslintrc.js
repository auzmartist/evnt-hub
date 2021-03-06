module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	globals: {
		describe: true,
		jest: true,
		beforeAll: true,
		beforeEach: true,
		afterEach: true,
		it: true,
		expect: true,
		jest: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6
 	},
	root: true,
	extends: ['eslint:recommended', 'auz'],
	rules: {
		'max-len': ['error', 160],
		'linebreak-style': 0,
		'no-console': 0,
	},
};
