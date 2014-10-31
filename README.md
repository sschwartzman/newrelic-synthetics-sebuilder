New Relic Synthetics Formatter for Se-Builder
==============================

Formatter for se-builder - generates javascript to use in New Relic Synthetics Scripted Browser tests.

## Download

[Download link for plugin](https://github.com/sschwartzman/newrelic-synthetics-sebuilder/blob/master/nr_synthetics_formatter.zip)

## Install

1. Download & install [se-builder](http://sebuilder.github.io/se-builder/).
   * Yes, you'll need [FireFox](https://www.mozilla.org/en-US/firefox/new/) too.
2. [Download the plugin](https://github.com/sschwartzman/newrelic-synthetics-sebuilder/blob/master/nr_synthetics_formatter.zip)
2. Unzip the plugin into the `SeBuilder/plugins` directory on in your Firefox profile. Here are some common locations for that:
   * Mac: `/Users/[you]/Library/Application Support/Firefox/Profiles/[your_profile]/SeBuilder/plugins`
   * Win: `C:/Users/[you]/Appdata/Roaming/Mozilla/Firefox/Profiles/[your_profile]/SeBuilder/plugins`
   * Linux/Unix: `~/.mozilla/firefox/[your_profile]/SeBuilder/plugins`
3. Restart the se-builder if you have it running. You don't have to restart Firefox, just exit and re-open se-builder.

## Use

1. Write, record or open a test. 
   * Be sure to create in "Selenium 2" format, or convert your existing script to it.
2. In the menu bar, click File --> Export...
3. Click "New Relic Synthetics (WebDriverJS)"
4. Save the result to any name and location you want, so long as you can find it! 
   * Add ".js" to the end of the name so that it looks pretty in your text editor of choice.
5. Cut and paste the contents of this file to a new Scripted Browser.
6. Validate Test and Save!