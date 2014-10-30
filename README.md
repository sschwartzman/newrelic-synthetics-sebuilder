synthetics-sebuilder-formatter
==============================

Formatter for se-builder - generates javascript to use in New Relic Synthetics Scripted Browser tests.

## Installation

Note: I still need to create a Se-builder "plugin" around the formatter, but you can use it as-is by following these steps.

1. Download & install [se-builder](http://sebuilder.github.io/se-builder/). Yes, you'll need [FireFox](https://www.mozilla.org/en-US/firefox/new/) too.
2. Copy nr-synthetics.js from this repo into this directory on your laptop:
`/Users/[you]/Library/Application Support/Firefox/Profiles/[your_profile]/extensions/seleniumbuilder@saucelabs.com/chrome/content/html/js/builder/selenium2/io/formats`
3. Backup and Edit the following file: 
`/Users/[you]/Library/Application Support/Firefox/Profiles/[your_profile]/extensions/seleniumbuilder@saucelabs.com/chrome/content/html/js/loader.js`
4. Add the following to the huge list in `builder.loader.mainScripts = [` (you'll see what I mean):
   `"builder/selenium2/io/formats/nr-synthetics.js",`
5. Restart the se-builder if you have it running. You don't have to restart Firefox, just exit and re-open the IDE.

## Usage

1. Write, record or open a test. 
   * Be sure to create in "Selenium 2" format, or convert your script to it.
2. In the menu bar, click File --> Export...
3. Click "New Relic Synthetics - WebDriverJS"
4. Save the result to whatever name you want. 
   * Add ".js" to the end of the name so that it looks pretty in TextWrangler/Sublime/vi/whatever.
5. Cut and paste the contents of this file to a new Scripted Browser.
6. ???
7. Profit!