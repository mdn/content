---
title: Firefox 114 for developers
slug: Mozilla/Firefox/Releases/114
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 114 that affect developers. Firefox 114 was released on June 06, 2023.

## Changes for web developers

### Developer Tools

- Fixed an issue where the [Accessibility Inspector](/en-US/docs/Tools/Accessibility_inspector) did not correctly show ARIA roles on elements, which affected how [landmark roles](/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role) were displayed.
  Roles that cannot be mapped to ARIA use a Gecko internal role name ([Firefox bug 1572512](https://bugzil.la/1572512)).

### HTML

No notable changes.

### CSS

- The [`:lang()`](/en-US/docs/Web/CSS/:lang) pseudo-class now uses string-matching semantics (including `*` wildcards) for matching language codes rather than prefix-matching semantics.
  Additionally, comma-separated lists of languages are now supported for matching multiple languages ([Firefox bug 1121792](https://bugzil.la/1121792)).
- The [-webkit-text-security](/en-US/Web/CSS/-webkit-text-security) property that lets you replace characters with shapes is now supported. You can now control the rendering of text security using this property ([Firefox bug 1826629](https://bugzil.la/1826629)).
- The `infinity` and `NaN` constants are now supported inside the [`calc()`](/en-US/docs/Web/CSS/calc) function ([Firefox bug 1830759](https://bugzil.la/1830759)).

### JavaScript

- [Workers](/en-US/docs/Web/API/Web_Workers_API) now support loading [ECMAScript modules](/en-US/docs/Web/JavaScript/Guide/Modules).
  You can load modules into workers by specifying the `{type: "module"}` option in the [`Worker`](/en-US/docs/Web/API/Worker/Worker#type) and [`SharedWorker` constructors](/en-US/docs/Web/API/SharedWorker/SharedWorker#type).
  Worker scripts can also statically or dynamically import modules using [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import), respectively ([Firefox bug 1812591](https://bugzil.la/1812591)).
- [Worklets](/en-US/docs/Web/API/Worklet) can now use [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) to statically import [ECMAscript/JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) ([Firefox bug 1812591](https://bugzil.la/1812591)).

### SVG

- The [`crossorigin`](/en-US/docs/Web/SVG/Attribute/crossorigin) attribute is now supported in [`image`](/en-US/docs/Web/SVG/Element/image) and [`feImage`](/en-US/docs/Web/SVG/Element/feImage) elements ([Firefox bug 1240357](https://bugzil.la/1240357)).

### APIs

- [`Window.print()`](/en-US/docs/Web/API/Window/print) now opens a print dialog on Firefox for Android, allowing the current document to be printed ([Firefox bug 1809922](https://bugzil.la/1809922)).
- The [WebTransport API](/en-US/docs/Web/API/WebTransport_API) is now supported, which includes the following interfaces: [`WebTransport`](/en-US/docs/Web/API/WebTransport), [`WebTransportBidirectionalStream`](/en-US/docs/Web/API/WebTransportBidirectionalStream), [`WebTransportDatagramDuplexStream`](/en-US/docs/Web/API/WebTransportDatagramDuplexStream), [`WebTransportReceiveStream`](/en-US/docs/Web/API/WebTransportReceiveStream), [`WebTransportDatagramDuplexStream`](/en-US/docs/Web/API/WebTransportDatagramDuplexStream) and [`WebTransportError`](/en-US/docs/Web/API/WebTransportError).
  For more information see [Firefox bug 1692754](https://bugzil.la/1692754), [Firefox bug 1818754](https://bugzil.la/1818754), and [Firefox bug 1791835](https://bugzil.la/1791835).

- [`CSSImportRule.supportsText`](/en-US/docs/Web/API/CSSImportRule/supportsText) can now be used for getting any `supports()` conditions that were specified when using the {{cssxref("@import")}} [at-rule](/en-US/docs/Web/CSS/At-rule) ([Firefox bug 1829590](https://bugzil.la/1829590)).

#### DOM

No notable changes.

#### Media, WebRTC, and Web Audio

No notable changes.

#### Removals

- The deprecated and non-standard `mozImageSmoothingEnabled` property is permanently removed.
  See the [`imageSmoothingEnabled`](/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) property for smoothing in scaled images ([Firefox bug 1228850](https://bugzil.la/1228850)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added support for the commands `input.performActions` and `input.releaseActions`, which can be used to emulate user input for interacting with elements on web pages. Similar to Marionette all the available input sources of the WebDriver specification are supported, which are `key`, `pointer`, and `wheel` ([Firefox bug 1832380](https://bugzil.la/1832380)).
- Added support for custom browser to client messages, which allows to send a `script.message` event from within a script formerly installed via `script.addPreloadScript` ([Firefox bug 1824187](https://bugzil.la/1824187)).
- Added support for the `serializationOptions` parameter for `script.evaluate` and `script.callFunction` to customize the `RemoteValue` serialization ([Firefox bug 1824953](https://bugzil.la/1824953)).
- Fixed an issue where both the `script.evaluate` and `script.callFunction` commands did not include the stack trace and failed to properly build the exception details for a rejected Promise ([Firefox bug 1829630](https://bugzil.la/1829630)).
- Fixed an issue where the `browsingContext.domContentLoaded` and `browsingContext.load` events did not report the correct `url`, when the page defined a `<base>` meta tag ([Firefox bug 1825634](https://bugzil.la/1825634)).

#### Marionette

- Fixed an issue where the command `WebDriver:GetComputedRole` didn't properly return the WAI-ARIA roles ([Firefox bug 1822112](https://bugzil.la/1822112)).
- Fixed an issue where modifier keys were not reset when they were used again within the same `WebDriver:ElementSendKeys` command ([Firefox bug 1776190](https://bugzil.la/1776190)).

## Changes for add-on developers

### Removals

- Support for [`browser_style`](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in the manifest keys [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), and [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) is deprecated for Manifest V3 extensions ([Firefox bug 1827910](https://bugzil.la/1827910)). See [Manifest v3 migration](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) for information about transitioning from `browser_style` in Manifest V3 extensions.

## Older versions

{{Firefox_for_developers(113)}}
