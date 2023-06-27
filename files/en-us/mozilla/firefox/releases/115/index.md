---
title: Firefox 115 for developers
slug: Mozilla/Firefox/Releases/115
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 115 that affect developers. Firefox 115 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [July 04, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- The CSS {{cssxref("animation-composition")}} property is now supported by default. You can use this property to specify the composite operation to use when multiple animations affect the same property simultaneously. ([Firefox bug 1823862](https://bugzil.la/1823862)).

#### Removals

### JavaScript

- The {{jsxref("Array.fromAsync()")}} static method is now supported.
  The method asynchronously returns a new, shallow-copied `Array` instance from an [async iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), or [array-like](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) object ([Firefox bug 1795816](https://bugzil.la/1795816)).
- The `Array` and `TypedArray` methods [`Array.toReversed()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted), and [`TypedArrays.with()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) are now supported.
  These methods return a new array with elements that have been shallow copied (similarly named methods without the `to` prefix modify the array elements in place).
  ([Firefox bug 1811057](https://bugzil.la/1811057)).

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The [`Response: json()` static method](/en-US/docs/Web/API/Response/json_static) is now supported, making it easier to construct {{domxref("Response")}} objects for returning JSON data.
  The method will be useful for [service workers](/en-US/docs/Web/API/Service_Worker_API) and any other code that needs to respond to browser requests with JSON data ([Firefox bug 1758943](https://bugzil.la/1758943)).
- The [`URL.canParse()`](/en-US/docs/Web/API/URL/canParse_static) static method can now be used to parse and validate an absolute URL, or a relative URL and base URL.
  This provides a fast and easy way to check if URLs are valid, instead of constructing them within a `try...catch` block and handling exceptions.
  ([Firefox bug 1823354](https://bugzil.la/1823354)).
- The [`URLSearchParams.has()`](/en-US/docs/Web/API/URLSearchParams/has) and [`URLSearchParams.delete()`](/en-US/docs/Web/API/URLSearchParams/delete) methods now support the optional `value` argument.
  This allows matching a search parameter on both the `name` and `value`, making it possible to work with query strings that contain multiple search parameters that have the same name.
  ([Firefox bug 1831587](https://bugzil.la/1831587)).

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

- The deprecated `mozPreservesPitch` alias of [HTMLMediaElement.preservesPitch](/en-US/docs/Web/API/HTMLMediaElement/preservesPitch) has been disabled by default, and may be fully removed in a future release ([Firefox bug 1831205](https://bugzil.la/1831205)).

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- To support its deprecation from Manifest V3 extensions, manifest key property [`browser_style`](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) defaults to `false` in [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) and [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) for Manifest V3 extensions ([Firefox bug 1830710](https://bugzil.la/1830710)). See [Manifest v3 migration](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) for information about transitioning from `browser_style` in Manifest V3 extensions.
- The {{WebExtAPIRef("commands.onChanged")}} event, which enables web extensions to listen for changes to command shortcuts, has been added ([Firefox bug 1801531](https://bugzil.la/1801531)).
- Support has been added for {{WebExtAPIRef("storage.session")}}, which provides the ability to store data in memory for the duration of the browser session ([Firefox bug 18237131](https://bugzil.la/1823713)).

### Removals

### Other

## Older versions

{{Firefox_for_developers(114)}}
