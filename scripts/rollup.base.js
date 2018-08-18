import fs from "fs";
import babel from "rollup-plugin-babel";
import eslint from "rollup-plugin-eslint";
import resolve from "rollup-plugin-node-resolve";

const env = process.env; // eslint-disable-line no-undef
export const pkg = JSON.parse(fs.readFileSync("./package.json"));
const external = Object.keys(pkg.dependencies || []);
const name = env.MODULE_NAME || "bootstrap-mithril";

const globals = {};
external.forEach(ext => {
	switch (ext) {
	case "mithril":
		globals["mithril"] = "m";
		break;
	default:
		globals[ext] = ext;
	}
});

export const createConfig = ({ includeDepencies, lint }) => {
	const config = {
	  input: process.env.ENTRY || "index.js",
	  external: includeDepencies ? ["mithril"] : external,
	  output: {
		name,
		globals,
	  },
	  plugins: []
	};
	config.plugins.push(resolve({
	  jsnext: true,
	  main: true,
	  browser: true,
	}));
	//CANT GET ESLINT TO WORK
	lint && config.plugins.push(eslint({
	  cache: true
	}));
	config.plugins.push(babel({
	  comments: true,
	  runtimeHelpers: true,
	}));
	return config;
  };
