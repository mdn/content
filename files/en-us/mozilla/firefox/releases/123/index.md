---
title: Firefox 123 for developers
slug: Mozilla/Firefox/Releases/123
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 123 that affect developers. Firefox 123 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [February 20, 2024](https://whattrainisitnow.com/release/?version=123).

## Changes for web developers

### Developer Tools

### HTML

- The {{htmlelement("template")}} element now supports a `shadowrootmode` attribute that allows declarative creation of a shadow DOM subtree. The attribute can be set to either `open` or `closed`, which expose or hide JavaScript in the shadow DOM from external code, respectively. These are the same values as the `mode` option of the {{domxref("Element.attachShadow()", "attachShadow()")}} method. ([Firefox bug 1870052](https://bugzil.la/1870052))

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### SVG

- The {{SVGElement("linearGradient")}} and {{SVGElement("radialGradient")}} SVG elements now support changing the color space to be `linearRGB` or `sRGB` via the {{SVGAttr("color-interpolation")}} attribute. This can also be applied to the SVG elements via the {{CSSXref("color-interpolation")}} CSS property.

#### Removals

### HTTP

- The [`103 Early Hints`](/en-US/docs/Web/HTTP/Status/103) HTTP [information response](/en-US/docs/Web/HTTP/Status#information_responses) status code is now enabled for [preloading](/en-US/docs/Web/HTML/Attributes/rel/preload) resources that the page is likely to need while the server is still preparing the full response.
  This can significantly reduce page load time.
  Note that support for using the `103 Early Hints` header for [preconnecting](/en-US/docs/Web/HTML/Attributes/rel/preconnect) was added in [Firefox 120](/en-US/docs/Mozilla/Firefox/Releases/120#http).
  For more details see [Firefox bug 1874445](https://bugzil.la/1874445).

#### Removals

### Security

#### Removals

### APIs

- The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) now supports cross-origin credential creation.
  Specifically [`navigator.credentials.create({publicKey})`](/en-US/docs/Web/API/CredentialsContainer/create) can now be called in nested browsing contexts loaded from a different origin to the top-most document, if allowed by a [`Feature-Policy: publickey-credentials-create`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) on the top level nesting [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe#allow).
  ([Firefox bug 1870863](https://bugzil.la/1870863)).

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

- Addition of fhe {{WebExtAPIRef("contextualIdentities.move")}} function enables items to be moved in the list of contextual identities. This function enables extensions to customize the order in which contextual identities display in the UI ([Firefox bug 1333395](https://bugzil.la/1333395)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 123 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers(122)}}
