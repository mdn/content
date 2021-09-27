---
title: URLSearchParams.get()
slug: Web/API/URLSearchParams/get
tags:
  - API
  - Method
  - URL API
  - URLSearchParams
  - get
browser-compat: api.URLSearchParams.get
---
{{ApiRef("URL API")}}

The **`get()`** method of the {{domxref("URLSearchParams")}}
interface returns the first value associated to the given search parameter.

{{availableinworkers}}

## Syntax

```js
URLSearchParams.get(name)
```

### Parameters

- name
  - : The name of the parameter to return.

### Return value

A {{domxref("USVString")}} if the given search parameter is found; otherwise,
**`null`**.

## Examples

If the URL of your page is `https://example.com/?name=Jonathan&age=18`
you could parse out the 'name' and 'age' parameters using:

```js
let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name"); // is the string "Jonathan"
let age = parseInt(params.get("age"), 10); // is the number 18
```

Requesting a parameter that isn't present in the query string will return
**`null`**:

    let address = params.get("address"); // null

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
