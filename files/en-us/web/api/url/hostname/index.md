---
title: URL.hostname
slug: Web/API/URL/hostname
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
browser-compat: api.URL.hostname
---
{{ApiRef("URL API")}}

The **`hostname`** property of the {{domxref("URL")}} interface
is a {{domxref("USVString")}} containing the {{glossary("domain name")}} of the URL.

{{AvailableInWorkers}}

## Syntax

```js
const domain = url.hostname
url.hostname = domain
```

### Value

A {{domxref("USVString")}}.

## Examples

```js
const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname');
console.log(url.hostname); // Logs: 'developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
