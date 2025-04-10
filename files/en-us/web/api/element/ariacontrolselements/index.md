---
title: "Element: ariaControlsElements property"
short-title: ariaControlsElements
slug: Web/API/Element/ariaControlsElements
page-type: web-api-instance-property
browser-compat: api.Element.ariaControlsElements
---

{{APIRef("DOM")}}

The **`ariaControlsElements`** property of the {{domxref("Element")}} interface is an array containing the element (or elements) that are controlled by the element it is applied to.
For example, this might be set on a [combobox](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) to indicate the element that it pops up, or on a [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) to indicate the ID of the element it controls.

The [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) topic contains additional information about how the attribute and property should be used.

## Value

An array of elements that are controlled by this element.

## Description

The property is a flexible alternative to using the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute to set the controlled elements.
Unlike `aria-controls`, the elements assigned to this property do not have to have an `id`: they can be selected.
This can be convenient as it avoids having to unnecessarily create ids for elements in order to set them as controlled.

The property reflects the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.
If the property is set, then the corresponding attribute is cleared.
For more information about reflected element references and scope see [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Reflected attributes_ guide.

## Examples

The [Reflected element reference examples](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#setting_and_getting_reflected_element_references) in the _Attribute reflection_ guide are also relevant.

### Get the controlled elements

This example shows how `ariaControlsElements` can be used to get the controlled elements that were set using `aria-controls`.

#### HTML

The HTML defines first defines a {{htmlelement("button")}} element and two {{htmlelement("div")}} elements, `panel1` and `panel2`, that it controls.
The references to the controlled panels are listed in the button's `aria-controls` attribute.

```html
<button id="toggleButton" aria-controls="panel1 panel2" aria-expanded="false">
  Show Details
</button>

<div class="panel" id="panel1" aria-hidden="true">
  <p>Panel1 opened/closed by button.</p>
</div>

<div class="panel" id="panel2" aria-hidden="true">
  <p>Panel2 opened/closed by button.</p>
</div>
```

```css
.panel {
  display: none; /* Initially hidden */
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 5px;
}
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

The code first sets up the panels to be toggled open or hidden based on the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) attribute of the button.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const toggleButton = document.querySelector("#toggleButton");
const panel1 = document.querySelector("#panel1");
const panel2 = document.querySelector("#panel2");

toggleButton.addEventListener("click", () => {
  const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

  toggleButton.setAttribute("aria-expanded", !isExpanded);
  panel1.style.display = isExpanded ? "none" : "block";
  panel1.setAttribute("aria-hidden", isExpanded); //true when hidden, false when shown.

  panel2.style.display = isExpanded ? "none" : "block";
  panel2.setAttribute("aria-hidden", isExpanded); //true when hidden, false when shown.
});
```

Next the example gets the value of the `aria-controls` attribute with {{domxref("Element.getAttribute()")}} (a string listing the `id` values of the referenced elements).
It then checks whether the `ariaControlsElements` property is supported, and if so, logs its value.
Finally it returns and logs the inner text of each of the controlled elements.

```js
log(`aria-controls: ${toggleButton.getAttribute("aria-controls")}`);
// Feature test for ariaControlsElements
if ("ariaControlsElements" in Element.prototype) {
  // Get ariaControlsElements
  const controlledElements = toggleButton.ariaControlsElements;
  log(`ariaControlsElements: ${controlledElements}`);

  // List innerText for each of the ariaControlsElements
  let textOfControllingElements = "";
  controlledElements.forEach((controlled) => {
    textOfControllingElements += `"${controlled.textContent.trim()}" `;
  });
  log(`Controlled element text: ${textOfControllingElements.trim()}`);
} else {
  log("element.ariaControlsElements: not supported by browser");
}
```

#### Result

Click the button below to show and hide the panels.
The log shows the original element references, the associated/returned elements, and the inner text of each element.

{{EmbedLiveSample("Get the controlled elements","100%","280px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute
- {{domxref("ElementInternals.ariaControlsElements")}}
- [Reflected element references](2/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Attribute reflection_ guide
