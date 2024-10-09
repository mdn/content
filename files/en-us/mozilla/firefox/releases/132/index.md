---
title: Firefox 132 for developers
slug: Mozilla/Firefox/Releases/132
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 132 that affect developers. Firefox 132 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [October 29, 2024](https://whattrainisitnow.com/release/?version=132).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- The [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) is now supported, which aims to provide features to mitigate issues around loss of precision when converting values such as large floats and date values between JavaScript values and JSON text ([Firefox bug 1913085](https://bugzil.la/1913085)). Specifically, the following features are now available:
  - The `JSON.parse()` [`reviver` parameter `context` argument](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Provides access to the original JSON source text that was parsed.
  - [`JSON.isRawJSON()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Tests whether a value is an object returned by `JSON.rawJSON()`.
  - [`JSON.rawJSON()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Creates a "raw JSON" object containing a piece of JSON text, which can then be included in an object to preserve the specified value when that object is stringified.

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The {{domxref("Notification.silent")}} property is now supported, which controls whether system notifications should be silent. When `silent: true` is specified in the {{domxref("Notification.Notification", "Notification()")}} constructor, the resulting system notification is issued without accompanying sounds or vibrations, regardless of device settings ([Firefox bug 1809028](https://bugzil.la/1809028)).

#### DOM

#### Media, WebRTC, and Web Audio

- The {{domxref("MediaStreamTrack.getCapabilities()")}} method is now supported. This returns an object detailing the accepted values or value range for each constrainable property of the associated {{domxref("MediaStreamTrack")}} ([Firefox bug 1179084](https://bugzil.la/1179084)).

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 132 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} is a convenience method that takes a callback of any kind (returns or throws, synchronously or asynchronously) and wraps its result in a {{jsxref("Promise")}} so that promise semantics (e.g. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) can be used to handle it ([Firefox bug 1905364](https://bugzil.la/1905364)).

## Older versions

{{Firefox_for_developers}}
