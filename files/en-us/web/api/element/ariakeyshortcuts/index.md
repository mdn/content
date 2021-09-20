---
title: Element.ariaKeyShortcuts
slug: Web/API/Element/ariaKeyShortcuts
tags:
  - API
  - Property
  - Reference
  - ariaKeyShortcuts
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaKeyShortcuts
---
{{DefaultAPISidebar("DOM")}}

The **`ariaKeyShortcuts`** property of the {{domxref("Element")}} interface reflects the value of the `aria-keyshortcuts` attribute, which indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

## Syntax

    var ariaKeyShortcuts = element.ariaKeyShortcuts;
    element.ariaKeyShortcuts = ariaKeyShortcuts

### Value

A {{domxref("DOMString")}}.

## Examples

In this example the `aria-keyshortcuts` attribute on the element with an ID of `skip-link` is set to "Alt+Shift+A". Using `ariaKeyShortcuts` we update the value to "Alt+Shift+M".

```html
<a id="skip-link" href="#content" aria-keyshortcuts="Alt+Shift+A">Skip to content</a>
```

```js
let el = document.getElementById('saveChanges');
console.log(el.ariaKeyShortcuts); // "Alt+Shift+A"
el.ariaKeyShortcuts = "Alt+Shift+M"
console.log(el.ariaKeyShortcuts); // "Alt+Shift+M"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
