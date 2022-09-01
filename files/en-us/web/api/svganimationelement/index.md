---
title: SVGAnimationElement
slug: Web/API/SVGAnimationElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGAnimationElement
---
{{APIRef("SVG")}}

The **`SVGAnimationElement`** interface is the base interface for all of the animation element interfaces: {{domxref("SVGAnimateElement")}}, {{domxref("SVGSetElement")}}, {{domxref("SVGAnimateColorElement")}}, {{domxref("SVGAnimateMotionElement")}} and {{domxref("SVGAnimateTransformElement")}}.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parent, {{domxref("SVGElement")}}._

- {{domxref("SVGAnimationElement.requiredExtensions")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGStringList")}} reflecting the {{SVGAttr("requiredExtensions")}} attribute of the given element.
- {{domxref("SVGAnimationElement.systemLanguage")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGStringList")}} reflecting the {{SVGAttr("systemLanguage")}} attribute of the given element.
- {{domxref("SVGAnimationElement.targetElement")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGElement")}} representing the element which is being animated. If no target element is being animated (for example, because the {{SVGAttr("href")}} specifies an unknown element) the value returned is `null`.

## Methods

_This interface also inherits methods from its parent, {{domxref("SVGElement")}}._

- {{domxref("SVGAnimationElement.getStartTime()")}}
  - : Returns a float representing the begin time, in seconds, for this animation element's current interval, if it exists, regardless of whether the interval has begun yet. If there is no current interval, then a {{domxref("DOMException")}} with code `INVALID_STATE_ERR` is thrown.
- {{domxref("SVGAnimationElement.getCurrentTime()")}}
  - : Returns a float representing the current time in seconds relative to time zero for the given time container.
- {{domxref("SVGAnimationElement.getSimpleDuration()")}}
  - : Returns a float representing the number of seconds for the simple duration for this animation. If the simple duration is undefined (e.g., the end time is indefinite), then a {{domxref("DOMException")}} with code `NOT_SUPPORTED_ERR` is raised.
- {{domxref("SVGAnimationElement.beginElement()")}}
  - : Creates a begin instance time for the current time. The new instance time is added to the begin instance times list. The behavior of this method is equivalent to `beginElementAt(0)`.
- {{domxref("SVGAnimationElement.beginElementAt()")}}
  - : Creates a begin instance time for the current time plus the specified offset. The new instance time is added to the begin instance times list.
- {{domxref("SVGAnimationElement.endElement()")}}
  - : Creates an end instance time for the current time. The new instance time is added to the end instance times list. The behavior of this method is equivalent to `endElementAt(0)`.
- {{domxref("SVGAnimationElement.endElementAt()")}}
  - : Creates a end instance time for the current time plus the specified offset. The new instance time is added to the end instance times list.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `on...` handler property of this interface.

- [`beginEvent`](/en-US/docs/Web/API/SVGAnimationElement/beginEvent_event)
  - : Fired when the element local timeline begins to play.
- [`endEvent`](/en-US/docs/Web/API/SVGAnimationElement/endEvent_event)
  - : Fired when at the active end of the animation is reached.
- [`repeatEvent`](/en-US/docs/Web/API/SVGAnimationElement/repeatEvent_event)
  - : Fired when the element's local timeline repeats. It will be fired each time the element repeats, after the first iteration.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
