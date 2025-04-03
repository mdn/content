---
title: Using the fetchLater() API
slug: Web/API/fetchLater_API/Using_fetchLater
page-type: guide
---

{{DefaultAPISidebar("fetchLater API")}}

The [fetchLater() API](/en-US/docs/Web/API/fetchLater_API) provides a JavaScript interface for making HTTP requests and processing the responses.

With the fetchLater() API, you make a request by calling {{domxref("Window/fetchLater", "fetchLater()")}}, which is available as a global function in both {{domxref("Window", "window")}}. You pass it a {{domxref("Request")}} object or a string containing the URL to fetch, along with an optional argument to configure the request.

The `fetch()` function returns a {{domxref("FetchLaterResult")}} object representing...

Here's a minimal function that uses `fetchLater()` to...

```js
fetchLater("/endpoint/");
```

## See also

- [HTTP](/en-US/docs/Web/HTTP)
- [fetchLater() API](/en-US/docs/Web/API/fetchLater_API)
