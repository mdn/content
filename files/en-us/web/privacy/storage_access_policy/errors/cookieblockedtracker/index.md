---
title: "Blocked: Storage access requests from trackers"
slug: Web/Privacy/Storage_Access_Policy/Errors/CookieBlockedTracker
page-type: guide
---

{{QuicklinksWithSubPages("Web/Privacy/Storage_Access_Policy/Errors")}}

## Message

Firefox:

```plain
Request to access cookie or storage on “X” was blocked because it came from a tracker and content blocking is enabled.
```

## What went wrong?

A request to access cookies or storage was blocked because the browser identified it as coming from a tracker and content blocking is enabled.

The permission can be changed or removed by:

- Going to _Preferences > Privacy & Security > Enhanced Tracking Protection_ and either

  - adding an exception with the _Manage Exceptions_… button
  - choosing the _Custom_ Content Blocking and unchecking the _Tracker_ checkbox

If the blocked resource doesn't need authentication, you can fix the warning message by adding a `crossorigin="anonymous"` attribute to the relevant element.

## See also

- [Enhanced Tracking Protection in Firefox for desktop](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) on [support.mozilla.org](https://support.mozilla.org/)
- [The `crossorigin` attribute](/en-US/docs/Web/HTML/Attributes/crossorigin)
