---
title: NotRestoredReasons
slug: Web/API/NotRestoredReasons
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NotRestoredReasons
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`NotRestoredReasons`** interface of the {{domxref("Performance API", "Performance API", "", "nocode")}} provides report data containing reasons why the current document was blocked from using the back/forward cache ({{Glossary("bfcache")}}) on navigation.

These objects are accessed via the {{domxref("PerformanceNavigationTiming.notRestoredReasons")}} property.

## Instance properties

- {{domxref("NotRestoredReasons.children", "children")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An array of `NotRestoredReasons` objects, one for each child {{htmlelement("iframe")}} embedded in the current document, which may contain reasons why the top-level frame was blocked relating to the child frames. Each object has the same structure as the parent object — this way, any number of levels of embedded `<iframe>`s can be represented inside the object recursively. If the frame has no children, the array will be empty; if the document is in a cross-origin `<iframe>`, `children` will return `null`.
- {{domxref("NotRestoredReasons.id", "id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string representing the `id` attribute value of the `<iframe>` the document is contained in (for example `<iframe id="foo" src="...">`). If the document is not in an `<iframe>` or the `<iframe>` has no `id` set, `id` will return `null`.
- {{domxref("NotRestoredReasons.name", "name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string representing the `name` attribute value of the `<iframe>` the document is contained in (for example `<iframe name="bar" src="...">`). If the document is not in an `<iframe>` or the `<iframe>` has no `name` set, `name` will return `null`.
- {{domxref("NotRestoredReasons.reasons", "reasons")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An array of {{domxref("NotRestoredReasonDetails")}} objects, each representing a reason why the navigated page was blocked from using the bfcache. If the document is in a cross-origin `<iframe>`, `reasons` will return `null`, but the parent document may show a `reason` of `"masked"` if any `<iframe>`s blocked bfcache usage for the top-level frame.
- {{domxref("NotRestoredReasons.src", "src")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string representing the path to the source of the `<iframe>` the document is contained in (for example `<iframe src="exampleframe.html">`). If the document is not in an `<iframe>`, `src` will return `null`.
- {{domxref("NotRestoredReasons.url", "url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string representing the URL of the navigated page or `<iframe>`. If the document is in a cross-origin `<iframe>`, `url` will return `null`.

## Instance methods

- {{domxref("NotRestoredReasons.toJSON", "toJSON()")}} {{Experimental_Inline}}
  - : A {{Glossary("Serialization","serializer")}}; returns a JSON representation of the `NotRestoredReasons` object.

## Examples

See [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
