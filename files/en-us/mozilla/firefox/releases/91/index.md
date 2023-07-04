---
title: Firefox 91 for developers
slug: Mozilla/Firefox/Releases/91
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 91 that will affect developers. Firefox 91 was released on August 10, 2021.

> **Note:** See also [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) on Mozilla Hacks.

## Changes for web developers

### HTML

No changes

### CSS

- A fix to how the {{cssxref("@counter-style/pad")}} descriptor handles the negative sign ([Firefox bug 1714445](https://bugzil.la/1714445)).
- The `-moz-tab-size` property has been unprefixed to the standard {{cssxref("tab-size")}}, and the prefixed version maintained as an alias ([Firefox bug 737785](https://bugzil.la/737785)).

#### Removals

- The non-standard {{cssxref("-moz-outline-radius")}} property has been removed ([Firefox bug 1715984](https://bugzil.la/1715984)). The property has not been usable by web developers since Firefox 88, this completes the removal.

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} and {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} are now supported in release builds. The `formatRange()` method returns a localized and formatted string for the range between two {{jsxref("Date")}} objects (e.g. "1/05/21 – 1/10/21"). The `formatRangeToParts()` method returns an array containing the locale-specific _parts_ of a formatted date range ([Firefox bug 1653024](https://bugzil.la/1653024)).
- The {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat() constructor")}} allows four new `timeZoneName` options for formatting how the timezone is displayed. These include the localized GMT formats `shortOffset` and `longOffset`, and the generic non-location formats `shortGeneric` and `longGeneric` ([Firefox bug 1653024](https://bugzil.la/1653024)).
- The {{jsxref("Global_Objects/Error/Error", "Error() constructor")}} can now take the error `cause` as value in the `option` parameter.
  This allows code to catch errors and throw new/modified versions that retain the original error and stack trace ([Firefox bug 1679653](https://bugzil.la/1679653)).

### HTTP

- The [Gamepad API](/en-US/docs/Web/API/Gamepad_API) now requires a [secure context](/en-US/docs/Web/Security/Secure_Contexts) ([Firefox bug 1704005](https://bugzil.la/1704005)).

### APIs

#### DOM

- The [Visual Viewport API](/en-US/docs/Web/API/Visual_Viewport_API) is now enabled by default on Firefox desktop releases (it has been enabled on Firefox for Android since version 68).
  The API provides access to information describing the position of the {{Glossary("visual viewport")}} relative to the document, as well as to the window's content area.
  It also provides events that allow changes to the viewport to be monitored. ([Firefox bug 1551302](https://bugzil.la/1551302)).
- The [Gamepad API](/en-US/docs/Web/API/Gamepad_API) is now protected by {{httpheader('Feature-Policy/gamepad','Feature-Policy: gamepad')}}.
  If disallowed by the [Permission Policy](/en-US/docs/Web/HTTP/Permissions_Policy), calls to {{domxref('Navigator.getGamepads()')}} will throw a `SecurityError` {{domxref('DOMException')}},
  and the {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} and {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} events will not fire.
  The default `allowlist` is `*`; this default will be updated to `self` in a future release, in order to match the specification. ([Firefox bug 1704005](https://bugzil.la/1704005)).
- `Window.clientInformation` has been added as an alias for {{domxref("Window.navigator")}}, in order to match recent specification updates and improve compatibility with other major browsers ([Firefox bug 1717072](https://bugzil.la/1717072)).
- Changing the playback speed of a media element ([`<video>`](/en-US/docs/Web/HTML/Element/video) or [`<audio>`](/en-US/docs/Web/HTML/Element/audio)) using the [`playbackRate`](/en-US/docs/Web/API/HTMLMediaElement/playbackRate) attribute now works when the media element is captured to a [`MediaStream`](/en-US/docs/Web/API/MediaStream) or via [`AudioContext.createMediaElementSource`](/en-US/docs/Web/API/AudioContext/createMediaElementSource) ([Firefox bug 1517199](https://bugzil.la/1517199)).

### WebDriver conformance (Marionette)

- Fixed a bug, which caused the commands `WebDriver:AcceptAlert` and `WebDriver:DismissAlert` to hang for user prompts as opened in a popup window ([Firefox bug 1721982](https://bugzil.la/1721982)).
- Fixed an inappropriate handling of the `webSocketUrl` capability, which would return `true` if `webSocketUrl` was not supported ([Firefox bug 1713775](https://bugzil.la/1713775)).

## Older versions

{{Firefox_for_developers(90)}}
