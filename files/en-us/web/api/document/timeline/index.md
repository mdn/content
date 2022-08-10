---
title: Document.timeline
slug: Web/API/Document/timeline
page-type: web-api-instance-property
tags:
  - API
  - Animation
  - AnimationTimeline
  - Document
  - DocumentTimeline
  - Property
  - Reference
  - Web Animations
  - timeline
  - waapi
  - web animations api
browser-compat: api.Document.timeline
---
{{ APIRef("Web Animations") }}

The `timeline` readonly property of the {{domxref("Document")}} interface represents the default timeline of the current document. This timeline is a special instance of {{domxref("DocumentTimeline")}} that is automatically created on page load.

This timeline is unique to each `document` and persists for the lifetime of the `document` including calls to {{domxref("Document.open()")}}.

The time values for this timeline are calculated as a fixed offset from the global clock such that the **zero time** corresponds to the {{domxref("PerformanceTiming.navigationStart", "navigationStart")}} moment plus a signed delta known as the **origin time.** Prior to establishing the `navigationStart` moment, the document timeline is **inactive**.

> **Note:** A document timeline that is associated with a non-active document is also considered to be **inactive**.

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
