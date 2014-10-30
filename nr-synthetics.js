builder.selenium2.io.addLangFormatter({
  name: "New Relic Synthetics - WebDriverJS",
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
    " * Feel free to explore, or check out the full documentation\n" +
    " * https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers\n" +
    " * for details.\n" +
    " *\n" +
    " * @external webdriver\n" +
    " * @see http://selenium.googlecode.com/git/docs/api/javascript/index.html\n" +
    " *\n" +
    " * @external request\n" +
    " * @see https://github.com/mikeal/request\n" +
    " */\n\n" +
    "var assert = require('assert'),\n" +
    "  By = $driver.By,\n" +
    "  VARS = {},\n" +
    "  DefaultTimeout = 10000;\n\n",
  end:
    "\nconsole.log('Browser script execution was a SUCCESS!');\n",
  lineForType: {
    "get":
      "$browser.get({url});\n",
    "refresh":
      "$browser.refresh();\n",
    "goBack":
      "$browser.back();\n",
    "goForward":
      "$browser.forward();\n",
    "close":
      "",
    "print":
      "console.log({text});\n",
    "pause":
      "$browser.pause({waitTime})\n",
    "switchToFrame":
      "$browser.switchTo().frame('{identifier}');\n",
    "switchToFrameByIndex":
      "$browser.switchTo().frame('{index}');\n",
    "switchToWindow":
      "$browser.switchTo().window('{name}');\n",
    "switchToDefaultContent":
      "$browser.switchTo().defaultContent();\n",
    "assertAlertText":
      "assert.equal($browser.switchTo().alert().getText(), {text});\n",
    "verifyAlertText":
      "return $browser.switchTo().alert().getText() === {text};\n",
    "waitForAlertText":
      "$browser.wait(function() {\n" +
      "  return $browser.switchTo().alert().getText() === {text};\n" +
      "}, DefaultTimeout);\n",
    "storeAlertText":
      "ScriptVars[{variable}] = '' + $browser.switchTo().alert().getText();\n",
    "assertAlertPresent":
      "$browser.switchTo().alert().then(function() {\n" +
      "  assert.ok(true);\n" +
      "}, function() {\n" +
      "  assert.ok(false);\n" +
      "});\n",
    "verifyAlertPresent":
      "$browser.switchTo().alert().then(function() {\n" +
      "  return true;\n" +
      "}, function() {\n" +
      "  return false;\n" + 
      "});\n",
    "waitForAlertPresent":
      "$browser.wait(function() {\n" +
      "  $browser.switchTo().alert()\n" +
      "}, DefaultTimeout);\n",
    "storeAlertPresent":
      "$browser.switchTo().alert().then(function() {\n" +
      "   ScriptVars[{variable}] = true;\n" +
      "}, function() {\n" +
      "  ScriptVars[{variable}] = false;\n" + 
      "});\n",
    "answerAlert":
      "$browser.switchTo().alert().sendKeys({text});\n",
    "acceptAlert":
      "$browser.switchTo().alert().accept();\n",
    "dismissAlert":
      "$browser.switchTo().alert().dismiss();\n",
    "store":
      "ScriptVars['{variable}'] = '' + {text};\n",
    "clickElement":
      "$browser.findElement($driver.By.{locatorBy}({locator})).click();\n",
    "doubleClickElement":
      "$browser.findElement($driver.By.{locatorBy}({locator})).doubleClick();\n",
    "mouseOverElement":
      "$browser.findElement($driver.By.{locatorBy}({locator})).mouseMove();\n",
    "clickElementWithOffset":
      "$browser.findElement($driver.By.{locatorBy}({locator})).then(function (el) {\n" +
      "  $browser.mouseMove(el, {offset});\n" +
      "});\n",
    "setElementText":
      "$browser.findElement($driver.By.{locatorBy}({locator})).clear();\n" +
      "$browser.findElement($driver.By.{locatorBy}({locator})).sendKeys({text});\n",
    "sendKeysToElement":
      "$browser.findElement($driver.By.{locatorBy}({locator})).sendKeys({text});\n",
    "setElementSelected":
      "$browser.findElement($driver.By.{locatorBy}({locator})).then(function(el) {\n" +
      "  if(!el.isSelected()) {\n" +
      "    el.click();\n" +
      "  }\n" +
      "});\n",
    "setElementNotSelected":
      "$browser.findElement($driver.By.{locatorBy}({locator})).then(function(el) {\n" +
      "  if(el.isSelected()) {\n" +
      "    el.click();\n" +
      "  }\n" +
      "});\n",
    "clearSelections":
      "$browser.findElement($driver.By.{locatorBy}({locator})).clear();\n",
    "dragToAndDropElement":
      "$browser.findElement($driver.By.{locatorBy}({locator})).then(function(el) {\n" +
      "  $browser.dragAndDrop(el, {targetLocator})\n" +
      "});",
    "clickAndHoldElement":
      "$browser.findElement($driver.By.{locatorBy}({locator})).mouseDown();\n",
    "releaseElement":
      "$browser.findElement($driver.By.{locatorBy}({locator})).mouseUp();\n",
    "submitElement":
      "$browser.findElement($driver.By.{locatorBy}({locator})).submit();\n", 
    "addCookie":
      function(step, escapeValue) {
        var data = {value: step.value, name: step.name};
        step.options.split("/").forEach(function(entry) {
          var entryArr = entry.split("=");
          data[entryArr[0]] = data[entryArr[1]];
        });
        return "$browser.addCookie(" + JSON.stringify(data) + ");\n";
      },
    "deleteCookie":
      "$browser.deleteCookie({name});\n",
    "saveScreenshot":
      "$browser.takeScreenshot();\n",
  },
  waitFor: "",
  assert: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return doSubs(
        "{getter}\n" +
        "  if ({value} === {cmp}) {\n" +
        "    $browser.quit();\n" +
        "    throw new Error('!{stepTypeName} failed');\n" +
        "  }\n" +
        "{getterFinish}\n", getter);
    } else {
      return doSubs(
        "{getter}\n" +
        "  if ({value} !== {cmp}) {\n" +
        "    $browser.quit();\n" +
        "    throw new Error('{stepTypeName} failed');\n" +
        "  }\n" +
        "{getterFinish}\n", getter);
    }
  },
  verify: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return doSubs(
        "{getter}\n" +
        "  if ({value} === {cmp}) {\n" +
        "    console.log('!{stepTypeName} failed');\n" +
        "  }\n" +
        "{getterFinish}\n", getter);
    } else {
      return doSubs(
        "{getter}\n" +
        "  if ({value} !== {cmp}) {\n" +
        "    console.log('{stepTypeName} failed');\n" +
        "  }\n" +
        "{getterFinish}\n", getter);
    }
  },
  store:
    "{getter}\n" +
    "${{variable}} = {value};\n" +
    "{getterFinish}\n",
  boolean_assert:
    "{getter}\n" +
    "if ({posNot}{value}) {\n" +
    "  $browser.quit(null);\n" +
    "  throw new Error('{negNot}{stepTypeName} failed');\n" +
    "}\n" +
    "{getterFinish}\n",
  boolean_verify:
    "{getter}\n" +
    "if ({posNot}{value}) {\n" +
    "  $browser.quit(null);\n" +
    "  console.log('{negNot}{stepTypeName} failed');\n" +
    "}\n" +
    "{getterFinish}\n",
  boolean_waitFor: "",
  boolean_store:
    "{getter}\n" +
    "${{variable}} = {value};" +
    "{getterFinish}\n",
  boolean_getters: {
    "TextPresent": {
      getter: ".then(function () { return $driver.By.tagName('html'); })\n" +
      ".then(function (el) { return el.text(); })\n" +
      ".then(function (text) {\n" +
      "  var bool = text.indexOf({text}) != -1;",
      getterFinish: "})",
      value: "bool"
    },
    "ElementPresent": {
      getter: ".then(function () { return $browser.isElementPresent($driver.By.{locatorBy},{locator}); })\n" +
      ".then(function (el) {",
      getterFinish: "})",
      value: "bool"
    },
    "ElementSelected": {
      getter: ".then(function () { return $browser.isElementPresent($driver.By.{locatorBy}({locator}); })\n" +
      ".then(function (el) { return $browser.isSelected(el); })\n" +
      ".then(function (bool) {",
      getterFinish: "})",
      value: "bool"
    },
    "CookiePresent": {
      getter: ".then(function () { return $browser.getCookies(); })\n" +
        ".then(function (cookies) {\n" +
        "  var hasCookie = _.find(cookies, function(e){ return e.name === {name}; });",
      getterFinish: "})",
      value: "hasCookie"
    },
    "AlertPresent": { // should return an error if it's not there (and true if it's there)
      getter: ".then(function () { return $browser.switchTo().alert(); })\n" +
        ".then(function (bool) { return bool; }, function (err) { return false; })\n" +
        ".then(function (bool) {",
      getterFinish: "})",
      value: "bool"
    }
  },
  getters: {
    "BodyText": {
      getter: ".then(function () { return $browser.findElement($driver.By.tagName('body')); })\n" +
        ".then(function (el) { return el.text(); })\n" +
        ".then(function (text) {",
      getterFinish: "})",
      cmp: "{text}",
      value: "text"
    },
    "PageSource": {
      getter: ".then(function () { return $browser..getPageSource(); })\n" +
        ".then(function (source) {",
      getterFinish: "})",
      cmp: "{source}",
      value: "source"
    },
    "Text": {
      getter: ".then(function () { return $browser.findElement($driver.By.{locatorBy},{locator}); })\n" +
        ".then(function (el) { return el.text(); })\n" +
        ".then(function (text) {",
      getterFinish: "})",
      cmp: "{text}",
      value: "text"
    },
    "CurrentUrl": {
      getter: ".then(function () { return $browser.getCurrentUrl(); })" +
        ".then(function (url) {",
      getterFinish: "})",
      cmp: "{url}",
      value: "url"
    },
    "Title": {
      getter: ".then(function () { return $browser.getTitle(); })\n" +
        ".then(function (title) {",
      getterFinish: "})",
      cmp: "{title}",
      value: "title"
    },
    "ElementValue": {
      getter: ".then(function () { return $browser.findElement($driver.By.{locatorBy},{locator}); })\n" +
        ".then(function (el) { return $browser.getAttribute(el, 'value'); })" +
        ".then(function (value) {",
      getterFinish: "})",
      cmp: "{value}",
      value: "value"
    },
    "ElementAttribute": {
      getter: ".then(function (el) { return $browser.findElement($driver.By.{locatorBy},{locator}); })\n" +
        ".then(function (el) { return $browser.getAttribute(el, {attributeName}); })" +
        ".then(function (value) {",
      getterFinish: "})",
      cmp: "{value}",
      value: "value"
    },
    "CookieByName": {
      getter: ".then(function (el) { return $browser.getCookies(); })\n" +
        ".then(function (cookies) {\n" +
        "  var cookie = _.find(cookies, function(e){ return e.name === {name}; });",
      getterFinish: "})",
      cmp: "{value}",
      value: "cookie"
    },
    "AlertText": {
      getter: ".then(function (el) { return $browser.switchTo().alert().getText(); })" +
        ".then(function (text) {",
      getterFinish: "})",
      cmp: "{text}",
      value: "text"
    },
    "Eval": {
      getter: ".then(function (el) { return $browser.executeScript({script}); })" +
        ".then(function (value) {",
      getterFinish: "})",
      cmp: "{value}",
      value: "value"
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
    var esc = function(v) { return "\"" + v.replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\""; };

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

if (builder && builder.loader && builder.loader.loadNextMainScript) { builder.loader.loadNextMainScript(); }

function print_nr_unsupported(thing) {
  return "\/\/ Function " + thing + " is not supported by New Relic Synthetics.\n";
}