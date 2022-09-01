---
title: What's New in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
tags:
  - API
  - CSS
  - DOM
  - Extensions
  - Graphics
  - HTML
  - JavaScript
  - SVG
---
{{FirefoxSidebar}}

This page is based largely on [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (thanks Jesse).

### New Web Developer Features

#### HTML

- Elements with `tabindex="-1"` should be focusable
  - : Elements with a negative tabIndex attribute can now have focus, even though they are not in the tab order.
- Object should submit
  - : In accordance with the HTML4 specification, `<object>` elements can now be submitted as part of a form.

#### CSS

- CSS2 quotes nesting
  - : Starting with this release, the [`quotes` CSS2 property](https://www.w3.org/TR/CSS21/generate.html#quotes-specify) is fully supported, with the correct quote (depending on the nesting level) used for open-quote and close-quote.
- CSS3 `:only-child`
  - : This CSS3 selector allows [selecting an element](https://www.w3.org/TR/2001/CR-css3-selectors-20011113/#only-child-pseudo) that has no other elements as siblings in the DOM.
- CSS3 columns
  - : An experimental implementation of the proposed [CSS3 multicolumn layout](https://www.w3.org/TR/2001/WD-css3-multicol-20010118/) draft. This allows easily doing newspaper-like multicolumn presentation.
- CSS3 `overflow-x` and `overflow-y` properties
  - : These properties can be used to control the overflow behavior in the horizontal and vertical directions somewhat independently. For example, overflow in the horizontal direction could be hidden while overflow in the vertical direction can be scrolled to.
- CSS3 cursors
  - : More [mouse cursor names](https://www.w3.org/TR/css-ui-3/#cursor) are now supported.
- URI values on CSS `cursor` properties
  - : On Windows, OS/2 and Linux (Gtk+ 2.x) one can now use an arbitrary image as the mouse cursor while a given DOM node is being hovered.
    Any image format supported by Gecko can be used for the image.
    (SVG, animated GIF, and ANI cursors are not supported.)
    See {{CSSxRef("cursor")}} for a description of the feature.
- `-moz-outline-radius`
  - : CSS outlines can now have rounded corners.
- CSS `outline` property
  - : [CSS outlines](https://www.w3.org/TR/css-ui-3/#outline1) can now be used. These differ from borders in that they don't affect the page layout.
- Counters in CSS-generated content
  - : [CSS2 counters](https://www.w3.org/TR/CSS21/generate.html#counters) are now completely supported (the implementation doesn't match the current CSS2.1 draft, but matches the upcoming one). This allows automatic numbering of sections, headings, and so forth via stylesheets.

#### JavaScript and DOM

- Array extras
  - : New methods have been added to the Array object to facilitate common tasks. See [JavaScript 1.5 Array Object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text written in new documents created with document.open("text/plain") is now treated as text rather than HTML, so line breaks will remain intact and tags will not be parsed.
- XML Events
  - : "XML Events" is a W3C specification to provide XML languages with the ability to integrate declarative event listeners and event handlers.
- Cancelling keydown
  - : Cancelling the keydown event now properly cancels any corresponding keyup/keypress events, per the DOM specification.
- Accessibility APIs for DHTML
  - : Mozilla now allows DHTML authors to add role and state semantics to custom elements, and exposes that information via MSAA and ATK.
- DHTML Performance Fixes
  - : A number of changes were made to significantly improve DHTML speed and smoothness.

#### Graphics

- SVG Support
  - : SVG is W3C specification providing resolution-independent scalable vector graphics, along with a DOM. A technology preview of native SVG support is included in this release. Currently a subset of SVG 1.1 Full, missing functionality includes filters, declarative animation, and SVG defined fonts.
- `<canvas>` Support
  - : `<canvas>` is a scriptable drawing surface for dynamically creating bitmap graphics. For a further introduction, see [Drawing Graphics with Canvas](/en-US/Drawing_Graphics_with_Canvas).

#### Miscellaneous

- Support HTTP/1.1 408 response code
  - : A persistent connection is now correctly closed when a 408 response code (Request timeout) is received. The request is retried in a new connection.
- URIs always sent as UTF8
  - : URIs are now always sent to the server as UTF8, regardless of the linking page's encoding. This fixes images and links on sites with non-ASCII filenames.
- XForms support
  - : The [W3C's XML Forms](https://www.w3.org/MarkUp/Forms/) language allows writing complex forms in XML, and includes features that regular HTML forms do not have, such as client side validation against [XML Schema](https://www.w3.org/XML/Schema) and XML submission/retrieval. Support for XForms comes as an extension, see [Mozilla XForms Project Page](/en-US/docs/Archive/Web/XForms).

### New Extension Developer Features

- Hidden referrer column for history
  - : Extensions can now access the referer information for pages stored in the browser history. This feature can be used to provide alternate history views and other useful functionality. {{bug(128398) }}

- API for prioritizing HTTP connections
  - : The Mozilla networking library now supports the prioritization of connections to a specific server using `nsISupportsPriority`. {{bug(278531) }}

- API for managing user and UA stylesheets
  - : Extensions can now register stylesheet URIs as additional user and UA stylesheets. This means extensions no longer have to try to edit `userContent.css` to add styling (say for XBL binding attachment) to web pages. See [Using the Stylesheet Service](/en-US/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API for configuring proxies
  - : It is now possible for extensions to easily override the proxy configuration without affecting user-visible preferences. See `nsIProtocolProxyService`, `nsIProtocolProxyFilter`, and `nsIProtocolProxyCallback`. {{bug(282442) }}

- Dynamic Overlays
  - : Loading of XUL overlays after the document has been displayed is now supported. See `nsIDOMXULDocument`. {{bug(282103) }}

- E4X
  - : The Mozilla JavaScript engine now supports ECMAScript for XML (E4X), a draft ECMA standard that adds native XML datatypes to the language and provides operators for common XML operations. See [the ECMA specification](https://www.ecma-international.org/publications/standards/Ecma-357.htm). {{bug(246441)}}

- Translucent Windows (Windows/Linux)
  - : On Windows and Linux, XUL windows with a transparent background are now supported. This allows whatever is below the window to shine through the window background.

- Adding tokens to the User-Agent string
  - : It is now possible for applications, extensions, and vendors to all add tokens to the User-Agent string (using default preferences) without overwriting each other.
    See [documentation](/en-US/docs/Web/HTTP/Headers/User-Agent). {{bug(274928)}}

- Toolkit chrome registry
  - : Chrome registration has been significantly improved to use simple plaintext chrome registration manifests, and no longer keeps the chrome.rdf/overlayinfo cache.
    See [Chrome Registration](/en-US/docs/Mozilla/Chrome_Registration).

- Extension Manager
  - : Following are the new features:
    - It is now possible to have Extensions outside the profile and application Extensions directories.
    - Installing extensions can now be done by dropping an XPI into the profile or application Extensions directory.
    - Uninstalling an Extension now involves deleting its folder from the profile or application Extensions directory.

- New Preferences bindings
  - : These [new bindings](http://forums.mozillazine.org/viewtopic.php?t=263028) make it easier to create preferences windows for extensions. The new preferences windows support instant-apply behavior, which is enabled by default on Mac and Linux.

- API for implementing new command-line switches
  - : An API has been introduced so that extensions can easily handle complex command-line flags. This API will be stable and frozen for 1.1. See the interfaces `nsICommandLine` and `nsICommandLineHandler`.

- XTF Support
  - : The eXtensible Tag Framework allows adding support for new namespaces using XPCOM components to Mozilla (written in JavaScript or C++). See [XTF Home Page](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### New Browser Features

#### Improved Preferences

- Instant Apply behavior on Linux and Mac
  - : Changes made in the Preferences window now apply immediately, in line with typical behavior in other Mac OS X and GNOME applications. This changes conforms with the Apple and GNOME Human Interface Guidelines.
- Searchable download actions manager
  - : It is possible to search the Download Actions manager by file extension or description.
- Searchable cookie manager
  - : Cookies can be searched by hostname/domain and cookie name, and are organized by hostname in a tree format instead of a flat list.

#### Deployment

- Firefox MSI package
  - : The new MSI installation package facilitates distributed installation and provides greater flexibility to network administrators wanting to deploy Firefox in a corporate environment.
- Support for profile "temp" directory on local filesystem
  - : It is now possible to store the network cache (copies of visited webpages) and the XUL fastload cache (precompiled user interface code) on a local disk, while keeping the rest of the profile data on a network drive. This will increase performance and reduce network traffic for users in a network environment.

#### Other

- "Sanitize" privacy feature
  - : The "Sanitize" feature provides an easy way to quickly remove browsing history, cookies, cache, saved form information, and other personal data. The items to be removed can be customized, and the feature can be activated using either a keyboard shortcut or through a menu item.
- Image thumbnails as tab icons
  - : When viewing images, tab icons now display thumbnails of the displayed image.
- Fast back (and forward)
  - : This very experimental feature allows much faster session history navigation. The feature is off by default but can be enabled for testing purposes by setting the `browser.sessionhistory.max_viewers` preference to a nonzero number.
- Anonymous FTP login failure behavior
  - : FTP users are now prompted to input a name and password if anonymous access fails.
- CSS at-rule for matching on site/document URL
  - : The new `@-moz-document` rule gives users the ability to match page objects per-site, using CSS. This makes it possible to include site-specific rules in user style sheets (userContent.css). [David Baron's post to `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) explains how the rule can be used.
