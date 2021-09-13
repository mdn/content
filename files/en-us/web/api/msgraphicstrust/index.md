---
title: MSGraphicsTrust
slug: Web/API/MSGraphicsTrust
tags:
  - msGraphicsTrust
---
{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

The **`msGraphicsTrust()`** constructor returns an object that
provides properties for info on protected video playback.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
var trustObject = media.msGraphicsTrustStatus;
```

### Parameters

- constrictionActive
  - : A read-only property which returns _true_ when protected media is forced to
    play in a lower resolution.
- status
  - : A read-only property which returns an enum with the driver status when playing
    protected content.

### Inheritance hierarchy

The MSGraphicsTrust does not inherit from any class or interface.

## Example

```js
var trustObject = media.msGraphicsTrustStatus;
```
