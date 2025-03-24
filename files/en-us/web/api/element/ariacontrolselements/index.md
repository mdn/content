---
title: "Element: ariaControlsElements property"
short-title: ariaControlsElements
slug: Web/API/Element/ariaControlsElements
page-type: web-api-instance-property
browser-compat: api.Element.ariaControlsElements
---

{{APIRef("DOM")}}

The **`ariaControlsElements`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute, which identifies the element (or elements) that are controlled by the element it is applied to.

For example, this might be set on a [combobox](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) to indicate the element that it pops up, or on a [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) to indicate the ID of the element it controls.

The [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) topic contains additional information about when the property should be set.

## Value

An array of elements that are controlled by this element.

The property array can include elements in the current scope, or to an ancestor scope, but not to a descendant scope.
In other words, an element in a shadow root can set that it controls other elements within its own shadow DOM or the parent DOM, but a DOM element can't set that it controls elements defined in a shadow root.
Setting the `ariaControlsElements` to an element that is not in scope will fail, and the property will not be included in the array if the property is read.

If the `ariaControlsElements` property includes an element that is subsequently moved out of scope the property subsequently omits that element, but the relationship is not severed!
If the associated element is moved back into scope the relationship will be restored (provided it has not been replaced).

The property also reflects the element's [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute, which can be set in HTML or with {{domxref("Element.setAttribute()")}}.
If the attribute contains invalid or out of scope references, then there will be no corresponding elements in `ariaControlsElements`.

Note that when the property is set, the corresponding [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attribute is set to the empty string (`""`).

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

If `ariaControlsElements` is supported, the code:

1. Logs the original `id` reference from `aria-controls`, the corresponding `ariaControlsElements`, and the element's text content.
2. Sets the `ariaControlsElements` property to be just the `panel2` element and logs the same information.
3. Sets the `aria-controls` attribute to the reference `id` string of `panel1 panel3 panel2` and logs the same information (note that "panel3" is an invalid reference).

```js
function logElementControlledElements(element) {
  const refids = element.getAttribute("aria-controls");

  controlledElements = element.ariaControlsElements;
  // List innerText for each of the ariaControlsElements
  let textOfControllingElements = "";
  controlledElements.forEach((controlled) => {
    textOfControllingElements += `"${controlled.textContent.trim()}" `;
  });
  textOfControllingElements = textOfControllingElements.trim();

  log(
    `  id: "${refids}",
  el: ${controlledElements},
  text: ${textOfControllingElements} `,
  );
}

// Feature test for ariaControlsElements
if ("ariaControlsElements" in Element.prototype) {
  log("[1] Attribute set in HTML");
  logElementControlledElements(toggleButton);

  log("[2] Property set with element");
  toggleButton.ariaControlsElements = [panel2];
  logElementControlledElements(toggleButton);

  log("[3] Attribute set from using setAttribute()");
  toggleButton.setAttribute("aria-controls", "panel1 panel3 panel2");
  logElementControlledElements(toggleButton);
} else {
  log("ariaControlsElements not supported by browser");
}
```

#### Result

The log below shows the output of the above code.
Line 2 demonstrates that the `ariaControlsElements` property can be set using either the property or a valid reference in the `aria-controls` attribute, and that setting the `ariaControlsElements` property sets the `aria-controls` attribute to `""`.
Line [3] shows what happens when you set three reference `id` values in the attribute, but one of them is invalid (`panel3`).
In this case the attribute is set/readable and the `ariaControlsElements` is populated with the valid elements.

{{EmbedLiveSample("Set the controlled elements","100%","400px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.ariaControlsElements")}}
