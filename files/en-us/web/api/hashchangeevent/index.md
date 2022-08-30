---
title: HashChangeEvent
slug: Web/API/HashChangeEvent
page-type: web-api-interface
tags:
  - API
  - Event
  - HTML
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

- {{domxref("HashChangeEvent.newURL")}} {{ReadOnlyInline}}
  - : The new URL to which the window is navigating.
- {{domxref("HashChangeEvent.oldURL")}} {{ReadOnlyInline}}
  - : The previous URL from which the window was navigated.

## Methods

_This interface has no methods of its own, but inherits the methods of its parent, {{domxref("Event")}}._

## Examples

### Basic example

```js
function locationHashChanged() {
  if (location.hash === '#somecoolfeature') {
    somecoolfeature();
  }
}

window.addEventListener('hashchange', locationHashChanged);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Related events

- {{domxref("window.hashchange_event", "hashchange")}}
- {{domxref("window.popstate_event", "popstate")}}
