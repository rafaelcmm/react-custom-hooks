import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './src/index.js',
  output: {
    file: './build/index.min.js',
    format: 'iife',
    name: 'bundle',
    globals: {
      react: 'React'
    },
  },
  external: [
    'react'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: [ '.js', '.json', '.jsx' ]
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    uglify()
  ]
}