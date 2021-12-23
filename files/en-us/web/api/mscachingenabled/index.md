---
title: msCachingEnabled
slug: Web/API/msCachingEnabled
tags:
  - msCachingEnabled
---
{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

The **`msCachingEnabled`** method gets the current caching state for an [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest).

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
 var cacheState = XMLHttpRequest.msCachingEnabled();
```

### Parameters

- _cacheState_\[out, retval]
  - : Type = **boolean**. If true, `XMLHttpRequest` is cached to disk. If false, it is not written to disk.

### Return value

Type: **boolean**. If true, `XMLHttpRequest` is cached to disk. If false, it is not written to disk.

## See also

- [msCaching property](/en-US/docs/Web/API/msCaching)
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
