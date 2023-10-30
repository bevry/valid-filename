/* eslint-disable no-control-regex */

/** Check if the filename will work on any system.
 * @param filename The filename to check for validity, it should not be a file path, only the filename/basename (with or without extension).
 */
export default function isValidFilename(filename: string) {
	// https://stackoverflow.com/a/122431
	// https://support.microsoft.com/en-us/office/restrictions-and-limitations-in-onedrive-and-sharepoint-64883a5d-228e-48f5-b3d2-eb39e07630fa#invalidcharacters
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
