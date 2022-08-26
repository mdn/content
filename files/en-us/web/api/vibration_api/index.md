---
title: Vibration API
slug: Web/API/Vibration_API
page-type: web-api-overview
tags:
  - API
  - Beginner
  - Mobile
  - Vibration
browser-compat: api.Navigator.vibrate
---
{{DefaultAPISidebar("Vibration API")}}

Most modern mobile devices include vibration hardware, which lets software code provide physical feedback to the user by causing the device to shake. The **Vibration API** offers Web apps the ability to access this hardware, if it exists, and does nothing if the device doesn't support it.

## Describing vibrations

Vibration is described as a pattern of on-off pulses, which may be of varying lengths. The pattern may consist of either a single integer, describing the number of milliseconds to vibrate, or an array of integers describing a pattern of vibrations and pauses. Vibration is controlled with a single method: {{DOMxRef("Navigator.vibrate()")}}.

### A single vibration

You may pulse the vibration hardware one time by specifying either a single value or an array consisting of only one value:

```js
window.navigator.vibrate(200);
window.navigator.vibrate([200]);
```

Both of these examples vibrate the device for 200 ms.

### Vibration patterns

An array of values describes alternating periods in which the device is vibrating and not vibrating. Each value in the array is converted to an integer, then interpreted alternately as the number of milliseconds the device should vibrate and the number of milliseconds it should not be vibrating. For example:

```js
window.navigator.vibrate([200, 100, 200]);
```

This vibrates the device for 200 ms, then pauses for 100 ms before vibrating the device again for another 200 ms.

You may specify as many vibration/pause pairs as you like, and you may provide either an even or odd number of entries; it's worth noting that you don't have to provide a pause as your last entry since the vibration automatically stops at the end of each vibration period.

### Canceling existing vibrations

Calling {{DOMxRef("Navigator.vibrate()")}} with a value of `0`, an empty array, or an array containing all zeros will cancel any currently ongoing vibration pattern.

### Continued vibrations

Some basic `setInterval` and `clearInterval` action will allow you to create persistent vibration:

```js
let vibrateInterval;

// Starts vibration at passed in level
function startVibrate(duration) {
    navigator.vibrate(duration);
}

// Stops vibration
function stopVibrate() {
    // Clear interval and stop persistent vibrating
    if (vibrateInterval) clearInterval(vibrateInterval);
    navigator.vibrate(0);
}

// Start persistent vibration at given duration and interval
// Assumes a number value is given
function startPersistentVibrate(duration, interval) {
    vibrateInterval = setInterval(() => {
        startVibrate(duration);
    }, interval);
}
```

Of course, the snippet above doesn't take into account the array method of vibration; persistent array-based vibration will require calculating the sum of the array items and creating an interval based on that number (with an additional delay, probably).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Navigator.vibrate()")}}
