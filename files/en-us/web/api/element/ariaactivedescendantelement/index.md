---
title: "Element: ariaActiveDescendantElement property"
short-title: ariaActiveDescendantElement
slug: Web/API/Element/ariaActiveDescendantElement
page-type: web-api-instance-property
browser-compat: api.Element.ariaActiveDescendantElement
---

{{APIRef("DOM")}}

The **`ariaActiveDescendantElement`** property of the {{domxref("Element")}} interface represents the current active element when focus is on a [`composite`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) widget, [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role), or [`application`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role).

The [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) topic contains additional information about how the attribute and property should be used.

## Value

An element that is the active descendant, or `null` if there is no active descendant.

## Description

The property is a flexible alternative to using the [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) attribute.
Unlike `aria-activedescendant`, the element assigned to this property can be selected: it does not have to have an `id`.

The property reflects the element's [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) attribute when it is defined, but only for reference `id` values that match valid in-scope elements.
If the property is set, then the corresponding attribute is cleared.
For more information about reflected element references and scope see [Reflected element references](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Reflected attributes_ guide.

## Examples

The [Reflected element reference examples](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#setting_and_getting_reflected_element_references) in the _Attribute reflection_ guide are also relevant.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) attribute
- {{domxref("ElementInternals.ariaActiveDescendantElement")}}
- [Reflected element references](2/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) in the _Attribute reflection_ guide.
