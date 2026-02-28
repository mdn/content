---
title: "PreferenceObject: change event"
short-title: change
slug: Web/API/PreferenceObject/change_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.PreferenceObject.change_event
spec-urls: https://drafts.csswg.org/mediaqueries-5/#onchange-attribute
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`change`** event of the {{domxref("PreferenceObject")}} interface is fired on a specific PreferenceObject its `override` value changes.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
navigator.preferences.colorScheme.addEventListener("change", (event) => {
  console.log(navigator.preferences.colorScheme.value);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
