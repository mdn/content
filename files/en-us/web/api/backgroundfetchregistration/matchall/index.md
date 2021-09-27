---
title: BackgroundFetchRegistration.matchAll()
slug: Web/API/BackgroundFetchRegistration/matchAll
tags:
  - API
  - Method
  - Reference
  - matchAll
  - BackgroundFetchRegistration
browser-compat: api.BackgroundFetchRegistration.matchAll
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`matchAll()`** method of the {{domxref("BackgroundFetchRegistration")}} interface returns an array of matching {{domxref("BackgroundFetchRecord")}} objects.

## Syntax

    let records = BackgroundFetchRegistration.matchAll(request,options);

### Parameters

- `request`
  - : The {{domxref("Request")}} for which you are attempting to find records.
    This can be a {{domxref("Request")}} object or a URL.
- `options` {{optional_inline}}

  - : An object that sets options for the `match` operation. The available
    options are:

    - `ignoreSearch`
      - : A boolean value that specifies whether to
        ignore the query string in the URL. For example, if set to
        `true` the `?value=bar` part of
        `http://foo.com/?value=bar` would be ignored when performing a match.
        It defaults to `false`.
    - `ignoreMethod`
      - : A boolean value. When `true`,
        prevents matching operations from validating the {{domxref("Request")}} `http` method.
        If `false` (the default) only `GET` and `HEAD` are allowed.
    - `ignoreVary`
      - : A boolean value. When `true` indicates that the [`VARY`](/en-US/docs/Web/HTTP/Headers/Vary)
        header should be ignored.
        It defaults to `false`.

### Return value

A {{jsxref("Promise")}} that resolves with an array of all matching {{domxref("BackgroundFetchRecord")}} objects.

### Exceptions

- `InvalidStateError`
  - : If the {{domxref("BackgroundFetchRegistration.recordsAvailable","recordsAvailable")}} flag is `false`, indicating that there is not a fetch in progress, return a promise that resolves with an `InvalidStateError` {{domxref("DOMException")}}.

## Examples

Use `matchAll()` with no parameters to return all of the records in a background fetch.

```js
const records = await bgFetch.matchAll();
console.log(records); // an array of BackgroundFetchRecord objects
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
