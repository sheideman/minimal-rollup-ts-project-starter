import typescript2 from 'rollup-plugin-typescript2';
import loadz0r from 'rollup-plugin-loadz0r';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
export default {
  input: ['src/app-root.ts'],
  output: {
    format: 'amd',
    dir: 'dist'
  },
  plugins: [
    commonjs({
        include: 'node_modules/**'
      }),
    typescript2(),
    loadz0r(),
    resolve()
  ]
}