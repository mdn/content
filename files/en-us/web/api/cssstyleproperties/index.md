---
title: CSSStyleProperties
slug: Web/API/CSSStyleProperties
page-type: web-api-interface
browser-compat: api.CSSStyleProperties
---

{{APIRef("CSSOM")}}

The **`CSSStyleProperties`** interface represents inline or computed styles available on an element, or the styles associated with a CSS style rule.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties of its parent, {{domxref("CSSStyleDeclaration")}}._

- Named properties
  - : Dash-named and camel-case-named properties for all CSS properties supported by the browser.
- {{DOMxRef("CSSStyleProperties.cssFloat", "CSSStyleProperties.cssFloat")}}
  - : Special alias for the {{CSSxRef("float")}} CSS property.

## Instance methods

_This interface inherits the methods of its parent, {{domxref("CSSStyleDeclaration")}}._

## Description

An object of this type has properties with dashed-cased name matching all [CSS properties](/en-US/docs/Web/CSS/Properties) supported by the browser, including those with `-moz` and `-webkit` prefixes.
These can accessed using methods inherited from the {{DOMxRef("CSSStyleProperties")}} base class, such as {{DOMxRef("CSSStyleDeclaration/getPropertyPriority", "getPropertyValue()")}} and {{DOMxRef("CSSStyleDeclaration/getPropertyPriority", "setPropertyValue()")}}.

In addition, each dash-cased property has a corresponding property that is {{glossary("camel case")}}-named, removing dashes and capitalizing each word after the first one.
This allows you to, for example, access the `margin-top` CSS property using the syntax `style.marginTop` (where `style` is a `CSSStyleProperties`), instead of the more cumbersome `style.getPropertyValue("margin-top")` or `style["margin-top"]`.
The CSS property `float`, being a reserved JavaScript keyword, is represented by the `cssFloat` property.

Properties and attributes with no defined value default to the empty string (`""`).
For an object representing an inline style declaration (not computed styles) this will be any style that is not defined in the declaration block.

`CSSStyleProperties` object instances are exposed using the following APIs:

- {{DOMxRef("HTMLElement.style")}}, {{domxref("SVGElement.style")}}, and {{domxref("MathMLElement.style")}}, which return the inline styles of a single element (e.g., `<div style="…">`).
- {{DOMxRef("Window.getComputedStyle()")}}, which exposes the `CSSStyleProperties` object as a **read-only** interface.
- {{DOMxRef("CSSStyleSheet")}} API.
  For example, `document.styleSheets[0].cssRules[0].style` returns a `CSSStyleProperties` object on the first CSS rule (a {{domxref("CSSStyleRule")}}) in the document's first stylesheet.

## Examples

### Basic usage

Given an element with with the id of `el` you can get the styles as a `CSSStyleProperties` as shown:

```js
const element = document.querySelector("#el");
const elementStyle = element.style;
```

You can then log the {{cssxref("border-top-width")}} style of the element (for example) using any of the following options:

```js
console.log(elementStyle["border-top-width"]);
console.log(elementStyle.getPropertyValue("border-top-width"));
console.log(elementStyle.borderTopWidth);
```

### Getting dash-named style information

This example demonstrates how element inline and computed styles might be obtained for an element, logging the dash-named property values in each case.

#### HTML

The HTML defines a {{htmlelement("div")}} with a number of styles set, nested within another that sets the `font-weight`.
There are also buttons to get the inline styles ad computed styles for the element (and hidden code for a reset button and logging).

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    An example div
  </div>
</div>
<button id="inline_style" type="button">Inline Style</button>
<button id="computed_style" type="button">Computed Style</button>
```

```html hidden
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

```css hidden
#log {
  height: 300px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

function clearLog(text) {
  logElement.innerText = "";
}

const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  clearLog();
});
```

#### JavaScript

The code first defines the function we're going to use to get the style properties of our element "elt".
This uses {{domxref("CSSStyleDeclaration.getPropertyValue()")}} to get the value of each dash-named property defined on the object that has a value.

```js
function getPopulatedProperties(elementStyles) {
  for (const prop in elementStyles) {
    if (
      // Check the property belongs to the CSSStyleProperties instance
      // Check property has a numeric index (indicates inline/dash-named style)
      Object.hasOwn(elementStyles, prop) &&
      !Number.isNaN(Number.parseInt(prop, 10))
    ) {
      log(
        `${elementStyles[prop]} = '${elementStyles.getPropertyValue(elementStyles[prop])}'`,
      );
    }
  }
}
```

The following code checks and logs whether `CSSStyleProperties` is defined.
If it exists then we create button event handlers to get the inline or computed styles for the element and log their names and values.

```js
if (typeof window.CSSStyleProperties === "undefined") {
  log("CSSStyleProperties is not supported on this browser.");
} else {
  const element = document.querySelector("#elt");

  const inlineStyle = document.querySelector("#inline_style");
  inlineStyle.addEventListener("click", () => {
    clearLog();
    const elementStyle = element.style;
    getPopulatedProperties(elementStyle);
  });

  const computedStyle = document.querySelector("#computed_style");
  computedStyle.addEventListener("click", () => {
    clearLog();
    const compStyles = window.getComputedStyle(element);
    getPopulatedProperties(compStyles);
  });
}
```

#### Results

Press the buttons to show the dash-named property names and values for the element's inline and computed styles.
Note that the inline styles only include the styles defined on the actual element: all the other properties have the value `""` and are not displayed.
The computed styles also include `font-weight`, which is defined on the parent, and many other computed styles.

{{EmbedLiveSample("Getting all element style information", "100", "400")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
