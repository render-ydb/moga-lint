import type { Linter } from 'eslint';
const lintConfig: Linter.Config = {
    extends: [
        require.resolve('../eslint-config-moga/typescript/react'),
    ]
}
export default lintConfig;