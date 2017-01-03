builder.selenium2.io.addLangFormatter({
  name: "New Relic Synthetics (WebDriverJS)",
  extension: ".js",
  not: "!",
  start:
    "/**\n" +
    " * Script Name: {scriptName}\n" +
  " * \n" +
    " * Generated script for New Relic Synthetics\n" +
    " * Generated using se-builder with New Relic Synthetics Formatter\n" +
    " *\n" +
    " * Feel free to explore, or check out the full documentation\n" +
    " * https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers\n" +
    " * for details.\n" +
    " */\n\n" +
    "/** CONFIGURATIONS **/\n\n" +
    "// Theshold for duration of entire script - fails test if script lasts longer than X (in ms)\n" +
    "// Script-wide timeout for all wait and waitAndFind functions (in ms)\n" +
    "var DefaultTimeout = {timeoutSeconds}000;\n" +
    "// Change to any User Agent you want to use.\n" +
    "// Leave as \"default\" or empty to use the Synthetics default.\n" +
    "var UserAgent = \"default\";\n\n" +
    "/** HELPER VARIABLES AND FUNCTIONS **/\n\n" +
    "var assert = require('assert'),\n" +
    "  By = $driver.By,\n" +
    "  browser = $browser.manage(),\n" +
    "  startTime = Date.now(),\n" +
    "  stepStartTime = Date.now(),\n" +
    "  prevMsg = '',\n" +
    "  prevStep = 0,\n" +
    "  lastStep = 9999,\n" +
    "VARS = {};\n" +
    "// Uncomment and use this if you're running Se-Builder 2 and used Manual Entry variables.\n" +
    "// If you don't know what those are, fuggedaboutit!\n" +
    "// VARS = {{scriptManualEntryData}};\n\n" +
    "var log = function(thisStep, thisMsg) {\n" +
    "  if (thisStep > 1 || thisStep == lastStep) {\n" +
    "    var totalTimeElapsed = Date.now() - startTime;\n" +
    "    var prevStepTimeElapsed = totalTimeElapsed - stepStartTime;\n" +
    "    console.log('Step ' + prevStep + ': ' + prevMsg + ' FINISHED. It took ' + prevStepTimeElapsed + 'ms to complete.');\n" +
    "    $util.insights.set('Step ' + prevStep + ': ' + prevMsg, prevStepTimeElapsed);\n" +
    "    if (DefaultTimeout > 0 && totalTimeElapsed > DefaultTimeout) {\n" +
    "      throw new Error('Script timed out. ' + totalTimeElapsed + 'ms is longer than script timeout threshold of ' + DefaultTimeout + 'ms.');\n" +
    "    }\n" +
    "  }\n" +
    "  if (thisStep > 0 && thisStep != lastStep) {\n" +
    "    stepStartTime = Date.now() - startTime;\n" +
    "    console.log('Step ' + thisStep + ': ' + thisMsg + ' STARTED at ' + stepStartTime + 'ms.');\n" +
    "    prevMsg = thisMsg;\n" +
    "    prevStep = thisStep;\n" +
    "  }\n" +
    "};\n\n" +
    "/** BEGINNING OF SCRIPT **/\n\n" +
    "console.log('Starting synthetics script: {scriptName}');\n" +
    "console.log('Default timeout is set to ' + (DefaultTimeout/1000) + ' seconds');\n" +
    "console.log('Variables set in this script: ', VARS);\n" +
    "\n" +
    "// Setting User Agent is not then-able, so we do this first (if defined and not default)\n" +
    "if (UserAgent && (0 !== UserAgent.trim().length) && (UserAgent != 'default')) {\n" +
    "  $browser.addHeader('User-Agent', UserAgent);\n" +
    "  console.log('Setting User-Agent to ' + UserAgent);\n" +
    "}\n\n" +
    "// Get browser capabilities and do nothing with it, so that we start with a then-able command\n" +
    "$browser.getCapabilities().then(function () { })\n\n",
  end:
    ".then(function() {\n" +
    "  log(lastStep, '');\n" +
    "  console.log('Browser script execution SUCCEEDED.');\n" +
    "}, function(err) {\n" +
    "  console.log ('Browser script execution FAILED.');\n" +
    "  throw(err);\n" +
    "});\n\n" +
    "/** END OF SCRIPT **/",

lineForType: {
    "get": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify("$browser.get({url})" )); },
    "refresh":
      function(step) { return scriptify("$browser.navigate().refresh()"); },
    "goBack":
      function(step) { return scriptify("$browser.navigate().back()"); },
    "goForward":
      function(step) { return scriptify("$browser.navigate().forward()"); },
    "close":
      "",
    "print": function(step, escapeValue, userParams, doSubs) {
       doSubs(commentstep() +
       ".then(function () {\n" +
        "  log(" + thisstep + ", '{stepTypeName} {text}');\n" +
        "  console.log({text}); })\n\n"); },
    "print": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify("console.log({text})" )); },
    "pause":
      function(step) { return scriptify("$browser.sleep( " + step.waitTime + ")"); },
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
    "store": function(step, escapeValue, userParams, doSubs) {
      return doSubs(commentstep() +
        ".then(function () {\n" +
        "  log(" + thisstep + ", '{stepTypeName} ${{variable}}');\n" +
        "  ${{variable}} = '' + {text}; })\n\n"); },
    "clickElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { el.click()")); },
    "doubleClickElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { $browser.actions().doubleClick(el).perform()")); },
    "mouseOverElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { $browser.actions().mouseMove(el).perform()")); },
    "clickElementWithOffset": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) {\n" +
        "  $browser.actions().mouseMove(el, {offset}).click().perform()")); },
    "setElementText": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) {\n" +
        "  el.clear();\n" +
        "  el.sendKeys({text})")); },
    "sendKeysToElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { el.sendKeys({text})")); },
    "setElementSelected": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function(el) { el.isSelected()\n" +
        "  .then(function(bool) { if (!bool) { el.click(); } })")); },
    "setElementNotSelected": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function(el) { el.isSelected()\n" +
        "  .then(function(bool) { if (bool) { el.click(); } })")); },
    "clearSelections": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { el.clear()")); },
    "dragToAndDropElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { $browser.actions().dragAndDrop(el, {targetLocator}).perform()")); },
    "clickAndHoldElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { $browser.actions().mouseDown(el).perform()")); },
    "releaseElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { $browser.actions().mouseUp(el).perform()")); },
    "submitElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { el.submit()")); },
    "addCookie":
      function(step, escapeValue) {
        var data = {value: step.value, name: step.name};
        step.options.split(",").forEach(function(entry) {
          var entryArr = entry.split("=");
          data[entryArr[0]] = entryArr[1];
        });
        return commentstep() +
          ".then(function () {\n" +
          "  log(" + thisstep + ", 'addCookie " + data['name'] + ", " + data['value'] + "');\n" +
          "  browser.addCookie('" + data['name'] + "', '" + data['value'] + "');\n" +
          "})\n\n";
      },
    "deleteCookie":
      function(step) { return scriptify("browser.deleteCookie(\"" + step.name + "\")"); },
    "saveScreenshot":
      function(step) { return commentstep() +
          ".then(function () {\n" +
          "  log(" + thisstep + ", '$browser.takeScreenshot()');\n" +
          "  $browser.takeScreenshot();\n" +
          "})\n\n";
      },
  },
  waitFor: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return doSubs(
        commentstep() +
        ".then(function () {\n" +
        "  log(" + thisstep + ", '{stepTypeName} {negNot}{cmp}');\n" +
        "  return $browser.wait(function() {\n" +
        "    {getter}\n" +
        "    return {value} != {cmp};\n" +
        "  }, DefaultTimeout);\n" +
        "{getterFinish}", getter);
    } else {
      return doSubs(
        commentstep() +
        ".then(function () {\n" +
        "  log(" + thisstep + ", '{stepTypeName} {cmp}');\n" +
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
        commentstep() +
        ".then(function () {\n" +
        "  log(" + thisstep + ", '{stepTypeName} {negNot}{cmp}');\n" +
        "  {getter}\n" +
        "    assert.notEqual({value}, {cmp}, '{stepTypeName} {negNot}{cmp} FAILED.');\n" +
        "{getterFinish}", getter);
    } else {
      return doSubs(
        commentstep() +
        ".then(function () {\n" +
        "  log(" + thisstep + ", '{stepTypeName} {negNot}{cmp}');\n" +
        "  {getter}\n" +
        "    assert.equal({value}, {cmp}, '{stepTypeName} {negNot}{cmp} FAILED.');\n" +
        "{getterFinish}", getter);
    }
  },
  verify: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return doSubs(
        commentstep() +
        ".then(function () {\n" +
        "  log(" + thisstep + ", '{stepTypeName} {negNot}{cmp}');\n" +
        "  {getter}\n" +
        "  if ({value} == {cmp}) {\n" +
        "    console.log('{stepTypeName} {negNot}{cmp} FAILED.');\n" +
        "    $browser.takeScreenshot();\n" +
        "  } else {\n" +
        "    console.log('{stepTypeName} {negNot}{cmp} SUCCEEDED.');\n" +
        "  }\n" +
        "{getterFinish}", getter);
    } else {
      return doSubs(
        commentstep() +
        ".then(function () {\n" +
        "  log(" + thisstep + ", '{stepTypeName} {negNot}{cmp}');\n" +
        "  {getter}\n" +
        "  if ({value} != {cmp}) {\n" +
        "    console.log('{stepTypeName} {negNot}{cmp} FAILED');\n" +
        "    $browser.takeScreenshot();\n" +
        "  } else {\n" +
        "    console.log('{stepTypeName} {negNot}{cmp} SUCCEEDED.');\n" +
        "  }\n" +
        "{getterFinish}", getter);
    }
  },
  store: function(step, escapeValue, doSubs, getter) {
    return doSubs(
      commentstep() +
      ".then(function () {\n" +
      "  log(" + thisstep + ", '{stepTypeName} ${{variable}}');\n" +
      "  {getter}\n" +
      "  ${{variable}} = {value};\n" +
      "{getterFinish}", getter);
  },
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
      getter: "return browser.getCookie({name}); })\n" +
      "  .then(function (cookie) { return cookie.value; })\n" +
      "  .then(function (value) {",
      getterFinish: "})\n\n",
      cmp: "{value}",
      value: "value"
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
  boolean_assert: function(step, escapeValue, doSubs, getter) {
    return doSubs(
      commentstep() +
      ".then(function () {\n" +
      "  log(" + thisstep + ", '{stepTypeName} {negNot}{value}');\n" +
      "  {getter}.then(function (bool) {\n" +
      "    assert.ok(({negNot}bool), '{stepTypeName} FAILED.');\n" +
      "  });\n" +
      "{getterFinish}", getter); },
  boolean_verify: function(step, escapeValue, doSubs, getter) {
    return doSubs(
      commentstep() +
      ".then(function () {\n" +
      "  log(" + thisstep + ", '{stepTypeName} {negNot}{value}');\n" +
      "  {getter}.then(function (bool) {\n" +
      "    if ({posNot}bool) {\n" +
      "      console.log('{stepTypeName} FAILED.');\n" +
      "      $browser.takeScreenshot();\n" +
      "    } else {\n" +
      "      console.log('{stepTypeName} SUCCEEDED.');\n" +
      "    }\n" +
      "  });\n" +
      "{getterFinish}", getter); },
  boolean_waitFor: function(step, escapeValue, doSubs, getter) {
    return doSubs(
      commentstep() +
      ".then(function () {\n" +
      "  log(" + thisstep + ", '{stepTypeName} {negNot}{value}');\n" +
      "  $browser.wait(function () {\n" +
      "     return {getter}.then(function (bool) { return {negNot}bool; });\n" +
      "  }, DefaultTimeout);\n" +
      "})\n\n", getter); },
  boolean_store: function(step, escapeValue, doSubs, getter) {
    return doSubs(
      commentstep() +
      ".then(function () {\n" +
      "  log(" + thisstep + ", '{stepTypeName} ${{variable}}');\n" +
      "  {getter}.then(function (bool) { ${{variable}} = bool; });\n" +
      "{getterFinish}", getter); },
  boolean_getters: {
    "TextPresent": {
      getter: "$browser.findElement(By.tagName('body')).getText()\n" +
      "  .then(function (text) { return text.indexOf({text}) != -1; })",
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
      getter: "browser.getCookie({name}).then(function (cookie) { return cookie !== null; })",
      getterFinish: "})\n\n",
      value: "{name}"
    },
    "AlertPresent": {
      getter: "$browser.switchTo().alert().then(function () { return true; }).thenCatch(function (e) { return false; })",
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

var thisstep = 0;

function commentstep() {
  thisstep++;
  return "\/\/ Step " + thisstep + "\n";
}

function print_nr_unsupported(thing) {
  return "\/\/ Function " + thing + " is not supported by New Relic Synthetics.\n";
}

function scriptify(msg) {
  var msg_fixed = msg.replace(/'/g, '"');
  return commentstep() +
    ".then(function() {\n" +
    "  log(" + thisstep + ", \'" + msg_fixed + "\');\n" +
    "  return " + msg + "; })\n\n";
}

function scriptify_complex(logmsg, msg) {
  var logmsg_fixed = logmsg.replace(/'/g, '"');
  return commentstep() +
    ".then(function() {\n" +
    "  log(" + thisstep + ", \'" + logmsg_fixed + "\');\n" +
    "  return " + msg + "; })\n\n";
}

if (builder && builder.loader && builder.loader.loadNextMainScript) { builder.loader.loadNextMainScript(); }
