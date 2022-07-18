---
title: HTMLSlotElement.assignedElements()
slug: Web/API/HTMLSlotElement/assignedElements
page-type: web-api-instance-method
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

The **`assignedElements()`** method of the {{domxref("HTMLSlotElement")}}
interface returns a sequence of the elements assigned to this slot (and no
other nodes).

If the `flatten` option is set to `true`, it returns a sequence of both the elements assigned to this slot, as well as the elements assigned to any other slots that are descendants of this slot. If no assigned elements are found, it returns the slot's fallback content.

## Syntax

```js
assignedElements()
assignedElements(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object that sets options for the nodes to be returned. The available options are:

    - `flatten`
      - : A boolean value indicating whether to return the
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
