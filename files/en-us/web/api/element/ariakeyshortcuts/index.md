---
title: "Element: ariaKeyShortcuts property"
short-title: ariaKeyShortcuts
slug: Web/API/Element/ariaKeyShortcuts
page-type: web-api-instance-property
browser-compat: api.Element.ariaKeyShortcuts
---

{{APIRef("DOM")}}

The **`ariaKeyShortcuts`** property of the {{domxref("Element")}} interface reflects the value of the `aria-keyshortcuts` attribute, which indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

## Value

A string.

## Examples

In this example the `aria-keyshortcuts` attribute on the element with an ID of `skip-link` is set to "Alt+Shift+A". Using `ariaKeyShortcuts` we update the value to "Alt+Shift+M".

```html
<a id="skip-link" href="#content" aria-keyshortcuts="Alt+Shift+A">
  Skip to content
</a>
```

```js
let el = document.getElementById("saveChanges");
console.log(el.ariaKeyShortcuts); // "Alt+Shift+A"
el.ariaKeyShortcuts = "Alt+Shift+M";
console.log(el.ariaKeyShortcuts); // "Alt+Shift+M"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
