/* eslint-disable no-control-regex */

/** Check if the filename will work on any system.
 * @param filename The filename to check for validity, it should not be a file path, only the filename/basename (with or without extension).
 */
export default function isValidFilename(filename: string) {
	// https://stackoverflow.com/a/122431
	const invalidFilenameCharactersRegexp = /[/?<>\\:*|"^\u0000-\u001F]/g
	const invalidFilenameReservedWordsRegexp =
		/^(\.|\.\.|con|prn|aux|nul|com\d|lpt\d)$/i
	const invalidFilenamePatternsRegexp = /[ .]$/
	return (
		filename &&
		filename.length < 255 &&
		invalidFilenameReservedWordsRegexp.test(filename) === false &&
		invalidFilenameCharactersRegexp.test(filename) === false &&
		invalidFilenamePatternsRegexp.test(filename) === false
	)
}
