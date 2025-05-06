---
title: "Sanitizer: get() method"
short-title: get()
slug: Web/API/Sanitizer/get
page-type: web-api-instance-method
browser-compat: api.Sanitizer.get
---

{{APIRef("HTML Sanitizer API")}}

The **`get()`** method of the {{domxref("Sanitizer")}} interface returns a {{domxref('SanitizerConfig')}} dictionary instance that represents the current `Sanitizer` configuration.

This may be used to create a sanitizer that is slightly modified from the default; by first getting and then modifying the default sanitizer configuration, and then using it to construct a new sanitizer.

The returned configuration can also be used to inspect the configuration, and can be passed directly the HTML parsing functions.
Note however that it will be more efficient to pass a {{domxref("Sanitizer")}} rather than a configuration dictionary, particularly where the `Sanitizer` is to be used multiple times.

## Syntax

```js-nolint
get()
```

### Parameters

None

### Returns

A {{domxref("SanitizerConfig")}}.

## Examples

### Getting a configuration

This example shows how you might create a new sanitizer and get its configuration.

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

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

#### JavaScript

The following code tests whether the `Sanitizer` interface is supported, and if so creates a new `Sanitizer` object using a simple {{domxref("SanitizerConfig")}} that allows the HTML elements: {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("span")}}, {{htmlelement("script")}}.
It then gets and logs the configuration.

```js
if ("Sanitizer" in window) {
  // Create sanitizer using SanitizerConfig
  const sanitizer = new Sanitizer({ elements: ["div", "p", "span", "script"] });

  // Get current configuration
  const sanitizerConfig = sanitizer.get();

  log(JSON.stringify(sanitizerConfig, null, 2));
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Results

The output is logged below.
Note that the same elements set when constructing the sanitizer are returned, but the new elements also have a namespace.
Note also here that comments and data attributes will be allowed.

{{EmbedLiveSample("Getting a configuration","100","480px")}}

### Getting the default sanitizer

This example shows how you can get the configuration for the default `Sanitizer`.
This might then be modified and used to create a new `Sanitizer` that meets your specific needs.

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

The following code tests whether the `Sanitizer` interface is supported.
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

  // Get default configuration
  const defaultConfig = sanitizer.get();

  log(JSON.stringify(defaultConfig, null, 2));
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Results

The default sanitizer configuration is logged below.
Note that the default configuration is quite big, allowing many elements and attributes.

{{EmbedLiveSample("Getting the default sanitizer","100","480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
