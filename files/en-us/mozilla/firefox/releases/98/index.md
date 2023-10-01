---
title: Firefox 98 for developers
slug: Mozilla/Firefox/Releases/98
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 98 that affect developers. Firefox 98 was released on March 8, 2022.

## Changes for web developers

### HTML

- The HTML {{HTMLElement("dialog")}} element is now available by default. This element and its associated [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) provide support for HTML-based modal dialog boxes ([Firefox bug 1733536](https://bugzil.la/1733536)).

### CSS

- The {{cssxref("hyphenate-character")}} property sets a string that is used instead of a hyphen character (`-`) at the end of a hyphenation line break ([Firefox bug 1751024](https://bugzil.la/1751024)).

### JavaScript

No notable changes

### APIs

- {{domxref("navigator.registerProtocolHandler()")}} can now register protocol handlers for the `ftp`, `sftp`, and `ftps` schemes ([Firefox bug 1705202](https://bugzil.la/1705202)).

#### DOM

- {{domxref("HTMLElement.outerText")}} is now supported ([Firefox bug 1709790](https://bugzil.la/1709790)).
- The properties `colorSpaceConversion`, `resizeWidth` and `resizeHeight` can be passed to the method {{domxref("createImageBitmap()")}} using the `options` object ([Firefox bug 1748868](https://bugzil.la/1748868) and [Firefox bug 1733559](https://bugzil.la/1733559)).

#### Removals

- The deprecated [WebVR API](/en-US/docs/Web/API/WebVR_API) is now disabled by default on all builds (previously it was enabled on Windows, macOS, and all nightly/dev builds).
  It can be re-enabled in `about:config` by setting `dom.vr.enabled` to `true` ([Firefox bug 1750902](https://bugzil.la/1750902)).

### WebDriver conformance (Marionette)

- Improved initial page load checks for newly opened tabs ([Firefox bug 1747359](https://bugzil.la/1747359)).

## Changes for add-on developers

- Web extensions using {{WebExtAPIRef("webRequest")}} were started early during Firefox startup. This has changed to only trigger early start-up for extensions using {{WebExtAPIRef("webRequest")}} blocking calls. Non-blocking calls no longer cause the early startup of an extension. ([Firefox bug 1749871](https://bugzil.la/1749871))
- `cookieStoreId` added to {{WebExtAPIRef("userScripts.register")}}. This enables extensions to register container-specific user scripts ([Firefox bug 1738567](https://bugzil.la/1738567)).

## Older versions

{{Firefox_for_developers(97)}}
