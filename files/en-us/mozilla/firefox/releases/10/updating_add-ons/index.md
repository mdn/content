---
title: Updating add-ons for Firefox 10
slug: Mozilla/Firefox/Releases/10/Updating_add-ons
page-type: guide
---

{{FirefoxSidebar}}

Although a lot of things have changed in Firefox 10 that, in theory, can cause add-on compatibility breakage, most of them are relatively obscure, so they're not very likely to affect you. This article will help guide you as you update your add-on.

## Compatible by default

The first and most important thing to note is that starting in Firefox 10, add-ons are assumed to be compatible by default. Unless you use the [`<em:strictCompatibility>`](/en-US/docs/Install_Manifests#strictcompatibility) flag in your manifest, Firefox will no longer mark your add-on as incompatible after an upgrade to Firefox 10 or later. You can use that flag to ensure that an add-on that is likely to break will not try to run in updated copies of Firefox. It's worth noting that add-ons that have binary components will always be strictly checked for compatibility, since binary components always need to be recompiled for each major Firefox release.

> [!NOTE]
> You should still test your add-on on Firefox 10, even in the world of compatibility by default. Read over the rest of this article to see if there's anything you need to change.

## DOM changes

Some obsolete APIs have been removed from the DOM:

- {{ domxref("Node.isSameNode()") }}
  - : This is the removal that has the most likelihood to affect add-on developers, as it was fairly commonly used. You can now use the JavaScript `===` operator to compare nodes instead of this obsolete method. This method was made obsolete by the DOM4 specification.
- `text.isElementContentWhitespace`, `text.replaceWholeText()`

  - : These APIs were rendered obsolete by the DOM4 specification.

- {{ domxref("Document.xmlEncoding") }}, {{ domxref("Document.xmlStandalone") }}, {{ domxref("Document.xmlVersion") }}

  - : All of these APIs were rendered obsolete by the DOM4 specification. They were most frequently being used to detect whether the document being displayed was HTML or XML. See the article for {{ domxref("Document.xmlVersion") }} for a recommended way to test for this going forward.

## XPCOM and interface changes

The most significant change is that everywhere that previously used the [`PRBool`](/en-US/docs/PRBool) data type now uses the standard C++ `bool` type instead.

### Removed interfaces

The following interfaces have been removed:

- `nsIDOMNSHTMLFrameElement`
  - : This interface has been merged into the `nsIDOMHTMLFrameElement` interface.
- `nsIDOMNSHTMLElement`
  - : This interface has been merged into `nsIDOMHTMLElement`.
- `nsIDocumentViewer`
  - : This interface has been merged into `nsIContentViewer`

### Other interface changes

- `nsNavHistory` no longer implements the `nsICharsetResolver` interface. **Note that `nsICharsetResolver` is no longer used and is being removed in Firefox 11.0**.
- The `mozISpellCheckingEngine` and `nsIEditorSpellCheck` interfaces have been updated to let restartless add-ons add dictionaries to the spell checker. See [Using an external spell checker](/en-US/Using_an_External_Spell-checker) for details (note this article has not yet been updated, but will be soon).
- The `nsIBrowserHistory.lastPageVisited` attribute has been removed, as it hasn't been supported for some time.
- Several [IndexedDB](/en-US/docs/Web/API/IndexedDB_API) internal interfaces have changed to support revised APIs. This shouldn't affect you but is worth noting on the off chance you were doing something unusual.

## Other changes worth noting

- All binary components on Windows should be built with ASLR (address space layout randomization) support enabled. While this is not **yet** required, it may be in the future, and not enabling it results in a performance penalty.
- A bug in regular expression handling that was introduced in Firefox 7 has been fixed. This can change the result of some regular expressions, so be aware of it.
- You can now [dynamically load and unload chrome.manifest files in bootstrapped add-ons](/en-US/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).
- The `mouseenter` and `mouseleave` events are now supported.
