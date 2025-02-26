---
title: Firefox 9 for developers
slug: Mozilla/Firefox/Releases/9
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 9 was released for Windows on December 20, 2011. Mac and Linux version 9.0.1, which fixed a crashing bug discovered at the last minute, were released on December 21, 2011.

## Changes for web developers

### HTML

- The `value` attribute of {{ HTMLElement("li") }} now can be negative. Previously negative values were converted to 0.
- You can now [specify the start and stop time of media](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio#specifying_playback_range) in the URI of the media when using {{ HTMLElement("audio") }} and {{ HTMLElement("video") }} elements.
- {{ HTMLElement("input") }} and {{ HTMLElement("textarea") }} elements [now respect the value of the `lang` attribute](/en-US/docs/Web/HTML/Global_attributes/spellcheck#controlling_the_spellchecker_language) when invoking the spell checker.
- Firefox on Android now lets users snap photos with their phone's camera without leaving the browser when the {{ HTMLElement("input") }} element is used with `type="file"` and `accept="image/*"`.
- Windows Vista style PNG ICO images are now supported.
- Drawing images that use the [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute to request CORS access no longer incorrectly [taint the canvas](/en-US/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f) when CORS is granted.
- The value of the [`rowspan`](/en-US/docs/Web/HTML/Element/td#rowspan) attribute may now be as large as 65,534, up from 8190.

### CSS

- The {{ cssxref("font-stretch") }} property is now supported.
- The {{ cssxref("columns") }} property is now supported, with the `-moz` prefix. This is a shorthand for the following properties: {{ cssxref("column-width") }} and {{ cssxref("column-count") }}.
- When a stylesheet included using the {{ HTMLElement("link") }} element has been fully loaded and parsed (but not yet applied to the document), a [`load` event](/en-US/docs/Web/HTML/Element/link#stylesheet_load_events) is now fired. Also, if an error occurs processing a style sheet, an `error` event is fired.
- You can now specify overflow settings for both the left and right edges of content using a new two-value syntax for {{ cssxref("text-overflow") }}.

### JavaScript

_No change._

### DOM

- [Using fullscreen mode](/en-US/docs/Web/API/Fullscreen_API)
  - : The new fullscreen API provides a way to present content using the entire screen, with no browser interface. This is great for video and games. This API is currently experimental and prefixed.

<!---->

- The {{ domxref("Node.contains()") }} method is now implemented; this lets you determine if a given node is a descendant of another node.
- The {{ domxref("Node.parentElement") }} attribute has been implemented; this returns the parent {{ domxref("Element") }} of a DOM node, or `null` if the parent isn't an element.
- DOM Level 3 [composition events](/en-US/docs/Web/API/CompositionEvent) are now supported.
- The {{ domxref("Document.scripts") }} attribute has been implemented; this returns an {{ domxref("HTMLCollection") }} of all the {{ HTMLElement("script") }} elements on the document.
- The {{ domxref("Document.queryCommandSupported()") }} method has been implemented.
- The set of events that can be listened for on {{ HTMLElement("body") }} elements has been revised to match the latest draft of the HTML5 specification. The list of events in the [DOM event reference](/en-US/docs/Web/Events) reflects which events can be listened for on {{ HTMLElement("body") }}.
- The `readystatechange` event is now fired only on the {{ domxref("Document") }}, as intended.
- Event handlers are now implemented as standard IDL interfaces. For most cases, this won't affect content, but there are exceptions.
- A new response type, "`moz-json`", has been added to `XMLHttpRequest`, letting `XMLHttpRequest` automatically parse [JSON](/en-US/docs/Glossary/JSON) strings for you; when you request this type, a returned JSON string is parsed, so that the value of the `response` property is the resulting JavaScript object.
- [`XMLHttpRequest` "progress" events](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) are now reliably sent for every chunk of data received; in the past it was possible for the last chunk of data received to not fire a "progress" event. Now you can track progress by following only "progress" events, instead of also having to monitor "load" events to detect the receipt of the last chunk of data.
- In the past, calling [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) with a `null` listener would throw an exception. Now it returns without error and with no effect.
- The new {{ domxref("navigator.doNotTrack") }} property lets your content easily determine whether or not the user has enabled their do-no-track preference; if this value is "yes", you should not track the user.
- {{ domxref("Range") }} and {{ domxref("Selection") }} objects now behave according to their specifications when {{ domxref("Text.splitText()", "splitText()") }} and {{ domxref("Node.normalize", "normalize()") }} are called.
- The value of {{ domxref("Node.ownerDocument") }} for doctype nodes is now the document on which [`createDocumentType()`](/en-US/docs/Web/API/DOMImplementation/createDocumentType) was called to create the node, instead of `null`.
- `window.navigator.taintEnabled` has been removed; it has not been supported in many years.

### Workers

- Workers implemented in blob URLs were broken in Firefox 8, and work again starting in Firefox 9.

### WebGL

- The [WebGL](/en-US/docs/Web/API/WebGL_API) context `drawingBufferWidth` and `drawingBufferHeight` attributes are now supported.

### MathML

- The non-standard `restyle` value for the `actiontype` attribute on {{ MathMLElement("maction") }} elements has been removed.
- While still unsupported, using the `mlabeledtr` element no longer breaks rendering completely. See [Firefox bug 689641](https://bugzil.la/689641) for progress on actual support of this element.

### Networking

- You can now send the contents of [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) (that is, the contents of an [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) object) [using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#sending_typed_arrays_as_binary_data).
- WebSocket connections now permit non-characters in otherwise valid UTF-8 data frames to be received, instead of failing.
- The HTTP `Accept` header for XSLT requests has been changed to `*/*` for simplicity. Since fetching XSLT has always fallen back to `*/*` anyway, it made sense to simplify the initial request.
- Attempts by a server to use the `301 Moved Permanently` or `307 Temporary Redirect` response codes to redirect the user to a `javascript:` URI now [result in a "bad connection" error](/en-US/docs/Web/HTTP#more_on_redirection_responses) instead of actually redirecting. This prevents certain types of cross-site scripting attacks.
- Content served with an empty {{ HTTPHeader("Content-Disposition") }} were previously treated as if the {{ HTTPHeader("Content-Disposition") }} were "attachment"; this didn't always work as expected. These are now handled as if the {{ HTTPHeader("Content-Disposition") }} were "inline".
- The default maximum size of an item in the disk cache has been increased to 50 MB; previously, only items up to 5 MB were cached.

### Developer tools

- The web console now supports basic [string substitutions](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in its logging methods.
- You can now [create visually nested blocks of output](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in the web console, to help make it easier to read.

## Changes for Mozilla and add-on developers

See [Updating add-ons for Firefox 9](/en-US/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) for an overview of the changes you may need to make to get your add-ons working in Firefox 9.

### XUL

- The `<xul:tab>` element now has a `pending` attribute, whose value is `true`, when the tab is in the process of being restored by the session store service. This can be used for styling the tab in themes. The attribute isn't present on tabs that aren't pending.
- The `<xul:tab>` element now has an `unread` attribute, whose value is `true`, when the tab has changed since the last time it was the active tab or if it hasn't been selected since the current session began. The attribute isn't present on tabs that are not unread.
- You can now use a `<xul:panel>` as a drag image for DOM drag and drop operations. This lets you use the standard drag & drop API for [drag and drop of XUL content](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#using_xul_panels_as_drag_images).
- The `<xul:notificationbox>` element's `appendNotification`) method now lets you specify a callback that gets called for interesting events related to the notification box. Currently, the only event is "removed", which tells you the box has been removed from its window.

### JavaScript code module changes

- `FileUtils.jsm` now has a `File` constructor that returns an `nsIFile` object representing a file specified by its pathname.

### Service changes

- The content preference service now handles private mode browsing (see [Firefox bug 679784](https://bugzil.la/679784)).

### NSPR

- NSPR now has an "append" module, which lets you append new data to the end of an existing log.

### Interface changes

#### Removed interfaces

- `nsIGlobalHistory3` has been removed during streamlining of the Places and DocShell code.

#### Miscellaneous interface changes

- The `nsISound` interface has a new constant, `EVENT_EDITOR_MAX_LEN`. The allows for playing the system sound for when more characters than the maximum allowed are typed into a text field. Currently, this is only used on Windows.
- The `nsIScriptError2` interface has new `timeStamp` and `innerWindowID` properties; in addition, the `initWithWindowID()` method now takes an inner window ID instead of an outer window ID.
- The `nsIBidiKeyboard.haveBidiKeyboards` attribute has been added; this lets you determine if the system has at least one keyboard installed for each direction: left-to-right and right-to-left.
- The new `nsIEditor.isSelectionEditable` attribute lets you determine if the current selection anchor is editable. This helps to support cases where only parts of the document are editable, by letting you see if the current selection is in an editable section.
- The `nsIBrowserHistory.registerOpenPage()` and `nsIBrowserHistory.unregisterOpenPage()` methods have been removed as part of a performance overhaul in the Places system. You can use the corresponding methods in `mozIPlacesAutoComplete` instead.
- The `nsIDOMWindowUtils.wrapDOMFile()` method has been added; this returns a DOM {{ domxref("File") }} object for a given `nsIFile`.
- The `nsIChromeFrameMessageManager.removeDelayedFrameScript()` method was added to support removing delayed load scripts. Bootstrapped add-ons should use this, at shutdown, to remove any scripts it loaded using `nsIChromeFrameMessageManager.loadFrameScript()` with the delayed load flag set. This is exposed to add-ons as `browser.messageManager.removeDelayedFrameScript()`.
- The `nsIAppStartup` interface has a new `interrupted` attribute, which lets you know if the startup process was interrupted at any point by an interactive prompt. This can be helpful, for example, when timing startups during performance evaluation, to be able to drop numbers from sessions that were interrupted.
- The `nsIEditorSpellCheck` interface has been revised to support per-site selection of spell checker dictionaries.

### IDL parser

The IDL parser no longer includes support for the never fully-implemented notion of unique pointers.

### Build system changes

- The `--enable-application=standalone` option for building standalone XPConnect has been removed; it hasn't worked since 2007 anyway.
- Support for building Necko and Transformiix XSLT standalone has been removed; you can no longer use `--enable-application=network` or `--enable-application=content/xslt`.
- The build system now looks for `.mozconfig` at `$topsrcdir/.mozconfig` or `$topsrcdir/mozconfig`, and nowhere else, unless you override the `.mozconfig` path using the `MOZCONFIG` environment variable.
- The `xpidl` utility has been replaced in the SDK with `pyxpidl`.

### Other changes

- The spell checker no longer has an arbitrary 130-character word-length limit on the length of words it will attempt to spell check. This limit was previously in place to prevent crashes that were occurring in the spell checker, but the underlying bugs have since been fixed.
- You can now register components to add features to the {{ domxref("window.navigator") }} object by using the "JavaScript-navigator-property" category.

## See also

{{Firefox_for_developers}}
