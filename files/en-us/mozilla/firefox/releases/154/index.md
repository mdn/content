---
title: Firefox 154 release notes for developers (Beta)
short-title: Firefox 154 (Beta)
slug: Mozilla/Firefox/Releases/154
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 154 that affect developers.
Firefox 154 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [August 18, 2026](https://whattrainisitnow.com/release/?version=154).

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

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

<!-- #### DOM -->

#### Media, WebRTC, and Web Audio

- The {{domxref("RTCIceTransport.getSelectedCandidatePair()")}} method and {{domxref("RTCIceTransport/selectedcandidatepairchange_event", "selectedcandidatepairchange")}} event are now supported for getting the current {{domxref("RTCIceCandidatePair")}} for the transport.
  ([Firefox bug 2019332](https://bugzil.la/2019332)).
- The {{domxref("RTCDtlsTransport/error_event", "error")}} event is now fired on {{domxref("RTCDtlsTransport")}} to report DTLS and fingerprinting errors.
  ([Firefox bug 1805447](https://bugzil.la/1805447)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

#### General

- Improved the handling of `deltaX` and `deltaY` properties for asynchronous widget wheel scroll events by taking the layout viewport into account. ([Firefox bug 1971979](https://bugzil.la/1971979)).
- Fixed a bug where a navigation would resolve prematurely for subframes when calling `history.replaceState` or when navigating to an error page (e.g., blocked by X-Frame-Options). ([Firefox bug 2051908](https://bugzil.la/2051908)).

#### WebDriver BiDi

- Added a download id to `browsingContext.downloadWillBegin` and `browsingContext.downloadEnd` events to make it easier to identify which events belong to the same download. ([Firefox bug 2040936](https://bugzil.la/2040936)).
- Added support for an `ignore` state for the `unhandledPromptBehavior` property for file pickers when creating a new session with the `session.new` command. With this state, file pickers will not be handled automatically by the protocol. ([Firefox bug 1999693](https://bugzil.la/1999693)).
- Added a `userContext` field (a.k.a. Firefox container) to the payload of several WebDriver BiDi events and commands, which makes it easier to filter out incoming data for clients subscribing to events by user context id. ([Firefox bug 2018611](https://bugzil.la/2018611)).
- Implemented the `browsingContext.startScreencast` and `browsingContext.stopScreencast` commands, which will record a browsing context and save the result as a video file. ([Firefox bug 2042671](https://bugzil.la/2042671)).
- Updated the `emulation.setLocaleOverride` command to allow overriding the `Accept-Language` header for fetch and `WebSocket` requests in workers. ([Firefox bug 2052932](https://bugzil.la/2052932)).
- Fixed a bug where the `script.realmDestroyed` event was missing for a worker after cross-process navigation. ([Firefox bug 2018154](https://bugzil.la/2018154)).

## Changes for add-on developers

- Adds support for the [`sandbox`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox) manifest key, enabling extensions to designate pages that load with an opaque origin, without direct access to extension APIs. A sandboxed page can use `eval()` and similar constructs that are otherwise blocked by the extension's [content security policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy). ([Firefox bug 1685123](https://bugzil.la/1685123))

## Experimental web features

These features are shipping in Firefox 154 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Truncating content with `line-clamp`**: `layout.css.line-clamp.enabled`

  The {{cssxref("line-clamp")}} CSS property now works without the `-webkit-` vendor prefix, though at this stage it does not support the `no-ellipsis` and `<string>` values. ([Firefox bug 2042986](https://bugzil.la/2042986)).

- **Percentage values for `text-decoration-inset`**: `layout.css.text-decoration-inset-percentage.enabled`

  The {{cssxref("text-decoration-inset")}} CSS property now supports percentages as values. The percentage value specifies the size of the inset as a percentage of the {{cssxref("font-size")}}. ([Firefox bug 2044602](https://bugzil.la/2044602)).

- **CSS Typed Object Model Level 1** (Nightly): `layout.css.typed-om.enabled`

  The [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) (as defined in the CSS Typed Object Model Level 1 specification) is now implemented.
  This simplifies CSS property manipulation by exposing CSS values as typed JavaScript objects rather than strings. ([Firefox bug 2051047](https://bugzil.la/2051047)).
