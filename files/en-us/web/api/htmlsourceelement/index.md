---
title: HTMLSourceElement
slug: Web/API/HTMLSourceElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLSourceElement
---
{{APIRef("HTML DOM")}}

The **`HTMLSourceElement`** interface provides special properties (beyond the regular {{domxref("HTMLElement")}} object interface it also has available to it by inheritance) for manipulating {{htmlelement("source")}} elements.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLSourceElement.media")}}
  - : Is a {{domxref("DOMString")}} reflecting the {{ htmlattrxref("media", "source") }} HTML attribute, containing the intended type of the media resource.
- {{domxref("HTMLSourceElement.sizes")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} representing image sizes between breakpoints
- {{domxref("HTMLSourceElement.src")}}

  - : Is a {{domxref("DOMString")}} reflecting the {{ htmlattrxref("src", "source") }} HTML attribute, containing the URL for the media resource. The {{domxref("HTMLSourceElement.src")}} property has a meaning only when the associated {{HTMLElement("source")}} element is nested in a media element that is a {{htmlelement("video")}} or an {{htmlelement("audio")}} element. It has no meaning and is ignored when it is nested in a {{HTMLElement("picture")}} element.

    > **Note:** If the `src` property is updated (along with any siblings), the parent {{domxref("HTMLMediaElement")}}'s `load` method should be called when done, since `<source>` elements are not re-scanned automatically.

- {{domxref("HTMLSourceElement.srcset")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} reflecting the {{ htmlattrxref("srcset", "source") }} HTML attribute, containing a list of candidate images, separated by a comma (`',', U+002C COMMA`). A candidate image is a URL followed by a `'w'` with the width of the images, or an `'x'` followed by the pixel density.
- {{domxref("HTMLSourceElement.type")}}
  - : Is a {{domxref("DOMString")}} reflecting the {{ htmlattrxref("type", "source") }} HTML attribute, containing the type of the media resource.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("source") }}.
- The HTML DOM APIs of the elements that can contain a {{HTMLElement("source")}} element: {{domxref("HTMLVideoElement")}}, {{domxref("HTMLAudioElement")}}, {{domxref("HTMLPictureElement")}}.
