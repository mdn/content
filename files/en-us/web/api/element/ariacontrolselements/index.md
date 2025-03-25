---
title: "Element: ariaControlsElements property"
short-title: ariaControlsElements
slug: Web/API/Element/ariaControlsElements
page-type: web-api-instance-property
browser-compat: api.Element.ariaControlsElements
---

{{APIRef("DOM")}}

The **`ariaControlsElements`** property of the {{domxref("Element")}} interface identifies the element (or elements) that are controlled by the element it is applied to.
For example, this might be set on a [combobox](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) to indicate the element that it pops up, or on a [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) to indicate the ID of the element it controls.

The property reflects the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute when it is defined, but only for listed reference `id` values that match valid in-scope elements.

## Value

An array of elements that are controlled by this element.

## Description

The `ariaControlsElements` property is a flexible alternative to using the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute to set the controlled elements.
Unlike `aria-controls`, the elements assigned to this property can be selected: they do not have to have an `id`.
This can be convenient as it avoids having to unnecessarily create ids for elements in order to set them as controlled.

The elements to be controlled may be in the current scope or an ancestor scope of the element, but not a descendant scope.
In other words, a shadow root can set an element as controlled from within its own shadow DOM or the parent DOM, but a DOM element can't set an element defined in a shadow root.

If the `ariaControlsElements` property array includes an element that is subsequently moved out of scope, it will be omitted if you read the property, but the relationship is not severed!
If the associated element is moved back into scope the relationship will be restored (provided it has not been replaced).

The property reflects the element's [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute if it is defined.
Note however that the property will omit elements in the attribute where the associated reference `id` does not exist or is out of scope.
The property can be set directly or using the `aria-controls` attribute with {{domxref("Element.setAttribute()")}}.
If the description is set using `ariaControlsElements` then the `aria-controls` is set to the empty string (`""`).

The [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) topic contains additional information about how the accessible description should be used.

## Examples

### Get the control elements specified using `aria-controls`

This example shows how `ariaControlsElements` can be used to get an aria label defined using `aria-controls`.

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

{{EmbedLiveSample("Get the control elements specified using aria-controls","100%","280px")}}

### Set the controlled elements

This example shows how `ariaControlsElements` and {{domxref("Element.setAttribute()")}} can be used to set the controlled elements.
It also shows how using each approach changes the value of the corresponding attribute or property.

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
  margin: 5px;
}
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
  margin: 5px;
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

We then define a logging function to list the ids from the `aria-controls` attribute using {{domxref("Element.getAttribute()")}}, the controlled elements from `ariaControlsElements`, and the inner text for each of those elements.

```js
function logAccessibleInfo(element) {
  const refids = element.getAttribute("aria-controls");

  controlledElements = element.ariaControlsElements;
  // List innerText for each of the ariaControlsElements
  let text = "";
  controlledElements.forEach((controlled) => {
    text += `"${controlled.textContent.trim()}" `;
  });
  text = text.trim();

  log(
    `  id: "${refids}",
  el: ${controlledElements},
  text: ${text} `,
  );
}
```

If `ariaControlsElements` is supported, the code then:

1. Logs the original `id` reference from `aria-controls`, the corresponding `ariaControlsElements`, and the element's text content.
2. Sets the `ariaControlsElements` property to be just the `panel2` element and logs the same information.
3. Sets the `aria-controls` attribute to the reference `id` string of `panel1 panel3 panel2` and logs the same information (note that "panel3" is an invalid reference).

```js
// Feature test for ariaControlsElements
if ("ariaControlsElements" in Element.prototype) {
  log("[1] Attribute set in HTML");
  logAccessibleInfo(toggleButton);

  log("[2] Property set with element");
  toggleButton.ariaControlsElements = [panel2];
  logAccessibleInfo(toggleButton);

  log("[3] Attribute set from using setAttribute()");
  toggleButton.setAttribute("aria-controls", "panel1 panel3 panel2");
  logAccessibleInfo(toggleButton);
} else {
  log("ariaControlsElements not supported by browser");
}
```

#### Result

The log below shows the output of the above code.

{{EmbedLiveSample("Set the controlled elements","100%","400px")}}

Note:

- Line [1] Logs the original `id` reference from `aria-describedby`, the corresponding `ariaDescribedByElements`, and the element's text content.
- Line [2] demonstrates that the `ariaControlsElements` property can be set using either the property or a valid reference in the `aria-controls` attribute, and that setting the `ariaControlsElements` property sets the `aria-controls` attribute to `""`.
- Line [3] shows that when we set three references in the attribute and one is invalid (`panel3`), then we only get the two valid elements in `ariaControlsElements`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.ariaControlsElements")}}
