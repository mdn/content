---
title: Force Touch events
slug: Web/API/Force_Touch_events
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

- {{event("webkitmouseforcewillbegin")}} {{non-standard_inline}}
  - : This event is fired before the {{event("mousedown")}} event. Its main use is that it can be {{domxref("Event.preventDefault()")}}ed.
- {{event("webkitmouseforcedown")}} {{non-standard_inline}}
  - : This event is fired after the {{event("mousedown")}} event as soon as sufficient pressure has been applied for it to qualify as a "force click".
- {{event("webkitmouseforceup")}} {{non-standard_inline}}
  - : This event is fired after the {{event("webkitmouseforcedown")}} event as soon as the pressure has been reduced sufficiently to end the "force click".
- {{event("webkitmouseforcechanged")}} {{non-standard_inline}}
  - : This event is fired each time the amount of pressure changes. This event first fires after the {{event("mousedown")}} event and stops firing before the {{event("mouseup")}} event.

## Event properties

The following property is known to be available on the {{event("webkitmouseforcewillbegin")}}, {{event("mousedown")}}, {{event("webkitmouseforcechanged")}}, {{event("webkitmouseforcedown")}}, {{event("webkitmouseforceup")}}, {{event("mousemove")}}, and {{event("mouseup")}} event objects:

- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{readonlyinline}}
  - : The amount of pressure currently being applied to the trackpad/touchscreen

## Constants

These constants are useful for determining the relative intensity of the pressure indicated by {{domxref("MouseEvent.webkitForce")}}:

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}
  - : Minimum force necessary for a normal click
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}
  - : Minimum force necessary for a force click

## Specifications

_Not part of any specification._ Apple has [a description at the Mac Developer Library](https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).
