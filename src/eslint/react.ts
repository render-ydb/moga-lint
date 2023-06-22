import type { Linter } from 'eslint';
const lintConfig: Linter.Config = {
    extends: [
        require.resolve('../eslint-config-moga/react.js'),
    ]
}
export default lintConfig;