---
title: Element.ariaReadOnly
slug: Web/API/Element/ariaReadOnly
tags:
  - API
  - Property
  - Reference
  - ariaReadOnly
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaReadOnly
---
{{DefaultAPISidebar("DOM")}}

The **`ariaReadOnly`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) attribute, which indicates that the element is not editable, but is otherwise operable.

> **Note:** Where possible use an HTML {{htmlelement("input")}} element with `type="text"` or a {{htmlelement("textarea")}} as these have built in semantics and do not require ARIA attributes.

## Syntax

```js
var ariaReadOnly = element.ariaReadOnly;
element.ariaReadOnly = ariaReadOnly
```

### Value

A {{domxref("DOMString")}} with one of the following values:

- `"true"`
  - : The user cannot change the value of the element.
- `"false"`
  - : The user can set the value of the element.

## Examples

In this example the `aria-readonly` attribute on the element with an ID of `txtBoxInput` is set to "true" indicating that this input is currently read only. Using `ariaReadOnly` we update the value to "false".

```html
<div id="txtboxMultilineLabel">Enter the tags for the article</div>
<div role="textbox" id="txtBoxInput" contenteditable="true" aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel" aria-readonly="true"></div>
```

```js
let el = document.getElementById('txtBoxInput');
console.log(el.ariaReadOnly); // "true"
el.ariaReadOnly = "false"
console.log(el.ariaReadOnly); // "false"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: textbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)
