---
title: msCaching
slug: Web/API/msCaching
tags:
  - msCaching
---
{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

The **`msCaching`** read/write property specifies whether stream data downloaded using [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest)is cached to disk or not.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
 cacheState = object.msCaching
```

### Values

One of the following strings:

- `auto`
  - : The caching for stream or ms-stream data is _disabled_.
- `enabled`
  - : The caching for stream or ms-stream data is _enabled_.
- `disabled`
  - : The caching for _any_ data is _disabled_.

## See also

- [msCachingEnabled](/en-US/docs/Web/API/msCachingEnabled)
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
