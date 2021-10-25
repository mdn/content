---
title: Full page zoom
slug: Mozilla/Firefox/Releases/3/Full_page_zoom
tags:
  - Extensions
  - Firefox 3
  - XUL
---
{{FirefoxSidebar}}

Full page zoom (or just fullZoom) is a new feature in [Firefox 3](/en-US/docs/Mozilla/Firefox/Releases/3).

### Example (XUL:browser)

The following example demonstrates the use for the current focused browser window. This is the typical usage for a Firefox extension.

    var zoom = ZoomManager.getZoomForBrowser(gBrowser.selectedBrowser);
    ZoomManager.enlarge();
    ZoomManager.setZoomForBrowser(gBrowser.selectedBrowser, ZoomManager.MIN);

### Example (XUL:iframe)

Note: This is probably out of date.

You may use the fullZoom feature for a [XUL:iframe](/en-US/docs/XUL/iframe) as well. However, because an iframe doesn't have a markupDocumentViewer property, we need to get that first:

    var zoom = 1.5;
    var iframe = document.getElementById("authorFrame");
    var contViewer = iframe.docShell.contentViewer;
    var docViewer = contViewer.QueryInterface(Components.interfaces.nsIMarkupDocumentViewer);
    docViewer.fullZoom = zoom;

### References

- Page zoom extension by Ted Mielczarek [fullpagezoom.xpi](https://ted.mielczarek.org/code/mozilla/fullpagezoom.xpi) for latest Firefox 3.0 nightlies
- [Glazoom extension](https://addons.mozilla.org/en-US/firefox/addon/6489) by Daniel Glazman for Firefox 3.0
- The [bugzilla bug](https://bugzilla.mozilla.org/show_bug.cgi?id=4821) about fullZoom.
- {{ Interface("nsIMarkupDocumentViewer") }} Interface documentation.
