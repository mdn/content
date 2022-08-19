---
title: Updating extensions for Firefox 4
slug: Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4
tags:
  - '4'
  - Add-ons
  - Extensions
  - Firefox
  - Firefox 4
  - Gecko 2.0
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article offers details on changes in Firefox 4 that may impact existing extensions.

## User interface changes

### The status bar

The status bar has been removed from Firefox 4, with a new add-on bar added in its place. See [The add-on bar](/en-US/docs/Mozilla/Firefox/Releases/4/The_add-on_bar) for details.

### Toolbars

#### Creating toolbars

If your add-on creates a new toolbar using an overlay, your toolbar may not show up. This happens when your `<toolbox>` element overlay is a child of the `<window>` element instead of a direct child of the overlay element. Move the toolbox out of the window element to fix this problem.

### The Firefox application menu

On Windows, the menu bar is now hidden by default. Instead, there's a single button that opens a simplified Firefox application menu. This menu includes the most used menu features, which makes the application easier to use. The menu bar can still be accessed by pressing the Alt key.

If your add-on is discoverable only through the menu bar, you'll want to overlay the application menu as well. There isn't a specific place to put extension menu items, so you should take a look at the menu and select the right place for your particular extension.

### Tabs

A number of changes were made to the `<tabbrowser>` element to help support app tabs and Panoramas, as well as to make the tab bar into a standard toolbar. Other changes that may break existing extensions include:

- The `TabClose`, `TabSelect`, and `TabOpen` events no longer bubble up to the `<tabbrowser>` element (`gBrowser`). Event listeners for those events should be added to `gBrowser.tabContainer` rather than to `gBrowser` directly.
- The tab context menu is no longer an anonymous child of the `<tabbrowser>`. It can therefore be overlaid directly with [XUL overlays](/en-US/docs/XUL_Overlays). It can also be accessed more directly in JavaScript via `gBrowser.tabContextMenu`. See [this blog post](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) for more details.

## XPCOM changes

Several changes have been made that affect add-ons and applications that include XPCOM components. See [XPCOM changes in Gecko 2](/en-US/docs/XPCOM/XPCOM_changes_in_Gecko_2.0) for details.

## The Add-on Manager

The overhauled Add-on Manager is implemented as a tab instead of in a separate window. Among the changes that affect your browser from a user experience perspective is that your add-on's icon can be 64x64 pixels now instead of 32x32. While 32x32 pixel icons still work, obviously your add-on will look better if it provides a 64x64 pixel icon instead. Fortunately, 64x64 icons are backward compatible and scale down well, so you can just switch instead of needing both sizes.

In addition, the back-end of the Add-on Manager was redesigned. The `nsIExtensionManager` interface is gone, as is the old RDF-based storage it used. Add-on metadata is now stored in an SQLite database, and the Add-on Manager is now a [JavaScript code module](/en-US/docs/JavaScript_code_modules) called [AddonManager](/en-US/docs/Addons/Add-on_Manager/AddonManager).

A key difference with the new API is that requesting add-on metadata is now asynchronous instead of synchronous; this applies to add-ons using FUEL as well, so all add-ons that request metadata about add-ons will need to be updated.

## Threading

You can no longer pass JavaScript objects between threads. This renders the Thread Manager mostly useless for add-on developers, unfortunately, and there aren't at this time many alternatives. It's possible that in the future the [`ChromeWorker`](/en-US/docs/DOM/ChromeWorker) will be improved to fill the void.

## Network redirects

The API for handling network redirects has been changed to be asynchronous; any add-ons registering in the "net-channel-event-sinks" category will need to be updated to use the new API `asyncOnChannelRedirect`.

## XPI unpacking

