---
title: "PerformanceScriptTiming: invokerType property"
short-title: invokerType
slug: Web/API/PerformanceScriptTiming/invokerType
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceScriptTiming.invokerType
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`invokerType`** read-only property of the {{domxref("PerformanceScriptTiming")}} interface returns a string value indicating the type of feature that, when invoked, ran the script.

## Value

A string indicating the invoker type of the script entry point. Possible values are:

- `"user-callback"`
  - : A known callback invoked from within a web platform API, such as {{domxref("Window.setTimeout", "setTimeout()")}} or {{domxref("Window.requestAnimationFrame()")}}.
- `"event-listener"`
  - : An event listener for a web platform event, such as [`click`](/en-US/docs/Web/API/Element/click_event), [`load`](/en-US/docs/Web/API/Window/load_event), or [`keyup`](/en-US/docs/Web/API/Element/keyup_event).
- `"resolve-promise"`
  - : A handler function for the resolved state of a web platform promise, such as {{domxref("Window/fetch", "fetch()")}}. Note that in the case of promises, all the handlers of the same promise are grouped together as a single `"script"` entry type.
- `"reject-promise"`
  - : A handler function for the rejected state of a web platform promise.
- `"classic-script"`
  - : The evaluation of a standard script (for example, via a {{htmlelement("script")}} element or an [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import) statement).
- `"module-script"`
  - : The evaluation of a module script.

The structure of the {{domxref("PerformanceScriptTiming.invoker")}} value depends on the script's `invokerType` value. Check out the `invoker` page for more details.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
