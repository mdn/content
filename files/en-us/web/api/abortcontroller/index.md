---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`AbortController`** interface represents a controller object that allows you to abort one or more Web requests as and when desired.

You can create a new `AbortController` object using the {{domxref("AbortController.AbortController()", "AbortController()")}} constructor. Communicating with an asynchronous operation is done using an {{domxref("AbortSignal")}} object.

## Constructor

- {{domxref("AbortController.AbortController()", "AbortController()")}}
  - : Creates a new `AbortController` object instance.

## Instance properties

- {{domxref("AbortController.signal")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("AbortSignal")}} object instance, which can be used to communicate with, or to abort, an asynchronous operation.

## Instance methods

- {{domxref("AbortController.abort()")}}
  - : Aborts an asynchronous operation before it has completed. This is able to abort [fetch requests](/en-US/docs/Web/API/Window/fetch), consumption of any response bodies, and streams.

## Examples

See the [`AbortSignal` page](/en-US/docs/Web/API/AbortSignal#examples) for usage examples.

You can find a [full working example on GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); you can also see it [running live](https://mdn.github.io/dom-examples/abort-api/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) by Jake Archibald
