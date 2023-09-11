---
title: "BackgroundFetchEvent: registration property"
short-title: registration
slug: Web/API/BackgroundFetchEvent/registration
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.BackgroundFetchEvent.registration
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`registration`** read-only property of the {{domxref("BackgroundFetchEvent")}} interface returns a {{domxref("BackgroundFetchRegistration")}} object.

## Value

A {{domxref("BackgroundFetchRegistration")}}.

## Examples

In this example, if the user clicks on the user interface displaying the download progress, this fires the `onbackgroundfetchclick` event. The current {{domxref("BackgroundFetchRegistration")}} is returned by calling `event.registration`.

```js
addEventListener("backgroundfetchclick", (event) => {
  console.log(event.registration);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
