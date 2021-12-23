---
title: MediaQueryListEvent()
slug: Web/API/MediaQueryListEvent/MediaQueryListEvent
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

The **`MediaQueryListEvent()`** constructor creates a new
`MediaQueryListEvent` instance.

## Syntax

```js
var myMqlEvent = new MediaQueryListEvent(typeArg, init);
```

### Parameters

- `typeArg`
  - : A string representing the name of the event.

- `init` {{optional_inline}}

  - : An init object that defines features of the new object instance. The available
    properties are:

    - media: A {{DOMxRef("DOMString")}} representing a serialized media query.
    - matches: A {{JSxRef("Boolean")}} representing the media query status —
      `true` if it matches, `false` if not.

## Examples

```js
var media = '(max-width: 600px)';
var matches = true;

var myMediaQueryListEvent = new MediaQueryListEvent("change", {media, matches});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Using media queries from
  code](/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
