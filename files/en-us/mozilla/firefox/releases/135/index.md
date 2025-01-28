---
title: Firefox 135 for developers
slug: Mozilla/Firefox/Releases/135
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 135 that affect developers. Firefox 135 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [February 4, 2025](https://whattrainisitnow.com/release/?version=135).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

- [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency) is a standard for ensuring that certificates are publicly disclosed before web browsers will trust them. Firefox now supports this feature on desktop versions (but not Android).
  This only affects servers that use certificates issued by a certificate authority in Mozilla's Root CA Program.
  ([Firefox bug 1938242](https://bugzil.la/1938242)).

#### Removals

### APIs

- The {{domxref("PublicKeyCredential.getClientCapabilities_static", "PublicKeyCredential.getClientCapabilities()")}} static method is supported, allowing a web app to check if a browser enables particular [WebAuthn](/en-US/docs/Web/API/Web_Authentication_API) capabilities and [extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) without having to resort to user agent sniffing.
  ([Firefox bug 1884466](https://bugzil.la/1884466)).

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

## Experimental web features

These features are newly shipped in Firefox 135 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Prioritized Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>.
  The [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) provides a standardized way to prioritize all tasks belonging to an application, whether they defined in a website developer's code, or in third party libraries and frameworks.
  This has temporarily been disabled in Nightly builds in order to avoid [breakage in-the-wild](https://bugzil.la/1937232).
  ([Firefox bug 1938242](https://bugzil.la/1938242)).

## Older versions

{{Firefox_for_developers}}
