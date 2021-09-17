---
title: Navigator.battery
slug: Web/API/Navigator/battery
tags:
  - API
  - Battery
  - Battery API
  - Deprecated
  - Device API
  - Navigator
  - Non-standard
  - Property
  - Reference
browser-compat: api.Navigator.battery
---
{{ApiRef("Battery API")}}{{deprecated_header}}

The **`battery`** read-only property
returns a {{DOMxRef("BatteryManager")}} which provides information about the system's
battery charge level and whether the device is charging and exposes events that fire
when these parameters change. This interface was introduced in early drafts of the [Battery Status API](/en-US/docs/Web/API/Battery_Status_API) and but has
been replaced with {{JSxRef("Promise")}}-based
{{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}}.

> **Note:** The `battery` property has been removed in favor of the standard
> {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}} method, which returns a
> battery {{JSxRef("Promise")}}.

## Syntax

```js
var battery = navigator.battery;
```

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}}
- [Battery Status API](/en-US/docs/Web/API/Battery_Status_API)
- [Blog
  post - Using the Battery API](http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
- [David Walsh on the
  JavaScript Battery API](http://davidwalsh.name/battery-api)
