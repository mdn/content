---
title: Full page zoom
slug: Mozilla/Firefox/Releases/3/Full_page_zoom
page-type: guide
---

{{FirefoxSidebar}}

Full page zoom (or just fullZoom) is a new feature in [Firefox 3](/en-US/docs/Mozilla/Firefox/Releases/3).

### Example (XUL:browser)

The following example demonstrates the use for the current focused browser window. This is the typical usage for a Firefox extension.

```js
var zoom = ZoomManager.getZoomForBrowser(gBrowser.selectedBrowser);
ZoomManager.enlarge();
ZoomManager.setZoomForBrowser(gBrowser.selectedBrowser, ZoomManager.MIN);
```

### Example (XUL:iframe)

Note: This is probably out of date.

You may use the fullZoom feature for a `<XUL:iframe>` as well. However, because an iframe doesn't have a markupDocumentViewer property, we need to get that first:

```js
var zoom = 1.5;
var iframe = document.getElementById("authorFrame");
var contViewer = iframe.docShell.contentViewer;
var docViewer = contViewer.QueryInterface(
  Components.interfaces.nsIMarkupDocumentViewer,
);
docViewer.fullZoom = zoom;
```

### References

- Page zoom extension by Ted Mielczarek [fullpagezoom.xpi](https://ted.mielczarek.org/code/mozilla/fullpagezoom.xpi) for latest Firefox 3.0 nightlies
- The [bugzilla bug](https://bugzil.la/4821) about fullZoom.
- `nsIMarkupDocumentViewer` Interface documentation.
