New Relic Synthetics<br>formatter for Selenium-builder
==============================

Plugin (formatter) for Se-builder that generates javascript from Se-builder scripts to use in New Relic Synthetics Scripted Browser tests.

## IMPORTANT - Version Compatibility

This formatter plugin is currently tested and compatible with the old version of Se-Builder, which is an unisgned plugin. <b>The old version of Se-Builder no longer runs in Firefox by default. See https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox for a workaround.</b> I will update this formatter to work with the new version (now called Selenium Builder) once it is closer to feature parity with the old version.

* Old version: Se-Builder (works with this plugin): https://github.com/SeleniumBuilder/se-builder/
* Download link for old version of Se-Builder: http://www.saucelabs.com/addons/selenium-builder-latest.xpi
* New version: Selenium Builder (untested with this plugin): https://github.com/SeleniumBuilder/selenium-builder/

## Download the plugin

[Download link for plugin](https://github.com/sschwartzman/newrelic-synthetics-sebuilder/archive/master.zip)

## Install the prerequisites

1. Download & install [se-builder](http://www.saucelabs.com/addons/selenium-builder-latest.xpi).
   * Yes, you'll need [FireFox](https://www.mozilla.org/en-US/firefox/new/) too.
2. Run Se-builder at least once before proceeding. Running it the first time creates the folder where you'll put the plugin.
   * Run it by going to Tools > Web Developer > Launch Selenium Builder.
3. Se-builder will appear as a small icon that looks like a Lego piece in the Firefox add-ons toolbar. Click on that icon to load.
   * If Se-builder does not show up, click on the Hamburger menu, click Customise, and drag the Se-builder icon from "Additional Tools and Features" on the left into the toolbar.

## Install the plugin

1. [Download the plugin](https://github.com/sschwartzman/newrelic-synthetics-sebuilder/archive/master.zip)
2. Unzip the plugin into the `SeBuilder/plugins` directory on in your Firefox profile. 
   * **NOTE:** The zip contains a folder called `nr_synthetics_formatter`. Move the **FOLDER with enclosed files** into the plugins directory, rather than moving the files themselves without the folder.
   * Can't find the Se-builder plugins directory? [Check here](#cant-find-the-plugins-directory)
3. Restart the se-builder if you still have it running. You don't have to restart Firefox, just exit and re-open Se-builder.
4. To verify that the plugin is loaded, click "Manage plugins" in the opening dialog box. You should see "New Relic Synthetics Formatter #.#  Installed" in the Plugins list.
   * *If the Manage Plugins page throws an error, don't fret!* This may be a issue with se-builder that doesn't impact the plugin. If it does happen, try recording a simple script and exporting it. If you see "New Relic Synthetics (WebDriverJS)" in the File -> Export dialog, the plugin is working properly.
   * If it didn't load, try restarting Firefox entirely and then re-running Se-builder.
   
## Using the formatter

1. Write, record or open a test. 
   * Be sure to create in "Selenium 2" format, or convert your existing script to it.
   * Check out the [Se-builder Getting Started Guide](https://github.com/sebuilder/se-builder/wiki/Getting-Started#recording-your-first-script) for more details on creating/recording scripts.
2. Export your test to Synthetics format
   * Once you have a script ready to export, in the menu bar, click File --> Export...
   * Click "New Relic Synthetics (WebDriverJS)"
   * Save the result to any name and location you want, so long as you can find it! 
   * When saving, add ".js" to the end of the file name so that it looks pretty in your text editor of choice.
3. Create a new Scripted Browser monitor in Synthetics
   * Click "Add New Monitor" in the main screen of Synthetics or visit https://synthetics.newrelic.com/accounts/[your_account_id].monitors/new
   * Choose "Scripted Browser" as the monitor type, and then set the name, locations & frequency as you like.
   * In the "Script your steps" window, clear the contents there and paste the contents of your exported script.
   * Be sure to click "Validate" below this window pane to ensure that the script works properly.

## Having issues?

* Please submit an issue to this github repo by clicking the "Issues" link on the right-hand menu and then click "New Issue"
* Please cut-and-paste the following detail into the issue:
  * Your original script created in se-builder - either in HTML or JSON format
  * The exported javascript file you pasted into Synthetics
  * The error messages and logs returned when you ran/validated your script
* *Please be patient!* Unfortunately, maintaining this script is not my day job, but I will get to your issue as soon as I can.

### Can't find the plugins directory?

Here are some common locations for the plugins directory:

  * Mac: `/Users/[you]/Library/Application Support/Firefox/Profiles/[your_profile]/SeBuilder/plugins`
  * Win: `C:/Users/[you]/Appdata/Roaming/Mozilla/Firefox/Profiles/[your_profile]/SeBuilder/plugins`
  * Linux/Unix: `~/.mozilla/firefox/[your_profile]/SeBuilder/plugins`
  
##### Can't find the "Library" folder on your Mac? If you need to open it:

  1. Open your Home folder in Finder.
  2. Right-click in the finder window and click "Show View Options", or open it by pressing ⌘-J.
  3. Check the box next to Show Library Folder.
  
