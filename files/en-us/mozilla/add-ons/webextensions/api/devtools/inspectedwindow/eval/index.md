---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
page-type: webextension-api-function
browser-compat: webextensions.api.devtools.inspectedWindow.eval
---

{{AddonSidebar}}

Executes JavaScript in the window that the devtools are attached to.

This is somewhat like using {{WebExtAPIRef("tabs.executeScript()")}} to attach a content script, but with two main differences:

First, the JavaScript can use a set of [special commands that browsers typically provide in their devtools console implementation](#helpers): for example, using "$0" to refer to the element currently selected in the Inspector.

Second, the JavaScript you execute can see any changes made to the page by scripts that the page loaded. This is in contrast to content scripts, which see the page [as it would exist if no page scripts were loaded](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access). However, note that the isolation provided by content scripts is a deliberate security feature, intended to make it harder for malicious or uncooperative web pages to confuse or subvert WebExtensions APIs by redefining DOM functions and properties. This means you need to be very careful if you waive this protection by using `eval()`, and should use content scripts unless you need to use `eval()`.

The script is evaluated by default in the main frame of the page. The script must evaluate to a value that can be represented as JSON (meaning that, for example, it may not evaluate to a function or an object that contains any functions). By default, the script does not see any content scripts attached to the page.

You can't call `eval()` on privileged browser windows such as "about:addons".

You can optionally provide an `options` parameter, which includes options to evaluate the script in a different frame or in the context of attached content scripts. Note that Firefox does not yet support the `options` parameter.

The `eval()` function returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to the evaluated result of the script or to an error.

## Helpers

The script gets access to a number of objects that help the injected script interact with the developer tools. The following helpers are currently supported:

- `$0`
  - : Contains a reference to the element that's currently selected in the devtools Inspector.
- `inspect()`
  - : Given an object, if it is an DOM element in the page, selects it in the devtools Inspector, otherwise it creates an object preview in the console.

[See some examples.](#examples)

## Syntax

```js-nolint
let evaluating = browser.devtools.inspectedWindow.eval(
  expression,       // string
  options           // object
)
```

### Parameters

- `expression`
  - : `string`. The JavaScript expression to evaluate. The string must evaluate to an object that can be represented as JSON, or an exception will be thrown. For example, `expression` must not evaluate to a function.
- `options` {{optional_inline}}

  - : `object`. Options for the function (Note that Firefox does not yet support this options), as follows:

    - `frameURL` {{optional_inline}}
      - : `string`. The URL of the frame in which to evaluate the expression. If this is omitted, the expression is evaluated in the main frame of the window.
    - `useContentScriptContext` {{optional_inline}}
      - : `boolean`. If `true`, evaluate the expression in the context of any content scripts that this extension has attached to the page. If you set this option, then you must have actually attached some content scripts to the page, or a DevTools error will be thrown.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Evaluate the expression in the context of a content script attached by a different extension, whose origin matches the value given here. This overrides `useContentScriptContext`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an `array` containing two elements.

If no error occurred, element 0 will contain the result of evaluating the expression, and element 1 will be `undefined`.

If an error occurred, element 0 will be `undefined`, and element 1 will contain an object giving details about the error. Two different sorts of errors are distinguished:

- errors encountered evaluating the JavaScript (for example, syntax errors in the expression). In this case, element 1 will contain:

  - a boolean property `isException`, set to `true`
  - a string property `value`, giving more details.

- other errors (for example, an expression that evaluates to an object that can't be represented as JSON). In this case, element 1 will contain:

  - a boolean property `isError`, set to `true`
  - a string property `code` containing an error code.

## Browser compatibility

{{Compat}}

## Examples

This tests whether jQuery is defined in the inspected window, and logs the result. Note that this wouldn't work in a content script, because even if jQuery were defined, the content script would not see it.

```js
function handleError(error) {
  if (error.isError) {
    console.log(`DevTools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  console.log(result);
  if (result[0] !== undefined) {
    console.log(`jQuery: ${result[0]}`);
  } else if (result[1]) {
    handleError(result[1]);
  }
}

const checkJQuery = "typeof jQuery !== 'undefined'";

evalButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(checkJQuery).then(handleResult);
});
```

### Helper examples

This uses the `$0` helper to set the background color of the element that's currently selected in the Inspector:

```js
const evalButton = document.querySelector("#reddinate");
const evalString = "$0.style.backgroundColor = 'red'";

function handleError(error) {
  if (error.isError) {
    console.log(`DevTools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}

evalButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(evalString).then(handleResult);
});
```

This uses the `inspect()` helper to select the first \<h1> element in the page:

```js
const inspectButton = document.querySelector("#inspect");
const inspectString = "inspect(document.querySelector('h1'))";

function handleError(error) {
  if (error.isError) {
    console.log(`DevTools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}

inspectButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(inspectString).then(handleResult);
});
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
