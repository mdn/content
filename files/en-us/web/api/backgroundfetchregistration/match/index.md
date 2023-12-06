---
title: "BackgroundFetchRegistration: match() method"
short-title: match()
slug: Web/API/BackgroundFetchRegistration/match
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BackgroundFetchRegistration.match
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`match()`** method of the {{domxref("BackgroundFetchRegistration")}} interface returns the first matching {{domxref("BackgroundFetchRecord")}}.

## Syntax

```js-nolint
match(request)
match(request, options)
```

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

A {{jsxref("Promise")}} that resolves with the first {{domxref("BackgroundFetchRecord")}} that matches
the request or {{jsxref("undefined")}} if no match is found.

> **Note:** `BackgroundFetchRegistration.match()` is basically identical to
> {{domxref("BackgroundFetchRegistration.matchAll()")}}, except that rather than resolving with an array of
> all matching records, it resolves with the first matching record only.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if you call `match()` when there are no fetches in progress. This state will be reflected by {{domxref("BackgroundFetchRegistration.recordsAvailable")}} being set to `false`.

## Examples

In this example we look for a record with the URL "/ep-5.mp3". If a {{domxref("BackgroundFetchRecord")}} is found then we can return some information about it.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  console.log(`Here's the request`, record.request);
  const response = await record.responseReady;
  console.log(`And here's the response`, response);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
