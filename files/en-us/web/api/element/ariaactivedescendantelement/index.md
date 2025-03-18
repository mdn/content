---
title: "Element: ariaActiveDescendantElement property"
short-title: ariaActiveDescendantElement
slug: Web/API/Element/ariaActiveDescendantElement
page-type: web-api-instance-property
browser-compat: api.Element.ariaActiveDescendantElement
---

{{APIRef("DOM")}}

The **`ariaActiveDescendantElement`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) attribute, which identifies the current active element when focus is on a [`composite`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) widget, [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role), or [`application`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role).

The property initially takes the value of the element referenced by the element's [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) attribute, if it is set and in scope, or `null` otherwise.

Its value can be set to an element in the current scope, or to an ancestor scope, but not to a descendant scope.
In other words, a shadow root can set an active descendant from within its own shadow DOM or the parent DOM, but a DOM element can't set an active descendent defined in a shadow root.
Note that if the property is set, the corresponding [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) is set to the empty string (`""`).

Unlike `aria-activedescendant`, the element assigned to this property does not have to have an `id`: it can be selected using any available mechanism, such as its position in their hierarchy, or some other attribute.
This can be convenient as it avoids having to unnecessarily create ids for elements in order to assign them as the active descendent.

The [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) topic contains additional information about when the property can and should be set.

## Value

An element that is the active descendant, or `null` if there is no active descendant.

## Examples

### Get the active descendent

This example shows how `ariaActiveDescendantElement` can be used to programmatically get and set the current active descendant.

#### HTML

The HTML defines a listbox for selecting different kinds of streets, consisting of a {{htmlelement("div")}} element with the [`listbox` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) and nested `<div>` items for each of the options.
The active descendent is initially set to the element with `id` of `avenue` using `aria-activedescendant`.

```html
<div id="streetType" role="listbox" aria-activedescendant="avenue">
  <div>Street</div>
  <div id="avenue">Avenue</div>
  <div>Lane</div>
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
It if it is, it then logs the value of the `id` reference from `aria-activedescendant`, the property element, and its text content.

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
  // Log initial ariaActiveDescendantElement from aria-activedescendant
  log(
    `aria-activedescendant: '${streetType.getAttribute("aria-activedescendant")}', el: ${streetType.ariaActiveDescendantElement}, txt: ${streetType.ariaActiveDescendantElement?.textContent.trim()}`,
  );

  // Select the avenue div by position and assign as ariaActiveDescendantElement
  const avenueDiv = document.querySelector("#streetType div:nth-child(3)");
  streetType.ariaActiveDescendantElement = avenueDiv;

  // Log again, showing that aria-activedescendant is "" and the ariaActiveDescendantElement has new value
  log(
    `aria-activedescendant: '${streetType.getAttribute("aria-activedescendant")}', el: ${streetType.ariaActiveDescendantElement}, txt: ${streetType.ariaActiveDescendantElement?.textContent.trim()}`,
  );
} else {
  log("ariaActiveDescendantElement not supported by browser");
}
```

#### Result

The log below shows the output of the above code.
The first line is the original reference id in `aria-activedescendant` (`avenue`), the associated element obtained from `ariaActiveDescendantElement`, and the text in that element.
The second line shows the new element that was selected and assigned. Note that the value of the `aria-activedescendant` attribute is now `""`.

{{EmbedLiveSample("Get the active descendent","100%","190px")}}

<!-- Come back to this. Show shadow root can't be selected, and also this, that you can move in and out of scope -->
<!--

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

-->

{{EmbedLiveSample("Set the active descendent programmatically2","100%","250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.ariaActiveDescendantElement")}}
