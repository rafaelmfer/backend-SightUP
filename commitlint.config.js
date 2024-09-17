module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "header-case": [0, "always"],
        "subject-case": [0, "never"],
        "subject-empty": [2, "never"],
        "type-enum": [
            2,
            "always",
            [
                "build",
                "chore",
                "ci",
                "docs",
                "feat",
                "fix",
                "perf",
                "refactor",
                "revert",
                "style",
                "test",
            ],
        ],
    },
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\w+): \[EC-\d+\] (.+)$/,
            headerCorrespondence: ["type", "ticket", "subject"],
        },
    },
};
