---
title: Firefox 23 for developers
slug: Mozilla/Firefox/Releases/23
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

## Changes for Web developers

### Security

- Mixed content blocking. Firefox will no longer load non-secure (http) resources on secure (https) pages ([Firefox bug 834836](https://bugzil.la/834836)).
- The standard syntax of [CSP](/en-US/docs/Web/HTTP/CSP) 1.0 policies are now implemented and enforced by default.

### Developer Tools

- A Network Panel has been added to the developer tools. This is more detailed view than the "Net" view option in the Web Console.
- Web Console has been renamed "Console", and includes the option to filter security errors/warnings.
- The new Toolbox Options lets you disable features, change light/dark theme, or enable Chrome/Remote debugging.

### HTML

- The `<blink>` element support is now completely dropped. The `<blink>` tag now implements the {{domxref("HTMLUnknownElement")}} interface ([Firefox bug 857820](https://bugzil.la/857820)).
- The `range` type of the {{HTMLElement("input")}} element ([`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range)) has been switched on by default ([Firefox bug 841950](https://bugzil.la/841950)).

### JavaScript

- The [`Object.defineProperty`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) method can now be used to redefine the `length` property of an [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) object.
- The option to disable JavaScript, including the options to allow moving windows/replace context menu, have been removed. You may still disable JavaScript by double clicking the "javascript.enabled" option in about:config.

### DOM

- D3E [`KeyboardEvent.key`](/en-US/docs/Web/API/KeyboardEvent#key_names_and_char_values) is now supported, but only for non-printable keys ([Firefox bug 842927](https://bugzil.la/842927)).
- The `title` attribute of {{domxref("DOMImplementation.createHTMLDocument")}} is now optional as per updated DOM specification.
- The ability to add a sidebar panel (`window.sidebar.addPanel`) has been dropped ([Firefox bug 691647](https://bugzil.la/691647)).
- The unprefixed {{domxref("Window.requestAnimationFrame")}} and {{domxref("Window.cancelAnimationFrame")}} methods has been added ([Firefox bug 704063](https://bugzil.la/704063)). The unprefixed {{domxref("Window.requestAnimationFrame")}} receives a {{domxref("DOMHighResTimeStamp")}} as argument; the prefixed version receives a timestamp in milliseconds ([Firefox bug 753453](https://bugzil.la/753453)).
- The text argument for {{domxref("window.alert")}} and {{domxref("window.confirm")}} is now optional ([Firefox bug 861605](https://bugzil.la/861605)).
- The {{domxref("HTMLMediaElement.initialTime")}} property, removed from the spec, is no more supported ([Firefox bug 742537](https://bugzil.la/742537)).
- The {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}} constructor has been added ([Firefox bug 848293](https://bugzil.la/848293)).
- The {{domxref("AnimationEvent.pseudoElement")}} property has been implemented ([Firefox bug 848293](https://bugzil.la/848293)).
- The {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}} constructor has been added ([Firefox bug 848291](https://bugzil.la/848291)).
- The {{domxref("TransitionEvent.pseudoElement")}} property has been implemented ([Firefox bug 848291](https://bugzil.la/848291)).
- The non-standard `TransitionEvent.initTransitionEvent()` and `AnimationEvent.initAnimationEvent()` have been removed ([Firefox bug 868751](https://bugzil.la/868751)).

### WebRTC

- Instead of including usernames in the {{domxref("RTCIceServer.url")}} property (such as stun:username\@stunserver.example.com), you now need to use the new {{domxref("RTCIceServer.username")}} property.

### CSS

- The blink effect for `text-decoration: blink;` has no more effect, but is still a valid value ([Firefox bug 857820](https://bugzil.la/857820)).
- In-flow {{cssxref("::after")}} and {{cssxref("::before")}} pseudo-elements are now flex items ([Firefox bug 867454](https://bugzil.la/867454)).
- The way to compute [viewport units](/en-US/docs/Web/CSS/length#viewport-percentage_lengths) has been changed. In conjunction with `overflow:auto`, space taken by eventual scrollbars is not subtracted from the viewport, whereas in the case of `overflow:scroll`, it is. ([Firefox bug 811403](https://bugzil.la/811403))

### MathML

- Negative widths for the {{MathMLElement("mspace")}} element has been implemented ([Firefox bug 717546](https://bugzil.la/717546)).
- The {{MathMLElement("semantics")}} element now determines the visible child as described in the MathML3 specification.

## Changes for addon and Mozilla developers

### Firefox developer tools

Addons that overlay chrome://browser/content/debugger.xul must now overlay chrome://browser/content/devtools/debugger.xul. You may add references to both these files in chrome.manifest for compatibility.

## See also

- [Firefox 23 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/23.0a2/auroranotes/)

### Older versions

{{Firefox_for_developers('22')}}
