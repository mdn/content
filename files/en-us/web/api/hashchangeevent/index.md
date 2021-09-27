---
title: HashChangeEvent
slug: Web/API/HashChangeEvent
tags:
  - API
  - Event
  - HTML5
  - HashChange
  - Interface
  - Reference
  - events
browser-compat: api.HashChangeEvent
---
{{APIRef("HTML DOM")}}

The **`HashChangeEvent`** interface represents events that fire when the fragment identifier of the URL has changed.

The fragment identifier is the part of the URL that follows (and includes) the `#` symbol.

{{InheritanceDiagram}}

## Properties

_This interface also inherits the properties of its parent, {{domxref("Event")}}._

- {{domxref("HashChangeEvent.newURL")}} {{readonlyInline}}
  - : The new URL to which the window is navigating.
- {{domxref("HashChangeEvent.oldURL")}} {{readonlyInline}}
  - : The previous URL from which the window was navigated.

## Methods

_This interface has no methods of its own, but inherits the methods of its parent, {{domxref("Event")}}._

## Examples

### Syntax options for a hash change

You can listen for the {{event("hashchange")}} event using any of the following options:

```js
window.onhashchange = funcRef;
```

**or**

```html
<body onhashchange="funcRef();">
```

**or**

```js
window.addEventListener("hashchange", funcRef, false);
```

### Basic example

```js
function locationHashChanged() {
  if (location.hash === '#somecoolfeature') {
    somecoolfeature();
  }
}

window.addEventListener('hashchange', locationHashChanged);
```

## Polyfill

There are several fallback scripts listed on the [Modernizr GitHub page](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills). Basically, those scripts check the `hash` property of {{domxref("Window.location")}} at a regular interval. Here is a version that allows only one handler to be bound to the {{domxref("WindowEventHandlers.onhashchange", "onhashchange")}} property:

```js
;(function(window) {

  // Exit if the browser implements that event
  if ( "onhashchange" in window.document.body ) { return; }

  var location = window.location,
      oldURL = location.href,
      oldHash = location.hash;

  // Check the location hash on a 100ms interval
  setInterval(function() {
    var newURL = location.href,
        newHash = location.hash;

    // If the hash has changed and a handler has been bound...
    if ( newHash != oldHash && typeof window.onhashchange === "function" ) {
      // Execute the handler
      window.onhashchange({
        type: "hashchange",
        oldURL: oldURL,
        newURL: newURL
      });

      oldURL = newURL;
      oldHash = newHash;
    }
  }, 100);

})(window);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Related events

- {{event("hashchange")}}
- {{event("popstate")}}
