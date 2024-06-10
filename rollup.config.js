import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'packages/performance/index.ts', // 入口文件
    output: {
        dir: 'dist', // 输出目录
        format: 'cjs', // 输出的模块格式，这里使用 CommonJS
        // 其他输出选项...
    },
    plugins: [
        typescript({}),
    ],
};