import babel from "rollup-plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    file: "prod/bimn.js",
    format: "umd",
    name: "bimn"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ] 
};