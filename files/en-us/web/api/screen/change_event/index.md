---
title: "Screen: change event"
short-title: change
slug: Web/API/Screen/change_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Screen.change_event
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}

The **`change`** event of the {{domxref("Screen")}} interface is fired on a specific screen when it changes in some way — for example available width or height, or orientation.

Specifically, _change_ means changes to a `Screen` instance's _basic observable properties_, which are:

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

An event of type `change`, the event object of which is structurally equivalent to an {{domxref("Event")}}.

{{InheritanceDiagram("Event")}}

## Examples

```js
const firstScreen = (await window.getScreenDetails())[0];
firstScreen.addEventListener("change", async (event) => {
  console.log("The first screen has changed.", event, firstScreen);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
