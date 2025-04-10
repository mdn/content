---
title: "Element: ariaLabelledByElements property"
short-title: ariaLabelledByElements
slug: Web/API/Element/ariaLabelledByElements
page-type: web-api-instance-property
browser-compat: api.Element.ariaLabelledByElements
---

{{APIRef("DOM")}}

The **`ariaLabelledByElements`** property of the {{domxref("Element")}} interface is an array containing the element (or elements) that provide an accessible name for the element it is applied to.

The property is primarily intended to provide a label for elements that don't have a standard method for defining their accessible name.
For example, this might be used to name a generic container element, such as a {{htmlelement("div")}} or {{htmlelement("span")}}, or a grouping of elements, such as an image with a slider that can be used to change its opacity.
The property takes precedence over other mechanisms for providing an accessible name for elements, and may therefore also be used to provide a name for elements that would normally get it from their inner content or from an associated element such as a label.

The [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) topic contains additional information about how the attribute and property should be used.

## Value

An array of elements.
The inner text of these elements can be joined with spaces to get the accessible name.

## Description

The property is a flexible alternative to using the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) attribute to set the accessible name.
Unlike `aria-labelledby`, the elements assigned to this property can be selected: they do not have to have an `id`.
This can be convenient as it avoids having to unnecessarily create ids for elements in order to use them for the description.

The property reflects the element's [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.
If the property is set, then the corresponding attribute is cleared.
For more information about reflected element references and scope see [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Reflected attributes_ guide.

## Examples

The [Reflected element reference examples](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#setting_and_getting_reflected_element_references) in the _Attribute reflection_ guide are also relevant.

### Get the accessible name

This example shows how `ariaLabelledByElements` can be used to get an aria label defined using `aria-labelledby`.

#### HTML

The HTML defines two {{htmlelement("span")}} elements and references their ids in the `aria-labelledby` attribute of an {{htmlelement("input")}}.
The accessible name of the `<input>` is the concatenation of the inner text of the two referenced elements, separated by a space.

```html
<span id="label_1">Street name</span>
<input aria-labelledby="label_1 label_2" />
<span id="label_2">(just the name, no "Street" or "Road" or "Place")</span>
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

The code below first logs the value of the `aria-labelledby` attribute from {{domxref("Element.getAttribute()")}} (a string listing the `id` values of the referenced elements).
It then checks whether the `ariaLabelledByElements` is supported, and if so, logs its value.
Finally it returns the accessible string, calculated by iterating through the elements and concatenating their inner text.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const inputElement = document.querySelector("input");
log(`aria-labelledby: ${inputElement.getAttribute("aria-labelledby")}`);
// Feature test for ariaLabelledByElements
if ("ariaLabelledByElements" in Element.prototype) {
  // Get ariaLabelledByElements
  const labelElements = inputElement.ariaLabelledByElements;
  log(`ariaLabelledByElements: ${labelElements}`);

  // Accessible name from ariaLabelledByElements
  let accessibleName = "";
  labelElements.forEach((labelElement) => {
    accessibleName += labelElement.textContent.trim() + " ";
  });
  log(`Accessible name: ${accessibleName.trim()}`);
} else {
  log("element.ariaLabelledByElements: not supported by browser");
}
```

#### Result

The log below shows the original element references, the associated/returned elements, and the accessible name.

{{EmbedLiveSample("Get the accessible name","100%","150px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) attribute
- {{domxref("ElementInternals.ariaLabelledByElements")}}
- [Reflected element references](2/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Attribute reflection_ guide.
