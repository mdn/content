---
title: Firefox 2 for developers
short-title: Firefox 2
slug: Mozilla/Firefox/Releases/2
page-type: firefox-release-notes
sidebar: firefox
---

## New developer features in Firefox 2

Firefox 2 introduces a vast array of new features and capabilities. This article provides links to articles covering the new features.

### For website and application developers

- [Microsummaries](https://wiki.mozilla.org/Microsummaries)
  - : Microsummaries are regularly-updated succinct compilations of the most important information on web pages. Site and third-party developers can both provide them, and users can choose to display microsummaries instead of static titles when they bookmark pages with microsummaries.
- [Creating a Microsummary](https://web.archive.org/web/20210214003325/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Creating_a_microsummary)
  - : A tutorial on creating a microsummary generator.
- [Microsummary XML grammar reference](https://web.archive.org/web/20191011001930/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Microsummary_topics/XML_grammar_reference)
  - : A reference guide to the XML grammar used for creating microsummary generators.
- [Creating OpenSearch plugins for Firefox](/en-US/docs/Web/XML/Guides/OpenSearch)
  - : Firefox 2 supports the OpenSearch search engine format.
- [Creating MozSearch plugins](https://web.archive.org/web/20210411070858/https://developer.mozilla.org/en-US/docs/Mozilla/Creating_MozSearch_plugins)
  - : Firefox 2 supports MozSearch, a search plugin format based on OpenSearch, but intended only for internal use.
- [Supporting search suggestions in search plugins](https://web.archive.org/web/20191015161436/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Supporting_search_suggestions_in_search_plugins)
  - : How to make your MozSearch plugin support search suggestions, which appear in a drop-down list while typing in the search bar.
- [New in JavaScript 1.7](https://web.archive.org/web/20210704072534/https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/1.7)
  - : Firefox 2 supports JavaScript 1.7, which includes new features including `let`, destructuring assignment, generators and iterators, and array comprehensions.
- [WHATWG Client-side session and persistent storage (aka DOM Storage)](/en-US/docs/Web/API/Web_Storage_API)
  - : Client-side session and persistent storage allows web applications to store structured data on the client side.
- [SVG in Firefox](https://web.archive.org/web/20210413180914/https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_1.1_Support_in_Firefox)
  - : Firefox 2 improves Scalable Vector Graphics (SVG) support, implementing the `<textPath>` element and adding support for some attributes not previously supported.
- [Controlling spell checking in HTML forms](/en-US/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Firefox 2 includes support for inline spell checking in text areas and text fields. This article describes how to write your HTML to enable and disable spell checking on individual form elements.
- [Security in Firefox 2](/en-US/docs/Mozilla/Firefox/Releases/2/Security_changes)
  - : Firefox 2 has changes to which security protocols are enabled by default.

### For XUL and extension developers

- [Updating extensions for Firefox 2](/en-US/docs/Mozilla/Firefox/Releases/2/Updating_extensions)
  - : Covers how to get your existing extensions to work with Firefox 2.
- [Session store API](https://web.archive.org/web/20210401045237/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Session_store_API)
  - : Contributing items to be saved and restored across sessions in Firefox.
- [Feed content access API](https://web.archive.org/web/20191010031908/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/Feed_content_access_API)
  - : API that lets developers access and parse RSS and Atom feeds.
- [SAX support](https://web.archive.org/web/20210315122336/http://developer.mozilla.org/en-US/docs/Archive/SAX)
  - : Event-based XML parser API.
- [Adding search engines from web pages](/en-US/docs/Web/XML/Guides/OpenSearch)
  - : JavaScript code can instruct Firefox to install a new search engine plugin, which can be written using either OpenSearch or Sherlock format.
- [Using spell checking in XUL](https://web.archive.org/web/20191009211612/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Using_spell_checking_in_XUL)
  - : How to check the spelling of words or get a list of suggested spellings from code.
- [Adding phishing protection data providers](https://web.archive.org/web/20210219151809/https://developer.mozilla.org/en-US/docs/Mozilla/Adding_phishing_protection_data_providers)
  - : It's possible to enhance Firefox's phishing protection by adding additional data providers for the safe browsing system.
- [Adding feed readers to Firefox](/en-US/docs/Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox)
  - : You can add new feed readers to Firefox, whether web-based or application-based.
- [Storage](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Storage)
  - : Firefox 2 introduces mozStorage, an sqlite based database architecture.
- [Theme changes in Firefox 2](https://web.archive.org/web/20191005020825/https://developer.mozilla.org/en-US/Add-ons/Themes/Obsolete/Theme_changes_in_Firefox_2)
  - : Discusses the changes needed to update existing themes to work in Firefox 2.
- Textbox Improvements (Firefox 2.0.0.1 and higher only)
  - : The `<textbox>` now has a `reset()` method to reset the value of the textbox to the default value. The `defaultValue` property may be used to retrieve and modify the default value of the textbox ([Firefox bug 312867](https://bugzil.la/312867)). Supports an `editor` property to get the internal `nsIEditor` for the text field ([WebKit bug 312867](https://bugzil.la/312867)).

## New features for end users

Firefox 2 provides an enhanced version of the same clean user interface offered by previous versions, with improved security features to make your online experience safer and more convenient than ever.

### User experience

- **Inline spell checking for text areas** lets you compose with confidence in web forms.
- **Microsummaries** provide a way to create bookmarks that display information pulled from the site they refer to, updated automatically. Great for stock tickers, auction monitoring, and so forth.
- **Extension Manager user interface** has been enhanced.
- **Search engine manager** lets you rearrange and remove search engines shown in the search bar.
- **Tabbed browsing enhancements** include adding close buttons to each tab, adjustments to how Firefox decides which tab to bring you to when you close the current tab, and simplified preferences for tabs.
- **Autodetection of search engines** allows search engines that offer plugins for the Firefox search bar to offer to install their plugins for you.
- **Search suggestions** allow search engines to offer suggested search terms based on what you've typed so far in the search bar.

### Security and privacy

- **Phishing Protection** to warn users when the website you're looking at appears to be a forgery.
