---
title: MutationObserverInit.attributeOldValue
slug: Web/API/MutationObserverInit/attributeOldValue
tags:
  - API
  - API Reference
  - Attributes
  - Changes
  - DOM
  - DOM WHATWG
  - Monitor
  - MutationObserverInit
  - Observer
  - Property
  - Reference
  - value
browser-compat: api.MutationObserverInit.attributeOldValue
---
{{APIRef("DOM WHATWG")}}

The **{{domxref("MutationObserverInit")}}** dictionary's optional **`attributeOldValue`** property is used
to specify whether or not to record the prior value of the altered attribute in {{domxref("MutationRecord")}} objects denoting attribute value changes.

## Syntax

```js
var options = {
  attributeOldValue: true | false
}
```

### Value

A Boolean value indicating whether or not the prior value of a changed attribute should
be included in the {{domxref("MutationObserver.oldValue")}} property when reporting
attribute value changes. If `true`, `oldValue` is set accordingly.
If `false`, it is not.

When using `attributeOldValue`, setting the
{{domxref("MutationObserverInit.attributes", "attributes")}} option to `true`
is optional.

## Example

See [`MutationObserverInit.attributes`](/en-US/docs/Web/API/MutationObserverInit/attributes#example) for example code that sets this property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
