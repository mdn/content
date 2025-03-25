---
title: "Element: ariaLabelledByElements property"
short-title: ariaLabelledByElements
slug: Web/API/Element/ariaLabelledByElements
page-type: web-api-instance-property
browser-compat: api.Element.ariaLabelledByElements
---

{{APIRef("DOM")}}

The **`ariaLabelledByElements`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) attribute, which identifies the element (or elements) that provide an accessible name for the element it is applied to.

The property is primarily intended to provide a label for elements that don't have a standard method for defining their accessible name.
For example, this might be used to name a generic container element, such as a {{htmlelement("div")}} or {{htmlelement("span")}}, or a grouping of elements, such as an image with a slider that can be used to change its opacity.
The property takes precedence over other mechanisms for providing an accessible name for elements, and may therefore also be used to provide a name for elements that would normally get it from their inner content or from an associated element such as a label.

The [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) topic contains additional information about when the property should be set.

## Value

An array of elements that provide the accessible name.

The property array can include elements in the current scope, or to an ancestor scope, but not to a descendant scope.
In other words, a shadow root can set part of the label from within its own shadow DOM or the parent DOM, but a DOM element can't set part of the label from an element defined in a shadow root.
Setting the `ariaLabelledByElements` to an element that is not in scope will fail, and the property will be set to `null`.

If the `ariaLabelledByElements` property includes an element that is subsequently moved out of scope the property subsequently omit that element, but the relationship is not severed!
If the associated element is moved back into scope the relationship will be restored (provided it has not been replaced).

The property also reflects the element's [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) attribute, which can be set in HTML or with {{domxref("Element.setAttribute()")}}.
If the attribute contains invalid or out of scope references, then there will be no corresponding elements in `ariaLabelledByElements`.

Note that when the property is set, the corresponding [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) attribute is set to the empty string (`""`).

## Examples

### Get the accessible name specified using `aria-labelledby`

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

{{EmbedLiveSample("Get the accessible name from other elements","100%","150px")}}

### Setting the accessible name

This example shows how `ariaLabelledByElements` and {{domxref("Element.setAttribute()")}} can be used to set aria label.
It also shows how using each approach changes the value of the corresponding attribute or property.

#### HTML

The HTML defines two {{htmlelement("span")}} elements and references their ids in the `aria-labelledby` attribute of an {{htmlelement("input")}}.
The accessible name of the `<input>` is then the concatenation of the inner text of the first two referenced elements.

```html
<span id="label_1">(Label 1 Text)</span>
<input aria-labelledby="label_1 label_2" />
<span id="label_2">(Label 2 Text)</span>
<span id="label_3">(Label 3 Text)</span>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 270px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The code first defines a logging function to list the ids from the `aria-labelledby` attribute using {{domxref("Element.getAttribute()")}}, the aria labelled elements from `ariaLabelledByElements`, and the accessible name constructed from the inner text of each of those elements.

If `ariaLabelledByElements` is supported, the code:

1. Logs the original `id` reference from `aria-labelledby`, the corresponding `ariaLabelledByElements`, and the element's text content.
2. Sets the `ariaLabelledByElements` property to be the `<span>` elements and logs the same information.
3. Sets the `aria-labelledby` attribute to the reference `id` string of `label_1 label_4 label_3` and logs the same information.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const inputElement = document.querySelector("input");

function logElementAccessibleName(element) {
  const refids = element.getAttribute("aria-labelledby");

  let accessibleName = "";
  accessElements = element.ariaLabelledByElements;
  accessElements.forEach((labelElement) => {
    accessibleName += labelElement.textContent.trim() + " ";
  });
  accessibleName = accessibleName.trim();

  log(` id: "${refids}", el: ${accessElements}, label ${accessibleName} `);
}

// Feature test for ariaLabelledByElements
if ("ariaLabelledByElements" in Element.prototype) {
  log("[1] Attribute set in HTML");
  logElementAccessibleName(inputElement);

  log("[2] Property set from span selector");
  inputElement.ariaLabelledByElements = document.querySelectorAll("span");
  logElementAccessibleName(inputElement);

  // We could also set the labels explicitly.
  //const label1Element = document.querySelector("#label_1");
  //const label2Element = document.querySelector("#label_2");
  //inputElement.ariaLabelledByElements = [label1Element, label2Element];

  log("[3] Attribute set from using setAttribute");
  inputElement.setAttribute("aria-labelledby", "label_1 label_4 label_3");
  logElementAccessibleName(inputElement);
} else {
  log("ariaLabelledByElements not supported by browser");
}
```

#### Result

The log below shows the output of the above code.
Line 2 demonstrates that `ariaLabelledByElements` property can be set using either the property or a valid reference in the `aria-labelledby` attribute, and that setting the `ariaLabelledByElements` property sets the `aria-labelledby` attribute to `""`.
Line [3] shows what happens when you set three reference `id` values in the attribute, but one of them is invalid (`label_4`).

{{EmbedLiveSample("Set the accessible name","100%","350px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.ariaLabelledByElements")}}
