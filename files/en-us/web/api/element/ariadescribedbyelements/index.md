---
title: "Element: ariaDescribedByElements property"
short-title: ariaDescribedByElements
slug: Web/API/Element/ariaDescribedByElements
page-type: web-api-instance-property
browser-compat: api.Element.ariaDescribedByElements
---

{{APIRef("DOM")}}

The **`ariaDescribedByElements`** property of the {{domxref("Element")}} interface identifies the element (or elements) that provide an accessible description for the element it is applied to.
The accessible description is similar to the accessible label (see {{domxref("Element/ariaLabelledByElements","ariaLabelledByElements")}}), but provides more verbose information.

The property reflects the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.

## Value

An array of elements that can be joined with spaces to get the accessible name.

## Description

The `ariaDescribedByElements` property is a flexible alternative to using the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) attribute to set the accessible description.
Unlike `aria-describedby`, the elements assigned to this property can be selected: they do not have to have an `id`.
This can be convenient as it avoids having to unnecessarily create ids for elements in order to assign them as the active descendent.

The elements that form the description may be in the current scope or an ancestor scope of the element, but not a descendant scope.
In other words, a shadow root can set parts of the description from within its own shadow DOM or the parent DOM, but a DOM element can't set parts of the description from elements defined in a shadow root.

If the `ariaDescribedByElements` property includes an element that is subsequently moved out of scope the property subsequently omit that element, but the relationship is not severed!
If the associated element is moved back into scope the relationship will be restored (provided it has not been replaced).

The property reflects the element's [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) attribute if it is defined.
Note however that the property will omit elements in the attribute where the associated reference `id` does not exist or is out of scope.
The property can be set directly or using the `aria-describedby` attribute with {{domxref("Element.setAttribute()")}}.
If the description is set using `ariaDescribedByElements` then the `aria-describedby` is set to the empty string (`""`).

The [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) topic contains additional information about how the accessible description should be used.

## Examples

### Get the accessible description

This example shows how `ariaDescribedByElements` can be used to get an aria description defined using `aria-describedby`.

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

  // Accessible name from ariaDescribedByElements
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

### Set the accessible description

This example shows how `ariaDescribedByElements` and {{domxref("Element.setAttribute()")}} can be used to set the accessible description.
It also shows how using each approach changes the value of the corresponding attribute or property.

#### HTML

The HTML defines three {{htmlelement("span")}} elements and references the ids of two of them in the `aria-describedby` attribute of a {{htmlelement("button")}}.

```html
<button aria-describedby="trash-desc1 trash-desc2">Move to trash</button>
…
<span id="trash-desc1">(Trash1 Text)</span>
<span id="trash-desc2">(Trash2 Text)</span>
<span>(Trash3 Text)</span>
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
  height: 270px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The code first defines a logging function to list the ids from the `aria-describedby` attribute using {{domxref("Element.getAttribute()")}}, the aria labelled elements from `ariaDescribedByElements`, and the accessible name constructed from the inner text of each of those elements.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
function logAccessibleInfo(element) {
  const refids = element.getAttribute("aria-describedby");

  let text = "";
  accessibleElements = element.ariaDescribedByElements;
  accessibleElements.forEach((descElement) => {
    text += descElement.textContent.trim() + " ";
  });
  text = text.trim();

  log(` id: "${refids}", el: ${accessibleElements}, desc: ${text} `);
}
```

Next the code checks if `ariaDescribedByElements` is supported, and if so:

1. Logs the original `id` reference from `aria-describedby`, the corresponding `ariaDescribedByElements`, and the element's text content.
2. Sets the `ariaDescribedByElements` property to be the `<span>` elements and logs the same information.
   Note that here we don't have to specify the `id` values, as we did in the attribute!
3. Sets the `aria-describedby` attribute to the reference `id` string of `trash-desc1 trash-desc3 trash-desc2` and logs the same information.

```js
const buttonElement = document.querySelector("button");

// Feature test for ariaDescribedByElements
if ("ariaDescribedByElements" in Element.prototype) {
  log("[1] Attribute set in HTML");
  logAccessibleInfo(buttonElement);

  log("[2] Property set from span selector");
  buttonElement.ariaDescribedByElements = document.querySelectorAll("span");
  logAccessibleInfo(buttonElement);

  log("[3] Attribute set from using setAttribute");
  buttonElement.setAttribute(
    "aria-describedby",
    "trash-desc1 trash-desc3 trash-desc2",
  );
  logAccessibleInfo(buttonElement);
} else {
  log("ariaDescribedByElements not supported by browser");
}
```

#### Result

The log below shows the output of the above code.


{{EmbedLiveSample("Set the accessible description","100%","350px")}}

Note:

- Line [1] shows that `ariaDescribedByElements` property can be set using a reference in the `aria-describedby` attribute.
- Line [2] demonstrates that `ariaDescribedByElements` property can be set using property, and that this sets the `aria-describedby` attribute to `""`.
- Line [3] shows that when we set three references in the attribute and one is invalid (`trash-desc3`), then we only get two elements in `ariaDescribedByElements`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.ariaDescribedByElements")}}
