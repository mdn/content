---
title: "BackgroundFetchRegistration: matchAll() method"
short-title: matchAll()
slug: Web/API/BackgroundFetchRegistration/matchAll
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BackgroundFetchRegistration.matchAll
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`matchAll()`** method of the {{domxref("BackgroundFetchRegistration")}} interface returns an array of matching {{domxref("BackgroundFetchRecord")}} objects.

## Syntax

```js-nolint
matchAll()
matchAll(request)
matchAll(request,options)
```

### Parameters

- `request` {{optional_inline}}
  - : The {{domxref("Request")}} for which you are attempting to find records.
    This can be a {{domxref("Request")}} object or a URL. If this parameter is omitted, all records are included in the result.
- `options` {{optional_inline}}

  - : An object that sets options for the `match` operation. The available
    options are:

    - `ignoreSearch` {{optional_inline}}
      - : A boolean value that specifies whether to
        ignore the query string in the URL. For example, if set to
        `true` the `?value=bar` part of
        `http://foo.com/?value=bar` would be ignored when performing a match.
        It defaults to `false`.
    - `ignoreMethod` {{optional_inline}}
      - : A boolean value. When `true`,
        prevents matching operations from validating the {{domxref("Request")}} `http` method.
        If `false` (the default) only `GET` and `HEAD` are allowed.
    - `ignoreVary` {{optional_inline}}
      - : A boolean value. When `true` indicates that the {{HTTPHeader("Vary")}} header should be ignored.
        It defaults to `false`.

### Return value

A {{jsxref("Promise")}} that resolves with an array of all matching {{domxref("BackgroundFetchRecord")}} objects.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the {{domxref("BackgroundFetchRegistration.recordsAvailable","recordsAvailable")}} flag is `false`, indicating that there is no fetch in progress.

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
