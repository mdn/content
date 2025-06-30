---
title: HTMLModelElement
slug: Web/API/HTMLModelElement
page-type: web-api-interface
browser-compat: api.HTMLModelElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLModelElement`** interface provides special properties (beyond the regular methods and properties available through the {{domxref("HTMLElement")}} interface they also have available to them by inheritance) for manipulating model elements, specified in HTML as {{HTMLElement("model")}}.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLModelElement.autoplay")}}

  - : A boolean value that reflects the [`autoplay`](/en-US/docs/Web/HTML/Reference/Elements/model#autoplay) HTML attribute, indicating whether playback should automatically begin as soon as the model has been loaded and parsed.

- {{domxref("HTMLModelElement.boundingBoxCenter")}} {{ReadOnlyInline}}

  - : a {{domxref("DOMPointReadOnly")}} representing the center of the model asset's bounding box.

- {{domxref("HTMLModelElement.boundingBoxExtents")}} {{ReadOnlyInline}}

  - : a {{domxref("DOMPointReadOnly")}} representing the size of the model asset's bounding box.

- {{domxref("HTMLModelElement.currentSrc")}} {{ReadOnlyInline}}

  - : A string with the absolute URL of the chosen model resource.

- {{domxref("HTMLModelElement.currentTime")}}

  - : A double-precision floating-point value indicating the current playback time in seconds. The time is specified relative to the model's timeline.

- {{domxref("HTMLModelElement.duration")}} {{ReadOnlyInline}}

  - : A read-only double-precision floating-point value indicating the total duration of the model's animation in seconds. If no animation is available, the returned value is `0`.

- {{domxref("HTMLModelElement.entityTransform")}}

  - : a {{domxref("DOMMatrixReadOnly")}} representing the current transformation matrix for the model's contents. It can be set to a new {{domxref("DOMMatrix")}} or {{domxref("DOMMatrixReadOnly")}} in order to change the current matrix.

- {{domxref("HTMLModelElement.environmentMap")}}

  - : A string that reflects the [`environmentmap`](/en-US/docs/Web/HTML/Reference/Elements/model#environmentmap) HTML attribute, which contains the full URL of the image including base URI. You can load a different image into the element by changing the URL in the src attribute.

- {{domxref("HTMLModelElement.environmentMapReady")}}

  - : Returns a {{jsxref("Promise")}} indicating the first moment that the model's environmentMap resource has been parsed and is ready for contributing to rendering.

- {{domxref("HTMLModelElement.height")}}

  - : An integer value that reflects the [`height`](/en-US/docs/Web/HTML/Reference/Elements/model#height) HTML attribute, indicating the vertical size of the viewport in CSS pixels.

- {{domxref("HTMLModelElement.loop")}}

- : A boolean that reflects the [`loop`](/en-US/docs/Web/HTML/Reference/Elements/model#loop) HTML attribute, which indicates whether the model element's animation, if present, should start over when it reaches the end.

- {{domxref("HTMLModelElement.paused")}} {{ReadOnlyInline}}

  - : Returns a boolean that indicates whether the model element's animation, if present, is paused.

- {{domxref("HTMLModelElement.playbackRate")}}

  - : A `double` that indicates the rate at which the model's animation, if present, is being played back.

- {{domxref("HTMLModelElement.ready")}}

  - : a {{jsxref("Promise")}} indicating the first moment that the model resource has been parsed and is ready for rendering.

- {{domxref("HTMLModelElement.stageMode")}}

  - : A string that reflects the [`stagemode`](/en-US/docs/Web/HTML/Reference/Elements/model#stagemode) HTML attribute, indicating the current stage mode of the model, which dictates the default mode for interpreting user interaction with the model.

- {{domxref("HTMLModelElement.width")}}

  - : An integer value that reflects the [`width`](/en-US/docs/Web/HTML/Reference/Elements/model#width) HTML attribute, indicating the horizontal size of the viewport in CSS pixels.

## Instance methods

_This interface also inherits methods from its ancestors {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}}, and {{domxref("EventTarget")}}._

- {{domxref("HTMLModelElement.pause()")}}

  - : Pauses the model element's animation playback.

- {{domxref("HTMLModelElement.play()")}}

  - : Begins playback of the model element's animation, if present.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML elements implementing this interface: {{HTMLElement("ins")}}, {{HTMLElement("del")}}.
