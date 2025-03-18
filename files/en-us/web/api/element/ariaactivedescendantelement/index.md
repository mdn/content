---
title: "Element: ariaActiveDescendantElement property"
short-title: ariaActiveDescendantElement
slug: Web/API/Element/ariaActiveDescendantElement
page-type: web-api-instance-property
browser-compat: api.Element.ariaActiveDescendantElement
---

{{APIRef("DOM")}}

The **`ariaActiveDescendantElement`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) attribute, which identifies the current active element when focus is on a [`composite`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) widget, [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role), or [`application`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role).

Note that the value can be set to a descendent value selected using its child position (or any other mechanism) so it does not require that the element has an id.
This can be useful when there are a lot of elements that might be the active descendent, or if the elements are created programmatically.

The [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) topic contains additional information about when the property can and should be set.

## Value

An element that is the active descendant.

## Examples

### Get the active descendent

This example shows how `ariaActiveDescendantElement` can be used to programmatically get the current active descendant (set using `aria-activedescendant`).

#### HTML

The HTML defines a listbox for selecting different kinds of streets, consisting of a {{htmlelement("div")}} element with the [`listbox` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) and nested `<div>` items for each of the options.
The active descendent is set using `aria-activedescendant`.

```html
<div id="streetType" role="listbox" aria-activedescendant="avenue">
  <div id="street">Street</div>
  <div id="avenue">Avenue</div>
  <div id="lane">Lane</div>
</div>
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

The code below first checks whether the `ariaActiveDescendantElement` is supported.
It then logs the value of the `id` reference from the attribute, and then the property element and its text content.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// Feature test for ariaActiveDescendantElement
if ("ariaActiveDescendantElement" in Element.prototype) {
  // Log id for active descendant relationship through the content attribute.
  log(
    `aria-activedescendant (id): ${streetType.getAttribute("aria-activedescendant")}`,
  );
  // Log element for active descendant through property
  log(
    `ariaActiveDescendantElement (element): ${streetType.ariaActiveDescendantElement}`,
  );
  // Log inner text of element.
  log(
    `Element text: ${streetType.ariaActiveDescendantElement.textContent.trim()}`,
  );
} else {
  log("ariaActiveDescendantElement not supported by browser");
}
```

#### Result

The log below shows the output of the above code.
The first line is the original reference id (`avenue`), the second is the associated element obtained using `ariaActiveDescendantElement`, and the third is the text content of that element.

{{EmbedLiveSample("Get the active descendent","100%","190px")}}

### Set the active descendent programmatically

This example shows how the active descendant can be set using `ariaActiveDescendantElement`.

#### HTML

The HTML defines a listbox for selecting different kinds of streets, consisting of a {{htmlelement("div")}} element with the [`listbox` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) and nested `<div>` items for each of the options.
Unlike the previous example we choose not to set a default active descendent.

```html
<div id="streetType" role="listbox">
  <div>Street</div>
  <div>Avenue</div>
  <div id="lane">Lane</div>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The code first checks whether the `ariaActiveDescendantElement` is supported.
If it is then we get the element with `id` of "lane" and set that element to be the `ariaActiveDescendantElement`.
We then log the element, element text from `ariaActiveDescendantElement`, and also the value of the `id` using `Element.getAttribute()` and `aria-activedescendant`.

The second part of the code does the same thing, but selects the element to make the active descendant using its child position.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// Feature test for ariaActiveDescendantElement
if ("ariaActiveDescendantElement" in Element.prototype) {
  const laneElement = document.querySelector("#lane");
  streetType.ariaActiveDescendantElement = laneElement;
  log(
    `ariaActiveDescendantElement (element): ${streetType.ariaActiveDescendantElement}`,
  );
  log(
    `Element text: ${streetType.ariaActiveDescendantElement.textContent.trim()}`,
  );
  log(
    `aria-activedescendant (id): ${streetType.getAttribute("aria-activedescendant")}`,
  );

  // Repeat, but select the avenue div by position
  const avenueDiv = document.querySelector("#streetType div:nth-child(2)");
  streetType.ariaActiveDescendantElement = avenueDiv;
  log(
    `ariaActiveDescendantElement (element): ${streetType.ariaActiveDescendantElement}`,
  );
  log(
    `Element text: ${streetType.ariaActiveDescendantElement.textContent.trim()}`,
  );
  log(
    `aria-activedescendant (id): ${streetType.getAttribute("aria-activedescendant")}`,
  );
} else {
  log("ariaActiveDescendantElement not supported by browser");
}
```

#### Result

The log below shows the output of the above code.
What this demonstrates is that we can select and assign elements to be the active descendant, even if they don't have an id.
Note also that the corresponding attribute `aria-activedescendant` is not set (no id is shown below).

{{EmbedLiveSample("Set the active descendent programmatically","100%","200px")}}

### Relationships are maintained when descendant out of scope

This example shows that the relationship with `ariaActiveDescendantElement` is maintained when the descendent is out of scope in a shadow DOM, but restored when the element returns to the DOM.

#### HTML

The HTML defines a listbox for selecting different kinds of streets, consisting of a {{htmlelement("div")}} element with the [`listbox` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) and nested `<div>` items for each of the options.
Noe active descendent is initially set.

```html
<div id="streetType" role="listbox">
  <div id="street">Street</div>
  <div id="avenue">Avenue</div>
  <div id="lane">Lane</div>
</div>
<div id="shadowElement"></div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The code below first checks whether the `ariaActiveDescendantElement` is supported, and then logs the value of the active descendant's text content, the element, and the `id` reference from the attribute.
The element is then moved in and then out of a shadow root, logging the same information again each time.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// Feature test for ariaActiveDescendantElement
if ("ariaActiveDescendantElement" in Element.prototype) {
  const laneElement = document.getElementById("lane");
  const shadowRoot = shadowElement.attachShadow({ mode: "open" });

  // We make the active descendant of the streetType the lane.
  streetType.ariaActiveDescendantElement = laneElement;
  log(
    `txt: ${streetType.ariaActiveDescendantElement?.textContent.trim()}, el: ${streetType.ariaActiveDescendantElement}, id: ${streetType.getAttribute("aria-activedescendant")}`,
  );

  // We then move the referenced element (lane) into shadow DOM (fridge).
  shadowRoot.appendChild(laneElement);
  // The active descendant relationship is now non-observable.
  //element should be null - referenced element out of scope
  // but the referenced element id should still be here
  log(
    `txt: ${streetType.ariaActiveDescendantElement?.textContent.trim()}, el: ${streetType.ariaActiveDescendantElement}, id: ${streetType.getAttribute("aria-activedescendant")}`,
  );

  // Move the referenced element (lane) back into the DOM
  streetType.appendChild(laneElement);
  // Our active descendant relationship remained intact!
  log(
    `txt: ${streetType.ariaActiveDescendantElement?.textContent.trim()}, el: ${streetType.ariaActiveDescendantElement}, id: ${streetType.getAttribute("aria-activedescendant")}`,
  );
} else {
  log("ariaActiveDescendantElement not supported by browser");
}
```

#### Result

The log below shows the output of the above code.
The first line shows the element when it is first assigned as the active descendent, the second shows the result after moving it into the shadow root, and the last line shows the result after returning the element to the DOM.
What we see is that the element is not found when it is out of scope in the DOM, but it is restored as the active descendant when it is returned to the DOM.

{{EmbedLiveSample("Set the active descendent programmatically2","100%","250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.ariaActiveDescendantElement")}}
