---
title: "Window: matchMedia() method"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
page-type: web-api-instance-method
browser-compat: api.Window.matchMedia
---

{{APIRef}}

The {{domxref("Window")}} interface's **`matchMedia()`** method
returns a new {{domxref("MediaQueryList")}} object that can then be used to determine if
the {{domxref("document")}} matches the [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) string,
as well as to monitor the document to detect when it matches (or stops matching) that
media query.

## Syntax

```js-nolint
matchMedia(mediaQueryString)
```

### Parameters

- `mediaQueryString`
  - : A string specifying the media query to parse into a {{domxref("MediaQueryList")}}.

### Return value

A new {{domxref("MediaQueryList")}} object for the media query. Use this object's
properties and events to detect matches and to monitor for changes to those matches over
time.

## Usage notes

You can use the returned media query to perform both instantaneous and event-driven
checks to see if the document matches the media query.

To perform a one-time, instantaneous check to see if the document matches the media
query, look at the value of the {{domxref("MediaQueryList.matches", "matches")}}
property, which will be `true` if the document meets the media query's
requirements.

If you need to be kept aware of whether or not the document matches the media query at
all times, you can instead watch for the {{domxref("MediaQueryList.change_event",
  "change")}} event to be delivered to the object. There's [a good example of this](/en-US/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes)
in the article on {{domxref("Window.devicePixelRatio")}}.

## Examples

This example runs the media query `(max-width: 600px)` and displays the
value of the resulting `MediaQueryList`'s `matches` property in a
{{HTMLElement("span")}}; as a result, the output will say "true" if the viewport is less
than or equal to 600 pixels wide, and will say "false" if the window is wider than that.

### JavaScript

```js
let mql = window.matchMedia("(max-width: 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

The JavaScript code passes the media query to match into {{domxref("Window.matchMedia",
  "matchMedia()")}} to compile it, then sets the `<span>`'s
{{domxref("HTMLElement.innerText", "innerText")}} to the value of the results'
{{domxref("MediaQueryList.matches", "matches")}} property, so that it indicates whether or
not the document matches the media query at the moment the page was loaded.

### HTML

```html
<span class="mq-value"></span>
```

A simple `<span>` to receive the output.

```css hidden
.mq-value {
  font:
    18px arial,
    sans-serif;
  font-weight: bold;
  color: #88f;
  padding: 0.4em;
  border: 1px solid #dde;
}
```

### Result

{{EmbedLiveSample("Examples", "100%", "60")}}

See [Testing media queries programmatically](/en-US/docs/Web/CSS/CSS_media_queries/Testing_media_queries) for additional code examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Using media queries from code](/en-US/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{domxref("MediaQueryList")}}
