---
title: "Element: ariaActiveDescendantElement property"
short-title: ariaActiveDescendantElement
slug: Web/API/Element/ariaActiveDescendantElement
page-type: web-api-instance-property
browser-compat: api.Element.ariaActiveDescendantElement
---

{{APIRef("DOM")}}

The **`ariaActiveDescendantElement`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) attribute, which identifies the current active element when focus is on a [`composite`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) widget, [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role), or [`application`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role).

Unlike `aria-activedescendant`, the element assigned to this property does not have to have an `id`.
Any element in the current scope or an ancestor scope that can be selected can be set as the active descendent.
This can be convenient as it avoids having to unnecessarily create ids for elements in order to assign them as the active descendent.

The [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) topic contains additional information about when the property can and should be set.

## Value

An element that is the active descendant, or `null` if there is no active descendant.

The property can be set to an element in the current scope, or to an ancestor scope, but not to a descendant scope.
In other words, a shadow root can set an active descendant from within its own shadow DOM or the parent DOM, but a DOM element can't set an active descendent defined in a shadow root.
Setting the `ariaActiveDescendantElement` to an element that is not in scope will fail, and the property will be set to `null`.

The property also reflects the element's [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) attribute, provided it is set with a valid reference `id` for an element in the current scope or an ancestor scope.
If the attribute is set to an invalid reference (in HTML or with {{domxref("Element.setAttribute()")}}) then `ariaActiveDescendantElement` is set to `null`.
Note that when the property is set, the corresponding [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) attribute is set to the empty string (`""`).

## Examples

### Get the active descendent

This example shows how `ariaActiveDescendantElement` can be used to get the current active descendant.

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
It the property is supported the code then logs the value of `aria-activedescendant` (the `id` of the referenced element) using {{domxref("Element.getAttribute()")}}, the property element, and the element's text content.

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
  log(`getAttribute(): ${streetType.getAttribute("aria-activedescendant")}`);
  log(`ariaActiveDescendantElement: ${streetType.ariaActiveDescendantElement}`);
  log(`text: ${streetType.ariaActiveDescendantElement?.textContent.trim()}`);
} else {
  log("ariaActiveDescendantElement not supported by browser");
}
```

#### Result

The log below shows the output of the above code.
The value returned from the `aria-activedescendant` property should be `"avenue"`, the associated element should be a `HTMLDivElement` element, and the text in that element should be `Avenue`.

{{EmbedLiveSample("Get the active descendent","100%","190px")}}

### Set the active descendent

This example shows how `ariaActiveDescendantElement` and {{domxref("Element.setAttribute()")}} can be used to set the descendent element.
It also shows how using each approach changes the value of the corresponding attribute or property.

#### HTML

The HTML is the same as in the previous example.
It defines a listbox for selecting different kinds of streets, consisting of a {{htmlelement("div")}} element with the [`listbox` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) and nested `<div>` items for each of the options.
The active descendent is initially set to the element with `id` of `avenue` using `aria-activedescendant`.

```html
<div id="streetType" role="listbox" aria-activedescendant="avenue">
  <div id="street">Street</div>
  <div id="avenue">Avenue</div>
  <div>Lane</div>
</div>
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

If `ariaActiveDescendantElement` is supported, the code:

1. Logs the original `id` reference from `aria-activedescendant`, the corresponding `ariaActiveDescendantElement`, and the element's text content.
2. Sets the `ariaActiveDescendantElement` property to the third child element ("lane") and logs the same information.
3. Sets the `aria-activedescendant` attribute to the reference `id` of `"street"` using {{domxref("Element.setAttribute()")}} and logs the same information.
4. Sets the `aria-activedescendant` attribute to the invalid reference `id` of `"unlikelyId"` using {{domxref("Element.setAttribute()")}} and logs the same information.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
if ("ariaActiveDescendantElement" in Element.prototype) {
  // Log initial attribute (id), ariaActiveDescendantElement (element), text
  log(
    `[1] Attribute set in HTML
      id: '${streetType.getAttribute("aria-activedescendant")}',\t el: ${streetType.ariaActiveDescendantElement}, txt: '${streetType.ariaActiveDescendantElement?.textContent.trim()}'`,
  );

  // Set property to a selected element ("Lane") and log again.
  // Attribute should be "" and new element
  const laneDiv = document.querySelector("#streetType div:nth-child(3)");
  streetType.ariaActiveDescendantElement = laneDiv;

  log(
    `[2] Set property
      id: '${streetType.getAttribute("aria-activedescendant")}',\t\t el: ${streetType.ariaActiveDescendantElement}, txt: '${streetType.ariaActiveDescendantElement?.textContent.trim()}'`,
  );

  // Set attribute to id "street" and log again
  // Attribute should be "street" and element content should match
  streetType.setAttribute("aria-activedescendant", "street");

  log(
    `[3] Set attribute (valid)
      id: '${streetType.getAttribute("aria-activedescendant")}',\t el: ${streetType.ariaActiveDescendantElement}, txt: '${streetType.ariaActiveDescendantElement?.textContent.trim()}'`,
  );

  // Set attribute to an invalid id and log again
  // Attribute should match the id but property should be null
  streetType.setAttribute("aria-activedescendant", "unlikelyId");

  log(
    `[4] Set attribute (invalid):
      id: '${streetType.getAttribute("aria-activedescendant")}', el: ${streetType.ariaActiveDescendantElement}, txt: ${streetType.ariaActiveDescendantElement?.textContent.trim()}`,
  );
} else {
  log("ariaActiveDescendantElement not supported by browser");
}
```

#### Result

The log below shows the output of the above code.
The output demonstrates that `ariaActiveDescendantElement` property can be set using either the property or a valid reference in the `aria-activedescendant` attribute, and that setting the `ariaActiveDescendantElement` property sets the `aria-activedescendant` attribute to `""`.

{{EmbedLiveSample("Set the active descendent2","100%","250px")}}

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

{{EmbedLiveSample("Set the active descendent programmatically2","100%","250px")}}
-->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.ariaActiveDescendantElement")}}
