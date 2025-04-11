---
title: "Element: ariaDescribedByElements property"
short-title: ariaDescribedByElements
slug: Web/API/Element/ariaDescribedByElements
page-type: web-api-instance-property
browser-compat: api.Element.ariaDescribedByElements
---

{{APIRef("DOM")}}

The **`ariaDescribedByElements`** property of the {{domxref("Element")}} interface is an array containing the element (or elements) that provide an accessible description for the element it is applied to.
The accessible description is similar to the accessible label (see {{domxref("Element/ariaLabelledByElements","ariaLabelledByElements")}}), but provides more verbose information.

The [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) topic contains additional information about how the attribute and property should be used.

## Value

An array of subclasses of {{domxref("HTMLElement")}}.
The inner text of these elements can be joined with spaces to get the accessible description.

## Description

The property is a flexible alternative to using the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) attribute to set the accessible description.
Unlike `aria-describedby`, the elements assigned to this property do not have to have an [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute.

The property reflects the element's [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.
If the property is set, then the corresponding attribute is cleared.
For more information about reflected element references and scope see [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Reflected attributes_ guide.

## Examples

The [Reflected element reference examples](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#setting_and_getting_reflected_element_references) in the _Attribute reflection_ guide are also relevant.

### Get the accessible description

This example shows how `ariaDescribedByElements` can be used to get the accessible description defined using `aria-describedby`.

#### HTML

The HTML defines two {{htmlelement("span")}} elements and references their ids in the `aria-describedby` attribute of a {{htmlelement("button")}}.

```html
<button aria-describedby="trash-desc1 trash-desc2">Move to trash</button>
…
<span id="trash-desc1">Trash will be permanently removed after 30 days.</span>
<span id="trash-desc2">Or Else!</span>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

Here we'll just hide the `<span>` elements that contain our accessible text.

```css
span {
  display: none;
}
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

The code below first logs the value of the `aria-describedby` attribute from {{domxref("Element.getAttribute()")}} (a string listing the `id` values of the referenced elements).
It then checks whether the `ariaDescribedByElements` is supported, and if so, logs its value.
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
log(`aria-describedby: ${buttonElement.getAttribute("aria-describedby")}`);
// Feature test for ariaDescribedByElements
if ("ariaDescribedByElements" in Element.prototype) {
  // Get ariaDescribedByElements
  const buttonElements = buttonElement.ariaDescribedByElements;
  log(`ariaDescribedByElements: ${buttonElements}`);

  // Accessible description from the elements
  let ariaDescription = "";
  buttonElements.forEach((descElement) => {
    ariaDescription += descElement.textContent.trim() + " ";
  });
  log(`Accessible description: ${ariaDescription.trim()}`);
} else {
  log("element.ariaDescribedByElements: not supported by browser");
}
```

#### Result

The log below shows the original element references, the associated/returned elements, and the accessible description.

{{EmbedLiveSample("Get the accessible description","100%","150px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) attribute
- {{domxref("ElementInternals.ariaDescribedByElements")}}
- [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Attribute reflection_ guide
