---
title: BackgroundFetchEvent.registration
slug: Web/API/BackgroundFetchEvent/registration
tags:
  - API
  - Property
  - Reference
  - registration
  - BackgroundFetchEvent
browser-compat: api.BackgroundFetchEvent.registration
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`registration`** read-only property of the {{domxref("BackgroundFetchEvent")}} interface returns a {{domxref("BackgroundFetchRegistration")}} object.

## Syntax

```js
let registration = BackgroundFetchEvent.registration;
```

### Value

A {{domxref("BackgroundFetchRegistration")}}.

## Examples

In this example, if the user clicks on the user interface displaying the download progress, this fires the `onbackgroundfetchclick` event. The current {{domxref("BackgroundFetchRegistration")}} is returned by calling `event.registration`.

```js
addEventListener('backgroundfetchclick', (event) => {
  console.log(event.registration);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
