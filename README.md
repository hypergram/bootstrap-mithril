# bootstrap-mithril

Bootstrap v4.1 component library for [Mithril](https://mithril.js.org)

## Installation

```bash
npm install --save bootstrap-mithril
```

## Setting up the development repo

Install Lerna:

```
npm install -g lerna
```

Get the bootstrap-mithril repo and prepare:

```
git clone https://github.com/hypergram/bootstrap-mithril.git
cd bootstrap-mithril
yarn
```

This will install all dependencies and run `lerna bootstrap`.

Commands:

-   `yarn build` - builds all components (in each dist directory)
-   `yarn clean` - removes all dist directories

Packages are built with [Rollup](http://rollupjs.org), both as `es` module and as `umd`. Rollup creates smaller files compared to Webpack. If you like to experiment, build scripts are in the root `scripts` directory.


## Credits

Thanks to the [Polythene](https://github.com/ArthurClemens/polythene) Material Design component library for packages structure
