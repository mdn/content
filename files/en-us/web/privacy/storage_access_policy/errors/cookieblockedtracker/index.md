---
title: "Blocked: Storage access requests from trackers"
slug: Web/Privacy/Storage_access_policy/Errors/CookieBlockedTracker
---

{{QuicklinksWithSubPages("Web/Privacy/Storage_access_policy/Errors")}}

## Message

Firefox:

```
CookieBlockedTracker=Request to access cookies or storage on "X" was blocked because it came from a tracker and content blocking is enabled.
```

## What went wrong?

A request to access cookies or storage was blocked because the browser identified it as coming from a tracker and content blocking is enabled.

The permission can be changed or removed by:

- Going to _Preferences > Content Blocking_ and either

  - adding an exception with the _Manage Exceptions_… button
  - choosing the _Custom_ Content Blocking and unchecking the _Tracker_ checkbox

If the blocked resource doesn't need authentication, you can fix the warning message by adding a `crossorigin="anonymous"` attribute to the relevant element.

## See also

- [Content blocking](https://support.mozilla.org/en-US/kb/content-blocking) on [support.mozilla.org](https://support.mozilla.org)
- [The `crossorigin` attribute](/en-US/docs/Web/HTML/Attributes/crossorigin)
