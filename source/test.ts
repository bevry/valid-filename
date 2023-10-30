import { equal } from 'assert-helpers'
import kava from 'kava'
import isValidFilename from './index.js'

kava.suite('@bevry/valid-filename', function (suite, test) {
	const tests: { [filename: string]: boolean } = {
		'/': false,
		'.': false,
		'..': false,
		'foo/bar': false,
		'foo?bar': false,
		'foo<bar': false,
		'foo>bar': false,
		'foo\\bar': false,
		'foo:bar': false,
		'foo*bar': false,
		'foo|bar': false,
		'foo"bar': false,
		'foo^bar': false,
		'foo\u0000bar': false, // null character
		'foo\u001Fbar': false, // Unit Separator character
		'foo	bar': false,
		'foo👍bar': true,
		'foo-bar': true,
		'foo ': false,
		'foo.': false,
		con: false,
		prn: false,
		aux: false,
		nul: false,
		com: true,
		com1: false,
		lpt: true,
		lpt1: false,
		CON: false,
		PRN: false,
		AUX: false,
		NUL: false,
		COM: true,
		COM2: false,
		LPT: true,
		LPT1: false,
	}
	for (const filename of Object.keys(tests)) {
		test(filename, function () {
			equal(isValidFilename(filename), tests[filename])
		})
	}
})
