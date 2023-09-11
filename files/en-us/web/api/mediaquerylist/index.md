---
title: MediaQueryList
slug: Web/API/MediaQueryList
page-type: web-api-interface
browser-compat: api.MediaQueryList
---

{{APIRef("CSSOM")}}

A **`MediaQueryList`** object stores information on a [media query](/en-US/docs/Web/CSS/CSS_media_queries) applied to a document, with support for both immediate and event-driven matching against the state of the document.

You can create a `MediaQueryList` by calling {{DOMxRef("Window.matchMedia", "matchMedia()")}} on the {{DOMxRef("window")}} object. The resulting object handles sending notifications to listeners when the media query state changes (i.e. when the media query test starts or stops evaluating to `true`).

This is very useful for adaptive design, since this makes it possible to observe a document to detect when its media queries change, instead of polling the values periodically, and allows you to programmatically make changes to a document based on media query status.

{{InheritanceDiagram}}

## Instance properties

_The `MediaQueryList` interface inherits properties from its parent interface, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("MediaQueryList.matches", "matches")}} {{ReadOnlyInline}}
  - : A boolean value that returns `true` if the {{DOMxRef("document")}} currently matches the media query list, or `false` if not.
- {{DOMxRef("MediaQueryList.media", "media")}} {{ReadOnlyInline}}
  - : A string representing a serialized media query.

## Instance methods

_The `MediaQueryList` interface inherits methods from its parent interface, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("MediaQueryList.addListener", "addListener()")}} {{deprecated_inline}}
  - : Adds to the `MediaQueryList` a callback which is invoked whenever the media query status—whether or not the document matches the media queries in the list—changes. This method exists primarily for backward compatibility; if possible, you should instead use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to watch for the {{domxref("MediaQueryList.change_event", "change")}} event.
- {{DOMxRef("MediaQueryList.removeListener", "removeListener()")}} {{deprecated_inline}}
  - : Removes the specified listener callback from the callbacks to be invoked when the `MediaQueryList` changes media query status, which happens any time the document switches between matching and not matching the media queries listed in the `MediaQueryList`. This method has been kept for backward compatibility; if possible, you should generally use {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} to remove change notification callbacks (which should have previously been added using `addEventListener()`).

## Events

_The following events are delivered to `MediaQueryList` objects:_

- {{DOMxRef("MediaQueryList.change_event", "change")}}
  - : Sent to the `MediaQueryList` when the result of running the media query against the document changes. For example, if the media query is `(min-width: 400px)`, the `change` event is fired any time the width of the document's {{Glossary("viewport")}} changes such that its width moves across the 400px boundary in either direction.

## Examples

This simple example creates a `MediaQueryList` and then sets up a listener to detect when the media query status changes, running a custom function when it does to change the appearance of the page.

```js
const para = document.querySelector("p");
const mql = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    /* the viewport is more than 600 pixels wide */
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
  }
}

mql.addEventListener("change", screenTest);
```

> **Note:** You can find this example on GitHub (see the [source code](https://github.com/mdn/dom-examples/blob/main/mediaquerylist/index.html), and also see it [running live](https://mdn.github.io/dom-examples/mediaquerylist/index.html)).

You can find other examples on the individual property and method pages.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Using media queries from code](/en-US/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryListEvent")}}
- The article {{DOMxRef("Window.devicePixelRatio")}} also has a useful example
