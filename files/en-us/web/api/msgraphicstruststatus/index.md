---
title: msGraphicsTrustStatus
slug: Web/API/MsGraphicsTrustStatus
tags:
  - msGraphicsTrustStatus
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

**`msGraphicsTrustStatus`** is a read-only property which
returns an object containing information on protected video playback.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
status = object.msGraphicsTrustStatus;
```

## Example

```js
    //Specifies the output device id that the audio will be sent to.
    msAudioDeviceType: string;
    readonly msGraphicsTrustStatus: MSGraphicsTrust;
```
