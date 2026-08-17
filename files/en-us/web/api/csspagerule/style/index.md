---
title: "CSSPageRule: style property"
short-title: style
slug: Web/API/CSSPageRule/style
page-type: web-api-instance-property
browser-compat: api.CSSPageRule.style
---

{{APIRef("CSSOM")}}

The read-only **`style`** property of the {{domxref("CSSPageRule")}} interface contains a {{domxref("CSSPageDescriptors")}} object representing the descriptors available in the {{cssxref("@page")}} rule's body.

## Value

A {{domxref("CSSPageDescriptors")}} object.

> [!NOTE]
> Earlier versions of the specification defined this property as a {{domxref("CSSStyleDeclaration")}}.
> Check the compatibility data below for your browser.

Although the `style` property itself is read-only in the sense that you can't replace the `CSSPageDescriptors` object, you can still assign to the `style` property directly, which is equivalent to assigning to its {{domxref("CSSStyleDeclaration/cssText", "cssText")}} property. You can also modify the `CSSPageDescriptors` object using the {{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} and {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}} methods.

## Examples

### Inspecting a page rule

This example uses the Web API to inspect the content of a {{cssxref("@page")}} rule.

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
  height: 230px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### CSS

Below we define styles for the page using a {{cssxref("@page")}} rule.
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

The MDN [live sample](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples) infrastructure combines all the CSS blocks in the example into a single inline style with the id `css-output`, so we first use {{domxref("document.getElementById()")}} to find that sheet.

```js
const myRules = document.getElementById("css-output").sheet.cssRules;
```

We then iterate through the rules defined for the live example and match any that are of type `CSSPageRule`, as these correspond to `@page` rules.
For the matching objects we then log the `style` and all its values.

```js
for (const rule of myRules) {
  if (rule instanceof CSSPageRule) {
    log(`${rule.style}`);
    log(`margin: ${rule.style.margin}`);

    // Access properties using CamelCase properties
    log(`marginTop: ${rule.style.marginTop}`);
    log(`marginRight: ${rule.style.marginRight}`);
    log(`marginBottom: ${rule.style.marginBottom}`);
    log(`marginLeft: ${rule.style.marginLeft}`);
    log(`pageOrientation: ${rule.style.pageOrientation}`);

    // Access properties using snake-case properties
    log(`margin-top: ${rule.style["margin-top"]}`);
    log(`margin-right: ${rule.style["margin-right"]}`);
    log(`margin-left: ${rule.style["margin-left"]}`);
    log(`margin-bottom: ${rule.style["margin-bottom"]}`);
    log(`page-orientation: ${rule.style["page-orientation"]}`);

    log(`size: ${rule.style.size}`);
    log("\n");
  }
}
```

#### Results

The results are shown below.
Note that the object should be a `CSSPageDescriptors` to match the current specification, but may be a `CSSStyleDeclaration` in some browsers.
Note also that the corresponding values for properties in camel- and snake-case match each other and the `@page` declaration, and that `page-orientation` is the empty string `""` because it is not defined in `@page`.

{{EmbedLiveSample("Inspecting a page rule", "100%", "300px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
