---
title: "AbortController: abort() method"
short-title: abort()
slug: Web/API/AbortController/abort
page-type: web-api-instance-method
browser-compat: api.AbortController.abort
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`abort()`** method of the {{domxref("AbortController")}} interface aborts an asynchronous operation before it has completed.
This is able to abort [fetch requests](/en-US/docs/Web/API/Window/fetch), the consumption of any response bodies, or streams.

## Syntax

```js-nolint
abort()
abort(reason)
```

### Parameters

- `reason` {{optional_inline}}
  - : The reason why the operation was aborted, which can be any JavaScript value.
    If not specified, the reason is set to "AbortError" {{domxref("DOMException")}}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See the [`AbortSignal` page](/en-US/docs/Web/API/AbortSignal#examples) for usage examples.

You can find a [full working example on GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); you can also see it [running live](https://mdn.github.io/dom-examples/abort-api/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
