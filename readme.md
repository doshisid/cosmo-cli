# cosmo-cli

Setting up right tools while developing in Javascript can make the process
efficient and enjoyable. There are a lot of great tools available in Javascript
ecosystem that can help you along the way, making things easy for you.
But setting up all those tools for each new project can be time consuming and
boring if not difficult.
<br>
`cosmo` helps you get around these tools easily without getting in your way.
It works as a proxy between tools and provides a sensible default configuration.
So zero configuration Is required at your end. But it does expect you to be
familiar with supported tools.

> Currently, It only supports building NodeJs Libraries. Browser environment 
> support may be added later.

> `cosmo` is built to easily develop libraries. If you are looking to develop 
> apps, it would still work fine. But there may be better options available 
> depending on the type of app you want to create.

## Supported Tools

* `Babel` - Use modern Javascript features today.
* `Eslint` - Follow Javascript best practices. It helps avoid common mistakes 
and lets you code with confidence.
* `Jest` - Easily write tests for your code.
* `Prettier` - Stop worrying about formatting your code. Let Prettier handle it.
* `Flow` - Add static types to your code. Make your code more readable and 
maintainable. Helps avoid great amount of bugs.

## Usage

```bash
$ cosmo <command> [options]
```

## Commands

### create ❌

Create a new project. Initialize git, setup package.json, add default config 
and install dependencies

Directory Structure:

```
node_modules/
src/
  index.js
package.json
yarn.lock
readme.md
LICENCE
.flowconfig
.gitignore
```

### build ❌

Builds your project. Compiles javascript code in `src/` using `Babel`
and outputs the compiled files to `dist`. By default it uses 
`babel-preset-cosmo`. See the list of supported ESNext features [here](https://github.com/doshisid/babel-preset-cosmo#esnext-supported-features).

If you want, you can take control over the build by providing your own config. 
If there is a `.babelrc` in project root, it will be used instead of default 
preset. If you want to keep using the default preset and extend it, you can add 
`cosmo` to your list of babel presets.

For example, to extend support for decorators, just install necessary modules 
and setup `.babelrc` like this:

```json
{
  "presets": ["cosmo"],
  "plugins": ["transform-decorators"]
}
```

Remember to install necessary packages.

```bash
$ yarn add --dev babel-preset-cosmo babel-plugin-transform-decorators
```

### start ❌

Start the development environment. It runs `src/index.js` and watches for 
changes. It re-runs automatically on source change. `babel` rules for `build` 
command apply here as well.

### test ❌

Test the project using `jest`. Jest will look for files that match these 
conventions:
- Files ending with `.test.js`.
- Files ending with `.spec.js`. 
- `.js` files in `__tests__` folders.

There is a `jest` field inside `package.json` which specifies the default jest 
config. If you like, you can change it to suit your needs.

Unless you are in `CI`, your tests will run in interactive watch mode.

Options: <br>
`--no-watch`: Specify to never start tests in watch mode<br>
`--coverage`: Get your code coverage

### format ❌

Format your project using `prettier`. By default, following prettier options 
are set:
`--no-semi`, `--single-quote`, `--trailing-comma all`

You can add a `.prettierrc` or `prettier` field in `package.json` to provide 
your own config.

Options:<br>
`—-files`: Files to run prettier on. By default, all `.js` files inside `src/` 
will be formatted.<br>

### lint ❌

Lint using `eslint`. By default `eslint-config-cosmo` is used. If you want to 
extend or override the rules, add `.eslintrc` to your project root.

Options:<br>
`—-files`: Files to run eslint on. By default, all `.js` files inside `src/` 
will be selected.<br>

### precommit ❌

Run precommit hooks. Before every commit, `format` and `lint` commands are run 
on the staged files. This way you never commit bad code. To add more commands, 
change `precommit` script in `package.json`
