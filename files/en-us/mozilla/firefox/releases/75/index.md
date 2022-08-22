---
title: Firefox 75 for developers
slug: Mozilla/Firefox/Releases/75
tags:
  - '75'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 75 that will affect developers. Firefox 75 was released on April 7, 2020.

**See also the accompanying hacks post — [Firefox 75: Ambitions for April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/).**

## Changes for web developers

### Developer tools

- It is now possible to resize the rectangle of the [Measuring Tool](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) ({{bug(1152321)}}).
- In the [inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html), you can now use [XPath](/en-US/docs/Web/XPath) expressions to locate elements, in addition to locating elements using CSS selectors as before ({{bug(963933)}}).
- You can now filter [WebSocket](/en-US/docs/Web/API/WebSockets_API) messages using [regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions), in addition to plain text search, by writing the regular expression in slashes ({{bug(1593837)}}).

### HTML

- The {{htmlattrxref("loading", "img")}} attribute of the {{HTMLElement("img")}} element has now been implemented. This string value can be used to specify that the image should be [lazily loaded](/en-US/docs/Web/Performance/Lazy_loading), by setting its value to `lazy` ({{bug(1542784)}}).
- The value of the [`<style>`](/en-US/docs/Web/HTML/Element/style) element's `type` attribute is now restricted to `text/css` only, as per the spec ({{bug(1614329)}}).

### CSS

- Support for the {{cssxref("min", "min()")}}, {{cssxref("max", "max()")}}, and {{cssxref("clamp", "clamp()")}} functions has been implemented ({{bug(1519519)}}).
- The `all` value of the {{cssxref("text-decoration-skip-ink")}} property has been added ({{bug(1611965)}})

### Accessibility

The new roles and objects related to [ARIA annotations](/en-US/docs/Web/Accessibility/ARIA/Annotations) are now exposed in Firefox, on Windows and Linux (bear in mind that these still won't be usable until screen readers start to support them):

- `aria-description` ({{bug(1608961)}}).
- [`role="mark"`](/en-US/docs/Web/Accessibility/ARIA/Roles/mark_role) and [`role="suggestion"`](/en-US/docs/Web/Accessibility/ARIA/Roles/suggestion_role) ({{bug(1608965)}}).
- [`role="comment"`](/en-US/docs/Web/Accessibility/ARIA/Roles/comment_role) ({{bug(1608969)}}).
- Multiple IDs on `aria-details` ({{bug(1608883)}}).

> **Note:** On macOS, we are first waiting for Apple to define what Safari will expose as Apple-dialect attributes to VoiceOver, and will then follow suit.

### JavaScript

- [Public static class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields#public_static_fields) are now supported ({{bug(1535804)}}).
- The [`Intl.Locale`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) class is now supported ({{bug(1613713)}}).
- The [`Function.caller`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) property has been updated to be aligned with the latest [ECMAScript spec proposal](https://github.com/claudepache/es-legacy-function-reflection). Previously throwing a `TypeError`, it now returns `null` if the caller is a strict, async, or generator function ({{bug(1610206)}}).

### APIs

#### DOM

- The {{domxref("HTMLFormElement")}} interface has a new method, {{domxref("HTMLFormElement.requestSubmit", "requestSubmit()")}}. Unlike the old (and still available) {{domxref("HTMLFormElement.submit", "submit()")}} method, `requestSubmit()` acts as if a specified submit button has been clicked, rather than just sending the form data to the recipient. Thus the {{domxref("HTMLFormElement.submit_event", "submit")}} event is delivered and the form is checked for validity prior to the data being submitted ({{bug(1613360)}}).
- The {{domxref("HTMLFormElement.submit_event", "submit")}} event is now represented by an object of type {{domxref("SubmitEvent")}} rather than a simple {{domxref("Event")}}. `SubmitEvent` includes a new {{domxref("SubmitEvent.submitter", "submitter")}} property, which is the {{domxref("Element")}} that was invoked to trigger the form submission. With this event, you can have a single handler for submit events that can discern which of multiple submit buttons or links was used to submit the form ({{bug(1588715)}}).
- Calling the {{domxref("HTMLElement.click", "click()")}} method on a detached element (one not part of a DOM tree) now functions normally, leading to a `click` event being sent to it ({{bug(1610821)}}).

#### Web animations API

Firefox 75 sees numerous additions to the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API):

- [Implicit to/from keyframes](/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats#implicit_tofrom_keyframes) are now supported, as is automatically removing filling animations that have been replaced by other indefinitely filling animations ({{bug(1618773)}}). This includes enabling of support for:

  - [`Animation.commitStyles()`](/en-US/docs/Web/API/Animation/commitStyles)
  - [`Animation.onremove`](/en-US/docs/Web/API/Animation/remove_event)
  - [`Animation.persist()`](/en-US/docs/Web/API/Animation/persist)
  - [`Animation.replaceState`](/en-US/docs/Web/API/Animation/replaceState)

- The [`Animation.timeline`](/en-US/docs/Web/API/Animation/timeline) getter, [`Document.timeline`](/en-US/docs/Web/API/Document/timeline), [`DocumentTimeline`](/en-US/docs/Web/API/DocumentTimeline), and [`AnimationTimeline`](/en-US/docs/Web/API/AnimationTimeline) features are now enabled by default ({{bug(1619178)}}).
- The [`Document.getAnimations()`](/en-US/docs/Web/API/Document/getAnimations) and [`Element.getAnimations()`](/en-US/docs/Web/API/Element/getAnimations) methods are now enabled by default ({{bug(1619821)}}).

#### Media, Web Audio, and WebRTC

- The [`RTCPeerConnection.setLocalDescription()`](/en-US/docs/Web/API/RTCPeerConnection/setLocalDescription) method can now be called without arguments, in which case the WebRTC runtime will try to create the new local session description itself ({{bug(1568292)}}).

### HTTP

_No changes._

### Security

- [CSP](/en-US/docs/Web/HTTP/CSP) nonces from non-script sources, such as CSS selectors, and  `.getAttribute("nonce")` calls, are now hidden. Instead, check the [`.nonce`](/en-US/docs/Web/API/HTMLElement/nonce) property to access nonces from scripts ({{bug(1374612)}}).

### Plugins

_No changes._

### Security

_No changes._

### WebDriver conformance (Marionette)

- Fixed a bug that always caused Marionette to initialize when Firefox starts-up. It has been limited to the command line argument and environment variable now ({{bug(1622012)}}).
- Fixed `WebDriver:Print` to no longer add extra margins to the document ({{bug(1616932)}}).
- Changed the preference value for `network.http.speculative-parallel-limit` to `0`, to no longer force-disable speculative connections ({{bug(1617869)}}).

### Other

_No changes._

## Changes for add-on developers

### API changes

- We've added some new settings in {{WebExtAPIRef("browserSettings")}} ({{bug(1286953)}}):

  - {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}} to control whether zooming is on a per-site or per-tab basis
  - {{WebExtAPIRef("browserSettings.zoomFullPage")}} to control whether zoom is applied to the entire page or to text only.

- The name of the file used when saving a PDF with {{WebExtAPIRef("tabs.saveAsPDF")}} can be specified using `toFileName` in the type `tabs.PageSettings`.({{bug(1483590)}})

### Manifest changes

- The "privacy" permission is now optional. ({{bug(1618399)}})

## Older versions

{{Firefox_for_developers(74)}}
