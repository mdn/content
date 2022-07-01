---
title: HTMLElement.offsetParent
slug: Web/API/HTMLElement/offsetParent
page-type: web-api-instance-property
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
positioned ancestor element.

A positioned ancestor is either:

- an element with a non-static position, or
- `td`, `th`, `table` in case the element itself is static positioned.

If there is no positioned ancestor element, the `body` is returned.

> **Note:** `offsetParent` returns `null` in the following
> situations:
>
> - The element or its parent element has the `display` property set to
>   `none`.
> - The element has the `position` property set to `fixed`
>   (Firefox returns `<body>`).
> - The element is `<body>` or `<html>`.

`offsetParent` is useful because
{{domxref("HTMLElement.offsetTop","offsetTop")}} and
{{domxref("HTMLElement.offsetLeft","offsetLeft")}} are relative to its padding edge.

## Value

An object reference to the element in which the current element is offset.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
