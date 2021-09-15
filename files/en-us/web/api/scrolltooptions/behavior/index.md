---
title: ScrollToOptions.behavior
slug: Web/API/ScrollToOptions/behavior
tags:
  - API
  - Property
  - Reference
  - ScrollToOptions
  - behavior
browser-compat: api.ScrollToOptions.behavior
---
{{ APIRef("CSSOM View") }}

The **`behavior`** property of the {{
    domxref("ScrollToOptions") }} dictionary specifies whether the scrolling should
animate smoothly, or happen instantly in a single jump.

This is actually defined on the `ScrollOptions` dictionary, which is
implemented by `ScrollToOptions`.

## Syntax

```js
behavior: ScrollBehavior
```

### Value

An enum, the value of which can be one of the following:

- `smooth`: The scrolling animates smoothly.
- `auto`: The scrolling happens in a single jump.

## Examples

See [`ScrollToOptions`](/en-US/docs/Web/API/ScrollToOptions#examples) for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

{{domxref("ScrollToOptions")}}
