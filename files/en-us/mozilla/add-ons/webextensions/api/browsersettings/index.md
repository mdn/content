---
title: browserSettings
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings
page-type: webextension-api
browser-compat: webextensions.api.browserSettings
---

{{AddonSidebar}}

Enables an extension to modify certain global browser settings. Each property of this API is a {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object, providing the ability to modify a particular setting.

Because these are global settings, it's possible for extensions to conflict. See the documentation for [`BrowserSetting.set()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) for details of how conflicts are handled.

To use this API you need to have the "browserSettings" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Properties

- {{WebExtAPIRef("browserSettings.allowPopupsForUserEvents")}}
  - : Determines whether code running in web pages can display popups in response to user events.
- {{WebExtAPIRef("browserSettings.cacheEnabled")}}
  - : Determines whether the browser cache is enabled or not.
- {{WebExtAPIRef("browserSettings.closeTabsByDoubleClick")}}
  - : Determines whether the selected tab can be closed with a double click.
- {{WebExtAPIRef("browserSettings.colorManagement")}}
  - : Determines various settings for color management.
- {{WebExtAPIRef("browserSettings.contextMenuShowEvent")}}
  - : Determines the mouse event that triggers a context menu popup.
- {{WebExtAPIRef("browserSettings.ftpProtocolEnabled")}}
  - : Determines whether the FTP protocol is enabled.
- {{WebExtAPIRef("browserSettings.homepageOverride")}}
  - : Read the value of the browser's home page.
- {{WebExtAPIRef("browserSettings.imageAnimationBehavior")}}
  - : Determines how the browser treats animated images.
- {{WebExtAPIRef("browserSettings.newTabPageOverride")}}
  - : Reads the value of the browser's new tab page.
- {{WebExtAPIRef("browserSettings.newTabPosition")}}
  - : Controls the position of newly opened tabs relative to already open tabs.
- {{WebExtAPIRef("browserSettings.openBookmarksInNewTabs")}}
  - : Determines whether bookmarks are opened in the current tab or a new tab.
- {{WebExtAPIRef("browserSettings.openSearchResultsInNewTabs")}}
  - : Determines whether search results are opened in the current tab or a new tab.
- {{WebExtAPIRef("browserSettings.openUrlbarResultsInNewTabs")}}
  - : Determines whether address bar autocomplete suggestions are opened in the current tab or a new tab.
- {{WebExtAPIRef("browserSettings.overrideContentColorScheme")}}
  - : Controls whether to override the browser theme (light or dark) when setting pages' preferred color scheme.
- {{WebExtAPIRef("browserSettings.overrideDocumentColors")}}
  - : Controls whether the user-chosen colors override the page's colors.
- {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}}
  - : Read the highest and lowest versions of TLS supported by the browser.
- {{WebExtAPIRef("browserSettings.useDocumentFonts")}}
  - : Controls whether the browser will use the fonts specified by a web page or use only built-in fonts.
- {{WebExtAPIRef("browserSettings.webNotificationsDisabled")}}
  - : Prevents websites from showing notifications using the [`Notification`](/en-US/docs/Web/API/Notification) Web API.
- {{WebExtAPIRef("browserSettings.zoomFullPage")}}
  - : Controls whether zoom is applied to the entire page or to text only.
- {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}
  - : Controls whether page zoom is applied on a per-site or per-tab basis. If [`privacy.websites.resistFingerprinting`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites#resistfingerprinting) is true, this setting has no effect and zoom is applied on a per-tab basis.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}
