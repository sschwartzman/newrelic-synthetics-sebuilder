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
    "  ScriptVars = {},\n" +
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
      "$browser.wait({waitTime})\n",
    "switchToFrame":
      "$browser.switchTo().frame('{identifier}');\n",
    "switchToFrameByIndex":
      "$browser.switchTo().frame('{index}');\n",
    "switchToWindow":
      "$browser.switchTo().window('{name}');\n",
    "switchToDefaultContent":
      "$browser.switchTo().defaultContent();\n",
    "assertAlertText":
      "$browser.switchTo().alert().getText().then(function(text) {\n" +
      "  return $browser.assertEquals(text, {text});\n" +
      "});\n",
    "verifyAlertText":
      "$browser.switchTo().alert().getText().then(function(text) {\n" +
      "  return text === {text};\n" +
      "});\n",
    "waitForAlertText":
      "$browser.wait(function() {\n" +
      "  $browser.switchTo().alert().getText().then(function(text) {\n" +
      "    return text === {text};\n" +
      "  });\n" +
      "}, DefaultTimeout);\n",
    "storeAlertText":
      "$browser.switchTo().alert().getText().then(function(text) {\n" +
      "  ScriptVars[{variable}] = '' + text;\n" +
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
      "$browser.switchTo().alert().sendKeys({text});",
    "acceptAlert":
      "$browser.switchTo().alert().accept();\n",
    "dismissAlert":
      "$browser.switchTo().alert().dismiss();\n",
    "store":
      "ScriptVars['{variable}'] = '' + {text};\n",
    "clickElement":
      "$browser.findElement($driver.By.{locatorBy}({locator})).click();\n",
    "doubleClickElement":
      "$browser.findElement($driver.By.{locatorBy}({locator})).click();\n" +
      "$browser.findElement($driver.By.{locatorBy}({locator})).click();\n",
    "mouseOverElement":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "clickElementWithOffset":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
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
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "clickAndHoldElement":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "releaseElement":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
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
    "assertCurrentUrl":
      "$browser.getCurrentUrl().then(function(url) {\n" +
      "  return $browser.assertEquals(url, {url});\n" +
      "});\n",
    "verifyCurrentUrl":
      "$browser.getCurrentUrl().then(function(url) {\n" +
      "  return url === {url};\n" +
      "});\n",
    "waitForCurrentUrl":
      "$browser.wait(function() {\n" +
      "  $browser.getCurrentUrl().then(function(url) {\n" +
      "    return url === {url};\n" +
      "  });\n" +
      "}, DefaultTimeout);\n",
    "storeCurrentUrl":
      "$browser.getCurrentUrl().then(function(url) {\n" +
      "  ScriptVars[{variable}] = '' + url;\n" +
      "});\n",
    "assertTitle":
      "$browser.getTitle().then(function(title) {\n" +
      "  return $browser.assertEquals(title, {title});\n" +
      "});\n",
    "verifyTitle":
      "$browser.getTitle().then(function(title) {\n" +
      "  return title === {title};\n" +
      "});\n",
    "waitForTitle":
      "$browser.wait(function() {\n" +
      "  $browser.getTitle().then(function(title) {\n" +
      "    return title === {title};\n" +
      "  });\n" +
      "}, DefaultTimeout);\n",
    "storeTitle":
      "$browser.getTitle().then(function(title) {\n" +
      "  ScriptVars[{variable}] = '' + title;\n" +
      "});\n",
    "assertText":
      "$browser.findElement($driver.By.{locatorBy}({locator})).getText().then(function(text) {\n" +
      "  return $browser.assertEquals(text, {text});\n" +
      "});\n",
    "verifyText":
      "$browser.findElement($driver.By.{locatorBy}({locator})).getText().then(function(text) {\n" +
      "  return text === {text};\n" +
      "});\n",
    "waitForText":
      "$browser.wait(function() {\n" +
      "  $browser.findElement($driver.By.{locatorBy}({locator})).getText().then(function(text) {\n" +
      "    return text === {text};\n" +
      "  });\n" +
      "}, DefaultTimeout);\n",
    "storeText":
      "$browser.findElement($driver.By.{locatorBy}({locator})).getText().then(function(text) {\n" +
      "  ScriptVars[{variable}] = '' + text;\n" +
      "});\n",
    "assertTextPresent":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "verifyTextPresent":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "waitForTextPresent":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "storeTextPresent":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "assertBodyText":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "verifyBodyText":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "waitForBodyText":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "storeBodyText":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "assertPageSource":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "verifyPageSource":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "waitForPageSource":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "storePageSource":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "assertElementPresent":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "verifyElementPresent":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "waitForElementPresent":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "storeElementPresent":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "assertElementSelected":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "verifyElementSelected":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "waitForElementSelected":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "storeElementSelected":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "assertElementAttribute":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "verifyElementAttribute":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "waitForElementAttribute":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "storeElementAttribute":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "assertElementStyle":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "verifyElementStyle":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "waitForElementStyle":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "storeElementStyle":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "assertElementValue":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "verifyElementValue":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "waitForElementValue":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "storeElementValue":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "assertCookiePresent":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "verifyCookiePresent":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "waitForCookiePresent":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "storeCookiePresent":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "assertCookieByName":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "verifyCookieByName":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "waitForCookieByName":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "storeCookieByName":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "assertEval":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "verifyEval":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "waitForEval":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); },
    "storeEval":
      function(thing) { return print_nr_unsupported(JSON.stringify(thing)); }
  },
  waitFor: "",
  assert: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return doSubs(
        "{getter}\n" +
        "  if (_.isEqual({value},{cmp})) {\n" +
        "    b.quit();\n" +
        "    throw new Error('!{stepTypeName} failed');\n" +
        "  }\n" +
        "{getterFinish}\n", getter);
    } else {
      return doSubs(
        "{getter}\n" +
        "  if (!_.isEqual({value}, {cmp})) {\n" +
        "    b.quit();\n" +
        "    throw new Error('{stepTypeName} failed');\n" +
        "  }\n" +
        "{getterFinish}\n", getter);
    }
  },
  verify: function(step, escapeValue, doSubs, getter) {
    if (step.negated) {
      return doSubs(
        "{getter}\n" +
        "  if (_.isEqual({value}, {cmp})) {\n" +
        "    console.log('!{stepTypeName} failed');\n" +
        "  }\n" +
        "{getterFinish}\n", getter);
    } else {
      return doSubs(
        "{getter}\n" +
        "  if (!_.isEqual({value}, {cmp})) {\n" +
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
    "  b.quit(null);\n" +
    "  throw new Error('{negNot}{stepTypeName} failed');\n" +
    "}\n" +
    "{getterFinish}\n",
  boolean_verify:
    "{getter}\n" +
    "if ({posNot}{value}) {\n" +
    "  b.quit(null);\n" +
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
      getter: ".then(function () { return b.elementByTagName('html'); })\n" +
      ".then(function (el) { return el.text(); })\n" +
      ".then(function (text) {\n" +
      "  var bool = text.indexOf({text}) != -1;",
      getterFinish: "})",
      value: "bool"
    },
    "ElementPresent": {
      getter: ".then(function () { return b.hasElement({locatorBy},{locator}); })\n" +
      ".then(function (el) {",
      getterFinish: "})",
      value: "bool"
    },
    "ElementSelected": {
      getter: ".then(function () { return b.elementBy{locatorBy}({locator}); })\n" +
      ".then(function (el) { return b.isSelected(el); })\n" +
      ".then(function (bool) {",
      getterFinish: "})",
      value: "bool"
    },
    "CookiePresent": {
      getter: ".then(function () { return b.allCookies(); })\n" +
        ".then(function (cookies) {\n" +
        "  var hasCookie = _.find(cookies, function(e){ return e.name === {name}; });",
      getterFinish: "})",
      value: "hasCookie"
    },
    "AlertPresent": { // should return an error if it's not there (and true if it's there)
      getter: ".then(function () { return b.alertText(); })\n" +
        ".then(function (bool) { return bool; }, function (err) { return false; })\n" +
        ".then(function (bool) {",
      getterFinish: "})",
      value: "bool"
    }
  },
  getters: {
    "BodyText": {
      getter: ".then(function () { return b.elementByTagName('html'); })\n" +
        ".then(function (el) { return el.text(); })\n" +
        ".then(function (text) {",
      getterFinish: "})",
      cmp: "{text}",
      value: "text"
    },
    "PageSource": {
      getter: ".then(function () { return b.source(); })\n" +
        ".then(function (source) {",
      getterFinish: "})",
      cmp: "{source}",
      value: "source"
    },
    "Text": {
      getter: ".then(function () { return b.elementBy{locatorBy}({locator}); })\n" +
        ".then(function (el) { return el.text(); })\n" +
        ".then(function (text) {",
      getterFinish: "})",
      cmp: "{text}",
      value: "text"
    },
    "CurrentUrl": {
      getter: ".then(function () { return b.url(); })" +
        ".then(function (url) {",
      getterFinish: "})",
      cmp: "{url}",
      value: "url"
    },
    "Title": {
      getter: ".then(function () { return b.title(); })\n" +
        ".then(function (title) {",
      getterFinish: "})",
      cmp: "{title}",
      value: "title"
    },
    "ElementValue": {
      getter: ".then(function () { return b.elementBy{locatorBy}({locator}); })\n" +
        ".then(function (el) { return b.getAttribute(el, 'value'); })" +
        ".then(function (value) {",
      getterFinish: "})",
      cmp: "{value}",
      value: "value"
    },
    "ElementAttribute": {
      getter: ".then(function (el) { return b.elementBy{locatorBy}({locator}); })\n" +
        ".then(function (el) { return b.getAttribute(el, {attributeName}); })" +
        ".then(function (value) {",
      getterFinish: "})",
      cmp: "{value}",
      value: "value"
    },
    "CookieByName": {
      getter: ".then(function (el) { return b.allCookies(); })\n" +
        ".then(function (cookies) {\n" +
        "  var cookie = _.find(cookies, function(e){ return e.name === {name}; });",
      getterFinish: "})",
      cmp: "{value}",
      value: "cookie"
    },
    "AlertText": {
      getter: ".then(function (el) { return b.alertText(); })" +
        ".then(function (text) {",
      getterFinish: "})",
      cmp: "{text}",
      value: "text"
    },
    "Eval": {
      getter: ".then(function (el) { return b.execute({script}); })" +
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