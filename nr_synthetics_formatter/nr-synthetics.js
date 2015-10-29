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
    "/** HELPER VARIABLES AND FUNCTIONS **/\n\n" +
    "var assert = require('assert'),\n" +
    "  By = $driver.By,\n" +
    "  browser = $browser.manage(),\n" +
    "  startTime = Date.now(),\n" +
    "  stepStartTime = Date.now(),\n" +
    "  lastMsg = '',\n" +
    "  VARS = {};\n\n" +    
    "var log = function(thisStep, msg) {\n" +
    "   if (thisStep > 0) {\n" +
    "     var lastStep = thisStep - 1;\n" +
    "     var lastStepTimeElapsed = Date.now() - (startTime + stepStartTime);\n" +
    "     console.log('Step ' + lastStep + ': ' + lastMsg + ' FINISHED. It took ' + lastStepTimeElapsed + 'ms to complete.');\n" +
    "     $util.insights.set('StepName', lastMsg);\n" +
    "     $util.insights.set('StepNumber', lastStep);\n" +
    "     $util.insights.set('StepElapsedTime', lastStepTimeElapsed);\n" +
    "   }\n" +
    "   stepStartTime = Date.now() - startTime;\n" +
    "   console.log('Step ' + thisStep + ': ' + msg + ' STARTED at ' + stepStartTime + 'ms.');\n" +
    "   lastMsg = msg;\n" +
    " };\n\n" +
    "function isAlertPresent() {\n" +
    "  try {\n" +
    "    var thisAlert = $browser.switchTo().alert();\n" +
    "    return true;\n" +
    "  } catch (err) { return false; }\n" +
    "}\n\n" +
    "function isElementSelected(el) { return $browser.findElement(el).isSelected(); }\n" + 
    "function isTextPresentIn(text, sourceEl) {\n" +
    "  return sourceEl.getText()\n" +
    "  .then(function (wholetext) {\n" +
    "    return wholetext.indexOf(text) != -1;\n" +
    "  });\n" +
    "}\n\n" +
    "function isTextPresent(text) {\n" +
    "  return isTextPresentIn(text, $browser.findElement(By.tagName('html')));\n" +
    "}\n\n" +
    "/** BEGINNING OF SCRIPT **/\n\n" +
    "log(0, 'init');\n\n" +
    "// Setting User Agent is not then-able, so we do this first (if defined and not default)\n" +
    "if (UserAgent && (0 !== UserAgent.trim().length) && (UserAgent != 'default')) {\n" +
    "  $browser.addHeader('User-Agent', UserAgent);\n" +
    "  console.log('Setting User-Agent to ' + UserAgent);\n" +
    "}\n\n" +
    "// Get browser capabilities and do nothing with it, so that we start with a then-able command\n" +
    "$browser.getCapabilities().then(function () { })\n\n",
  end:
    ".then(function() {\n" +
    "  console.log('Browser script execution SUCCEEDED.');\n" +
    "}, function(err) {\n" +
    "  console.log ('Browser script execution FAILED.');\n" +
    "  throw(err);\n" +
    "});\n\n" +
    "/** END OF SCRIPT **/",
    