Firefox 4 [no longer extracts XPIs](https://bugzilla.mozilla.org/show_bug.cgi?id=533038) when installing extensions. It just places the XPI file in the user profile, and then reads the chrome files and others directly out of the XPI. A jar inside the XPI still works, but is no longer necessary, so that can make your development or build easier. This was done mainly for performance reasons on slow OSes, and allows better cache invalidation, which also helps developers. However, not all kinds of files can be read from within the XPI yet, so if your extension uses one of those, you need to specify [`<em:unpack>`](/en-US/Install_Manifests#unpack) in your install.rdf to cause Firefox to still extract your XPI and use single files, otherwise your extension will fail when trying to access these files.

If your extension only contains these types of files then you do not need to make any changes:

- `install.rdf`
- `chrome.manifest`
- `chrome` (including `content`, `locale`, `skin`)
- default preferences
- XPCOM components written in JavaScript

If your extension contains any of the following then you will need to include `<em:unpack>` in the install.rdf:

- Binary XPCOM components
- Shared libraries loaded with ctypes
- `searchplugins/` (which are supposed to be loaded automatically by Firefox)
- `dictionaries/`
- Window icons (might get [fixed](https://bugzilla.mozilla.org/show_bug.cgi?id=595462))

If your extension code accesses other files that you have packaged in the XPI then you will either need to include `<em:unpack>` in the install.rdf or you may be able to support packed installation by making some changes to your code. Any code that used getInstallLocation() and nsIFile will either need em:unpack or needs to be changed. You can use the method [`Addon.getResourceURI()`](/en-US/docs/Addons/Add-on_Manager/Addon#getResourceURI%28%29), it will return an `nsIURI` pointing to the requested file. If the extension is unpacked then it will be a `file://` URI. If the extension is packed then it will be a `jar://` URI. You can open streams to these URIs by opening a channel using the `nsIIOService` which will allow you to load the files contents without any unpacking.

## Child HWNDs have been removed

This should only affect a very small number of developers. In previous versions of Firefox, child `HWND`s were created on Windows for internal use. As a part of the work toward improving graphics performance, these are no longer created.

Unfortunately, a few extensions have been getting access to these `HWND`s and manipulating them directly; these extensions will no longer work in Firefox 4. We have put a few hacks in place to help certain pointing-device drivers and assistive technology software (screen readers, for example). However, we have decided against adding even more hacks to support extensions, which should never have been doing this in the first place.

If you maintain an extension that uses native components that rely on `HWND`s that no longer exist, you'll need to update your extension. There are two ways to do this.

The first, and better, solution is to stop accessing `HWND`s and instead use Web features or XUL to implement your extension. There are a lot of new features in Firefox 4 that make possible a lot of things that used to require native code, so you may no longer need to do this.

If you find that this doesn't work, and you still need to directly access `HWND`s, you may find that your only solution is to write an [NPAPI](/en-US/docs/NPAPI) plugin that does the work. This may be a lot of work, but it should work. Of course, this may not help you if the specific `HWND`s you were using no longer exist.

## Development and testing tips

### Caching

Because Firefox now caches code and other resources more aggressively, you'll want to be sure to purge the caches when you start up Firefox 4. Otherwise you may be testing obsolete pieces of your add-on. To do this, run Firefox with the `-purgecaches` command line option.

### The Profile Manager

The old Profile Manager tool will be getting removed from Firefox 4, although it hasn't been yet. This tool hasn't been updated for a long time and is missing features. On top of that, its presence is slowing down application startup.

A replacement to the profile manager is [available](ftp://ftp.mozilla.org/pub/utilities/profilemanager/). (See also {{bug("539524")}}). This new tool is independent of the browser itself, and more robust than the old Profile Manager.

### Installing extensions globally

The `-install-global-extension` and `-install-global-theme` command line options have been removed. Handling global installation has always been complicated, and discussions are in progress as to how to address the subject going forward. In the meantime, see [Installing extensions](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/) for information on ways to automatically install add-ons.

## See also

- [Making Your Add-on Compatible with Firefox 4](https://blog.mozilla.org/addons/2010/11/11/making-add-on-compatible-firefox-4/) (blog post)
