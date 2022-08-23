---
title: 'PermissionStatus: change event'
slug: Web/API/PermissionStatus/change_event
page-type: web-api-event
tags:
  - API
  - Event
  - PermissionStatus
  - Permissions
  - Reference
  - change
browser-compat: api.PermissionStatus.change_event
---
{{APIRef("Permissions API")}}

The **`change`** event of the {{domxref("PermissionStatus")}} interface fires whenever the {{domxref("PermissionStatus.state")}} property changes.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('change', (event) => { });

onchange = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Example

```js
navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
  console.log(`geolocation permission state is ${permissionStatus.state}`);
  permissionStatus.onchange = () => {
    console.log(`geolocation permission state has changed to ${permissionStatus.state}`);
  };
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
