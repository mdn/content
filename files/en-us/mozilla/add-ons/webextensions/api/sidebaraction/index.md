---
title: sidebarAction
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction
page-type: webextension-api
browser-compat: webextensions.api.sidebarAction
---

{{AddonSidebar}}

Gets and sets properties of an extension's sidebar.

A [sidebar](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) is a pane displayed at the left or right of a web page. The browser provides a UI that enables the user to see the available sidebars and select one to display. An extension defines sidebars using the [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json key. The extension can then get and set the sidebar's properties using this API.

> [!NOTE]
> Chrome provides support for sidebars through the [`sidePanel` API](https://developer.chrome.com/docs/extensions/reference/api/sidePanel). This API is not compatible with `sidebarAction`.

The `sidebarAction` API is based on Opera's [sidebarAction API](https://help.opera.com/en/extensions/sidebar-action-api/) and closely modeled on the {{WebExtAPIRef("browserAction")}} API. However, Firefox has not implemented `setBadgeText()`, `getBadgeText()`, `setBadgeBackgroundColor()`, `getBadgeBackgroundColor()`, `onFocus`, and `onBlur`.

## Types

- {{WebExtAPIRef("sidebarAction.ImageDataType")}}
  - : Pixel data for an image. Must be an [`ImageData`](/en-US/docs/Web/API/ImageData) object (for example, from a {{htmlelement("canvas")}} element).

## Functions

- {{WebExtAPIRef("sidebarAction.close()")}}
  - : Closes the sidebar.
- {{WebExtAPIRef("sidebarAction.getPanel()")}}
  - : Gets the sidebar's panel.
- {{WebExtAPIRef("sidebarAction.getTitle()")}}
  - : Gets the sidebar's title.
- {{WebExtAPIRef("sidebarAction.isOpen()")}}
  - : Checks whether the sidebar is open.
- {{WebExtAPIRef("sidebarAction.open()")}}
  - : Opens the sidebar.
- {{WebExtAPIRef("sidebarAction.setIcon()")}}
  - : Sets the sidebar's icon.
- {{WebExtAPIRef("sidebarAction.setPanel()")}}
  - : Sets the sidebar's panel.
- {{WebExtAPIRef("sidebarAction.setTitle()")}}
  - : Sets the sidebar's title. This title is displayed in any UI the browser provides to list sidebars, such as a menu.
- {{WebExtAPIRef("sidebarAction.toggle()")}}
  - : Toggles the visibility of the sidebar.

## Examples

- [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page)
  {{WebExtExamples}}

## Browser compatibility

{{Compat}}
