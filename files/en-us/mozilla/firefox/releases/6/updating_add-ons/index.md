---
title: Updating add-ons for Firefox 6
slug: Mozilla/Firefox/Releases/6/Updating_add-ons
page-type: guide
---

{{FirefoxSidebar}}

This article provides an overview of the changes you may need to make to your add-ons in order for them to work properly in Firefox 6. You can find a complete list of developer-related changes in Firefox 6 in [Firefox 6 for developers](/en-US/docs/Mozilla/Firefox/Releases/6).

## Do you need to do anything at all?

If your add-on is distributed on [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO), it's been checked by an automated compatibility verification tool. Add-ons that don't use APIs that changed in Firefox 6, and have no binary components (which need to be recompiled for every major Firefox release), have automatically been updated on AMO to indicate that they work in Firefox 6.

So you should start by visiting AMO and looking to see if your add-on needs any work done at all.

> [!NOTE]
> You should still test your add-on on Firefox 6, even if it's been automatically upgraded. There are edge cases that may not be automatically detected.

Once you've confirmed that you need to make changes, come on back to this page and read on.

## UI changes

The addition of the new Web Developer sub-menu in the Tools menu means that overlays that rely on the items that have been moved there will work differently than they used to. Your overlays will continue to work, but your items will not wind up where you expect them to. You should update your overlays to ensure that menu items go where you intend them to go.

Similarly, the order of menu items in the History and Bookmarks menus may also affect your add-on's overlays.

## Binary component compatibility

A bug in Firefox 5 meant that binary components were not properly being rejected if they were built for a different version of Gecko. This is fixed in Firefox 6; if your add-on's binary components don't load, check to be sure you've rebuilt them against the Gecko 6 SDK.

## Preferences

The `app.update.timer` preference was removed; you need to use the `app.update.timerMinimumDelay` preference instead.

Also, site-specific privacy preferences have been added. This will only impact add-ons that expect privacy related preferences (privacy, remember passwords, and so forth) being in the main preference window.

## DOM changes

The {{ domxref("window.top") }} property is now read only. This will affect your add-on if you have an undeclared variable named `top` in a chrome script.

## URL handling

`javascript:` and `data:` URLs entered into the location bar no longer inherit the principal of the currently loaded page. This probably won't affect many add-ons but if you run code that uses these URLs you may want to double check that everything is working as expected.

[Firefox bug 658949](https://bugzil.la/658949) changed how the hash (#) symbol is treated in data URLs which may break CSS stylesheets which contain such symbol if it is not escaped.

## Interfaces

A few interfaces that were deprecated or implementation details [have been removed](/en-US/docs/Mozilla/Firefox/Releases/6#removed_interfaces). If you rely on any of them, you need to revise your code.
