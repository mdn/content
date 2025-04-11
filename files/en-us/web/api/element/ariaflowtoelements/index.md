---
title: "Element: ariaFlowToElements property"
short-title: ariaFlowToElements
slug: Web/API/Element/ariaFlowToElements
page-type: web-api-instance-property
browser-compat: api.Element.ariaFlowToElements
---

{{APIRef("DOM")}}

The **`ariaFlowToElements`** property of the {{domxref("Element")}} interface is an array containing the element (or elements) that provide an alternate reading order of content, overriding the general default reading order at the user's discretion.
If just one element is provided this is the next element in the reading order.
If multiple elements are provided, then each element represents a possible path that should be offered to the user for selection.

The [`aria-flowto`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) topic contains additional information about how the attribute and property should be used.

## Value

An array of elements.

## Description

The property is a flexible alternative to using the [`aria-flowto`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) attribute to set an alternative reading order.
Unlike `aria-flowto`, the elements assigned to this property can be selected: they do not have to have an `id`.
This can be convenient as it avoids having to unnecessarily create ids for elements in order to use them for the flow.

The property reflects the element's [`aria-flowto`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.
If the property is set, then the corresponding attribute is cleared.
For more information about reflected element references and scope see [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Reflected attributes_ guide.

## Examples

The [Reflected element reference examples](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#setting_and_getting_reflected_element_references) in the _Attribute reflection_ guide are also relevant.

### Get the flow-to element

This example demonstrates the normal flow through three elements `section1`, `section2`, `section3` in order, and an alternative order that jumps from `section1` to `section3`, and back again.
Note that the example is illustrative unless you have accessibility tools running: we don't actually follow this alternate path.

#### HTML

The HTML defines three {{htmlelement("div")}} elements that define sections, with a class `"section"`, and `id` values: `section1`, `section2`, and `section3`.
Each section has a normal flow defined by it's order, starting from `section1` and ending at `section3`.
An alternative flow is defined in sections 1 and 3 using the `aria-flowto` attribute.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 180px;
  overflow: scroll;
  padding: 0.5rem;
  margin: 5px;
  border: 1px solid black;
}
```

```html
<div id="section1" class="section" aria-flowto="section3">
  <h2>Section 1</h2>
  <p>First section in normal flow. Section 3 is alternate flow.</p>
  <a href="#section2">Jump to Section 2 (normal flow)</a>
</div>

<div id="section2" class="section">
  <h2>Section 2</h2>
  <p>Second section in normal flow.</p>
  <a href="#section3">Jump to Section 3 (normal flow)</a>
</div>

<div id="section3" class="section" aria-flowto="section1">
  <h2>Section 3</h2>
  <p>
    Third section in normal flow (end of flow). Section 1 is alternate flow.
  </p>
</div>
```

#### JavaScript

The code first checks whether the `ariaFlowToElements` is supported, and if so, logs its value.
It then iterates through the sections, logging the section `id`, `aria-flowto` attribute value, and `ariaFlowToElements` property value.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// Feature test for ariaFlowToElements
if ("ariaFlowToElements" in Element.prototype) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((sectionDivElement) => {
    log(`${sectionDivElement.id}`);
    log(` aria-flowto: ${sectionDivElement.getAttribute("aria-flowto")}`);
    log(" ariaFlowToElements:");
    // Get the ids of each of the elements in the array
    sectionDivElement.ariaFlowToElements?.forEach((elem) => {
      log(`  id: ${elem.id}`);
    });
  });
} else {
  log("element.ariaFlowToElements: not supported by browser");
}
```

#### Result

The log below shows each of the sections (identified by `id`) and the corresponding flow-to element ids that might be selected by accessibility tools.
We note here that the attribute and property identify the same flow-to elements.

{{EmbedLiveSample("Get the flow-to element","100%","450px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-flowto`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) attribute
- {{domxref("ElementInternals.ariaFlowToElements")}}
- [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Attribute reflection_ guide.
