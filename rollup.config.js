import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

import pkg from "./package.json"

export default [
  {
    input: "index.js",
    output: {
      name: "ReactMagicGrid",
      file: pkg.unpkg,
      format: "umd",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "prop-types": "PropTypes",
        "magic-grid": "MagicGrid",
      },
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      resolve(),
      commonjs({
        include: "node_modules/**",
        namedExports: {
          "node_modules/react/index.js": ["useRef", "useEffect"],
        },
      }),
    ],
  },
  {
    input: "index.js",
    external: ["react", "react-dom", "prop-types", "magic-grid"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
    ],
  },
]
