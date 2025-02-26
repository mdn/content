---
title: "Screen: change event"
short-title: change
slug: Web/API/Screen/change_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Screen.change_event
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`change`** event of the {{domxref("Screen")}} interface is fired on a specific screen when one or more of the following properties change on it:

- {{domxref("Screen.width", "width")}}
- {{domxref("Screen.height", "height")}}
- {{domxref("Screen.availWidth", "availWidth")}}
- {{domxref("Screen.availHeight", "availHeight")}}
- {{domxref("Screen.colorDepth", "colorDepth")}}
- {{domxref("Screen.orientation", "orientation")}}

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
const firstScreen = (await window.getScreenDetails()).screens[0];
firstScreen.addEventListener("change", (event) => {
  console.log("The first screen has changed.", event, firstScreen);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
