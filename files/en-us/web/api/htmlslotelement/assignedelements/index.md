---
title: HTMLSlotElement.assignedElements()
slug: Web/API/HTMLSlotElement/assignedElements
tags:
  - API
  - HTMLSlotElement
  - Method
  - Reference
  - Web Components
  - assignedElements
  - shadow dom
browser-compat: api.HTMLSlotElement.assignedElements
---
{{APIRef("Shadow DOM API")}}

The **`assignedElements()`** method of the
{{domxref("HTMLSlotElement")}} interface returns a sequence of the elements assigned to
this slot (and no other nodes). If the `flatten` option is set to
`true`, it also returns the assigned elements of any other slots that are
descendants of this slot. If no assigned nodes are found, it returns the slot's fallback
content.

## Syntax

```js
HTMLSlotElement.assignedElements()
HTMLSlotElement.assignedElements(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object that sets options for the nodes to be returned. The available options are:

    - `flatten`
      - : A {{jsxref('Boolean')}} indicating whether to return the
        assigned elements of any available child `<slot>` elements
        (`true`) or not (`false`). Defaults to `false`.

### Return value

An array of elements.

## Examples

```js
let slots = this.shadowRoot.querySelector('slot');
let elements = slots.assignedElements({flatten: true});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
