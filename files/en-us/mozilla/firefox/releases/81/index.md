---
title: Firefox 81 for developers
slug: Mozilla/Firefox/Releases/81
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 81 that will affect developers. Firefox 81 was released on September 22, 2020.

## Changes for web developers

### Developer Tools

- The [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) now uses the TypeScript icon for `.ts` and `.tsx` files ([Firefox bug 1642769](https://bugzil.la/1642769)). Previously a generic file icon was used.
- We've added support for line wrapping in the [Debugger source pane](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-pane) ([Firefox bug 1590885](https://bugzil.la/1590885)).
- We've removed unnecessary [color vision simulations](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html) (protanomaly, deuteranomaly, and tritanomaly) from the [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html), and added a simulation for achromatopsia (no color) ([Firefox bug 1655053](https://bugzil.la/1655053)).
- Autocompletion is now supported when adding a [class to an element](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-and-changing-classes-on-an-element). Offered classes are based on existing classes in the document ([Firefox bug 1492797](https://bugzil.la/1492797)).

### HTML

- Automatic downloads are now blocked in a sandboxed [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe) element ([Firefox bug 1558394](https://bugzil.la/1558394)).

#### Removals

- Support for the non-standard `mozallowfullscreen` attribute has been removed from [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe). Consider using `allow="fullscreen"` instead ([Firefox bug 1657599](https://bugzil.la/1657599)).

### CSS

- We now support the value of `clip` for the {{CSSxRef("overflow")}} property, via renaming `overflow: -moz-hidden-unscrollable` ([Firefox bug 1531609](https://bugzil.la/1531609)).
- The {{CSSxRef("text-combine-upright")}} property has been made non-animatable to comply with the spec ([Firefox bug 1654195](https://bugzil.la/1654195)).

#### Removals

- The non-standard `::-moz-focus-outer` [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) has been removed ([Firefox bug 1655859](https://bugzil.la/1655859)).

### JavaScript

_No changes._

### HTTP

- Firefox now accepts non-standard [`Content-Disposition`](/en-US/docs/Web/HTTP/Headers/Content-Disposition) headers with an unquoted filename containing spaces ([Firefox bug 1440677](https://bugzil.la/1440677)).
- Firefox now supports the HTTP [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy) header's [`web-share`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/web-share) directive, which can be used to restrict access to the [Web Share API](/en-US/docs/Web/API/Navigator/share) to trusted origins. Note that Firefox does not support the Web Share API itself, at time of writing ([Firefox bug 1653199](https://bugzil.la/1653199)).

### APIs

#### Gamepad

- The threshold for gamepad joystick activation has been increased. This reduces the chance of inadvertent gamepad activation, both from controllers that send small axis values when they are idle, and very small bumps. ([Firefox bug 1539178](https://bugzil.la/1539178))

#### Workers/Service workers

- Strict MIME type checks are now enforced on worker and shared worker scripts, i.e. scripts targeted by the {{domxref("Worker.Worker()", "Worker()")}} and {{domxref("SharedWorker.SharedWorker()", "SharedWorker()")}} constructors must now be served with `text/javascript` ([Firefox bug 1569123](https://bugzil.la/1569123)).

### WebDriver conformance (Marionette)

- The `setWindowRect` capability is now `true` by default for all desktop applications (including Thunderbird), and `false` on Android for GeckoView ([Firefox bug 1650872](https://bugzil.la/1650872)).
- We've added Fission support for the following commands: `WebDriver:SwitchToFrame`, `WebDriver:SwitchToParentFrame`, `WebDriver:GetCurrentURL`. All Fission-compatible commands are only available when `marionette.actors.enabled` is set to `true`.
- Fixed the broken tracking of browsing contexts after opening a new window ([Firefox bug 1661495](https://bugzil.la/1661495)).
- In case of failures `WebDriver:SwitchToWindow` now always returns a unified `NoSuchWindowError` ([Firefox bug 1663429](https://bugzil.la/1663429)).

#### Removals

- `WebDriver:GetActiveFrame` has been removed, because it's not part of the WebDriver specification and is no longer used ([Firefox bug 1659502](https://bugzil.la/1659502)).

## Changes for add-on developers

- [`tabs.saveAsPDF()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) is now supported on macOS ([Firefox bug 1653354](https://bugzil.la/1653354)).
- The behavior of [`webNavigation.getFrame()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame) and [`webNavigation.getAllFrames()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames) has changed. Moving forward, when a tab is discarded the promise will fulfill with a `null` value ([Firefox bug 1654842](https://bugzil.la/1654842)).

## Older versions

{{Firefox_for_developers}}
