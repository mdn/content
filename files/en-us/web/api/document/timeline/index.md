---
title: "Document: timeline property"
short-title: timeline
slug: Web/API/Document/timeline
page-type: web-api-instance-property
browser-compat: api.Document.timeline
---

{{ APIRef("Web Animations") }}

The `timeline` readonly property of the {{domxref("Document")}} interface represents the default timeline of the current document. This timeline is a special instance of {{domxref("DocumentTimeline")}}.

This timeline is unique to each `document` and persists for the lifetime of the `document` including calls to {{domxref("Document.open()")}}.

This timeline expresses the time in milliseconds since {{domxref("Performance.timeOrigin")}}.
Prior to the time origin, the timeline is inactive, and its {{domxref("AnimationTimeline.currentTime","currentTime")}} is `null`.

> [!NOTE]
> A document timeline that is associated with a non-active document (a {{domxref("Document")}} not associated with a {{domxref("Window")}}, {{htmlelement("iframe")}}, or {{htmlelement("frame")}}) is also considered to be inactive.

## Value

A {{domxref("DocumentTimeline")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("AnimationTimeline.currentTime")}}
- {{domxref("DocumentTimeline")}}
