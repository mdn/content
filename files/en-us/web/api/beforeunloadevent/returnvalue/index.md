---
title: "BeforeUnloadEvent: returnValue property"
short-title: returnValue
slug: Web/API/BeforeUnloadEvent/returnValue
page-type: web-api-instance-property
browser-compat: api.BeforeUnloadEvent.returnValue
---

{{APIRef("HTML DOM")}}

The **`returnValue`** property of the
{{domxref("BeforeUnloadEvent")}} interface, when set to a truthy value, triggers a browser-generated confirmation dialog asking users to confirm if they _really_ want to leave the page when they try to close or reload it, or navigate somewhere else.

> **Note:** `returnValue` is a legacy feature, and best practice is to trigger the dialog by invoking {{domxref("Event.preventDefault()")}} on the `BeforeUnloadEvent` object instead. See the {{domxref("Window/beforeunload_event", "beforeunload")}} event reference for detailed up-to-date guidance.

## Value

`returnValue` is initiailized to an empty string (`""`) value.

Setting it to just about any [truthy](/en-US/docs/Glossary/Truthy) value will cause the dialog to be triggered on page close/reload.

## Examples

See the main {{domxref("BeforeUnloadEvent")}} reference page for an illustrative usage example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
