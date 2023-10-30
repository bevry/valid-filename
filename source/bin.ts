#!/usr/bin/env node

import isValidFilename from './index.js'
const paths = process.argv.slice(2) || [process.cwd()]

for (const path of paths) {
	if (isValidFilename(path)) {
		console.log(`${path} is valid`)
	} else {
		console.error(`${path} is invalid`)
		process.exitCode = 1
	}
}
