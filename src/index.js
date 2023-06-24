const path = require("path");
const requireAll = require("require-all");
const deepmerge = require("./deepmerge");


const eslint = requireAll({
    dirname: path.resolve(__dirname, 'eslint'),
});


const stylelint = requireAll({
    dirname: path.resolve(__dirname, 'stylelint'),
});

const prettier = requireAll({
    dirname: path.resolve(__dirname, 'prettier'),
});

const commitlint = requireAll({
    dirname: path.resolve(__dirname, 'commitlint'),
});

const getConfig = function (configs, rule, customConfig) {
    if (!configs[rule]) {
        throw new Error(`Rule '${rule}' not Support!`);
    }

    return deepmerge(configs[rule], customConfig || {});
}

// ESLint
export const getESLintConfig = function (rule, customConfig) {
    return getConfig(eslint, rule, customConfig);
};

// stylelint
export const getStylelintConfig = function (rule, customConfig) {
    return getConfig(stylelint, rule, customConfig);
};

// prettier
export const getPrettierConfig = function (rule, customConfig) {
    return getConfig(prettier, rule, customConfig);
};

// commitlint
export const getCommitlintConfig = function (rule, customConfig) {
    return getConfig(commitlint, rule, customConfig);
};
