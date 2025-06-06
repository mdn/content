---
title: "Sanitizer: Sanitizer() constructor"
short-title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
page-type: web-api-constructor
browser-compat: api.Sanitizer.Sanitizer
---

{{APIRef("HTML Sanitizer API")}}

The **`Sanitizer()`** constructor creates a new {{domxref("Sanitizer")}} object, which can be used to filter unwanted elements and attributes from HTML or documents before they are inserted/parsed into the DOM.

The default `Sanitizer()` configuration allows only XSS-safe input by default, omitting elements such as {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, `<use>`, and event handler attributes from their respective allow lists, and disallowing data attributes, and comments.

The constructor `configuration` option can be used to customize the sanitizer behavior.

<!--
Either here or in the config (or both) explain what a (in)valid config looks like
-->

## Syntax

```js-nolint
new Sanitizer()
new Sanitizer(configuration)
```

### Parameters

- `configuration` {{optional_inline}}
  - : A {{domxref("SanitizerConfig")}} defining a sanitizer configuration, or the string `"default"` to indicate the default configuration.

### Returns

An instance of the {{domxref("Sanitizer")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if a non-normalized {{domxref("SanitizerConfig")}} is passed (one that includes both "allowed" and "removed" configuration settings), or if a string is passed that isn't `"default"`.

## Examples

### Creating the default sanitizer

This example shows how you can create the default `Sanitizer` and logs the resulting configuration object.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The code first tests whether the `Sanitizer` interface is supported.
It then creates the default `Sanitizer`, passing no options, and then gets and logs the configuration.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

```js
if ("Sanitizer" in window) {
  // Create default sanitizer
  const sanitizer = new Sanitizer();

  // Get and log the (default) configuration
  const defaultConfig = sanitizer.get();
  log(JSON.stringify(defaultConfig, null, 2));
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Results

The output is logged below.
Note that the default configuration is quite big, allowing many elements and attributes.

{{EmbedLiveSample("Creating the default sanitizer","100","480px")}}

### Creating a sanitizer and using it with `setHTML()`

This example shows how you might create and use a custom sanitizer in a safe HTML DOM insertion method.

#### HTML

Here we define two {{htmlelement("pre")}} elements in which we'll display both the sanitized and unsanitized HTML.

```html
<pre id="unmodified"></pre>
<pre id="setHTML"></pre>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 430px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

The following code tests whether the `Sanitizer` interface is supported.
It then defines a string of "unsafe HTML", which contains bot safe elements, such as {{htmlelement("p")}} and {{htmlelement("span")}}, and XSS-unsafe elements such as {{htmlelement("script")}}

We then create a `Sanitizer` object with a {{domxref("SanitizerConfig")}} that allows the HTML elements: {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("span")}}, and {{htmlelement("script")}}.
The sanitizer is used with the unsafe string in {{domxref("Element.setHTML()")}}.
Both the original and sanitized strings are displayed as text nodes.

```js
if ("Sanitizer" in window) {
  // Define unsafe string of HTML
  const unsafeHTMLString = `
  <div>
    <p>This is a paragraph. <span onclick="alert('You clicked the span!')">Click me</span></p>
    <script src="path/to/amodule.js" type="module"
  </div>
`;

  // Set unsafe string as a text node of first element
  const unmodifiedElement = document.querySelector("#unmodified");
  unmodifiedElement.innerText = unsafeHTMLString;

  // Create sanitizer using a SanitizerConfig that allows script (and other elements)
  const sanitizer = new Sanitizer({ elements: ["div", "p", "span", "script"] });

  // Use the sanitizer to set the HTML of the second element using the safe method
  const setHTMLElement = document.querySelector("#setHTML");
  setHTMLElement.setHTML(unsafeHTMLString, { sanitizer: sanitizer });

  // Get that HTML and set it back to the element as a text node
  // (so we can see the elements)
  setHTMLElement.innerText = setHTMLElement.innerHTML;

  // Log the configuration
  const sanitizerConfig = sanitizer.get();
  log(JSON.stringify(sanitizerConfig, null, 2));
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Results

The original string and sanitized HTML that was parsed into the DOM are shown below.
Note that even though the sanitizer allows `<script>` elements, these are stripped out of the injected HTML when using {{domxref("Element.setHTML()")}}.
Also note that the configuration includes both the names of the elements and their namespaces.

{{EmbedLiveSample("Creating the default sanitizer","100","650px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
