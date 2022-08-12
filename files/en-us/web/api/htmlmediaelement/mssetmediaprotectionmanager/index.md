---
title: HTMLMediaElement.msSetMediaProtectionManager()
slug: Web/API/HTMLMediaElement/msSetMediaProtectionManager
page-type: web-api-instance-method
tags:
  - msSetMediaProtectionManager
  - Non-standard
  - Method
---
{{APIRef("HTML DOM")}}

{{Non-standard_header}}

The **`msSetMediaProtectionManager()`** method specifies the
media protection manager for a given media pipeline.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
msSetMediaProtectionManager();
msSetMediaProtectionManager(mediaProtectionManager);
```

### Parameters

- `mediaProtectionManager` {{optional_inline}}
  - : A `MediaProtectionManager`.
    (See [Windows.Media.Protection](https://docs.microsoft.com/en-us/uwp/api/windows.media.protection?view=winrt-22000)
    for more information to manage Digital Rights Management (DRM) media contents).
    It can be of any type.

### Return value

None ({{jsxref("undefined")}}).
