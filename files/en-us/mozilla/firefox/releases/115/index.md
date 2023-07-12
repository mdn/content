---
title: Firefox 115 for developers
slug: Mozilla/Firefox/Releases/115
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 115 that affect developers. Firefox 115 was released on July 04, 2023.

## Changes for web developers

### HTML

- The [`modulepreload`](/en-US/docs/Web/HTML/Attributes/rel/modulepreload) keyword for the [`rel`](/en-US/docs/Web/HTML/Element/link#rel) attribute of the {{HTMLElement("link")}} element is now supported.
  This allows early (and asynchronous) fetching of [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules) and their dependencies in parallel, which are then stored in the document's module map ([Firefox bug 1425310](https://bugzil.la/1425310)).

### CSS

- The CSS {{cssxref("animation-composition")}} property is now supported by default. You can use this property to specify the composite operation to use when multiple animations affect the same property simultaneously. ([Firefox bug 1823862](https://bugzil.la/1823862)).
- The `supports-conditions` in the CSS {{cssxref("@import")}} [at-rule](/en-US/docs/Web/CSS/At-rule) `supports()` function is now supported by default. This feature allows stylesheets to be imported only if the specified feature is supported in the user's browser. ([Firefox bug 1830779](https://bugzil.la/1830779)).

### JavaScript

- The {{jsxref("Array.fromAsync()")}} static method is now supported.
  The method asynchronously returns a new, shallow-copied `Array` instance from an [async iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), or [array-like](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) object ([Firefox bug 1795816](https://bugzil.la/1795816)).
- The `Array` and `TypedArray` methods [`Array.toReversed()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed), [`Array.toSorted()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted), [`Array.toSpliced()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [`Array.with()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with), [`TypedArrays.toReversed()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed), [`TypedArrays.toSorted()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted), and [`TypedArrays.with()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with) are now supported.
  These methods return a new array with elements that have been shallow copied (similarly named methods without the `to` prefix modify the array elements in place).
  ([Firefox bug 1811057](https://bugzil.la/1811057)).

### SVG

No notable changes.

### HTTP

- The [`Sec-Purpose`](/en-US/docs/Web/HTTP/Headers/Sec-Purpose) HTTP {{Glossary("Fetch metadata request header", "fetch metadata request header")}} is now included in requests to {{Glossary("Prefetch")}} resources.
  This allows servers to provide any special handling that might be needed, such as adjusting the caching expiry for the request ([Firefox bug 1836328](https://bugzil.la/1836328)).

### APIs

- The [`Response.json()`](/en-US/docs/Web/API/Response/json_static) static method is now supported, making it easier to construct {{domxref("Response")}} objects for returning JSON data.
  The method will be useful for [service workers](/en-US/docs/Web/API/Service_Worker_API) and any other code that needs to respond to browser requests with JSON data ([Firefox bug 1758943](https://bugzil.la/1758943)).
- The [`URL.canParse()`](/en-US/docs/Web/API/URL/canParse_static) static method can now be used to parse and validate an absolute URL, or a relative URL and base URL.
  This provides a fast and easy way to check if URLs are valid, instead of constructing them within a `try...catch` block and handling exceptions.
  ([Firefox bug 1823354](https://bugzil.la/1823354)).
- The [`URLSearchParams.has()`](/en-US/docs/Web/API/URLSearchParams/has) and [`URLSearchParams.delete()`](/en-US/docs/Web/API/URLSearchParams/delete) methods now support the optional `value` argument.
  This allows matching a search parameter on both the `name` and `value`, making it possible to work with query strings that contain multiple search parameters that have the same name.
  ([Firefox bug 1831587](https://bugzil.la/1831587)).

#### Removals

- The deprecated `mozPreservesPitch` alias of [HTMLMediaElement.preservesPitch](/en-US/docs/Web/API/HTMLMediaElement/preservesPitch) has been disabled by default, and may be fully removed in a future release ([Firefox bug 1831205](https://bugzil.la/1831205)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- The payload now always includes stack traces for responses and events without capping it after the first 50 "throw" usages in a realm ([Firefox bug 1791715](https://bugzil.la/1791715)).
- When using `input.performActions`, any ongoing wheel transaction is now reset at the end of the command to not retain state and to not leak into following actions within the same tab ([Firefox bug 1821733](https://bugzil.la/1821733)).
- When using a `pointerMove` action with `input.performActions`, an invalid element origin now correctly raises a "no such error" failure ([Firefox bug 1832028](https://bugzil.la/1832028)).
- A race condition for the initial page load has been fixed that could appear when directly interacting with a newly opened tab or window ([Firefox bug 1832891](https://bugzil.la/1832891)).

#### Marionette

- Both the commands `WebDriver:GetComputedLabel` and `WebDriver:GetComputedRole` now correctly wait for the requested accessibility object for an element to exist if it just got inserted into the DOM ([Firefox bug 1828816](https://bugzil.la/1828816)).
- All instances of `window.setTimeout()` in our privileged code running in content processes now use a variant timer that is not affected by the throttling of the timers in case the given tab for automation is in the background.

## Changes for add-on developers

- To support its deprecation from Manifest V3 extensions, manifest key property [`browser_style`](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) defaults to `false` in [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) and [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) for Manifest V3 extensions ([Firefox bug 1830710](https://bugzil.la/1830710)). See [Manifest v3 migration](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) for information about transitioning from `browser_style` in Manifest V3 extensions.
- The {{WebExtAPIRef("commands.onChanged")}} event, which enables web extensions to listen for changes to command shortcuts, has been added ([Firefox bug 1801531](https://bugzil.la/1801531)).
- Support has been added for {{WebExtAPIRef("storage.session")}}, which provides the ability to store data in memory for the duration of the browser session ([Firefox bug 18237131](https://bugzil.la/1823713)).

## Older versions

{{Firefox_for_developers(114)}}
