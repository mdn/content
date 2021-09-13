---
title: URL.username
slug: Web/API/URL/username
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
  - username
browser-compat: api.URL.username
---
{{ApiRef("URL API")}}

The **`username`** property of the {{domxref("URL")}} interface
is a {{domxref("USVString")}} containing the username specified before the domain name.

{{AvailableInWorkers}}

## Syntax

```js
const usernameString = url.username
url.username = newUsername
```

### Value

A {{domxref("USVString")}}.

## Examples

```js
const url = new URL('https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username');
console.log(url.username) // Logs "anonymous"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
