---
title: Firefox 137 for developers
slug: Mozilla/Firefox/Releases/137
page-type: firefox-release-notes
sidebar: firefox
---

This article provides information about the changes in Firefox 137 that affect developers.
Firefox 137 was released on [April 1, 2025](https://whattrainisitnow.com/release/?version=137).

## Changes for web developers

### HTML

No notable changes

### CSS

- The {{CSSXRef("hyphenate-limit-chars")}} CSS property provides you with fine-grained control over hyphenation in text. It is used to specify the minimum word length for hyphenation as well as the number of characters before and after the hyphen. ([Firefox bug 1947183](https://bugzil.la/1947183)).
- The {{cssxref("text-decoration-line")}} CSS property now accepts the values `spelling-error` and `grammar-error`. These values use the browser's styling for spelling and grammar errors and disregard the other properties in the {{cssxref("text-decoration")}} shorthand. ([Firefox bug 1950844](https://bugzil.la/1950844)).

### JavaScript

- The {{jsxref("Math.sumPrecise()")}} static method is now supported. This takes an [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (such as an {{jsxref("Array")}}) of numbers and returns their sum. It is more precise than summing the numbers in a loop because it avoids floating point precision loss in intermediate results. ([Firefox bug 1943120](https://bugzil.la/1943120)).
- The {{jsxref("Atomics.pause()")}} static method is now supported. This method provides a hint to the CPU that the current thread is in a spinlock while waiting on access to a shared resource. The system can then reduce the resources allocated to the core (such as power) or thread, without yielding the current thread. ([Firefox bug 1937805](https://bugzil.la/1937805)).

### APIs

- The {{domxref("SVGPathElement/getPathData", "getPathData()")}}, {{domxref("SVGPathElement/setPathData", "setPathData()")}}, and {{domxref("SVGPathElement/getPathSegmentAtLength", "getPathSegmentAtLength()")}} methods of the {{domxref("SVGPathElement")}} interface are now supported. These methods provide a convenient way to work with SVG path data instead of parsing raw string data. ([Firefox bug 1945312](https://bugzil.la/1945312)).

#### Media, WebRTC, and Web Audio

- [HEVC (H.265)](/en-US/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) is now hardware enabled on Android, and hardware and software enabled on Linux. This adds to existing hardware and software support on Windows and macOS. ([Firefox bug 1950032](https://bugzil.la/1950032)).

#### Removals

- The following non-standard events are now deprecated and proposed for removal: [`afterscriptexecute`](/en-US/docs/Web/API/Document/afterscriptexecute_event) and [`beforescriptexecute`](/en-US/docs/Web/API/Document/beforescriptexecute_event) in {{domxref("Document")}}, and [`afterscriptexecute`](/en-US/docs/Web/API/Element/afterscriptexecute_event), and [`beforescriptexecute`](/en-US/docs/Web/API/Element/beforescriptexecute_event) in {{domxref("Element")}}. A console warning is displayed when they are used. ([Firefox bug 1949373](https://bugzil.la/1949373)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Input sources of type `mouse` and `touch` now support fractional numbers for x and y positions for the `pointerMove` action ([Firefox bug 1946774](https://bugzil.la/1946774)).

#### WebDriver BiDi

- Implemented new `webExtension.install` ([Firefox bug 1934551](https://bugzil.la/1934551)) and `webExtension.uninstall` ([Firefox bug 1934553](https://bugzil.la/1934553)) commands, enabling clients to install and uninstall web extensions in the browser.
- Added support for `userContexts` argument to `sessions.subscribe` command, which allows clients subscribing to a list of user contexts (also known as Firefox containers)
  ([Firefox bug 1938604](https://bugzil.la/1938604)).
- `script.addPreloadScript` command is updated to throw an `invalid argument` error when both `contexts` and `userContexts` arguments are provided ([Firefox bug 1945554](https://bugzil.la/1945554)).
- `browsingContext.navigate` command will not return immediately anymore when `wait` argument equals `none` and beforeunload prompt opens. That's the first step of updating the logic behind `wait` argument equals `none` ([Firefox bug 1948700](https://bugzil.la/1948700)).

#### Marionette

- From now on, a `javascript error` from a syntax error raised by script evaluation will contain line and column number ([Firefox bug 1865146](https://bugzil.la/1865146)).
- Performing actions with async events enabled will not fail anymore with a `Cyclic object value` error message ([Firefox bug 1947112](https://bugzil.la/1947112)).
  Async events were enabled since Firefox 135. See more details in [the release notes](/en-US/docs/Mozilla/Firefox/Releases/135#webdriver_conformance_webdriver_bidi_marionette).

## Changes for add-on developers

- Adds {{WebExtAPIRef("commands.openShortcutSettings")}} that opens the Manage Extension Shortcuts page of Manage Your Extensions (`about:addons`) and, if the extension has shortcuts, scrolls to and highlights the extension's shortcut key options. ([Firefox bug 1538451](https://bugzil.la/1538451))
- The 10 MB quota for data stored by the {{WebExtAPIRef("storage.session")}} API is now enforced. ([Firefox bug 1915688](https://bugzil.la/1915688))

## Experimental web features

These features are newly shipped in Firefox 137 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Temporal API** (Nightly release): is now enabled in Firefox Nightly by default. The [Temporal object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal) aims to simplify working with dates and times in various scenarios, with built-in time zone and calendar representations. ([Firefox bug 1946823](https://bugzil.la/1946823)).

## Older versions

{{Firefox_for_developers}}
