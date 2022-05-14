---
title: Notable bugs fixed in Firefox 3
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
tags:
  - Firefox 3
---
{{FirefoxSidebar}}

This article offers a list of important bug fixes offered by Firefox 3 that are not necessarily obvious in the documentation.

- if an error occurs parsing an overlay, the overlay is not applied. Parse errors are logged to the error console. ({{ Bug(335755) }})
- bug fixed where `<menupopup>` elements can be placed inside a binding when attached to a menu or menu-like element. ({{ Bug(345896) }})
- the button's `dlgType` property now works properly. ({{ Bug(308591) }})
- the `canBubble` argument to {{ Domxref("event.initEvent") }} now works properly so that events can be fired which don't bubble. ({{ Bug(330190) }})
- the `DOMAttrModified` event now handles namespaced attributes properly. ({{ Bug(362391) }})
- XML processing instructions, such as `<?xml-stylesheet ?>`, are now added to a XUL document's DOM. This means {{ Domxref("document.firstChild") }} isn't guaranteed to be the root element, use {{ Domxref("document.documentElement") }} instead. Also, `<?xml-stylesheet ?>` and `<?xul-overlay ?>` processing instructions now have no effect outside the document prolog. ({{ Bug(319654) }})
- [`getElementsByAttributeNS()`](/en-US/docs/Mozilla/Tech/XUL/Method/getElementsByAttributeNS) functions have been added to XUL elements and documents. ({{ Bug(239976) }})
- event listeners are maintained when moving or removing an element from a XUL document. ({{ Bug(286619) }})
- mutation events are now fired for non-displayed documents. ({{ Bug(201236) }})
- various issues with elements drawing in the wrong order are fixed. ({{ Bug(317375) }})
- [`getElementsByTagName()`](/en-US/docs/DOM/element.getElementsByTagName) has been fixed to work correctly on subtrees that have elements with namespace prefixes in their tag names ({{ Bug(206053) }}).
- The `DOMNodeInserted` and `DOMNodeRemoved` events now properly apply to the correct nodes ({{ Bug(367164) }}).
- `\d`, one of special characters in regular expressions, has been fixed to match only Basic Latin alphabet digits (equivalent to `[0-9]`). ({{ Bug(378738) }})
- The image-sniffing-services category allows for image decoders implemented as extensions to correctly decode images sent with incorrect mime-types. ({{ Bug(391667) }})
- Right-clicks on form controls no longer brings up a context menu by default ({{ Bug(404536) }}.  See [Offering a context menu for form controls](/en-US/docs/Offering%20a%20context%20menu%20for%20form%20controls) to learn how to enable this on a case-by-case basis.

### See also

- [Firefox 3 for developers](/en-US/docs/Mozilla/Firefox/Releases/3)
