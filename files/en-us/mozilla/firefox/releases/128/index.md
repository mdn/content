---
title: Firefox 128 for developers
slug: Mozilla/Firefox/Releases/128
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 128 that affect developers. Firefox 128 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [July 9, 2024](https://whattrainisitnow.com/release/?version=128).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- [Relative color syntax](/en-US/docs/Web/CSS/CSS_colors/Relative_colors) is now enabled by default. Relative color syntax allows you to create a color value relative to an origin color, and can allow you to change a color in a different [color space](/en-US/docs/Glossary/Color_space) using [color functions](/en-US/docs/Web/CSS/CSS_colors#functions) ([Firefox bug 1900251](https://bugzil.la/1900251)).
- The [`content`](/en-US/docs/Web/CSS/content) property now supports [alternative text](/en-US/docs/Web/CSS/content#alternative_text) for content that includes an image. The alternative text is then exposed to the browsers accessibility tree. (See [Firefox bug 1281158](https://bugzil.la/1281158) and [Firefox bug 1896047](https://bugzil.la/1896047)).

#### Removals

- The masonry layout properties `align-tracks` and `justify-tracks` have been removed. These properties were only implemented in Firefox and were recently [dropped from the spec](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizeable {{jsxref("ArrayBuffer")}} and growable {{jsxref("SharedArrayBuffer")}} are now supported, allowing the size of buffers to be changed without having to allocate a new buffer and copy data into it ([Firefox bug 1884150](https://bugzil.la/1884150)).
  The relevant methods and properties are:

  - Grow {{jsxref("SharedArrayBuffer")}} using the {{jsxref("SharedArrayBuffer.prototype.grow()")}} method.
    The maximum allowed size of the buffer is specified using the `options.maxByteLength` parameter to the [`SharedArrayBuffer()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength).
    The {{jsxref("SharedArrayBuffer.prototype.growable")}} and {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} properties indicate whether the buffer can grow, and its maximum allowed size, respectively.
  - Resize {{jsxref("ArrayBuffer")}} using the {{jsxref("ArrayBuffer.prototype.resize()")}} method.
    The maximum allowed size of the buffer is specified using the `options.maxByteLength` parameter to the [`ArrayBuffer()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength).
    The {{jsxref("ArrayBuffer.prototype.resizable")}} and {{jsxref("ArrayBuffer.prototype.maxByteLength")}} properties indicate whether the buffer can be resized, and its maximum allowed size, respectively.

#### Removals

### SVG

#### Removals

### HTTP

- The HTTP [`Accept`](/en-US/docs/Web/HTTP/Headers/Accept) header in [default requests and image requests](/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) now includes the `image/svg+xml` MIME type ([Firefox bug 1711622](https://bugzil.la/1711622)).

#### Removals

### Security

#### Removals

### APIs

- {{domxref('RTCRtpReceiver.getParameters()')}} and {{domxref('RTCRtpSender.getParameters()')}} are now supported, returning an object that describes the current codecs used for the encoding and transmission of media on the receiver and sender tracks, respectively. ([Firefox bug 1534687](https://bugzil.la/1534687)).
- {{domxref("Request.bytes()")}} and {{domxref("Response.bytes()")}} are now supported as a convenient way to get a {{jsxref("Uint8Array")}} from a {{domxref("Request")}} and {{domxref("Response")}}, respectively. ([Firefox bug 1896475](https://bugzil.la/1896475)).
- {{domxref("PushMessageData.bytes()")}} is now supported for returning the data from a push message as an array of bytes in a {{jsxref("Uint8Array")}} object. ([Firefox bug 1897871](https://bugzil.la/1897871)).
- {{domxref('Blob.bytes()')}} is supported for returning the data from a {{domxref('Blob')}} as an array of bytes in a {{jsxref("Uint8Array")}} object. ([Firefox bug 1896509](https://bugzil.la/1896509)).
- {{domxref('MediaKeys.getStatusForPolicy()')}} is now supported for checking whether the CDM module, which is used to decrypt DRM protected content, would allow the presentation of encrypted media data for a "hypothetical" key based on specified policy requirements such as the [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection) version supported by the system.
  This provides an application with a simple mechanism to know in advance whether playback at the optimal resolution will be allowed, without having to create a media key session or fetch a real license. ([Firefox bug 1878714](https://bugzil.la/1878714)).
- {{domxref('RTCRtpTransceiver.setCodecPreferences()')}} is now supported for setting the codecs that a WebRTC local peer is able to use for decoding received data, in its preferred codec order. Web applications can use this to cause the remote peer to choose a preferred codec, and to disable the negotiation of specific codecs — including those used for retransmission, redundancy, and forward error correction. ([Firefox bug 1396922](https://bugzil.la/1396922)).
- Serialization of [declarative shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), including the methods {{domxref('ShadowRoot.getHTML()')}} and {{domxref('Element.getHTML()')}}, and associated properties {{domxref('ShadowRoot.serializable')}} and {{domxref('HTMLTemplateElement.shadowRootSerializable')}}.

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

- The non-standard {{domxref('HTMLMediaElement.seekToNextFrame()')}} method has been removed, and is now not supported by any browser. ([Firefox bug 1336404](https://bugzil.la/1336404)).

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- We now support the extended "unhandledPromptBehavior" capability which can either be a string (WebDriver classic) or a JSON object (WebDriver BiDi). The object type offers more capabilities for WebDriver BiDi like handling "beforeunload" prompts. ([Firefox bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Added support for the "BiDi flag" of a WebDriver Session to align with the WebDriver BiDi specification. This allows to identify sessions created for or upgraded to WebDriver BiDi. ([Firefox bug 1898719](https://bugzil.la/1898719))
- Added support for several arguments for the `network.continueRequest` command, which now allows to modify headers, cookies, method and body of a request before it is sent over the network. ([Firefox bug 1850680](https://bugzil.la/1850680))
- Added support for the `userContext` argument in the `permissions.setPermission` command, which allows to isolate a permission to a specific user context (implemented as containers in Firefox). ([Firefox bug 1894217](https://bugzil.la/1894217))
- Fixed a bug in `browsingContext.navigate` where a navigation error would load an error page and cause subsequent commands to fail. ([Firefox bug 1878690](https://bugzil.la/1878690))
- We fixed the order in which `network.responseCompleted` events are emitted for redirects. The original request's `responseCompleted` is now always emitted before the events for the redirect. ([Firefox bug 1879580](https://bugzil.la/1879580))
- To align with the current Firefox behavior, we introduced the workaround to not partition cookies which are added with the "storage.setCookie" command for the same domain as the page loaded in the targeted context. ([Firefox bug 1898222](https://bugzil.la/1898222))
- The `input.setFiles` command has been updated to throw an `UnsupportedOperation` error if the specified file does not exist. ([Firefox bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Added support for the "HTTP flag" of a WebDriver Session to align with the WebDriver classic specification. This allows to identify sessions created for WebDriver classic. ([Firefox bug 1884090](https://bugzil.la/1884090))
- Added support for the Permissions API in WebDriver Classic. ([Firefox bug 1524074](https://bugzil.la/1524074))

## Changes for add-on developers

- Adds the ability to enable and disable rules in static declarative net request rulesets with {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} and list disabled rules for a static ruleset with {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} ([Firefox bug 1810762](https://bugzil.la/1810762))
- A static declarative net request rule, one defined through the [`declarative_net_request` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request), is now loaded when it contains unrecognized properties but is otherwise valid ([Firefox bug 1886608](https://bugzil.la/1886608).
- The default value of {{WebExtAPIRef("proxy.settings")}} property `proxyDNS` is now `false` when using SOCKS4 and `true` when using SOCKS5. Previously, it defaulted to `false` for SOCKS4 and SOCKS5 ([Firefox bug 1741375](https://bugzil.la/1741375)).
- The non-standard Web API events `overflow` and `underflow` have been deprecated. Use of these events should be removed from extension documents before the release of Firefox 131 ([Firefox bug 1898445](https://bugzil.la/1898445)).
- Support is now provided for scripts to run in the web page execution environment. This is provided through support for `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} for the {{WebExtAPIRef("scripting")}} API, the addition of `world` to the {{WebExtAPIRef("contentScripts.register()")}} API, and support for `world` in the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) manifest key ([Firefox bug 1736575](https://bugzil.la/1736575)).
- The {{WebExtAPIRef("scripting")}} API can now inject scripts and CSS into sandboxed pages with `about:blank`, `about:srcdoc`, and `data:` URLs. This was implemented for {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, and {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox bug 1475831](https://bugzil.la/1475831) and {{WebExtAPIRef("scripting.registerContentScripts")}} and {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox bug 1853411](https://bugzil.la/1853411) through the introduction of `matchOriginAsFallback` to {{WebExtAPIRef("scripting.RegisteredContentScript")}}.
- The [manifest key `content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) now supports `match_origin_as_fallback` and {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, enabling scripts to be injected into `about:`, `data:`, and `blob:` pages when the document origin is opaque due to the use of CSP or iframe sandbox ([Firefox bug 1475831](https://bugzil.la/1475831) and [Firefox bug 1896669](https://bugzil.la/1896669)). In addition, scripts registered with the `content_scripts` manifest key can now only run in `blob:` pages when `match_origin_as_fallback` is `true` ([Firefox bug 1897113](https://bugzil.la/1897113)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 128 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`image/jxl` MIME type in Accept header for default and image requests:** `image.jxl.enabled`.

  The HTTP [`Accept`](/en-US/docs/Web/HTTP/Headers/Accept) header in [default requests and image requests](/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) can be configured to indicate support for the `image/jxl` MIME type. ([Firefox bug 1711622](https://bugzil.la/1711622)).

## Older versions

{{Firefox_for_developers}}
