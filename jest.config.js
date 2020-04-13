module.exports = {
    roots: ['<rootDir>/src'],

    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

    testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',

    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    moduleNameMapper: {
        '/style/*/': '<rootDir>/src/tests/mocks/styleMock.js',
    },
}
