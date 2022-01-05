---
title: msPlayToPrimary
slug: Web/API/MsPlayToPrimary
tags:
  - msPlayToPrimary
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

**`msPlayToPrimary`** is a read/write property which gets or
sets the primary DLNA _PlayTo_ device.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
ptr = object.msPlayToPrimary;
```

## Value

Boolean value set to _true_ indicates that the device is the primary DLNA
_PlayTo_ device, otherwise false.

## Example

```html
     // Microsoft extensions
     interface HTMLImageElement : HTMLElement
     {
                  attribute boolean msPlayToDisabled;
                  attribute boolean msPlayToPrimary;
                  attribute DOMString msPlayToPreferredSourceUri;
     };
```

## See also

- [HTMLMediaElement](/en-US/docs/Web/API/HTMLMediaElement)
