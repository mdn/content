---
title: HTMLElement.offsetParent
slug: Web/API/HTMLElement/offsetParent
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.HTMLElement.offsetParent
---
{{ APIRef("HTML DOM") }}

The **`HTMLElement.offsetParent`** read-only property returns a
reference to the element which is the closest (nearest in the containment hierarchy)
positioned ancestor element. If there is no positioned ancestor element, the nearest
ancestor `td`, `th`, `table` will be returned, or the
`body` if there are no ancestor table elements either.

> **Note:** `offsetParent` returns `null` in the following
> situations:
>
> - The element or its parent element has the `display` property set to
>   `none`.
> - The element has the `position` property set to `fixed`
>   (firefox returns `<body>`).
> - The element is `<body>` or `<html>`.

`offsetParent` is useful because
{{domxref("HTMLElement.offsetTop","offsetTop")}} and
{{domxref("HTMLElement.offsetLeft","offsetLeft")}} are relative to its padding edge.

## Syntax

```js
parentObj = element.offsetParent;
```

- _parentObj_ is an object reference to the element in which the current
  element is offset.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
