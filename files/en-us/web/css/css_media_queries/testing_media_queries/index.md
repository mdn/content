---
title: Testing media queries programmatically
slug: Web/CSS/CSS_media_queries/Testing_media_queries
page-type: guide
browser-compat: api.MediaQueryList
---

{{CSSRef}}

The {{Glossary("DOM")}} provides features that can test the results of a {{Glossary("media query")}} programmatically, via the {{domxref("MediaQueryList")}} interface and its methods and properties. Once you've created a `MediaQueryList` object, you can check the result of the [query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) or receive notifications when the result changes.

## Creating a media query list

Before you can evaluate the results of a media query, you need to create the {{domxref("MediaQueryList")}} object representing the query. To do this, use the {{domxref("window.matchMedia")}} method.

For example, to set up a query list that determines if the device is in landscape or portrait [orientation](/en-US/docs/Web/CSS/@media/orientation):

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## Checking the result of a query

Once you've created your media query list, you can check the result of the query by looking at the value of its [`matches`](/en-US/docs/Web/API/MediaQueryList/matches) property:

```js
if (mediaQueryList.matches) {
  /* The viewport is currently in portrait orientation */
} else {
  /* The viewport is not currently in portrait orientation, therefore landscape */
}
```

## Receiving query notifications

If you need to be aware of changes to the evaluated result of the query on an ongoing basis, it's more efficient to register a [listener](/en-US/docs/Web/API/EventTarget/addEventListener) than to poll the query's result. To do this, call the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method on the {{domxref("MediaQueryList")}} object, with a callback function to invoke when the media query status changes (e.g., the media query test goes from `true` to `false`):

```js
// Create the query list.
const mediaQueryList = window.matchMedia("(orientation: portrait)");

// Define a callback function for the event listener.
function handleOrientationChange(mql) {
  // …
}

// Run the orientation change handler once.
handleOrientationChange(mediaQueryList);

// Add the callback function as a listener to the query list.
mediaQueryList.addEventListener("change", handleOrientationChange);
```

This code creates the orientation-testing media query list and adds an event listener to it. After defining the listener, we also call the listener directly. This makes our listener perform adjustments based on the current device orientation; otherwise, our code might assume the device is in portrait mode at startup, even if it's actually in landscape mode.

The `handleOrientationChange()` function would look at the result of the query and handle whatever we need to do on an orientation change:

```js
function handleOrientationChange(evt) {
  if (evt.matches) {
    /* The viewport is currently in portrait orientation */
  } else {
    /* The viewport is currently in landscape orientation */
  }
}
```

Above, we define the parameter as `evt` — an event object of type {{domxref("MediaQueryListEvent")}} that also includes the {{domxref("MediaQueryListEvent.media","media")}} and {{domxref("MediaQueryListEvent.matches","matches")}} properties, so you can query these features of the `MediaQueryList` by directly accessing it, or accessing the event object.

## Ending query notifications

To stop receiving notifications about changes to the value of your media query, call {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} on the `MediaQueryList`, passing it the name of the previously-defined callback function:

```js
mediaQueryList.removeEventListener("change", handleOrientationChange);
```

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module
- [CSS object model](/en-US/docs/Web/API/CSS_Object_Model) module
- {{domxref("window.matchMedia()")}}
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
