---
title: Firefox 73 for developers
slug: Mozilla/Firefox/Releases/73
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 73 that will affect developers. Firefox 73 was released on February 11, 2020.

## Changes for web developers

### Developer tools

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors) now appear as errors in the console (and no longer as warnings) giving them the appropriate visibility ([Firefox bug 1602093](https://bugzil.la/1602093)).
- Text and regular expression searches in the web console [can now be negated by prefixing them with '-'](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#filtering-and-searching) ([Firefox bug 1291192](https://bugzil.la/1291192)).

### HTML

_No changes._

### CSS

- We've implemented {{cssxref("overscroll-behavior-block")}} and {{cssxref("overscroll-behavior-inline")}}, the logical mappings for {{cssxref("overscroll-behavior-x")}} and {{cssxref("overscroll-behavior-y")}} ([Firefox bug 833953](https://bugzil.la/833953)).

#### Removals

- The proprietary `-moz-touch-enabled` media query has been removed ([Firefox bug 1486964](https://bugzil.la/1486964)). You should use [`pointer: coarse`](/en-US/docs/Web/CSS/@media/pointer) instead.

### SVG

- The {{SVGAttr("letter-spacing")}} and {{SVGAttr("word-spacing")}} properties now work in SVG ([Firefox bug 371787](https://bugzil.la/371787)).

### MathML

#### Removals

- The deprecated {{MathMLElement("mfenced")}} element has been removed ([Firefox bug 1603773](https://bugzil.la/1603773)). Use the {{MathMLElement("mrow")}} and {{MathMLElement("mo")}} elements instead.

### JavaScript

- The `yearName` and `relatedYear` fields have been made available in the [`DateTimeFormat.prototype.formatToParts()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts) method, enabling useful formatting options for CJK calendars ([Firefox bug 1591664](https://bugzil.la/1591664)).

### APIs

#### DOM

- The {{domxref("Window.innerWidth", "innerWidth")}} and {{domxref("Window.innerHeight", "innerHeight")}} properties on {{domxref("Window")}} objects have been updated to return the width and height of the layout viewport in all situations, rather than sometimes being based on the visual viewport. In particular, previously when using [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html), these returned the visual viewport dimensions, causing the behavior to vary from what was expected ([Firefox bug 1514429](https://bugzil.la/1514429)).

#### WebVR

- The deprecated [WebVR API](/en-US/docs/Web/API/WebVR_API)—which has been supplanted by [WebXR](/en-US/docs/Web/API/WebXR_Device_API), which supports both [augmented](https://en.wikipedia.org/wiki/Augmented_reality) and [virtual reality](https://en.wikipedia.org/wiki/Virtual_reality) applications—now [requires a secure context](/en-US/docs/Web/API/WebVR_API#api_availability) using the {{Glossary("HTTPS")}} protocol to operate. This is due to the availability of sensitive input sources that may include private information ([Firefox bug 1381645](https://bugzil.la/1381645)).

#### Removals

- Support for the {{domxref("VideoPlaybackQuality")}} property {{domxref("VideoPlaybackQuality.corruptedVideoFrames", "corruptedVideoFrames")}}, which has been deprecated in the specification, has been removed from Firefox ([Firefox bug 1602163](https://bugzil.la/1602163)).

### Security

_No changes._

### WebDriver conformance (Marionette)

- Added `WebDriver:Print` to print the current page as a PDF document ([Firefox bug 1604506](https://bugzil.la/1604506)).
- `Webdriver:TakeScreenshot` now always captures the top-level browsing context and not the currently-selected browsing context, if no element to capture has been specified ([Firefox bug 1398087](https://bugzil.la/1398087), [Firefox bug 1606794](https://bugzil.la/1606794)).
- Using `Webdriver:TakeScreenshot`'s `full` argument causes the complete page to be captured ([Firefox bug 1571424](https://bugzil.la/1571424)).

## Changes for add-on developers

### API changes

- The {{WebExtAPIRef("sidebarAction.toggle()")}} function has been implemented ([bug 1453355](https://bugzil.la/1453355)).

### Manifest changes

_No changes._

## See also

- Hacks blog post: [Firefox 73 is upon us](https://hacks.mozilla.org/2020/02/firefox-73-is-upon-us/)

## Older versions

{{Firefox_for_developers}}
