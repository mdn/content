---
title: "PerformanceScriptTiming: invoker property"
short-title: invoker
slug: Web/API/PerformanceScriptTiming/invoker
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceScriptTiming.invoker
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`invoker`** read-only property of the {{domxref("PerformanceScriptTiming")}} interface returns a string value indicating the identity of the feature that, when invoked, ran the script.

## Value

A string, the structure of which depends on the script's {{domxref("PerformanceScriptTiming.invokerType")}} value:

| `invokerType`                             | `invoker` string structure                                                                                                                                                                                                                                    | Example(s)                                                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `"user-callback"`                         | The object class the containing function is defined on, followed by a dot, followed by the function name.                                                                                                                                                     | `"Window.requestAnimationFrame"`, `"Window.setTimeout"`                                             |
| `"event-listener"`                        | The {{domxref("Element.tagName", "tagName")}} of the element, followed by a hash and its `id` (`#id`) or by `src=` and its `src` value in square brackets (`[src=url]`) if an `id` is not present, followed by a dot, followed by the event handler property. | `"IMG#hero.onload"`, `"IMG[src=https://example.com/img.jpg].onload"`, `"BUTTON#updateCart.onclick"` |
| `"resolve-promise"` or `"reject-promise"` | The object and method that invoked the promise, followed by a dot, followed by `"then"` for `"resolve-promise"` and `"catch"` for `"reject-promise"`.                                                                                                         | `"Response.json.then"`, `"Response.json.catch"`                                                     |
| `"classic-script"` or `"module-script"`   | The source URL of the invoking script.                                                                                                                                                                                                                        | `"https://example.com/scripts/myscript.js"`                                                         |

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
