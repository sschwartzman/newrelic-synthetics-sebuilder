builder.selenium2.io.addLangFormatter({
  name: "New Relic Synthetics (WebDriverJS)",
  extension: ".js",
  not: "!",
  start:
    "/**\n" +
    " * Generated script for New Relic Synthetics\n" +
    " * Generated using se-builder with New Relic Synthetics Formatter\n" +
    " *\n" +
    " * Welcome to the Synthetics JavaScript IDE - Browser Edition\n" +
    " * You can think of it like node.js lite. Everything you'd expect to find in a\n" +
    " * node.js environment is also available here, with a few notable exceptions:\n" +
    " *\n" +
    " * - 'require' is limited to a useful subset of modules, get the full list from\n" +
    " *   https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers\n" +
    " *\n" +
    " * - We've added a few top-level vars to the scope, all starting with '$':\n" +
    " *\n" +
    " *     $browser - Synthetics-flavored WebDriver session for browser automation\n" +
    " *     $driver - Main WebDriver public API module\n" +
    " *     $http - 'request' node.js module (for making HTTP requests)\n" +
    " *     $util - Common tools to aid with grunt work\n" +
    " *     $Synthetics - The main Synthetics API module\n" +
    " *\n" +
    " * Feel free to explore, or check out the full documentation for details:\n" +
    " * https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers\n" +
    " */\n\n" +
    "/** CONFIGURATIONS **/\n\n" +
    "// Script-wide timeout for wait and waitAndFind functions (in ms)\n" +
    "var DefaultTimeout = 10000;\n" +
    "// Change to any User Agent you want to use.\n" +
    "// Leave as \"default\" or empty to use the Synthetics default.\n" +
    "var UserAgent = \"default\";\n\n" +
    "/** HELPER FUNCTIONS **/\n\n" +
    "var assert = require('assert'),\n" +
    "  actions = $browser.actions(),\n" +
    "  By = $driver.By,\n" +
    "  startTime = new Date(),\n" +
    "  thisStep = 0,\n" +
    "  VARS = {};\n" +
    "var log = function(msg) {\n" +
    "    var elapsedSecs = (new Date() - startTime) / 1000.0;\n" +
    "    console.log('Step ' + thisStep + ': ' + elapsedSecs.toFixed(1) + 's: ' + msg);\n" +
    "    thisStep++;\n" +
    "};\n" +
    "// 1st log is sometimes ignored for some reason, so this is a dummy\n" +
    "log('init');\n" +
    "function isAlertPresent() {\n" +
    "  try {\n" +
    "    var thisAlert = $browser.switchTo().alert();\n" +
    "    return true;\n" +
    "  } catch (err) { return false; }\n" +
    "}\n" +
    "function isTextPresent(text) {\n" +
    "  return $browser.findElement(By.tagName('html')).getText()\n" +
    "  .then(function (wholetext) {\n" +
    "    return wholetext.indexOf(text) != -1;\n" +
    "  });\n" +
    "}\n\n" +
    "/** BEGINNING OF SCRIPT **/\n\n" +
    "// Setting User Agent is not then-able, so we do this first (if defined and not default)\n" +
    "if ((typeof UserAgent !== 'undefined') && (UserAgent != 'default')) {\n" +
    "  $browser.addHeader('User-Agent', UserAgent);\n" +
    "  log('Setting User-Agent to ' + UserAgent);\n" +
    "}\n\n" +
    "// Get browser capabilities and do nothing with it, so that we start with a then-able command\n" +
    "$browser.getCapabilities().then(function () { })\n\n",
  end:
    ".then(function() {\n" +
    "  log('Browser script execution SUCCEEDED.');\n" +
    "}, function(err) {\n" +
    "  log ('Browser script execution FAILED.');\n" +
    "  throw(err);\n" +
    "});\n\n" +
    "/** END OF SCRIPT **/",
  lineForType: {
    "get":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {url}');\n" +
	  "  return $browser.get({url});\n" +
	  "})\n\n",
    "refresh":
      function(step) { return scriptify("$browser.navigate().refresh()"); },
    "goBack":
      function(step) { return scriptify("$browser.navigate().back()"); },
    "goForward":
      function(step) { return scriptify("$browser.navigate().forward()"); },
    "close":
      "",
    "print":
      ".then(function () { log('{text}'); })\n\n",
    "pause":
      function(step) { return scriptify("$browser.sleep( " + step.waitTime + "})"); },
    "switchToFrame":
      function(step) { return scriptify("$browser.switchTo().frame('" + step.identifier + "')"); },
    "switchToFrameByIndex":
      function(step) { return scriptify("$browser.switchTo().frame('" + step.index + "')"); },
    "switchToWindow":
      function(step) { return scriptify("$browser.switchTo().window('" + step.name + "')"); },
    "switchToDefaultContent":
      function(step) { return scriptify("$browser.switchTo().defaultContent()"); },
     "answerAlert":
      function(step) { return scriptify("$browser.switchTo().alert().sendKeys(" + step.text + ")"); },
    "acceptAlert":
      function(step) { return scriptify("$browser.switchTo().alert().accept()"); },
    "dismissAlert":
      function(step) { return scriptify("$browser.switchTo().alert().dismiss()"); },
    "store":
      ".then(function () {  ${{variable}} = '' + {text}; })\n\n",
    "clickElement":
	  ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +
	  "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
	  ".then(function (el) { actions.click(el).perform(); })\n\n",
    "doubleClickElement":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +
	  "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
	  ".then(function (el) { actions.doubleClick(el).perform(); })\n\n",
    "mouseOverElement":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +
	  "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
	  ".then(function (el) { actions.mouseMove(el).perform(); })\n\n",
    "clickElementWithOffset":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +
	  "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
	  ".then(function (el) {\n" +
	  "  actions.mouseMove(el, {offset}).perform();\n" +
	  "  actions.click().perform(); })\n\n",
    "setElementText":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +
	  "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
	  ".then(function (el) {\n" +
      "  el.clear();\n" +
      "  el.sendKeys({text}); })\n\n",
    "sendKeysToElement":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +  
      "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
	  ".then(function (el) { el.sendKeys({text}); })\n\n",
    "setElementSelected":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +
	  "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
	  ".then(function(el) { return el.isSelected(); })\n" +
	  ".then(function (bool) { if(!bool) { actions.click(By.{locatorBy}({locator})).perform(); } })\n\n",
    "setElementNotSelected":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +
	  "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
	  ".then(function(el) { return el.isSelected(); })\n" +
      ".then(function (bool) { if(bool) { actions.click(By.{locatorBy}({locator})).perform(); } })\n\n",
    "clearSelections":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +
	  "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
	  ".then(function (el) { el.clear(); })\n\n",
    "dragToAndDropElement":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +
	  "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
      ".then(function (el) { actions.dragAndDrop(el, {targetLocator}).perform(); })\n\n",
    "clickAndHoldElement":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +
	  "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
	  ".then(function (el) { actions.mouseDown(el).perform(); })\n\n",
    "releaseElement":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +
	  "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
	  ".then(function (el) { actions.mouseUp(el).perform(); })\n\n",
    "submitElement":
      ".then(function () {\n" +
	  "  log('{stepTypeName} {locator}');\n" +
	  "  return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
	  ".then(function (el) { el.submit(); })\n\n",
    "addCookie":
      function(step, escapeValue) {
        var data = {value: step.value, name: step.name};
        step.options.split(",").forEach(function(entry) {
          var entryArr = entry.split("=");
          data[entryArr[0]] = entryArr[1];
        });
        return ".then(function () {\n" +
        "  log('addCookie " + data['name'] + ", " + data['value'] + "');\n" +
	    "  $browser.manage().addCookie('" + data['name'] + "', '" + data['value'] + "');\n" +
	    "})\n\n";
      },
    "deleteCookie":
      function(step) { return scriptify("$browser.manage().deleteCookie(\"" + step.name + "\")"); },
    "saveScreenshot":
      function(step) { return scriptify("$browser.takeScreenshot()"); },
  },
  waitFor: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return doSubs(
        ".then(function () {\n" +
        "  log('{stepTypeName} {negNot}{cmp}');\n" +
        "  return $browser.wait(function() {\n" +
        "    {getter}\n" +
        "    return {value} != {cmp};\n" +
        "  }, DefaultTimeout);\n" +
        "{getterFinish}", getter);
    } else {
      return doSubs(
        ".then(function () {\n" +
        "  log('{stepTypeName} {cmp}');\n" +
        "  return $browser.wait(function() {\n" +
        "    {getter}\n" +
        "    return {value} == {cmp};\n" +
        "  }, DefaultTimeout);\n" +
        "{getterFinish}", getter);
    }
  },
  assert: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return doSubs(
        ".then(function () {\n" +
        "  log('{stepTypeName} {negNot}{cmp}');\n" +
        "  {getter}\n" +
        "    assert.notEqual({value}, {cmp}, '!{stepTypeName} failed');\n" +
        "{getterFinish}", getter);
    } else {
      return doSubs(
        ".then(function () {\n" +
        "  log('{stepTypeName} {negNot}{cmp}');\n" +
        "  {getter}\n" +
        "    assert.equal({value}, {cmp}, '{stepTypeName} failed');\n" +
        "{getterFinish}", getter);
    }
  },
  verify: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return doSubs(
        ".then(function () {\n" +
        "  log('{stepTypeName} {negNot}{cmp}');\n" +
        "  {getter}\n" +
        "  if ({value} == {cmp}) {\n" +
        "    console.log('!{stepTypeName} failed');\n" +
        "  }\n" +
        "{getterFinish}", getter);
    } else {
      return doSubs(
        ".then(function () {\n" +
        "  log('{stepTypeName} {negNot}{cmp}');\n" +
        "  {getter}\n" +
        "  if ({value} != {cmp}) {\n" +
        "    console.log('{stepTypeName} failed');\n" +
        "  }\n" +
        "{getterFinish}", getter);
    }
  },
  store:
    ".then(function () {\n" +
    "  log('{stepTypeName} ${{variable}}');\n" +
    "  {getter}\n" +
    "  ${{variable}} = '' + {value};\n" +
    "{getterFinish}",
  getters: {    
    "BodyText": {
      getter: "return $browser.findElement($driver.By.tagName('body')); })\n" +
        "  .then(function (el) { return el.getText(); })\n" +
        "  .then(function (text) {",
      getterFinish: "})\n\n",
      cmp: "{text}",
      value: "text"
    },
    "PageSource": {
      getter: "return $browser.getPageSource(); })\n" +
        "  .then(function (source) {",
      getterFinish: "})\n\n",
      cmp: "{source}",
      value: "source"
    },
    "Text": {
      getter: "return $browser.findElement(By.{locatorBy}({locator})); })\n" +
        "  .then(function (el) { return el.getText(); })\n" +
        "  .then(function (text) {",
      getterFinish: "})\n\n",
      cmp: "{text}",
      value: "text"
    },
    "CurrentUrl": {
      getter: "return $browser.getCurrentUrl(); })\n" +
      "  .then(function (url) {",
      getterFinish: "})\n\n",
      cmp: "{url}",
      value: "url"
    },
    "Title": {
      getter: "return $browser.getTitle(); })\n" +
        "  .then(function (title) {",
      getterFinish: "})\n\n",
      cmp: "{title}",
      value: "title"
    },
    "ElementValue": {
      getter: "return $browser.findElement($driver.By.{locatorBy}({locator})); })\n" +
        "  .then(function (el) { return el.getAttribute('value'); })\n" +
        "  .then(function (value) {",
      getterFinish: "})\n\n",
      cmp: "{value}",
      value: "value"
    },
    "ElementStyle": {
      getter: "return $browser.findElement($driver.By.{locatorBy}({locator})); })\n" +
      "  .then(function (el) { return el.getCssValue({propertyName}); })\n" +
      "  .then(function (value) {",
      getterFinish: "})\n\n",
      cmp: "{value}",
      value: "value"
    },   
    "ElementAttribute": {
      getter: "return $browser.findElement($driver.By.{locatorBy}({locator})); })\n" +
      "  .then(function (el) { return el.getAttribute({attributeName}); })\n" +
      "  .then(function (value) {",
      getterFinish: "})\n\n",
      cmp: "{value}",
      value: "value"
    },
    "CookieByName": {
      getter: "return $browser.manage().getCookie({name}); })\n" +
      "  .then(function (cookie) {",
      getterFinish: "})\n\n",
      cmp: "{value}",
      value: "cookie"
    },
    "AlertText": {
      getter: "return $browser.switchTo().alert(); })\n" +
      "  .then(function (alert) { return alert.getText(); })\n" +
      "  .then(function (text) {",
      getterFinish: "})\n\n",
      cmp: "{text}",
      value: "text"
    },
    "Eval": {
      getter: "return $browser.executeScript({script}); })\n" +
        "  .then(function (value) {",
      getterFinish: "})\n\n",
      cmp: "{value}",
      value: "value"
    }
  },
  boolean_assert:
    ".then(function () {\n" + 
    "  log('{stepTypeName} {negNot}{value}');\n" +
    "  {getter}.then(function (bool) {\n" +
    "    assert.ok(({negNot}bool), '{stepTypeName} failed');\n" +
    "  });\n" +
    "{getterFinish}",
  boolean_verify:
    ".then(function () {\n" + 
    "  log('{stepTypeName} {negNot}{value}');\n" +
    "  {getter}.then(function (bool) {\n" +
    "    if ({posNot}bool) {\n" +
    "      $browser.quit(null);\n" +
    "      log('{negNot}{stepTypeName} failed');\n" +
    "    }\n" +
    "  });\n" +
    "{getterFinish}",
  boolean_waitFor: 
    ".then(function () {\n" +
    "  log('{stepTypeName} {negNot}{value}');\n" +
    "  $browser.wait(function () {\n" +
    "     return {getter}.then(function (bool) { return {negNot}bool; });\n" +
    "  }, DefaultTimeout);\n" +
    "})\n\n",
  boolean_store:
    ".then(function () {\n" + 
    "  ${{variable}} = {getter};\n" +
    "{getterFinish}",
  boolean_getters: {
    "TextPresent": {
      getter: "isTextPresent({text})",
      getterFinish: "})\n\n",
      value: "{text}"
    },
    "ElementPresent": {
      getter: "$browser.isElementPresent(By.{locatorBy}({locator}))",
      getterFinish: "})\n\n",
      value: "{locator}"
    },
    "ElementSelected": {
      getter: "$browser.findElement(By.{locatorBy}({locator})).isSelected()",
      getterFinish: "})\n\n",
      value: "{locator}"
    },
    "CookiePresent": {
      getter: "$browser.manage().getCookie({name})",
      getterFinish: "})\n\n",
      value: "{name}"
    },
    "AlertPresent": {
      getter: "isAlertPresent()",
      getterFinish: "})\n\n",
      value: "alert"
    }
  },
  locatorByForType: function(stepType, locatorType, locatorIndex) {
    return {
      "class name": "className",
      "id": "id",
      "link text": "linkText",
      "xpath": "xpath",
      "css selector": "css",
      "name": "name",
      "tag name": "tagName",
      "partial link text": "partialLinkText"}[locatorType];
  },
  /**
   * Processes a parameter value into an appropriately escaped expression. Mentions of variables
   * with the ${foo} syntax are transformed into expressions that concatenate the variables and
   * literals.
   * For example:
   * a${b}c
   * becomes:
   * "a" + b + "c"
   */
  escapeValue: function(stepType, value, pName) {
    if (stepType.name.startsWith("store") && pName == "variable") { return value; }
    if (stepType.name == "switchToFrameByIndex" && pName == "index") { return value; }
    // This function takes a string literal and escapes it and wraps it in quotes.
    var esc = function(v) { return "\"" + v.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/'/g, "\\'") + "\""; };

    // Don't escape numerical values.
    if (stepType == builder.selenium2.stepTypes.pause) {
      esc = function(v) { return v; };
    }

    // The following is a transducer that produces the escaped expression by going over each
    // character of the input.
    var output = "";       // Escaped expression.
    var lastChunk = "";    // Accumulates letters of the current literal.
    var hasDollar = false; // Whether we've just encountered a $ character.
    var insideVar = false; // Whether we are reading in the name of a variable.
    var varName = "";      // Accumulates letters of the current variable.
    for (var i = 0; i < value.length; i++) {
      var ch = value.substring(i, i + 1);
      if (insideVar) {
        if (ch == "}") {
          // We've finished reading in the name of a variable.
          // If this isn't the start of the expression, use + to concatenate it.
          if (output.length > 0) { output += " + "; }
          output += "VARS." + varName;
          insideVar = false;
          hasDollar = false;
          varName = "";
        } else {
          // This letter is part of the name of the variable we're reading in.
          varName += ch;
        }
      } else {
        // We're not currently reading in the name of a variable.
        if (hasDollar) {
          // But we *have* just encountered a $, so if this character is a {, we are about to
          // do a variable.
          if (ch == "{") {
            insideVar = true;
            if (lastChunk.length > 0) {
              // Add the literal we've read in to the text.
              if (output.length > 0) { output += " + "; }
              output += esc(lastChunk);
            }
            lastChunk = "";
          } else {
            // No, it was just a lone $.
            hasDollar = false;
            lastChunk += "$" + ch;
          }
        } else {
          // This is the "normal case" - accumulating the letters of a literal. Unless the letter
          // is a $, in which case this may be the start of a
          if (ch == "$") { hasDollar = true; } else { lastChunk += ch; }
        }
      }
    }
    // Append the final literal, if any, to the output.
    if (lastChunk.length > 0) {
      if (output.length > 0) { output += " + "; }
      output += esc(lastChunk);
    }
    return output;
  },
  usedVar: function(varName, varType) { return "VARS." + varName; },
  unusedVar: function(varName, varType) { return "VARS." + varName; }
});

function print_nr_unsupported(thing) {
  return "\/\/ Function " + thing + " is not supported by New Relic Synthetics.\n";
}

function scriptify(msg) {
  return ".then(function() {\n" + 
    "  log(\'" + msg + "\');\n" +
    "  return " + msg + ";\n" +
    "})\n\n"; 
}

if (builder && builder.loader && builder.loader.loadNextMainScript) { builder.loader.loadNextMainScript(); }