---
title: 'Blocked: All storage access requests'
slug: Web/Privacy/Storage_access_policy/Errors/CookieBlockedAll
tags:
  - Cookies
  - Errors
  - Storage
  - storage access policy
  - tracking
---
## Message

Firefox:

```
CookieBlockedAll=Request to access cookies or storage on "X" was blocked because we are blocking all storage access requests.
```

## What went wrong?

A request to access cookies or storage was blocked because the browser is blocking all storage access.

The permission can be changed or removed by:

- Going to _Preferences > Content Blocking_
- In the _Custom_ Content Blocking section, selecting a value other than _All Cookies_ for the _Cookies_ item

If the resource that is being blocked doesn't need authentication, you can fix the warning message by adding a `crossorigin="anonymous"` attribute to your element.

## See also

- [Content blocking](https://support.mozilla.org/en-US/kb/content-blocking) on [support.mozilla.org](https://support.mozilla.org)
- [The `crossorigin` attribute](/en-US/docs/Web/HTML/Attributes/crossorigin)
