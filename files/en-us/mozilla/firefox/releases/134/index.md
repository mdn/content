---
title: Firefox 134 for developers
slug: Mozilla/Firefox/Releases/134
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 134 that affect developers. Firefox 134 was released on [January 7, 2025](https://whattrainisitnow.com/release/?version=134).

## Changes for web developers

### HTML

No notable changes

### CSS

- The {{CSSXRef("align-self")}} and {{CSSXRef("justify-self")}} CSS properties and {{CSSXRef("place-self")}} CSS shorthand property are now supported for [absolutely positioned](/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning#absolute_positioning) elements. ([Firefox bug 1920160](https://bugzil.la/1920160)).

### JavaScript

- Support for the {{jsxref("RegExp.escape()")}} static method that can be used to escape any potential regex syntax characters in a string, returning a new string that can be safely used as a [literal](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) pattern for the {{jsxref("RegExp/RegExp", "RegExp()")}} constructor. ([Firefox bug 1918235](https://bugzil.la/1918235)).
- The {{jsxref("Promise.try()")}} convenience method is now supported.
  The method takes a callback of any kind (a function that returns or throws, synchronously or asynchronously) and wraps its result in a {{jsxref("Promise")}}.
  This allows you to use promise semantics ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) to handle the result from any kind of method. ([Firefox bug 1917879](https://bugzil.la/1917879) and [Firefox bug 1905364](https://bugzil.la/1905364)).

### APIs

- The [`PushManager.supportedContentEncodings`](/en-US/docs/Web/API/PushManager/supportedContentEncodings_static) static method is now supported for getting the allowed algorithms for encrypting the payload of a [push message](/en-US/docs/Web/API/Push_API). ([Firefox bug 1497430](https://bugzil.la/1497430)).
- {{domxref("AudioParam.value")}} now allows the value to be set even during the time that an automated event is scheduled: previously the operation would silently be ignored at those times. ([Firefox bug 1308435](https://bugzil.la/1308435)).
- The {{domxref("ReadableStreamBYOBReader.read()")}} method has a new argument [`options.min`](/en-US/docs/Web/API/ReadableStreamBYOBReader/read#min) that can be used to specify the minimum number of elements to be returned on each call. This might, for example, be used to avoid unnecessary iteration when working with data structures that have a known data size. ([Firefox bug 1864406](https://bugzil.la/1864406)).

#### DOM

#### Media, WebRTC, and Web Audio

- WebRTC simulcast of screen-shared video with the [VP8 codec](/en-US/docs/Web/Media/Guides/Formats/Video_codecs#vp8) is now supported (simulcast from other video sources has been enabled for a long time). More precisely, {{domxref("MediaStreamTrack")}} objects for screen and window capture (for example, from {{domxref("MediaDevices.getDisplayMedia()")}}), can now be encoded as multiple simulcast layers when using VP8. ([Firefox bug 1692873](https://bugzil.la/1692873)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implemented the `browser.getClientWindows` command, which allows to retrieve information about the currently opened browser windows ([Firefox bug 1855025](https://bugzilla.mozilla.org/show_bug.cgi?id=1855025))
- Added support for the `initiatorType` and `destination` fields to all network events ([Firefox bug 1904892](https://bugzilla.mozilla.org/show_bug.cgi?id=1904892) and [Firefox bug 1933331](https://bugzilla.mozilla.org/show_bug.cgi?id=1933331)). They allow to understand why and how the request was created.
- The `browsingContext.navigationStarted` event is no longer emitted when the initial about:blank page is loaded for a new top-level browsing context ([Firefox bug 1922014](https://bugzilla.mozilla.org/show_bug.cgi?id=1922014))
- We fixed a bug where the `requestTime` of network events would sometimes be set to 0 ([Firefox bug 1930849](https://bugzilla.mozilla.org/show_bug.cgi?id=1930849))
- The `browsingContext.traverseHistory` command can now only be used with top-level browsing contexts ([Firefox bug 1924859](https://bugzilla.mozilla.org/show_bug.cgi?id=1924859))
- Improved the reliability of commands sent during a navigation, for instance when a browsing context is being replaced ([Firefox bug 1927073](https://bugzilla.mozilla.org/show_bug.cgi?id=1927073)).

#### Marionette

- The `Addon:Install` and `Addon:Uninstall` commands are now available for GeckoView (Firefox for Android) ([Firefox bug 1806135](https://bugzilla.mozilla.org/show_bug.cgi?id=1806135)).
- The `Addon:Install` command can now be used to install extensions enabled in Private Browsing mode ([Firefox bug 1810718](https://bugzilla.mozilla.org/show_bug.cgi?id=1810718))

## Experimental web features

These features are newly shipped in Firefox 134 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`Intl.DurationFormat`** (Nightly release): {{jsxref("Intl.DurationFormat")}} enables locale-sensitive formatting of durations. ([Firefox bug 1648139](https://bugzil.la/1648139)).
- **`autocorrect`**: <code>dom.forms.autocorrect</code>.
  The HTML [`autocorrect`](/en-US/docs/Web/HTML/Global_attributes/autocorrect) attribute and {{domxref("HTMLElement.autocorrect")}} property allow autocorrection in editable text elements, including: most kinds of text {{htmlelement("input")}} elements, {{htmlelement("textarea")}} elements, and elements that have the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set ([Firefox bug 1725806](https://bugzil.la/1725806)).

## Older versions

{{Firefox_for_developers}}
