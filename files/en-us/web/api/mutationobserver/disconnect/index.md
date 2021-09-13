---
title: MutationObserver.disconnect()
slug: Web/API/MutationObserver/disconnect
tags:
  - API
  - Changes
  - DOM
  - DOM Changes
  - DOM Reference
  - DOM Tree
  - Disconnect
  - Method
  - Mutation Observer
  - Mutation Observer API
  - MutationObserver
  - Observing
  - Reference
  - Watching
  - mutation
  - stop
browser-compat: api.MutationObserver.disconnect
---
{{APIRef("DOM WHATWG")}}

The {{domxref("MutationObserver")}} method
**`disconnect()`** tells the observer to stop watching for
mutations.

The observer can be reused by calling its
{{domxref("MutationObserver.observe", "observe()")}} method again.

## Syntax

```js
mutationObserver.disconnect()
```

### Parameters

None.

### Return value

`undefined`.

> **Note:** All notifications of mutations that have already been
> _detected_, but _not yet reported_ to the observer, are discarded.

## Usage notes

If the element being observed is removed from the DOM, and then subsequently released
by the browser's garbage collection mechanism, the `MutationObserver` is
likewise deleted.

## Example

This example creates an observer, then disconnects from it, leaving it available for
possible reuse.

```js
const targetNode = document.querySelector("#someElement");
const observerOptions = {
  childList: true,
  attributes: true
}

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

/* some time later... */

observer.disconnect();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
