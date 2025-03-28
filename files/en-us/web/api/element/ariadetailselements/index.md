---
title: "Element: ariaDetailsElements property"
short-title: ariaDetailsElements
slug: Web/API/Element/ariaDetailsElements
page-type: web-api-instance-property
browser-compat: api.Element.ariaDetailsElements
---

{{APIRef("DOM")}}

The **`ariaDetailsElements`** property of the {{domxref("Element")}} interface identifies the element (or elements) that provide accessible details for the element it is applied to.

The accessible details contain more detailed information and complex descriptions than might be provided by the accessible description ([`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) and [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)), or the accessible name.

The property reflects the [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.

## Value

An array of elements that can be joined with spaces to get the accessible details.

## Description

The `ariaDetailsElements` property is a flexible alternative to using the [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) attribute to set the accessible details information.
Unlike `aria-details`, the elements assigned to this property can be selected: they do not have to have an `id`.
This can be convenient as it avoids having to unnecessarily create ids for elements in order to assign them as the active descendent.

The elements that form the details may be in the current scope or an ancestor scope of the element, but not a descendant scope.
In other words, a shadow root can set parts of the details from within its own shadow DOM or the parent DOM, but a DOM element can't set parts of the details from elements defined in a shadow root.

If the `ariaDetailsElements` property array includes an element that is subsequently moved out of scope, it will be omitted if you read the property, but the relationship is not severed!
If the associated element is moved back into scope the relationship will be restored (provided it has not been replaced).

The property reflects the element's [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) attribute if it is defined.
Note however that the property will omit elements in the attribute where the associated reference `id` does not exist or is out of scope.
The property can be set directly or using the `aria-details` attribute with {{domxref("Element.setAttribute()")}}.
If the details are set using `ariaDetailsElements` then the `aria-details` is set to the empty string (`""`).

The [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) topic contains additional information about how the accessible details should be used.

## Examples

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

### Set the accessible details

This example shows how `ariaDetailsElements` and {{domxref("Element.setAttribute()")}} can be used to set the accessible details.
It also shows how using each approach changes the value of the corresponding attribute or property.

#### HTML

The HTML defines three {{htmlelement("span")}} elements and references the ids of two of them in the `aria-details` attribute of a {{htmlelement("button")}}.

```html
<button aria-details="details1 details2">Button</button>
…
<span id="details1">(Details1 Text)</span>
<span id="details2">(Details2 Text)</span>
<span>(Details3 Text)</span>
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

The code first defines a logging function to list the ids from the `aria-details` attribute using {{domxref("Element.getAttribute()")}}, the elements from `ariaDetailsElements`, and the accessible name constructed from the inner text of each of those elements.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
function logAccessibleInfo(element) {
  const refids = element.getAttribute("aria-details");

  let text = "";
  accessibleElements = element.ariaDetailsElements;
  accessibleElements.forEach((descElement) => {
    text += descElement.textContent.trim() + " ";
  });
  text = text.trim();

  log(` id: "${refids}", el: ${accessibleElements}, desc: ${text} `);
}
```

Next the code checks if `ariaDetailsElements` is supported, and if so:

1. Logs the original ids, elements, and element text, as set from the HTML
2. Sets the property by selecting the `<span>` elements and logs the same information (shows that the attribute is cleared if you set the property).
   Note that here we don't have to specify the `id` values, as we did in the attribute!
3. Sets the `aria-details` attribute to the reference `id` string of `details1 details2 details3` and logs the same information.

```js
const buttonElement = document.querySelector("button");

// Feature test for ariaDetailsElements
if ("ariaDetailsElements" in Element.prototype) {
  log("[1] Attribute set in HTML");
  logAccessibleInfo(buttonElement);

  log("[2] Property set from span selector");
  buttonElement.ariaDetailsElements = document.querySelectorAll("span");
  logAccessibleInfo(buttonElement);

  log("[3] Attribute set using setAttribute()");
  buttonElement.setAttribute(
    "aria-details",
    "details1 details2 details3",
  );
  logAccessibleInfo(buttonElement);
} else {
  log("ariaDetailsElements not supported by browser");
}
```

#### Result

The log below shows the output of the above code.

- Line [1] demonstrates that the property reflects the references set in the HTML attribute.
- Line [2] demonstrates that setting the property clears the attribute to `""`.
- Line [3] demonstrates that invalid references in the attribute are omitted from the property.

{{EmbedLiveSample("Set the accessible details ","100%","350px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.ariaDetailsElements")}}
