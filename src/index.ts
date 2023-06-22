import path from "path";
import requireAll from "require-all";
import deepmerge from "./deepmerge";

type Json = Record<string, any>;

const eslint = requireAll({
    dirname:path.resolve(__dirname, 'eslint'),
});
console.log("eslint",eslint)

const stylelint = requireAll({
    dirname:path.resolve(__dirname, 'eslint'),
});

const prettier = requireAll({
    dirname:path.resolve(__dirname, 'eslint'),
});

const commitlint = requireAll({
    dirname:path.resolve(__dirname, 'eslint'),
});

const getConfig = (configs: Json, rule: string, customConfig: Json) => {
    if (!configs[rule]) {
        throw new Error(`Rule '${rule}' not Support!`);
    }

    return deepmerge(configs[rule], customConfig || {});
}

// ESLint
export const getESLintConfig = (rule: string, customConfig: Json) => {
    return getConfig(eslint, rule, customConfig);
};

// stylelint
export const getStylelintConfig = (rule: string, customConfig: Json) => {
    return getConfig(stylelint, rule, customConfig);
};

// prettier
export const getPrettierConfig = (rule: string, customConfig: Json) => {
    return getConfig(prettier, rule, customConfig);
};

// commitlint
export const getCommitlintConfig = (rule: string, customConfig: Json) => {
    return getConfig(commitlint, rule, customConfig);
};
