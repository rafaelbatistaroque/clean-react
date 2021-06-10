module.exports = {
    roots: ["<rootDir>/src"],
    testEnvironment: "jsdom",
    transform: {
        ".+\\.(ts|tsx)$": "ts-jest"
    },
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1"
    }
}