lineForType: {
    "get": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify(step.id, "$browser.get({url})" )); },
    "refresh":
      function(step) { return scriptify(step.id, "$browser.navigate().refresh()"); },
    "goBack":
      function(step) { return scriptify(step.id, "$browser.navigate().back()"); },
    "goForward":
      function(step) { return scriptify(step.id, "$browser.navigate().forward()"); },
    "close":
      "",
    "print": function(step, escapeValue, userParams, doSubs) {
       doSubs(commentstep(adjuststep(step.id)) +
       ".then(function () {\n" +
        "  log(" + adjuststep(step.id) + ", '{stepTypeName} {text}');\n" +
        "  console.log({text}); })\n\n"); },
    "print": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify(step.id, "console.log({text})" )); },
    "pause":
      function(step) { return scriptify(step.id, "$browser.sleep( " + step.waitTime + ")"); },
    "switchToFrame":
      function(step) { return scriptify(step.id, "$browser.switchTo().frame('" + step.identifier + "')"); },
    "switchToFrameByIndex":
      function(step) { return scriptify(step.id, "$browser.switchTo().frame('" + step.index + "')"); },
    "switchToWindow":
      function(step) { return scriptify(step.id, "$browser.switchTo().window('" + step.name + "')"); },
    "switchToDefaultContent":
      function(step) { return scriptify(step.id, "$browser.switchTo().defaultContent()"); },
     "answerAlert":
      function(step) { return scriptify(step.id, "$browser.switchTo().alert().sendKeys(" + step.text + ")"); },
    "acceptAlert":
      function(step) { return scriptify(step.id, "$browser.switchTo().alert().accept()"); },
    "dismissAlert":
      function(step) { return scriptify(step.id, "$browser.switchTo().alert().dismiss()"); },
    "store": function(step, escapeValue, userParams, doSubs) {
      return doSubs(commentstep(adjuststep(step.id)) +
        ".then(function () {\n" +
        "  log(" + adjuststep(step.id) + ", '{stepTypeName} ${{variable}}');\n" +
        "  ${{variable}} = '' + {text}; })\n\n"); },
    "clickElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { el.click()")); },
    "doubleClickElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { $browser.actions().doubleClick(el).perform()")); },
    "mouseOverElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { $browser.actions().mouseMove(el).perform()")); },
    "clickElementWithOffset": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) {\n" +
        "  $browser.actions().mouseMove(el, {offset}).click().perform()")); },
    "setElementText": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) {\n" +
        "  el.clear();\n" +
        "  el.sendKeys({text})")); },
    "sendKeysToElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { el.sendKeys({text})")); },
    "setElementSelected": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function(el) { el.isSelected()\n" +
        "  .then(function(bool) { if (!bool) { el.click(); } })")); },
    "setElementNotSelected": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function(el) { el.isSelected()\n" +
        "  .then(function(bool) { if (bool) { el.click(); } })")); },
    "clearSelections": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { el.clear()")); },
    "dragToAndDropElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { $browser.actions().dragAndDrop(el, {targetLocator}).perform()")); },
    "clickAndHoldElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
        "{stepTypeName} {locator}",
        "return $browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { $browser.actions().mouseDown(el).perform()")); },
    "releaseElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
        "{stepTypeName} {locator}",
        "$browser.waitForAndFindElement(By.{locatorBy}({locator}), DefaultTimeout); })\n" +
        ".then(function (el) { $browser.actions().mouseUp(el).perform()")); },
    "submitElement": function(step, escapeValue, userParams, doSubs) {
      return doSubs(scriptify_complex(step.id,
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
        return commentstep(adjuststep(step.id)) + 
          ".then(function () {\n" +
          "  log(" + adjuststep(step.id) + ", 'addCookie " + data['name'] + ", " + data['value'] + "');\n" +
          "  browser.addCookie('" + data['name'] + "', '" + data['value'] + "');\n" +
          "})\n\n";
      },
    "deleteCookie":
      function(step) { return scriptify(step.id, "browser.deleteCookie(\"" + step.name + "\")"); },
    "saveScreenshot":
      function(step) { return commentstep(adjuststep(step.id)) + 
          ".then(function () {\n" +
          "  log(" + adjuststep(step.id) + ", '$browser.takeScreenshot()');\n" +
          "  $browser.takeScreenshot();\n" +
          "})\n\n"; 
      },
  },
  waitFor: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return doSubs(
        commentstep(adjuststep(step.id)) + 
        ".then(function () {\n" +
        "  log(" + adjuststep(step.id) + ", '{stepTypeName} {negNot}{cmp}');\n" +
        "  return $browser.wait(function() {\n" +
        "    {getter}\n" +
        "    return {value} != {cmp};\n" +
        "  }, DefaultTimeout);\n" +
        "{getterFinish}", getter);
    } else {
      return doSubs(
        commentstep(adjuststep(step.id)) + 
        ".then(function () {\n" +
        "  log(" + adjuststep(step.id) + ", '{stepTypeName} {cmp}');\n" +
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
        commentstep(adjuststep(step.id)) + 
        ".then(function () {\n" +
        "  log(" + adjuststep(step.id) + ", '{stepTypeName} {negNot}{cmp}');\n" +
        "  {getter}\n" +
        "    assert.notEqual({value}, {cmp}, '{stepTypeName} {negNot}{cmp} FAILED.');\n" +
        "{getterFinish}", getter);
    } else {
      return doSubs(
        commentstep(adjuststep(step.id)) + 
        ".then(function () {\n" +
        "  log(" + adjuststep(step.id) + ", '{stepTypeName} {negNot}{cmp}');\n" +
        "  {getter}\n" +
        "    assert.equal({value}, {cmp}, '{stepTypeName} {negNot}{cmp} FAILED.');\n" +
        "{getterFinish}", getter);
    }
  },
  verify: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return doSubs(
        commentstep(adjuststep(step.id)) + 
        ".then(function () {\n" +
        "  log(" + adjuststep(step.id) + ", '{stepTypeName} {negNot}{cmp}');\n" +
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
        commentstep(adjuststep(step.id)) + 
        ".then(function () {\n" +
        "  log(" + adjuststep(step.id) + ", '{stepTypeName} {negNot}{cmp}');\n" +
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
      commentstep(adjuststep(step.id)) + 
      ".then(function () {\n" +
      "  log(" + adjuststep(step.id) + ", '{stepTypeName} ${{variable}}');\n" +
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
      commentstep(adjuststep(step.id)) + 
      ".then(function () {\n" + 
      "  log(" + adjuststep(step.id) + ", '{stepTypeName} {negNot}{value}');\n" +
      "  {getter}.then(function (bool) {\n" +
      "    assert.ok(({negNot}bool), '{stepTypeName} FAILED.');\n" +
      "  });\n" +
      "{getterFinish}", getter); },
  boolean_verify: function(step, escapeValue, doSubs, getter) {
    return doSubs(
      commentstep(adjuststep(step.id)) + 
      ".then(function () {\n" + 
      "  log(" + adjuststep(step.id) + ", '{stepTypeName} {negNot}{value}');\n" +
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
      commentstep(adjuststep(step.id)) + 
      ".then(function () {\n" +
      "  log(" + adjuststep(step.id) + ", '{stepTypeName} {negNot}{value}');\n" +
      "  $browser.wait(function () {\n" +
      "     return {getter}.then(function (bool) { return {negNot}bool; });\n" +
      "  }, DefaultTimeout);\n" +
      "})\n\n", getter); },
  boolean_store: function(step, escapeValue, doSubs, getter) {
    return doSubs(
      commentstep(adjuststep(step.id)) + 
      ".then(function () {\n" + 
      "  log(" + adjuststep(step.id) + ", '{stepTypeName} ${{variable}}');\n" +
      "  {getter}.then(function (bool) { ${{variable}} = bool; });\n" +
      "{getterFinish}", getter); },
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
      getter: "isElementSelected(By.{locatorBy}({locator}))",
      getterFinish: "})\n\n",
      value: "{locator}"
    },
    "CookiePresent": {
      getter: "browser.getCookie({name}).then(function (cookie) { return cookie !== null; })",
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

var firststep = true;
var stepoffset = 0;

function adjuststep(stepid) {
  if (firststep === true) {
    firststep = false;
    stepoffset = stepid - 1;
  }
  return stepid - stepoffset;
}

function print_nr_unsupported(thing) {
  return "\/\/ Function " + thing + " is not supported by New Relic Synthetics.\n";
}

function commentstep(stepid) {
  return "\/\/ Step " + stepid + "\n";
}

function scriptify(stepid, msg) {
  var adjustedstep = adjuststep(stepid);
  return commentstep(adjustedstep) +
    ".then(function() {\n" + 
    "  log(" + adjuststep(stepid) + ", \'" + msg + "\');\n" +
    "  return " + msg + "; })\n\n"; 
}
      
function scriptify_complex(stepid, logmsg, msg) {
  var adjustedstep = adjuststep(stepid);
  return commentstep(adjustedstep) +
    ".then(function() {\n" + 
    "  log(" + adjuststep(stepid) + ", \'" + logmsg + "\');\n" +
    "  return " + msg + "; })\n\n"; 
}

if (builder && builder.loader && builder.loader.loadNextMainScript) { builder.loader.loadNextMainScript(); }