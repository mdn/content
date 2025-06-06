---
title: "Element: setHTMLUnsafe() method"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
page-type: web-api-instance-method
browser-compat: api.Element.setHTMLUnsafe
---

{{APIRef("DOM")}}

The **`setHTMLUnsafe()`** method of the {{domxref("Element")}} interface is used to parse a string of HTML into a {{domxref("DocumentFragment")}}, optionally filtering out unwanted elements and attributes, and those that don't belong in the context, and then using it to replace the element's subtree in the DOM.

Unlike with {{domxref("Element.setHTML()")}}, XSS-unsafe HTML entities are not guaranteed to be removed.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameters

- `input`
  - : A string or {{domxref("TrustedHTML")}} instance defining HTML to be parsed.
- `options` {{optional_inline}}

  - : An options object with the following optional parameters:

    - `sanitizer` {{optional_inline}}
      - : A {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} object which defines what elements of the input will be allowed or removed.
        Note that generally a `"Sanitizer` is expected than the to be more efficient than a `SanitizerConfig` if the configuration is to reused.
        If not specified, no sanitizer is used.

### Return value

None (`undefined`).

### Exceptions

- `TypeError`

  - : This is thrown if:

    - `input` is passed a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.
    - `options.sanitizer` is passed a:
      - value that is not a {{domxref("Sanitizer")}}, {{domxref("SanitizerConfig")}}, or string.
      - non-normalized {{domxref("SanitizerConfig")}} (one that includes both "allowed" and "removed" configuration settings).
      - string that does not have the value `"default"`.

## Description

The **`setHTMLUnsafe()`** method is used to parse a string of HTML into a {{domxref("DocumentFragment")}}, optionally filtering out unwanted elements and attributes, and those that don't belong in the context, and then using it to replace the element's subtree in the DOM.

The suffix "Unsafe" in the method name indicates that while the method does allow the input string to be filtered of unwanted HTML entities, it does not enforce the sanitization or removal of potentially unsafe XSS-relevant input, such as {{htmlelement("script")}} elements, and script or event handler content attributes.
If no sanitizer configuration is specified in the `options.sanitizer` parameter, `setHTMLUnsafe()` is used without any sanitization.

The input HTML may include [declarative shadow roots](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom).
If the string of HTML defines more than one [declarative shadow root](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in a particular shadow host then only the first {{domxref("ShadowRoot")}} is created — subsequent declarations are parsed as `<template>` elements within that shadow root.

Like `setHTML()`, `setHTMLUnsafe()` may be used instead of {{domxref("Element.innerHTML")}} in order to parse strings of HTML that may contain declarative shadow roots.
`setHTMLUnsafe()` should be instead of {{domxref("Element.setHTML()")}} when parsing potentially unsafe strings of HTML that for whatever reason need to contain XSS-unsafe elements or attributes.
If strings to be injected don't need to contain unsafe HTML entities, then you should always use {{domxref("Element.setHTML()")}}.

Note that since this method does not necessarily sanitize input strings of XSS-unsafe entities, input strings should also be validated using the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API).
If the method is used with both a trusted types and a sanitizer, the input string will be passed through the trusted transformation function before it is sanitized.

## Examples

### Basic usage

This example shows some of the ways you can use `setHTMLUnsafe()` to inject a string of HTML.

```js
// Define unsanitized string of HTML
const unsanitizedString = "abc <script>alert(1)<" + "/script> def";
// Get the target Element with id "target"
const target = document.getElementById("target");

// setHTML() with no sanitizer
target.setHTMLUnsafe(unsanitizedString);

// Define custom Sanitizer and use in setHTMLUnsafe()
// This allows only elements: div, p, button, script
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within setHTMLUnsafe()
// Removes the <script> element but allows other potentially unsafe entities.
target.setHTMLUnsafe(unsanitizedString, {
  sanitizer: { removeElements: ["script"] },
});
```

### `setHTMLUnsafe()` live example

This example provides a "live" demonstration of the method when called with different sanitizers.
The code defines buttons that you can click to inject a string of HTML that is not sanitized, and that uses and a custom sanitizer, respectively.
The original string and injected HTML are logged so you can inspect the results in each case.

#### HTML

The HTML defines two {{htmlelement("button")}} elements for calling the method with different sanitizers, another button to reset the example, and a {{htmlelement("div")}} element to inject the string into.

```html
<button id="buttonNoSanitizer" type="button">None</button>
<button id="buttonAllowScript" type="button">allowScript</button>

<button id="reload" type="button">Reload</button>
<div id="target">Original content of target element</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 240px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
  margin: 5px;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent += text;
}
```

```js hidden
if ("Sanitizer" in window) {
```

First we define the string to sanitize, which will be the same for all cases.
This contains the {{htmlelement("script")}} element and the `onclick` handler, both of which are considered XSS-unsafe.
We also define the handler for the reload button.

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>This is a paragraph. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <script src="path/to/a/module.js" type="module"><script>
  </div>
`;

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Next we define the click handler for the button that sets the HTML with no sanitizer.
Generally we would expect the method to drop elements in the string that aren't allowed in the context (such as table-specific elements in a `<div>` element), but otherwise match the input string.
In this case the strings should match.

```js
const buttonNoSanitizer = document.querySelector("#buttonNoSanitizer");
buttonNoSanitizer.addEventListener("click", () => {
  // Set unsafe HTML without specifying a sanitizer
  target.setHTMLUnsafe(unsanitizedString);

  // Log HTML before sanitization and after being injected
  logElement.textContent =
    "No sanitizer: string should be injected without filtering\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${target.innerHTML}`);
});
```

The next click handler sets the target HTML using a custom sanitizer that allows only {{htmlelement("div")}}, {{htmlelement("p")}}, and {{htmlelement("script")}} elements.
Note that because we're using the `setHTMLUnsafe()` method, `<script>` are not removed!

```js
const allowScriptButton = document.querySelector("#buttonAllowScript");
allowScriptButton.addEventListener("click", () => {
  // Set the content of the element using a custom sanitizer
  const sanitizer1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  target.setHTMLUnsafe(unsanitizedString, { sanitizer: sanitizer1 });

  // Log HTML before sanitization and after being injected
  logElement.textContent = "Sanitizer: {elements: ['div', 'p', 'script']}\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${target.innerHTML}`);
});
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Results

Click the "None" and "allowScript" buttons to see the effects of no sanitizer and a custom sanitizer, respectively.

When you click the "None" button, you should see that the input and output match, as no sanitizer is applied.
When you click the "allowScript" button the `<script>` element is still present, but the `<button>` element is removed.
With this approach you can create safe HTML, but you aren't forced to.

{{EmbedLiveSample("setHTMLUnsafe() live example","100","380px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} and {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
