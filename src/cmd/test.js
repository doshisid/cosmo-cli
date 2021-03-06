const test = require('../scripts/test')
const createHandler = require('../utils/createHandler')

exports.command = 'test'

exports.description = 'Run tests using Jest'

exports.builder = yargs =>
  yargs.options({
    noWatch: {
      describe: 'Dont run tests on watch mode',
    },
    coverage: {
      describe: 'Get code coverage',
      default: false,
    },
    ci: {
      describe: 'Run tests in CI mode',
      default: false,
    },
  })

exports.handler = createHandler(argv => {
  test(argv)
})
