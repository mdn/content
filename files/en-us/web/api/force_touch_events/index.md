---
title: Force Touch events
slug: Web/API/Force_Touch_events
page-type: web-api-overview
tags:
  - Advanced
  - DOM
  - Event
  - Mobile
  - NeedsBrowserCompatibility
  - NeedsCompatTable
  - NeedsMobileBrowserCompatibility
  - Reference
---
{{DefaultAPISidebar("Force Touch events")}}

{{Non-standard_header()}}

**Force Touch events** are a proprietary, Apple-specific feature which makes possible (where supported by the input hardware) new interactions based on how hard the user clicks or presses down on the touchscreen or trackpad.

## Events

- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}} {{non-standard_inline}}
  - : This event is fired before the {{domxref("Element/mousedown_event", "mousedown")}} event. Its main use is that it can be {{domxref("Event.preventDefault()")}}ed.
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} {{non-standard_inline}}
  - : This event is fired after the {{domxref("Element/mousedown_event", "mousedown")}} event as soon as sufficient pressure has been applied for it to qualify as a "force click".
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}} {{non-standard_inline}}
  - : This event is fired after the {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} event as soon as the pressure has been reduced sufficiently to end the "force click".
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}} {{non-standard_inline}}
  - : This event is fired each time the amount of pressure changes. This event first fires after the {{domxref("Element/mousedown_event", "mousedown")}} event and stops firing before the {{domxref("Element/mouseup_event", "mouseup")}} event.

## Event properties

The following property is known to be available on the {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}, {{domxref("Element/mousedown_event", "mousedown")}}, {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}, {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}, {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}, {{domxref("Element/mousemove_event", "mousemove")}}, and {{domxref("Element/mouseup_event", "mouseup")}} event objects:

- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : The amount of pressure currently being applied to the trackpad/touchscreen.

## Constants

These constants are useful for determining the relative intensity of the pressure indicated by {{domxref("MouseEvent.webkitForce")}}:

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Minimum force necessary for a normal click.
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Minimum force necessary for a force click.

## Specifications

_Not part of any specification._ Apple has [a description at the Mac Developer Library](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).
