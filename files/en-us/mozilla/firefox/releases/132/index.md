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

- HTTP/2 Server Push is deactivated by default with the preference `network.http.http2.allow-push` now set to `false`.
  This feature is no longer supported by any other major browser, and the implementation may be completely removed in a future release. ([Firefox bug 1915848](https://bugzil.la/1915848)).

### Security

#### Removals

### APIs

- The {{domxref('WebGLRenderingContext.drawingBufferColorSpace', 'drawingBufferColorSpace')}} and {{domxref('WebGLRenderingContext.unpackColorSpace','unpackColorSpace')}} properties of the {{domxref('WebGLRenderingContext')}} and {{domxref('WebGL2RenderingContext')}} interfaces are now supported. These specify the color space of the WebGL drawing buffer, and the color space to convert to when importing textures, respectively. ([Firefox bug 1885491](https://bugzil.la/1885491), [Firefox bug 1885446](https://bugzil.la/1885446)).
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

- **Cookie Store API:** `dom.cookieStore.enabled`.

  The [Cookie Store API](/en-US/docs/Web/API/Cookie_Store_API) is a modern, {{jsxref("Promise")}}-based method of managing cookies that does not block the event loop and does not rely on {{domxref("Document")}} (it can therefore be made available to [service workers](/en-US/docs/Web/API/Service_Worker_API)). As of Firefox 132, a subset of the Cookie Store API has been implemented. ([Firefox bug 1800882](https://bugzil.la/1800882)). This includes:

  - The [`CookieStore`](/en-US/docs/Web/API/CookieStore) interface, but `partitioned` is not included in return values.
  - The [`CookieChangeEvent`](/en-US/docs/Web/API/CookieChangeEvent) interface, excluding `partitioned` properties.
  - The [`Window.cookieStore`](/en-US/docs/Web/API/Window/cookieStore) property.
  - The [`ServiceWorkerGlobalScope.cookieStore`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) property.

- **The `fetch()` `keepalive` option:** `dom.fetchKeepalive.enabled`.

  The global {{domxref('Window.fetch','fetch()')}} method has a [`keepalive`](/en-US/docs/Web/API/RequestInit#keepalive) initialization option. When `keepalive` is set to `true`, the browser will not abort the associated request if the page that initiated it is unloaded before the request is complete.

  This enables a fetch request to function as an alternative to {{domxref("Navigator.sendBeacon()")}} when sending analytics at the end of a session, which has some advantages (you can use HTTP methods other than [`POST`](/en-US/docs/Web/HTTP/Methods/POST), customize request properties, and access the server response via the fetch {{jsxref("Promise")}} fulfillment). It is also available in [service workers](/en-US/docs/Web/API/Service_Worker_API). ([Firefox bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.
  The {{domxref("CloseWatcher")}} interface enables developers to implement components that can be closed using device-native mechanisms, in the same way as built-in components. For example, in Windows you can close a modal dialog using the <kbd>Esc</kbd> key: this interface allows you to similarly close a custom sidebar. ([Firefox bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} is a convenience method that takes a callback of any kind (returns or throws, synchronously or asynchronously) and wraps its result in a {{jsxref("Promise")}} so that promise semantics (e.g. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) can be used to handle it ([Firefox bug 1905364](https://bugzil.la/1905364)).

## Older versions

{{Firefox_for_developers}}
