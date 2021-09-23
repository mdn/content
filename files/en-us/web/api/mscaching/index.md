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

Type: DOMString

| Property value | Description                                    |
| -------------- | ---------------------------------------------- |
| `auto`         | Disables caching for stream or ms-stream data. |
| `enabled`      | Enables caching for stream or ms-stream data.  |
| `disabled`     | Disables caching for any data.                 |

## See also

- [msCachingEnabled](/en-US/docs/Web/API/msCachingEnabled)
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
