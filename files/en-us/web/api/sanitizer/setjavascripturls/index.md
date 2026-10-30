---
title: "Sanitizer: setJavascriptURLs() method"
short-title: setJavascriptURLs()
slug: Web/API/Sanitizer/setJavascriptURLs
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Sanitizer.setJavascriptURLs
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

The **`setJavascriptURLs()`** method of the {{domxref("Sanitizer")}} interface sets whether the sanitizer keeps or removes attributes that contain [`javascript:` URLs](/en-US/docs/Web/URI/Reference/Schemes/javascript), such as `<a href="javascript:…">`.

## Syntax

```js-nolint
setJavascriptURLs(allow)
```

### Parameters

- `allow`
  - : `true` if attributes containing `javascript:` URLs are kept, and `false` if they are removed.

### Return value

`true` if the operation changed the configuration, and `false` if the configuration already set [`javascriptURLs`](/en-US/docs/Web/API/SanitizerConfig#javascripturls) to the specified value.

## Description

A `javascript:` URL runs its code when the link or form that uses it is followed, so it can be used for [cross-site scripting (XSS) attacks](/en-US/docs/Web/Security/Attacks/XSS). When `javascriptURLs` is `false`, the sanitizer removes:

- The `href` attribute of {{htmlelement("a")}} and {{htmlelement("area")}}, the [`action`](/en-US/docs/Web/HTML/Reference/Elements/form#action) attribute of {{htmlelement("form")}}, and the [`formaction`](/en-US/docs/Web/HTML/Reference/Elements/button#formaction) attribute of {{htmlelement("button")}} and {{htmlelement("input")}}, if the attribute contains a `javascript:` URL.
- The `href` attribute of the SVG {{SVGElement("a")}} element, and the [`href`](/en-US/docs/Web/MathML/Reference/Global_attributes/href) attribute of any MathML element, if the attribute contains a `javascript:` URL.
- The [`attributeName`](/en-US/docs/Web/SVG/Reference/Attribute/attributeName) attribute of the SVG {{SVGElement("animate")}}, {{SVGElement("animateTransform")}}, and {{SVGElement("set")}} elements, if its value is `href` or `xlink:href`, because these animations could change a link to a `javascript:` URL.

The setting only matters for the unsafe methods, such as {{domxref("Element.setHTMLUnsafe()")}}. The safe methods, such as {{domxref("Element.setHTML()")}}, always remove `javascript:` URLs, even if the sanitizer allows them.

The [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) removes `javascript:` URLs. A sanitizer created from a {{domxref("SanitizerConfig")}} that doesn't set `javascriptURLs`, such as `new Sanitizer({})`, keeps them. Calling {{domxref("Sanitizer.removeUnsafe()")}} sets `javascriptURLs` to `false`.

## Examples

### Basic usage

The code below shows the basic usage of the `setJavascriptURLs()` method.

```js
// Create sanitizer (in this case the default)
const sanitizer = new Sanitizer();

// Keep attributes that contain javascript: URLs
sanitizer.setJavascriptURLs(true);

// Remove attributes that contain javascript: URLs
sanitizer.setJavascriptURLs(false);
```

### Removing JavaScript URLs in an unsafe method

This example shows how `setJavascriptURLs()` changes the output of {{domxref("Element.setHTMLUnsafe()")}}.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 120px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent += `${text}\n\n`;
}
```

#### JavaScript

The code creates a sanitizer from an empty configuration, which keeps `javascript:` URLs, and uses it to insert two links into an element that isn't in the document. It logs the resulting HTML, then calls `setJavascriptURLs(false)` and inserts the same links again.

```js hidden
if ("Sanitizer" in window && "setJavascriptURLs" in Sanitizer.prototype) {
```

```js
const untrustedString =
  '<a href="javascript:alert(1)">Run script</a> <a href="https://example.com/">Visit site</a>';
const target = document.createElement("div");

// Create a sanitizer that keeps javascript: URLs
const sanitizer = new Sanitizer({});
target.setHTMLUnsafe(untrustedString, { sanitizer });
log(target.innerHTML);

// Remove javascript: URLs
sanitizer.setJavascriptURLs(false);
target.setHTMLUnsafe(untrustedString, { sanitizer });
log(target.innerHTML);
```

```js hidden
} else {
  log("The setJavascriptURLs() method is NOT supported in this browser.");
}
```

#### Results

The first link keeps its `href` attribute in the first output, and loses it in the second. The link to `https://example.com/` is kept both times.

{{EmbedLiveSample("Removing JavaScript URLs in an unsafe method","100","160px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
