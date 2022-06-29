---
title: Updating add-ons for Firefox 9
slug: Mozilla/Firefox/Releases/9/Updating_add-ons
tags:
  - Extensions
  - Firefox 9
  - Guide
---
{{FirefoxSidebar}}

Firefox 9 doesn't have a lot of changes that should be compatibility issues for add-on developers. However, there are a few possible items that might trip you up, so let's take a look.

## Do you need to do anything at all?

If your add-on is distributed on [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO), it's been checked by an automated compatibility verification tool. Add-ons that don't use APIs that changed in Firefox 8, and have no binary components (which [need to be recompiled for every major Firefox release](/en-US/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces)), have automatically been updated on AMO to indicate that they work in Firefox 9.

So you should start by visiting AMO and looking to see if your add-on needs any work done at all.

> **Note:** You should still test your add-on on Firefox 9, even if it's been automatically upgraded. There are edge cases that may not be automatically detected.

Once you've confirmed that you need to make changes, come on back to this page and read on.

## Bootstrapped add-ons can remove delayed-load scripts

If your add-on uses `nsIChromeFrameMessageManager.loadFrameScript()` with the delayed-load flag set, the script gets loaded into every frame created from that point on. This is great, except that until Firefox 9, there was no way to stop loading the script, so it would keep happening even after your add-on was shut down.

Starting in Firefox 9, you should call the new `nsIChromeFrameMessageManager.removeDelayedFrameScript()` method to stop loading your script in newly-created frames. You do this like this, for example:

```js
browser.messageManager.removeDelayedFrameScript("chrome://myextension/content/somescript.js");
```

## Interface changes

- The `nsIURL` interface has been changed a bit. The `nsIURL.param` attribute was removed, and the `nsIURLParser.parsePath()` method has two fewer arguments than it did previously.
- Two methods have been removed from `nsIBrowserHistory`: `registerOpenPage()` and `unregisterOpenPage()`. These methods had been deprecated.
- The `nsIEditorSpellCheck.saveDefaultDictionary()` method has been removed as part of supporting per-site spell check settings. Also, `nsIEditorSpellCheck.updateCurrentDictionary()` no longer takes a parameter.
- The `nsIGlobalHistory3` interface has been removed. Its functionality was of limited (if any) use to add-ons, so this shouldn't affect anyone.
- Several specialized channels' properties attributes have been merged into the base `nsIChannel` interface. This shouldn't affect compatibility at all, since those interfaces inherit from `nsIChannel` anyway.

## Preference changes

The `geo.wifi.*` preferences no longer have default values, although they're honored if they exist. If your code reads these without handling the case where they don't exist, you need to update your code to handle the exception that gets thrown when they're not present.

## XPConnect changes

`nodePrincipal` and `baseURIObject` have been moved from `nsDOMClassInfo` to `XrayWrapper`. This shouldn't affect many add-ons, since it would only be an issue if they try to access these properties on DOM {{ domxref("Node") }} objects from unprivileged script that have requested XPConnect privileges using `enablePrivilege()`.

## DOM changes

- The long-obsolete method `Navigator.taintEnabled()` has been removed. This hasn't done anything useful in a very long time, but was often used in browser detection scripts, since it was Netscape-specific. Calling this method throws an exception starting in Firefox 9.
- Event handlers are now implemented as standard IDL interfaces. For most cases, this won't affect you, but [there are exceptions](/en-US/docs/Web/Events/Event_handlers#event_handler_changes_in_firefox_9).

## Other changes that may affect binary compatibility

These changes are notable in that they may affect binary XPCOM components. These will need rebuilding anyway, since that's required for every major release of Firefox, but could introduce compile-time errors, so they're worth noting in particular.

- The `nsIDOMHTMLDocument` interface now has a new `scripts` attribute, which implements the {{ domxref("Document.scripts") }} attribute.
- The `nsIJumpListShortcut.iconImageUri()` method has been added, to make it possible to establish favicons on jump list URI entries on Windows.

## Theme changes

The `pending` attribute has been added to the `<tab>` element. If this attribute is present, the tab is in the process of being restored by the session store service. You can use that to style the tab during the restore process. It's worth noting that if the user has turned on the "Don't load tabs until selected" preference, the `pending` attribute is set on tabs until they get loaded.

Similarly, tabs also now have an `unread` attribute; this property, if present, indicates that the tab has changed since the last time it was the active tab. You can use this to style tabs differently when they have changed since the last time the user looked at them. This is also present on tabs that have not yet been looked at during the current session.
