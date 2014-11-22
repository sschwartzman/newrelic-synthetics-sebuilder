New Relic Synthetics Formatter for Se-Builder
==============================

Formatter for se-builder - generates javascript to use in New Relic Synthetics Scripted Browser tests.

## Download the Plugin

[Download link for plugin](https://github.com/sschwartzman/newrelic-synthetics-sebuilder/blob/master/nr_synthetics_formatter.zip)

## Install the Plugin

1. Download & install [se-builder](http://sebuilder.github.io/se-builder/).
   * Yes, you'll need [FireFox](https://www.mozilla.org/en-US/firefox/new/) too.
2. Run Se-builder at least once before proceeding. Running it the first time creates the folder where you'll put the plugin.
   * Se-builder will appear as a small icon that looks like a Lego piece in the Firefox add-ons toolbar. Click on that icon to load.
3. [Download the plugin](https://github.com/sschwartzman/newrelic-synthetics-sebuilder/blob/master/nr_synthetics_formatter.zip)
4. Unzip the plugin into the `SeBuilder/plugins` directory on in your Firefox profile. Here are some common locations for that:
   * Mac: `/Users/[you]/Library/Application Support/Firefox/Profiles/[your_profile]/SeBuilder/plugins`
     Can't find the "Library" folder? If you need to open it:
     1. Open your Home folder in Finder.
     2. Right-click in the finder window and click "Show View Options", or open it by pressing ⌘-J.
     3. Check the box next to Show Library Folder.
   * Win: `C:/Users/[you]/Appdata/Roaming/Mozilla/Firefox/Profiles/[your_profile]/SeBuilder/plugins`
   * Linux/Unix: `~/.mozilla/firefox/[your_profile]/SeBuilder/plugins`
5. Restart the se-builder if you still have it running. You don't have to restart Firefox, just exit and re-open Se-builder.
6. To verify that the plugin is loaded, click "Manage plugins" in the opening dialog box. You should see "New Relic Synthetics Formatter #.#  Installed" in the Plugins list.
   * If it didn't load, try restarting Firefox entirely and then re-running Se-builder.
   
## Using the Formatter

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

## Having Issues?

* Please submit an issue to this github repo by clicking the "Issues" link on the right-hand menu and then click "New Issue"
* Please cut-and-paste the following detail into the issue:
  * Your original script created in se-builder - either in HTML or JSON format
  * The exported javascript file you pasted into Synthetics
  * The error messages and logs returned when you ran/validated your script
* *Please be patient!* Unfortunately, maintaining this script is not my day job, but I will get to your issue as soon as I can.