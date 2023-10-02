---
title: Firefox 116 for developers
slug: Mozilla/Firefox/Releases/116
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 116 that affect developers. Firefox 116 was released on August 01, 2023.

## Changes for web developers

### HTML

- The [`dirname`](/en-US/docs/Web/HTML/Element/input#dirname) attribute is now supported on [`input`](/en-US/docs/Web/HTML/Element/input#dirname) and [`textarea`](/en-US/docs/Web/HTML/Element/textarea#dirname) elements.
  This attribute allows for passing text directionality information (`ltr` or `rtl`) to the server during form submission ([Firefox bug 675943](https://bugzil.la/675943)).

### CSS

- The syntax has been updated for the {{cssxref("offset-path")}} property, which is used to define the path for an element to follow. The updated syntax allows you to set a value of `none` or one of `<offset-path>` or `<coord-box>`. The new `<offset-path>` value can be a `<ray()>`, a `<url>`, or a `<basic-shape>`. The [`<coord-box>`](/en-US/docs/Web/CSS/box-edge) value has replaced the older `<geometry-box>` value and lets you specify the shape of the path based on the element's box model. The `<basic-shape>` and `<coord-box>` values require the `layout.css.motion-path-basic-shapes.enabled` and `layout.css.motion-path-coord-box.enabled` preferences to be enabled, respectively. ([Firefox bug 1598156](https://bugzil.la/1598156)) and ([Firefox bug 1837305](https://bugzil.la/1837305)).

### Accessibility (ARIA)

- The [`image`](/en-US/docs/Web/Accessibility/ARIA/Roles/img_role) role is now supported as a synonym for `img`.
  This maintains consistency with most role names which are complete words or concatenations of complete words ([Firefox bug 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) supports new [constructor options](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) that control how numbers are rounded (`roundingIncrement`, `roundingMode`, `roundingPriority`), the strategy for displaying trailing zeros on whole numbers (`trailingZeroDisplay`), and whether to use grouping separators to indicate thousands, millions, and so on (`useGrouping`).
  It also supports new methods [`formatRange()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) amd [`formatRangeToParts()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) for formatting ranges of numbers.
  ([Firefox bug 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) was updated (as part of the same set of changes as `Intl.NumberFormat`) to support [constructor options](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` and `trailingZeroDisplay`, and the [`selectRange()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) method.
  ([Firefox bug 1795756](https://bugzil.la/1795756)).

### SVG

- The `q` [length unit](/en-US/docs/Web/SVG/Content_type#length) (`1q = 1/40th of 1cm`) is now supported ([Firefox bug 1836995](https://bugzil.la/1836995)).

### HTTP

- Configuring a [Content-Security-Policy](/en-US/docs/Web/HTTP/CSP) now supports specifying [external JavaScript files to be whitelisted using hashes](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#whitelisting_external_scripts_using_hashes), where previously only inline scripts could be whitelisted using a hash ([Firefox bug 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- The {{domxref("TextMetrics.fontBoundingBoxAscent")}} and {{domxref("TextMetrics.fontBoundingBoxDescent")}} properties are now supported.
  These metrics return, respectively, the distance above and below the {{domxref("CanvasRenderingContext2D.textBaseline")}} to the bounding rectangle of all the fonts used to render the text ([Firefox bug 1801198](https://bugzil.la/1801198)).

#### Media, WebRTC, and Web Audio

- The [Audio Output Devices API](/en-US/docs/Web/API/Audio_Output_Devices_API) is now supported on all platforms except for Android.
  This API allows web applications to redirect audio output to a permitted Bluetooth headset, speakerphone, or other device, instead of having to use the browser or underlying OS default.
  Affected APIs include {{domxref("MediaDevices.selectAudioOutput()")}}, {{domxref("MediaDevices.enumerateDevices()")}}, [`HTMLMediaElement.setSinkId()`](/en-US/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/en-US/docs/Web/API/HTMLMediaElement/sinkId), and the permission policy [`Permissions-Policy: speaker-selection`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) ([Firefox bug 1498512](https://bugzil.la/1498512)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added support for the `session.end` command that allows users to terminate the automation session. This was previously only possible for sessions using both WebDriver Classic and WebDriver BiDi. It is now possible also for WebDriver BiDi-only sessions ([Firefox bug 1829337](https://bugzil.la/1829337)).
- Added support for [capability matching](/en-US/docs/Web/WebDriver/Capabilities) for the `session.new` command. It allows to define expectations about the target browser, such as browser name, platform name, etc. It can also be used to configure the session, for example, to specify if insecure certificates should be accepted ([Firefox bug 1731730](https://bugzil.la/1731730)).
- Shadow roots are now correctly serialized when they are the root of a returned value ([Firefox bug 1836514](https://bugzil.la/1836514)).
- The `network` event time origin information was renamed from `originTime` to `timeOrigin` ([Firefox bug 1836926](https://bugzil.la/1836926)).
- The `network` event `network.responseCompleted` is now correctly emitted for navigation requests involving a redirect ([Firefox bug 1838238](https://bugzil.la/1838238)).

#### Marionette

- Removed support for the `moz:useNonSpecCompliantPointerOrigin` capability. Users who still need this feature can still use the Firefox 115 ESR release as long as it is supported. Please file bugs under [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette) if you're seeing any issue ([Firefox bug 1490258](https://bugzil.la/1490258)).
- A regression was fixed that prevented us from differentiating stale elements (DOM elements that have been seen before on the page) from unknown elements for a given browsing context ([Firefox bug 1822466](https://bugzil.la/1822466)).
- Creating a new session should now properly wait for the initial context to be loaded ([Firefox bug 1838381](https://bugzil.la/1838381)).

## Changes for add-on developers

- The URL of a page visited when an extension is uninstalled, provided in {{WebExtAPIRef("runtime.setUninstallURL")}}, can now be up to 1023 characters instead of 255 ([Firefox bug 1835723](https://bugzil.la/1835723)).
- Adds {{WebExtAPIRef("action.getUserSettings")}} providing the user-specified settings for an extension's browser action ([Firefox bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` is now supported in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}}, and {{WebExtAPIRef("tabs.query")}} ([Firefox bug 1809094](https://bugzil.la/1809094)).

## Developer Tools

- Added support for [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) ([Firefox bug 1752760](https://bugzil.la/1752760)).
- Added "container" badges in markup view on elements with a `container-type` property with `size` or `inline-size` values ([Firefox bug 1789193](https://bugzil.la/1789193)).
- Fixed an issue in the Inspector where CSS custom properties set on the Custom Element Root were not displayed ([Firefox bug 1836755](https://bugzil.la/1836755)).
- Show if request was resolved with DNS over HTTPS in Network Monitor ([Firefox bug 1810195](https://bugzil.la/1810195)).
- Removed `Proxy-Authorization` header in Network Monitor ([Firefox bug 1816115](https://bugzil.la/1816115)).

## Older versions

{{Firefox_for_developers(115)}}
