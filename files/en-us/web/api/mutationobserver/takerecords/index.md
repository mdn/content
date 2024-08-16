---
title: "MutationObserver: takeRecords() method"
short-title: takeRecords()
slug: Web/API/MutationObserver/takeRecords
page-type: web-api-instance-method
browser-compat: api.MutationObserver.takeRecords
---

{{APIRef("DOM WHATWG")}}

The {{domxref("MutationObserver")}} method
**`takeRecords()`** returns a list of all matching DOM changes
that have been detected but not yet processed by the observer's callback function,
leaving the mutation queue empty.

The most common use case for this is to
immediately fetch all pending mutation records immediately prior to disconnecting the
observer, so that any pending mutations can be processed when shutting down the
observer.

## Syntax

```js-nolint
takeRecords()
```

### Parameters

None.

### Return value

An array of {{domxref("MutationRecord")}} objects, each describing one change applied to
the observed portion of the document's DOM tree.

> [!NOTE]
> The queue of mutations which have occurred, but not been
> delivered to the observer's callback is left empty after calling
> `takeRecords()`.

## Examples

In this example, we demonstrate how to handle any undelivered
{{domxref("MutationRecord")}}s by calling `takeRecords()` just before
disconnecting the observer.

```js
const targetNode = document.querySelector("#someElement");
const observerOptions = {
  childList: true,
  attributes: true,
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

/* later, when it's time to stop observing… */

/* handle any still-pending mutations */

let mutations = observer.takeRecords();

observer.disconnect();

if (mutations.length > 0) {
  callback(mutations);
}
```

The code fetches any unprocessed mutation records, then invokes the
callback with the records so that they can be processed. This is done immediately prior
to calling {{domxref("MutationObserver.disconnect", "disconnect()")}} to stop observing
the DOM.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
