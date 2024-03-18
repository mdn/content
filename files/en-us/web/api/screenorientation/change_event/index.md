---
title: "ScreenOrientation: change event"
short-title: change
slug: Web/API/ScreenOrientation/change_event
page-type: web-api-event
browser-compat: api.ScreenOrientation.change_event
---

{{APIRef("Screen Orientation API")}}

The **`change`** event of the {{domxref("ScreenOrientation")}} interface fires when the orientation of the screen has changed, for example when a user rotates their mobile phone.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

In the following example, the `change` callback prints the new {{DOMxRef("ScreenOrientation.type", "screen orientation type", "", "nocode")}} and {{DOMxRef("ScreenOrientation.angle", "angle", "", "nocode")}}.

```js
screen.orientation.addEventListener("change", (event) => {
  const type = event.target.type;
  const angle = event.target.angle;
  console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
