---
title: "NotRestoredReasonDetails: reason property"
short-title: reason
slug: Web/API/NotRestoredReasonDetails/reason
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NotRestoredReasonDetails.reason
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`reason`** read-only property of the
{{domxref("NotRestoredReasonDetails")}} interface returns a string describing a reason that the page was blocked from using the back/forward cache ({{Glossary("bfcache")}}).

## Value

A string.

There are many different reasons why blocking could occur, and browsers can choose to implement their own specific reasons for blocking, based on how they operate. Developers should avoid depending on specific wording for reasons and be prepared to handle new reasons being added and deleted.

The initial values listed in the specification are:

- `"fetch"`
  - : While unloading, a fetch initiated by the current document (e.g. via {{domxref("Window/fetch", "fetch()")}}) was canceled while ongoing. As a result, the page was not in a stable state that could be stored in the bfcache.
- `"lock"`
  - : While unloading, held locks and lock requests were terminated, so the page was not in a stable state that could be stored in the bfcache.
- `"masked"`
  - : The exact reason is hidden for privacy purposes. This value can mean one of the following:
    - The current document has children contained in a cross-origin {{htmlelement("iframe")}}, and they prevented storage in the bfcache.
    - The current Document could not be stored in the bfcache for user agent-specific reasons.
- `"navigation-failure"`
  - : The original navigation that created the current document errored, and storing the resulting error document in the bfcache was prevented.
- `"parser-aborted"`
  - : The current document never finished its initial HTML parsing, and storing the unfinished document in the bfcache was prevented.
- `"websocket"`
  - : While unloading, an open [WebSocket](/en-US/docs/Web/API/WebSockets_API) connect was shut down, so the page was not in a stable state that could be stored in the bfcache.

Additional blocking reasons may be used by some browsers, for example:

- `"unload-listener"`
  - : The page registers an [`unload`](/en-US/docs/Web/API/Window/unload_event) handler, which prevents bfcache usage. This serves as a useful warning, as `unload` is deprecated. See [usage notes](/en-US/docs/Web/API/Window/unload_event#usage_notes) for more information.
- `"response-cache-control-no-store"`
  - : The page uses `no-store` as a {{httpheader("Cache-Control")}} header value.
- `"related-active-contents"`
  - : The page was opened from another page that still has a reference to this page, for example using "duplicate tab" functionality.

## Examples

See [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
