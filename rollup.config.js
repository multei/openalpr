import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import json from "@rollup/plugin-json";

export default [
    {
        input: 'src/index.js',
        external: ['axios', 'debug'],
        output: {
            name: 'openalpr',
            file: pkg.browser,
            format: 'umd',
            globals: {axios: 'axios', debug: 'debug'}
        },
        plugins: [
            resolve(),
            commonjs(),
            json()
        ]
    },
    {
        input: 'src/toBase64.js',
        external: ['debug'],
        output: {
            name: 'toBase64',
            file: 'dist/toBase64.js',
            format: 'umd',
            globals: {debug: 'debug'}
        },
        plugins: [
            resolve(),
            commonjs()
        ]
    },
    {
        input: 'src/index.js',
        external: ['axios', 'debug'],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ]
    }
];
