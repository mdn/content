---
title: "URL: username property"
short-title: username
slug: Web/API/URL/username
page-type: web-api-instance-property
browser-compat: api.URL.username
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`username`** property of the {{domxref("URL")}} interface is a string containing the username component of the URL. If the URL does not have a username, this property contains an empty string, `""`.

This property can be set to change the username of the URL. If the URL has no {{domxref("URL.host", "host")}} or its scheme is `file:`, then setting this property has no effect.

The username is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

## Value

A string.

## Examples

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username",
);
console.log(url.username); // Logs "anonymous"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
