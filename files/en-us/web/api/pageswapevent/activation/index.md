---
title: "PageSwapEvent: activation property"
short-title: activation
slug: Web/API/PageSwapEvent/activation
page-type: web-api-instance-property
browser-compat: api.PageSwapEvent.activation
---

{{APIRef("HTML DOM")}}

The **`activation`** read-only property of the {{domxref("PageSwapEvent")}} interface returns a {{domxref("NavigationActivation")}} object with the navigation type and the history entries for the current and destination documents of a same-origin navigation.

## Value

A {{domxref("NavigationActivation")}} object, or `null` if the associated navigation has a cross-origin URL anywhere in the redirect chain (unless the destination document is restored from the [back/forward cache](/en-US/docs/Glossary/bfcache)).

## Examples

See the main {{domxref("PageSwapEvent")}} page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
