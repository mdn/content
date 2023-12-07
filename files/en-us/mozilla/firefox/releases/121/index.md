---
title: Firefox 121 for developers
slug: Mozilla/Firefox/Releases/121
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 121 that affect developers. Firefox 121 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [December 19, 2023](https://whattrainisitnow.com/release/?version=121).

## Changes for web developers

### Developer Tools

### HTML

- [Lazy loading](/en-US/docs/Web/Performance/Lazy_loading) of `<iframes>` is now supported, allowing developers to hint that particular `<iframe>`s should only be loaded when (and if) they become visible. This can speed up initial load time by reducing the resources that need to be fetched on page load (some `<iframes>` may not need to be fetched at all).
  The hint can be provided via the [`loading`](/en-US/docs/Web/HTML/Element/iframe#loading) attribute on the [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe) element, or in JavaScript using {{domxref("HTMLIFrameElement.loading")}}.
  ([Firefox bug 1622090](https://bugzil.la/1622090)).

#### Removals

### CSS

- The {{cssxref(":has", ":has()")}} selector, commonly referred to as the _parent selector_, is now supported. It allows developers to apply styles to an element based on related elements, e.g. `li:has(ul)` will match a list which contains a sub-list, or `h1:has(+ p)` will match a heading with a paragraph directly after it.
- The [`text-indent`](/en-US/docs/Web/CSS/text-indent) CSS property now supports the [`each-line`](/en-US/docs/Web/CSS/text-indent#each-line) and [`hanging`](/en-US/docs/Web/CSS/text-indent#hanging) property values ([Firefox bug 784648](https://bugzil.la/784648)), allowing developers to more easily specify certain text indentation styles. Additionally, developers can now combine multiple `text-indent` property values for more creativity, e.g. `text-indent: 3em hanging each-line`.

#### Removals

### JavaScript

- {{jsxref("Date.parse()")}} now accepts several additional date formats:

  - Year > 9999 for `YYYY-MMM-DD` format (e.g. `19999-Jan-01`) ([Firefox bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (e.g. `Jan-01-1970`) ([Firefox bug 1863489](https://bugzil.la/1863489))
  - Milliseconds for non-ISO date formats (e.g. `Jan 1 1970 10:00:00.050`) ([Firefox bug 1863125](https://bugzil.la/1863125))
  - Day of week at the beginning of formats which were being rejected, such as:

    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    The day of week does not need to be correct, or a day of week at all; for example, `foo 1970-01-01` works ([Firefox bug 1617562](https://bugzil.la/1617562)).

- Other {{jsxref("Date.parse()")}} fixes:

  - `YYYY-M-DD` and `YYYY-MM-D` are no longer assumed GMT as an ISO date `YYYY-MM-DD` would be ([Firefox bug 1783731](https://bugzil.la/1783731)).
  - Milliseconds for all formats are truncated after 3 digits, rather than being rounded ([Firefox bug 746529](https://bugzil.la/746529)).

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The {{domxref("WebTransportSendStream.sendOrder", "sendOrder")}} property of the {{domxref("WebTransportSendStream")}} interface is now supported, allowing the relative priority of outgoing [WebTransport API](/en-US/docs/Web/API/WebTransport_API) _bidirectional_ streams to be read and changed after the stream is created. Note that this cannot be used to modify the priority of unidirectional streams, as Firefox implements them as {{domxref("WritableStream")}} instead of {{domxref("WebTransportSendStream")}}. (For more information see [Firefox bug 1853444](https://bugzil.la/1853444).)

#### DOM

#### Media, WebRTC, and Web Audio

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

- Fixed a bug that resulted in background pages not starting when a manifest.json `background` key contains `service_worker` and `scripts` declarations ([Firefox bug 1860304](https://bugzil.la/1860304)).

  > **Note:** Incidentally, a change in Chrome 121 sees the `scripts` property ignored when specified with the `service_worker` property. Previously, Chrome refused to load extensions containing both properties ([Chromium bug 1418934](https://crbug.com/1418934)).
  > For more information, see [Browser support of the `background` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).

## Older versions

{{Firefox_for_developers(120)}}
