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

The **`change`** event of the {{domxref("PreferenceObject")}} interface is fired when a `PreferenceObject` {{domxref("PreferenceObject.override", "override")}} value changes. This can happen due to {{domxref("PreferenceObject.requestOverride", "requestOverride")}} or {{domxref("PreferenceObject.clearOverride", "clearOverride")}} method calls.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Basic usage

The following snippet logs the user's preferred color scheme to the console when it changes.

```js
navigator.preferences.colorScheme.addEventListener("change", (event) => {
  console.log(navigator.preferences.colorScheme.value);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
