---
title: msSetMediaProtectionManager
slug: Web/API/MsSetMediaProtectionManager
tags:
  - msSetMediaProtectionManager
---
{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

The **`msSetMediaProtectionManager`** method specifies the
media protection manager for a given media pipeline.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
HTMLMediaElement.msSetMediaProtectionManager(mediaProtectionManager);
```

### Parameters

The [Windows.Media.Protection](https://docs.microsoft.com/en-us/uwp/api/windows.media.protection)
namespace provides classes to manage Digital Rights Management (DRM) media contents. The
`MediaProtectionManager` class can be passed as an input to a media playback
API or the `mediaProtectionManager` property inside the tag's video or audio.

The optional parameter of the `msSetMediaProtectionManager` property is
`mediaProtectionManager` and can be any type.

### Return value

This method does not return a value.
