---
title: Firefox 127 for developers
slug: Mozilla/Firefox/Releases/127
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 127 that affect developers. Firefox 127 was released on on [June 11, 2024](https://whattrainisitnow.com/release/?version=127).

## Changes for web developers

### HTML

- `data:` and `javascript:` URLs are now forbidden in the [`href`](/en-US/docs/Web/HTML/Element/base#href) attribute of the `<base>` element ([Firefox bug 1850967](https://bugzil.la/1850967)).

### CSS

- Using a [`<color-interpolation-method>`](/en-US/docs/Web/CSS/color-interpolation-method) is now supported in gradients created with [`conic-gradient()`](/en-US/docs/Web/CSS/gradient/conic-gradient), [`linear-gradient()`](/en-US/docs/Web/CSS/gradient/linear-gradient), and [`radial-gradient()`](/en-US/docs/Web/CSS/gradient/radial-gradient) functions and the [`repeating-conic-gradient()`](/en-US/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/en-US/docs/Web/CSS/gradient/repeating-linear-gradient), and [`repeating-radial-gradient()`](/en-US/docs/Web/CSS/gradient/repeating-radial-gradient) functions for repeating gradients ([Firefox bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- The following [`Set`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) methods are now supported ([Firefox bug 1868423](https://bugzil.la/1868423)):

  - [`Set.prototype.intersection()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Returns a new set containing elements in both this set and the given set.
  - [`Set.prototype.union()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Returns a new set containing all elements in this set and the given set.
  - [`Set.prototype.difference()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Returns a new set containing elements in this set but not in the given set.
  - [`Set.prototype.symmetricDifference()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Returns a new set containing elements that are in either this set or the given set, but not in both.
  - [`Set.prototype.isSubsetOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Returns a boolean indicating if all elements of this set are in the given set.
  - [`Set.prototype.isSupersetOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Returns a boolean indicating if all elements of the given set are in this set.
  - [`Set.prototype.isDisjointFrom()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Returns a boolean indicating if this set has no elements in common with the given set.

### SVG

- The [`lh` and `rlh`](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#line_height_units) line height units, first supported in CSS [in Firefox 120](/en-US/docs/Mozilla/Firefox/Releases/120#css), are now supported in SVG as well. They can be used both in CSS property values `stroke-width: 0.5lh` and SVG attributes values `stroke-width="0.5lh"`. ([Firefox bug 1892089](https://bugzil.la/1892089)).

### Security

- Firefox will now automatically upgrade requests for audio, video, and image subresources from HTTP to HTTPS in secure content, and block HTTP requests for other kinds of media. If an upgraded request fails because the media's host doesn't support HTTPS, the media is not found.
  This ensures that if content is served securely over HTTPS, then all its subresources are also served securely or not served at all.
  As pages no longer display [mixed content](/en-US/docs/Web/Security/Mixed_content), Firefox has also removed the icon to indicate when a page contains mixed-content, and the mixed-content console warning has been replaced with one that indicates when requests are upgraded.
  ([Firefox bug 1779757](https://bugzil.la/1779757)).

### APIs

- The async {{domxref('Clipboard API')}} is now fully supported. The {{domxref('ClipboardItem')}} interface, along with the [`read()`](/en-US/docs/Web/API/Clipboard/read) and [`write()`](/en-US/docs/Web/API/Clipboard/write) methods of the {{domxref('Clipboard')}} interface, have been enabled. ([Firefox bug 1887845](https://bugzil.la/1887845), [Firefox bug 1858788](https://bugzil.la/1858788)).
- All {{glossary("character reference","HTML character references")}} are now supported in [Web Video Text Tracks Format (WebVTT)](/en-US/docs/Web/API/WebVTT_API) cues, title text, comments, annotations, and so on. ([Firefox bug 1395924](https://bugzil.la/1395924)).
- {{domxref('WebGLRenderingContext.drawingBufferColorSpace')}} and [`WebGL2RenderingContext.drawingBufferColorSpace`](/en-US/docs/Web/API/WebGL2RenderingContext) are now supported. ([Firefox bug 1885491](https://bugzil.la/1885491)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Fixed support for `wheel` actions in both WebDriver classic and BiDi to correctly handle modifiers such as `ctrl`, `shift`, etc. ([Firefox bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Added the `permissions.setPermission` command which allows to update browser permissions (such as `geolocation`). The permissions module is an extension to the WebDriver BiDi specification [defined in the Permissions specification](https://www.w3.org/TR/permissions/#webdriver-bidi-module-permissions) ([Firefox bug 1875065](https://bugzil.la/1875065)).
- Added support for a11y attributes `name` and `role` as locators for the `browsingContext.locateNodes` command ([Firefox bug 1885577](https://bugzil.la/1885577)).
- Added support for the `devicePixelRatio` argument to `browsingContext.setViewport` which allows to emulate the behavior of the screens with different device pixel ratio ([Firefox bug 1857961](https://bugzil.la/1857961)).
- Improved `browsingContext.navigate` to avoid race conditions leading to wait unnecessarily before resolving the command ([Firefox bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- Fixed `WebDriver:ElementClear` for elements located in a disabled fieldset ([Firefox bug 1863266](https://bugzil.la/1863266)).
- Fixed a bug where `WebDriver:GetElementText` failed to correctly capitalize text containing an underscore ([Firefox bug 1888004](https://bugzil.la/1888004)).
- Fixed a bug in `WebDriver:SwitchToFrame` which could fail if the tab was in the middle of a navigation ([Firefox bug 1817820](https://bugzil.la/1817820)).

## Changes for add-on developers

- Firefox now installs extensions that specify the `"split"` value of the manifest.json [`"incognito"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito) key. However, as Firefox doesn't support split mode and to preserve the integrity of incognito browsing `"split"` is treated as an alias of the `"not_allowed"` value ([Firefox bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} now returns the `install_type` of `"admin"` when an add-on is installed using an enterprise policy ([Firefox bug 1895341](https://bugzil.la/1895341)).
- Addition of a `filter` parameter to {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} and {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, which enables the list of returned rules to be filtered by ID ([Firefox bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) for Manifest V3 extensions are now displayed to users during installation ([Firefox bug 1889402](https://bugzil.la/1889402)). However, if an extension update requests new host permissions, these are not shown to the user. See ([Firefox bug 1893232](https://bugzil.la/1893232)).
- Addition of the {{WebExtAPIRef("runtime.getContexts")}} function that returns information about the contexts associated with the extension ([Firefox bug 1875480](https://bugzil.la/1875480)).
- For Manifest V3 extensions, adds fall back to the user-defined shortcuts for the special [`_execute_browser_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) command if there are no user-defined shortcuts for `_execute_action`. This enables extensions migrating from Manifest V2 to V3 to preserve any user-defined shortcuts for the browser action ([Firefox bug 1797811](https://bugzil.la/1797811)).

## Experimental web features

These features are newly shipped in Firefox 127 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Symmetrical spacing with CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  The CSS {{cssxref("letter-spacing")}} property now splits the specified letter spacing evenly on both sides of each character. This is unlike the current behavior where spacing is added primarily to one side ([Firefox bug 1891446](https://bugzil.la/1891446)).

- **`calc()` color channel support in relative colors:** `layout.css.relative-color-syntax.enabled`.

  The CSS [`calc()`](/en-US/docs/Web/CSS/calc) function can now parse color channels in [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) ([Firefox bug 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` typed array**: `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}} typed arrays are now supported, along with {{jsxref("DataView.prototype.getFloat16()")}} and {{jsxref("DataView.prototype.setFloat16()")}} for reading and setting `Float16Array` values from a {{jsxref("DataView")}}, and the {{jsxref("Math.f16round()")}} static method that can be used to round numbers to 16 bits. The new type is useful for sharing data with a GPU, in particular for use cases where it makes sense to trade off precision for memory consumption. ([Firefox bug 1833647](https://bugzil.la/1833647).)

## Older versions

{{Firefox_for_developers}}
