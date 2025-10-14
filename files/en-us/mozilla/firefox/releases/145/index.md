---
title: Firefox 145 for developers
short-title: Firefox 145 (Nightly)
slug: Mozilla/Firefox/Releases/145
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 145 that affect developers.
Firefox 145 is the current [Nightly version of Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) and ships on [November 11, 2025](https://whattrainisitnow.com/release/?version=145).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- Cookies created with {{WebExtAPIRef("cookies.set()")}} are now validated, and invalid cookies are rejected. This change was implemented in Nightly only from Firefox 142. ([Firefox bug 1976509](https://bugzil.la/1976509))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 145 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Trusted Types API** for scripts (Early Beta): `dom.security.trusted_types.enabled`

  The [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API) is now fully implemented. ([Firefox bug 1976656](https://bugzil.la/1976656)).

  The changes include:
  - Addition of new interfaces {{domxref("TrustedTypePolicyFactory")}}, {{domxref("TrustedTypePolicy")}}, {{domxref("TrustedHTML")}}, {{domxref("TrustedScript")}}, {{domxref("TrustedScriptURL")}}, and the `trustedTypes` property on {{domxref("Window/trustedTypes", "Window")}} and {{domxref("WorkerGlobalScope/trustedTypes", "WorkerGlobalScope")}}
  - Updates to [injection sink](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage) APIs, such as {{domxref("Element.innerHTML")}} and {{domxref("Document.write()", "document.write()")}}, to allow the `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` to be passed as well as strings.
  - Support for the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) directive of the {{HTTPHeader("Content-Security-Policy")}} HTTP header.
    This can be used to enforce that trusted types used instead of strings (or use a default policy).
  - Support for the [`trusted-types`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) directive of the {{HTTPHeader("Content-Security-Policy")}} HTTP header.
    This can be used to restrict the allowed names of trusted type policies defined in the page.
