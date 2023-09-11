---
title: "MediaQueryList: matches property"
short-title: matches
slug: Web/API/MediaQueryList/matches
page-type: web-api-instance-property
browser-compat: api.MediaQueryList.matches
---

{{APIRef("CSSOM")}}

The **`matches`** read-only property of the
{{DOMxRef("MediaQueryList")}} interface is a boolean value that returns
`true` if the {{DOMxRef("document")}} currently matches the media query list,
or `false` if not.

You can be notified when the value of `matches` changes by watching for the
{{domxref("MediaQueryList.change_event", "change")}} event to be fired at the
`MediaQueryList`.

## Value

A boolean value that is `true` if the {{DOMxRef("document")}}
currently matches the media query list; otherwise, it's `false`.

## Examples

This example detects viewport orientation changes by creating a media query using the
[`orientation`](/en-US/docs/Web/CSS/@media/orientation) media
feature:

```js
const mql = window.matchMedia("(orientation:landscape)");
mql.addEventListener("change", (event) => {
  if (event.matches) {
    console.log("Now in landscape orientation");
  } else {
    console.log("Now in portrait orientation");
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Using media queries from code](/en-US/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
