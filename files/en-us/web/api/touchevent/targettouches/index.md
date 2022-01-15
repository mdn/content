---
title: TouchEvent.targetTouches
slug: Web/API/TouchEvent/targetTouches
tags:
  - API
  - DOM
  - DOM Reference
  - Mobile
  - Property
  - Read-only
  - Reference
  - TouchEvent
  - touch
browser-compat: api.TouchEvent.targetTouches
---
{{ APIRef("Touch Events") }}

The **`targetTouches`** read-only property is a {{ domxref("TouchList") }} listing all the {{ domxref("Touch") }} objects for touch points that are still in contact with the touch surface **and** whose {{event("touchstart")}} event occurred inside the same target {{ domxref("element") }} as the current target element.

## Syntax

```js
var touches = touchEvent.targetTouches;
```

### Return value

- `touches`
  - : A {{ domxref("TouchList") }} listing all the {{ domxref("Touch") }} objects for touch points that are still in contact with the touch surface **and** whose `touchstart` event occurred inside the same target {{ domxref("element") }} as the current target element.

## Example

This example illustrates the {{domxref("TouchEvent")}} object's {{domxref("TouchEvent.targetTouches")}} property. The {{domxref("TouchEvent.targetTouches")}} property is a {{domxref("TouchList")}} object that includes those TPs that are currently touching the surface _and_ started on the element that is the target of the current event. As such, the `targetTouches` list is a strict subset of the `touches` list.

In following code snippet, the function compares the length of the `touches` list to the length of the `targetTouches` list and returns `true` if the lengths are the same and returns `false` otherwise.

```js
function touches_in_target(ev) {
  // Return true if all of the touches are within the target element;
  // otherwise return false.
  return (ev.touches.length == ev.targetTouches.length ? true : false);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
