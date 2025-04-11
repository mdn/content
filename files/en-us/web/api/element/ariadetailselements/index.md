---
title: "Element: ariaDetailsElements property"
short-title: ariaDetailsElements
slug: Web/API/Element/ariaDetailsElements
page-type: web-api-instance-property
browser-compat: api.Element.ariaDetailsElements
---

{{APIRef("DOM")}}

The **`ariaDetailsElements`** property of the {{domxref("Element")}} interface is an array containing the element (or elements) that provide an accessible details for the element it is applied to.
The accessible details are similar to the accessible description (see {{domxref("Element/ariaDescribedByElements","ariaDescribedByElements")}}), but provides more verbose information.

The [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) topic contains additional information about how the attribute and property should be used.

## Value

An array of elements.
The inner text of these elements can be joined with spaces to get the accessible details.

## Description

The property is a flexible alternative to using the [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) attribute to set the accessible details information.
Unlike `aria-details`, the elements assigned to this property can be selected: they do not have to have an `id`.
This can be convenient as it avoids having to unnecessarily create ids for elements in order to use them for the details information.

The property reflects the element's [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.
If the property is set, then the corresponding attribute is cleared.
For more information about reflected element references and scope see [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Reflected attributes_ guide.

## Examples

The [Reflected element reference examples](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#setting_and_getting_reflected_element_references) in the _Attribute reflection_ guide are also relevant.

### Get the accessible details

This example shows how `ariaDetailsElements` can be used to get the information defined using the `aria-details` attribute in HTML.

#### HTML

The HTML defines two {{htmlelement("span")}} elements and references their ids in the `aria-details` attribute of a {{htmlelement("button")}}.

```html
<button aria-details="details1 details2">Button text</button>
…
<span id="details1">Details 1 information about the element.</span>
<span id="details2">Details 2 information about the element.</span>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The code below first logs the value of the `aria-details` attribute from {{domxref("Element.getAttribute()")}} (a string listing the `id` values of the referenced elements).
It then checks whether the `ariaDetailsElements` is supported, and if so, logs its value.
Finally it returns the accessible string, calculated by iterating through the returned elements and concatenating their inner text.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const buttonElement = document.querySelector("button");
log(`aria-details: ${buttonElement.getAttribute("aria-details")}`);
// Feature test for ariaDetailsElements
if ("ariaDetailsElements" in Element.prototype) {
  // Get ariaDetailsElements
  const buttonElements = buttonElement.ariaDetailsElements;
  log(`ariaDetailsElements: ${buttonElements}`);

  // Accessible details from ariaDetailsElements
  let ariaDetails = "";
  buttonElements.forEach((descElement) => {
    ariaDetails += descElement.textContent.trim() + " ";
  });
  log(`Accessible details: ${ariaDetails.trim()}`);
} else {
  log("element.ariaDetailsElements: not supported by browser");
}
```

#### Result

The log below shows the original element references, the associated/returned elements, and the accessible details.

{{EmbedLiveSample("Get the accessible details","100%","150px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) attribute
- {{domxref("ElementInternals.ariaDetailsElements")}}
- [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Attribute reflection_ guide.
