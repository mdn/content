---
title: msGetPropertyEnabled
slug: Web/API/msGetPropertyEnabled
tags:
  - msGetPropertyEnabled
---
{{APIRef("HTMLMediaElement")}}

{{Non-standard_header()}}

The **`msGetPropertyEnabled`** returns whether a given property in the style object is enabled.

This proprietary method is specific to Internet Explorer browser.

### Syntax

```js
var retVal = style.msGetPropertyEnabled(name);
```

### Parameters

**name** \[in]

Type: _String_

The name of the property to enable.

### Return value

Type: _Boolean_

If _false_, the property is not enabled. If _true_, the property is enabled.

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
