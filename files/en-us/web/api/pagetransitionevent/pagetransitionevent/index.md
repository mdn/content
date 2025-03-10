---
title: "PageTransitionEvent: PageTransitionEvent() constructor"
short-title: PageTransitionEvent()
slug: Web/API/PageTransitionEvent/PageTransitionEvent
page-type: web-api-constructor
browser-compat: api.PageTransitionEvent.PageTransitionEvent
---

{{APIRef("HTML DOM")}}

The **`PageTransitionEvent()`** constructor creates a new {{domxref("PageTransitionEvent")}} object, that is used by the {{domxref("Window/pageshow_event", "pageshow")}} or {{domxref("Window/pagehide_event", "pagehide")}} events, fired at the {{domxref("window")}} object when a page is loaded or unloaded.

> [!NOTE]
> A web developer doesn't typically need to call this constructor, as the browser creates these objects itself when firing {{domxref("Window/pageshow_event", "pageshow")}} or {{domxref("Window/pagehide_event", "pagehide")}} events.

## Syntax

```js-nolint
new PageTransitionEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `pageshow` or `pagehide`.
- `options` {{optional_inline}}
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following property:
    - `persisted` {{optional_inline}}
      - : A boolean indicating if the document is loading from a cache.

### Return value

A new {{domxref("PageTransitionEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`pageshow`](/en-US/docs/Web/API/Window/pageshow_event) event
- [`pagehide`](/en-US/docs/Web/API/Window/pagehide_event) event
