---
title: "BeforeUnloadEvent: returnValue property"
short-title: returnValue
slug: Web/API/BeforeUnloadEvent/returnValue
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.BeforeUnloadEvent.returnValue
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`returnValue`** property of the
{{domxref("BeforeUnloadEvent")}} interface, when set to a truthy value, triggers a browser-generated confirmation dialog asking users to confirm if they _really_ want to leave the page when they try to close or reload it, or navigate somewhere else. This is intended to help prevent loss of unsaved data.

> **Note:** `returnValue` is a legacy feature, and best practice is to trigger the dialog by invoking {{domxref("Event.preventDefault()")}} on the `BeforeUnloadEvent` object, while also setting `returnValue` to support legacy cases. See the {{domxref("Window/beforeunload_event", "beforeunload")}} event reference for detailed up-to-date guidance.

## Value

`returnValue` is initialized to an empty string (`""`) value.

Setting it to just about any [truthy](/en-US/docs/Glossary/Truthy) value will cause the dialog to be triggered on page close/reload, however note that it also requires [sticky activation](/en-US/docs/Glossary/Sticky_activation). In other words, the browser will only show the dialog if the frame or any embedded frame receives a user gesture or user interaction. If the user has never interacted with the page, then there is no user data to save, so no legitimate use case for the dialog.

> [!NOTE]
> A generic browser-specified string is displayed in the dialog. This cannot be controlled by the webpage code.

## Examples

See the {{domxref("Window/beforeunload_event", "beforeunload")}} event reference page for a best practice example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
