---
title: Using the Fetch Later API
slug: Web/API/Fetch_API/Using_Fetch_Later
page-type: guide
---

{{DefaultAPISidebar("Fetch Later API")}}

The [Fetch Later API](/en-US/docs/Web/API/Fetch_Later_API) provides a JavaScript interface for making HTTP requests and processing the responses.

With the Fetch Later API, you make a request by calling {{domxref("Window/fetchLater", "fetchLater()")}}, which is available as a global function in both {{domxref("Window", "window")}}. You pass it a {{domxref("Request")}} object or a string containing the URL to fetch, along with an optional argument to configure the request.

The `fetch()` function returns a {{domxref("FetchLaterResult")}} object representing...

Here's a minimal function that uses `fetchLater()` to...

```js
fetchLater("/endpoint/");
```

## See also

- [HTTP](/en-US/docs/Web/HTTP)
- [Fetch examples on GitHub](https://github.com/mdn/dom-examples/tree/main/fetch)
