---
title: Firefox 127 for developers
slug: Mozilla/Firefox/Releases/127
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 127 that affect developers. Firefox 127 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [June 11, 2024](https://whattrainisitnow.com/release/?version=127).

## Changes for web developers

### Developer Tools

### HTML

- `data:` and `javascript:` URLs are now forbidden in the [`href`](/en-US/docs/Web/HTML/Element/base#href) attribute of the `<base>` element ([Firefox bug 1850967](https://bugzil.la/1850967)).

#### Removals

### CSS

#### Removals

### JavaScript

- The following [`Set`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) methods are now supported ([Firefox bug 1868423](https://bugzil.la/1868423)):

  - [`Set.prototype.intersection()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Returns a new set containing elements in both this set and the given set.
  - [`Set.prototype.union()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Returns a new set containing all elements in this set and the given set.
  - [`Set.prototype.difference()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Returns a new set containing elements in this set but not in the given set.
  - [`Set.prototype.symmetricDifference()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Returns a new set containing elements that are in either this set or the given set, but not in both.
  - [`Set.prototype.isSubsetOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Returns a boolean indicating if all elements of this set are in the given set.
  - [`Set.prototype.isSupersetOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Returns a boolean indicating if all elements of the given set are in this set.
  - [`Set.prototype.isDisjointFrom()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Returns a boolean indicating if this set has no elements in common with the given set.

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

- Firefox will now automatically upgrade requests for audio, video, and image subresources from HTTP to HTTPS in secure content, and block HTTP requests for other kinds of media. If an upgraded request fails because the media's host doesn't support HTTPS, the media is not found.
  This ensures that if content is served securely over HTTPS, then all its subresources are also served securely or not served at all.
  As pages no longer display [mixed content](/en-US/docs/Web/Security/Mixed_content), Firefox has also removed the icon to indicate when a page contains mixed-content, and the mixed-content console warning has been replaced with one that indicates when requests are upgraded.
  ([Firefox bug 1779757](https://bugzil.la/1779757)).

#### Removals

### APIs

- The async {{domxref('Clipboard API')}} is now fully supported. The {{domxref('ClipboardItem')}} interface, along with the [`read()`](/en-US/docs/Web/API/Clipboard/read) and [`write()`](/en-US/docs/Web/API/Clipboard/write) methods of the {{domxref('Clipboard')}} interface, have been enabled. ([Firefox bug 1887845](https://bugzil.la/1887845),[Firefox bug 1858788](https://bugzil.la/1858788)).

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

- {{WebExtAPIRef("management.ExtensionInfo")}} now returns the `install_type` of `"admin"` when an add-on is installed using an enterprise policy ([Firefox bug 1895341](https://bugzil.la/1895341)).
- Addition of a `filter` parameter to {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} and {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, which enables the list of returned rules to be filtered by ID ([Firefox bug 1820870](https://bugzil.la/1820870)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 127 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
