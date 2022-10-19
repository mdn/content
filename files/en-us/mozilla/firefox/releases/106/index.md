---
title: Firefox 106 for developers
slug: Mozilla/Firefox/Releases/106
tags:
  - "106"
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 106 that will affect developers. Firefox 106 was released on October 18, 2022.

## Changes for web developers

### HTML

#### Removals

### MathML

- The [`<semantics>` MathML](/en-US/docs/Web/MathML/Element/semantics) and [`<maction>` MathML](/en-US/docs/Web/MathML/Element/maction) elements now only render the first child element by default to align with the [MathML Core specification](https://w3c.github.io/mathml-core/#semantics-and-presentation).
  The rendering algorithm is described in more details in the [`<semantics>`](/en-US/docs/Web/MathML/Element/semantics#sect1) page ({{bug(1588733)}}).

### CSS

#### Removals

### JavaScript

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### Removals

## Changes for add-on developers

- The ability to set the [`"background"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) manifest key property `"persistent"` to `false` for Manifest V2 (to make a background page non-persistent) is now available by default.
- The `object-src` directive in the `"content-security-policy"` manifest key is now optional ({{bug(1766881)}}). See [object-src directive](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive) on the `"content-security-policy"` manifest key page for more details.

### Removals

### Other

## Older versions

{{Firefox_for_developers(105)}}
