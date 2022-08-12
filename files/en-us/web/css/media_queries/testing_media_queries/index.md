---
title: Testing media queries programmatically
slug: Web/CSS/Media_Queries/Testing_media_queries
tags:
  - Advanced
  - CSS
  - DOM
  - Guide
  - JavaScript
  - Media Queries
  - MediaQueryList
  - Responsive Design
  - Web
  - matchMedia
browser-compat: api.MediaQueryList
---
{{CSSRef}}

The {{Glossary("DOM")}} provides features that can test the results of a [media query](/en-US/docs/Web/CSS/Media_Queries) programmatically, via the {{domxref("MediaQueryList")}} interface and its methods and properties. Once you've created a `MediaQueryList` object, you can check the result of the query or receive notifications when the result changes.

## Creating a media query list

Before you can evaluate the results of a media query, you need to create the `MediaQueryList` object representing the query. To do this, use the {{domxref("window.matchMedia")}} method.

For example, to set up a query list that determines if the device is in landscape or portrait orientation:

```js
const mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## Checking the result of a query

Once you've created your media query list, you can check the result of the query by looking at the value of its `matches` property:

```js
if (mediaQueryList.matches) {
  /* The viewport is currently in portrait orientation */
} else {
  /* The viewport is not currently in portrait orientation, therefore landscape */
}
```

## Receiving query notifications

If you need to be aware of changes to the evaluated result of the query on an ongoing basis, it's more efficient to register a [listener](/en-US/docs/Web/API/EventTarget/addEventListener) than to poll the query's result. To do this, call the `addEventListener()` method on the {{domxref("MediaQueryList")}} object, with a callback function to invoke when the media query status changes (e.g., the media query test goes from `true` to `false`):

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
mediaQueryList.addEventListener('change', handleOrientationChange);
```

This code creates the orientation-testing media query list, then adds an event listener to it. After defining the listener, we also call the listener directly. This makes our listener perform adjustments based on the current device orientation; otherwise, our code might assume the device is in portrait mode at startup, even if it's actually in landscape mode.

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

Above, we define the parameter as `evt` — an event object. This makes sense because [newer implementations of `MediaQueryList`](/en-US/docs/Web/API/MediaQueryList#browser_compatibility) handle event listeners in a standard way. They no longer use the unusual {{domxref("MediaQueryListListener")}} mechanism, but a standard event listener setup, passing an [event object](/en-US/docs/Web/API/Event) of type {{domxref("MediaQueryListEvent")}} as the argument to the callback function.

This event object also includes the {{domxref("MediaQueryListEvent.media","media")}} and {{domxref("MediaQueryListEvent.matches","matches")}} properties, so you can query these features of the `MediaQueryList` by directly accessing it, or accessing the event object.

## Ending query notifications

To stop receiving notifications about changes to the value of your media query, call {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} on the `MediaQueryList`, passing it the name of the previously-defined callback function:

```js
mediaQueryList.removeEventListener('change', handleOrientationChange);
```

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- {{domxref("window.matchMedia()")}}
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
