---
title: "Navigator: vibrate() method"
short-title: vibrate()
slug: Web/API/Navigator/vibrate
page-type: web-api-instance-method
browser-compat: api.Navigator.vibrate
---

{{APIRef("Vibration API")}}

The **`vibrate()`** method of the {{domxref("Navigator")}} interface pulses the vibration
hardware on the device, if such hardware exists. If the device doesn't support
vibration, this method has no effect. If a vibration pattern is already in progress when
this method is called, the previous pattern is halted and the new one begins instead.

If the method was unable to vibrate because of invalid parameters, it will return
`false`, else it returns `true`. If the pattern leads to a too
long vibration, it is truncated: the max length depends on the implementation.

## Syntax

```js-nolint
vibrate(pattern)
```

### Parameters

- `pattern`
  - : Provides a pattern of vibration and pause intervals. Each value indicates a number
    of milliseconds to vibrate or pause, in alternation. You may provide either a single
    value (to vibrate once for that many milliseconds) or an array of values to
    alternately vibrate, pause, then vibrate again. See [Vibration API](/en-US/docs/Web/API/Vibration_API) for details.

Passing a value of `0`, an empty array, or an array containing all zeros
will cancel any currently ongoing vibration pattern.

### Return value

A boolean.

## Security

[Sticky user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

## Examples

```js
navigator.vibrate(200); // vibrate for 200ms
navigator.vibrate([
  100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100,
]); // Vibrate 'SOS' in Morse.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Vibration API](/en-US/docs/Web/API/Vibration_API)
