---
title: MediaQueryListEvent()
slug: Web/API/MediaQueryListEvent/MediaQueryListEvent
page-type: web-api-constructor
tags:
  - API
  - CSSOM View
  - Constructor
  - Media Queries
  - MediaQueryListEvent
  - Reference
browser-compat: api.MediaQueryListEvent.MediaQueryListEvent
---
{{APIRef("CSSOM")}}

The **`MediaQueryListEvent()`** constructor creates a new {{domxref("MediaQueryListEvent")}} object.

## Syntax

```js
new MediaQueryListEvent(type)
new MediaQueryListEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `change`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `media` {{optional_inline}}
      - : A string representing a serialized media query. It defaults to `""`.
    - `matches` {{optional_inline}}
      - : A boolean value representing the media query status; `true` if it matches, `false` if not. It defaults to `false`.

### Return value

A new {{domxref("MediaQueryListEvent")}} object.

## Examples

```js
const media = '(max-width: 600px)';
const matches = true;

const myMediaQueryListEvent = new MediaQueryListEvent("change", {media, matches});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Using media queries from code](/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
