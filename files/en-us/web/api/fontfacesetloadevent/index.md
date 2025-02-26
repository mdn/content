---
title: FontFaceSetLoadEvent
slug: Web/API/FontFaceSetLoadEvent
page-type: web-api-interface
browser-compat: api.FontFaceSetLoadEvent
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The **`FontFaceSetLoadEvent`** interface of the [CSS Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API) represents events fired at a {{domxref("FontFaceSet")}} after it starts loading font faces.

Events are fired when font loading starts ([`loading`](/en-US/docs/Web/API/FontFaceSet/loading_event)), loading completes ([`loadingdone`](/en-US/docs/Web/API/FontFaceSet/loadingdone_event)) or there is an error loading one of the fonts ([`loadingerror`](/en-US/docs/Web/API/FontFaceSet/loadingerror_event)).

{{InheritanceDiagram}}

## Constructor

- {{domxref("FontFaceSetLoadEvent.FontFaceSetLoadEvent","FontFaceSetLoadEvent()")}}
  - : Creates a new `FontFaceSetLoadEvent` object.

## Instance properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("FontFaceSetLoadEvent.fontfaces")}} {{ReadOnlyInline}}
  - : Returns an array of {{domxref("FontFace")}} instances.
    Depending on the event, the array will contain font faces that are loading (`loading`), have successfully loaded (`loadingdone`), or have failed to load (`loadingerror`).

## Instance methods

_Inherits methods from its parent, {{domxref("Event")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.fonts")}}
- {{domxref("WorkerGlobalScope.fonts")}}
