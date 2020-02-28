'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.cyanBright('         Yuta Saito'),
  handle: chalk.cyanBright('ys-0-sy'),
  work: chalk.red('Cloud Developer at Canon'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('ys_0_sy'),
  npm: chalk.gray('https://npmjs.com/') + chalk.cyan('~bnb'),
  github: chalk.gray('https://github.com/') + chalk.cyan('ys-0-sy'),
  web: chalk.cyan('https://ys-0-sy.dev'),
  npx: chalk.red('npx') + ' ' + chalk.cyan('@bnb/card'),
  labelWork: chalk.redBright.bold('       Work:'),
  labelTwitter: chalk.magentaBright.bold('    Twitter:'),
  labelnpm: chalk.yellowBright.bold('        npm:'),
  labelGitHub: chalk.greenBright.bold('     GitHub:'),
  labelWeb: chalk.cyanBright.bold('        Web:'),
  labelCard: chalk.blueBright.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               webing + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.cyan(boxen(output, options)))
