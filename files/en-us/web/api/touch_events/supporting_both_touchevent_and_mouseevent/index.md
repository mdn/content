---
title: Supporting both TouchEvent and MouseEvent
slug: Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
tags:
  - Guide
  - TouchEvent
  - touch
---
{{DefaultAPISidebar("Touch Events")}}

The {{domxref("Touch_events","touch")}} interfaces enable applications to create enhanced user experiences on touch enabled devices. However, the reality is the vast majority of today's web content is designed only to work with mouse input. Consequently, even if a browser supports touch, the browser must still _emulate_ mouse events so content that assumes mouse-only input will work _as is_ without direct modification.

Ideally, a touch-based application does not need to explicitly address mouse input. However, because the browser must emulate mouse events, there may be some interaction issues that need to be handled. Below are some details about the interaction and the ramifications for application developers.

## Event firing

The touch events standard defines a few browser requirements regarding touch and mouse interaction (see the [_Interaction with Mouse Events and click_](https://w3c.github.io/touch-events/#mouse-events) section for details), noting _the browser may fire both touch events and mouse events in response to the same user input_. This section describes the requirement that may affect an application.

If the browser fires both touch and mouse events because of a single user input, the browser _must_ fire a {{domxref("Element/touchstart_event", "touchstart")}} before any mouse events. Consequently, if an application does not want mouse events fired on a specific touch {{domxref("Touch.target","target")}} element, the element's touch event handlers should call {{domxref("Event.preventDefault()","preventDefault()")}} and no additional mouse events will be dispatched.

Here is a code snippet of the {{event("touchmove")}} event handler calling `preventDefault()`.

```js
// touchmove handler
function process_touchmove(ev) {
  // Call preventDefault() to prevent any further handling
  ev.preventDefault();
}
```

## Event order

Although the specific ordering of touch and mouse events is implementation-defined, the standard indicates the following order is _typical:_ for single input:

- `touchstart`
- Zero or more `touchmove` events, depending on movement of the finger(s)
- `touchend`
- `mousemove`
- `mousedown`
- `mouseup`
- `click`

If the {{domxref("Element/touchstart_event", "touchstart")}}, {{event("touchmove")}} or {{event("touchend")}} event is canceled during an interaction, no mouse or click events will be fired, and the resulting sequence of events would just be:

- `touchstart`
- Zero or more `touchmove` events, depending on movement of the finger(s)
- `touchend`

## Community

- [Touch Events Community Group](https://github.com/w3c/touch-events)
- [Mail list](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC channel](irc://irc.w3.org:6667/)

## Related topics and resources

- [Touch Events Overview](/en-US/docs/Web/API/Touch_events)
- [Using Touch Events](/en-US/docs/Web/API/Touch_events/Using_Touch_Events)
- [Touch and Mouse (Together Again for the First Time)](https://www.html5rocks.com/en/mobile/touchandmouse/)
