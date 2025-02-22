---
title: CSSPageDescriptors
slug: Web/API/CSSPageDescriptors
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSPageDescriptors
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

The **`CSSPageDescriptors`** interface represents a CSS declaration block for an {{cssxref("@page")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule).

The interface exposes style information and various style-related methods and properties for the page.
Each multi-word property has versions in camel- and snake-case.
This means, for example, that you can access the `margin-top` CSS property using the syntax `style["margin-top"]` or `style.marginTop` (where `style` is a `CSSPageDescriptor`).

A `CSSPageDescriptors` object is accessed through the {{DOMxRef("CSSPageRule.style", "style")}} property of the `CSSPageRule` interface, which can in turn be found using the {{DOMxRef("CSSStyleSheet")}} API.

{{InheritanceDiagram}}

## Attributes

_This interface also inherits properties of its parent, {{domxref("CSSStyleDeclaration")}}._

- `margin` {{experimental_inline}}
  - : A string representing the `margin` property of the corresponding `@page` at-rule.
- `margin-top` {{experimental_inline}}
  - : A string representing the `margin-top` property of the corresponding `@page` at-rule.
- `marginTop` {{experimental_inline}}
  - : A string representing the `margin-top` property of the corresponding `@page` at-rule.
- `margin-right` {{experimental_inline}}
  - : A string representing the `margin-right` property of the corresponding `@page` at-rule.
- `marginRight` {{experimental_inline}}
  - : A string representing the `margin-right` property of the corresponding `@page` at-rule.
- `margin-bottom` {{experimental_inline}}
  - : A string representing the `margin-bottom` property of the corresponding `@page` at-rule.
- `marginBottom` {{experimental_inline}}
  - : A string representing the `margin-bottom` property of the corresponding `@page` at-rule.
- `margin-left` {{experimental_inline}}
  - : A string representing the `margin-left` property of the corresponding `@page` at-rule.
- `marginLeft` {{experimental_inline}}
  - : A string representing the `margin-left` property of the corresponding `@page` at-rule.
- `page-orientation` {{experimental_inline}}
  - : A string representing the `page-orientation` property of the corresponding `@page` at-rule.
- `pageOrientation` {{experimental_inline}}
  - : A string representing the `page-orientation` property of the corresponding `@page` at-rule.
- `size` {{experimental_inline}}
  - : A string representing the `size` property of the corresponding `@page` at-rule.

## Instance methods

_This interface inherits the methods of its parent, {{domxref("CSSStyleDeclaration")}}._

## Examples

### Inspecting a page at-rule

This example gets the `CSSPageDescriptors` for a {{cssxref("@page")}} at-rule, if the object is supported on the browser, and then logs its properties.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 280px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### CSS

Below we define styles for the page using a {{cssxref("@page")}} at-rule.
We assign different values for each margin property using the `margin` shorthand, and also specify the `size`.
We don't set the `page-orientation`.
This allows us to see how the properties map in the Web API object.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

First we check if `CSSPageDescriptors` is defined on the global window object, and if not we log that the interface is not supported.

If `CSSPageDescriptors` is supported, we get the document stylesheet at index `1`, and then gets the `cssRules` defined in that stylesheet.
We need to get this stylesheet because the example is embedded in a separate frame with its own sheet (index `0` is the CSS for this page).

We then iterate through the rules defined for the live example and match any that are of type `CSSPageRule`, as these correspond to `@page` rules.
For the matching objects we then log the `style` and all its values.

```js
if (typeof window.CSSPageDescriptors === "undefined") {
  log("CSSPageDescriptors is not supported on this browser.");
} else {
  // Get stylesheets for example and then get its cssRules
  const myRules = document.styleSheets[1].cssRules;
  for (let i = 0; i < myRules.length; i++) {
    if (myRules[i] instanceof CSSPageRule) {
      log(`${myRules[i].style}`);
      log(`margin: ${myRules[i].style.margin}`);

      // Access properties using CamelCase syntax
      log(`marginTop: ${myRules[i].style.marginTop}`);
      log(`marginRight: ${myRules[i].style.marginRight}`);
      log(`marginBottom: ${myRules[i].style.marginBottom}`);
      log(`marginLeft: ${myRules[i].style.marginLeft}`);
      log(`pageOrientation: ${myRules[i].style.pageOrientation}`);

      // Access properties using snake-case syntax
      log(`margin-top: ${myRules[i].style["margin-top"]}`);
      log(`margin-right: ${myRules[i].style["margin-right"]}`);
      log(`margin-left: ${myRules[i].style["margin-left"]}`);
      log(`margin-bottom: ${myRules[i].style["margin-bottom"]}`);
      log(`page-orientation: ${myRules[i].style["page-orientation"]}`);

      log(`size: ${myRules[i].style.size}`);

      // Log the original CSS text using inherited property: cssText
      log(`cssText: ${myRules[i].style.cssText}`);
      log("\n");
    }
  }
}
```

#### Results

The results are shown below.
Note that the `style` object displayed at the top of the log should be a `CSSPageDescriptors` to match the current specification, but may be a `CSSStyleDeclaration` in some browsers.
Note also that the corresponding values for properties in camel- and snake-case match each other and the `@page` declaration, and that `page-orientation` is the empty string `""` because it is not defined in `@page`.

{{EmbedLiveSample("Inspecting a page at-rule", "100%", "350px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
