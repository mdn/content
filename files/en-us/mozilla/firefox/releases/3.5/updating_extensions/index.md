---
title: Updating extensions for Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Updating_extensions
page-type: guide
---

{{FirefoxSidebar}}

This article provides helpful information to extension developers trying to update their extensions to work properly in Firefox 3.5.

## Update basics

This section covers the basics of what you need to do whenever you update an extension for a new version of Firefox.

### Test your extension

Start by editing your extension's `install.rdf` file, updating `maxVersion` to 3.5b4 (if you're testing on Firefox 3.5 beta 4), and increase your extension's `version`.

Then create a new Firefox profile so that your testing doesn't risk your usual profile. Navigate to the directory containing Firefox, then issue the command:

```bash
firefox -createProfile testBeta4
```

On the Mac, you need to navigate all the way into the Firefox application bundle:

```bash
cd /Applications/Firefox.app/Contents/MacOS/
firefox -createProfile testBeta4
```

Launch Firefox using the new profile by issuing this command on the command line:

```bash
firefox -P testBeta4
```

Test your extension thoroughly. We suggest you set the following preferences to `true` in order to be alerted to any JavaScript warnings or exceptions:

- `javascript.options.strict`
- `javascript.options.showInConsole`

### Update your extension

If you run into any problems while testing, update your code to fix the issues. This article contains useful information about things that may require some work.

Once you've done that, try using your extension again, this time with your regular profile. This will help to ensure compatibility with any existing saved data.

### Update your extension on addons.mozilla.org

Finally, it's time to release your updated extension. If your extension didn't need any code changes you can log into the AMO dashboard and update the compatibility version there. Otherwise, you'll need to upload a new version to AMO.

See [Submitting an add-on to AMO](/en-US/docs/Submitting_an_add-on_to_AMO) for additional information.

## Accessing the Places database

Prior to Firefox 3.5, accessing the Places database directly using the [Storage API](/en-US/docs/Storage) required a little bit of trickery:

```js
var places = Components.classes["@mozilla.org/file/directory_service;1"]
  .getService(Components.interfaces.nsIProperties)
  .get("ProfD", Components.interfaces.nsIFile);
places.append("places.sqlite");
var db = Components.classes["@mozilla.org/storage/service;1"]
  .getService(Components.interfaces.mozIStorageService)
  .openDatabase(places);
```

This builds a path to the `places.sqlite` database file manually, then opens the file for Storage access.

Firefox 3.5 adds a dedicated service that offers a convenient way to access the Places database; the above technique does not work in Firefox 3.5 or later.

```js
var db = Components.classes[
  "@mozilla.org/browser/nav-history-service;1"
].getService(Components.interfaces.nsPIPlacesDatabase).DBConnection;
```

## Search textboxes

The [`textbox`](/en-US/docs/XUL/textbox) type `timed` is deprecated; instead, you should use `search`.

In Firefox 3, you might have used:

```xml
<textbox type="timed" timeout="1000" oncommand="alert(this.value);"/>
```

In Firefox 3.5, you should change this to:

```xml
<textbox type="search" timeout="1000" oncommand="alert(this.value);"/>
```

## JSON

The JSON.jsm JavaScript module was dropped in Firefox 3.5 in favor of native JSON object support. For details, see [Using JSON in Firefox](/en-US/Using_native_JSON) and the article on [JSON](/en-US/docs/Glossary/JSON) for a more general overview of JSON and how to use it in various versions of Firefox.

To ensure compatibility with both Firefox 3 and Firefox 3.5, you can do the following:

```js
if (typeof JSON === "undefined") {
  Components.utils.import("resource://gre/modules/JSON.jsm");
  JSON.parse = JSON.fromString;
  JSON.stringify = JSON.toString;
}
```

This works by importing the JSON.jsm JavaScript module if JSON isn't supported natively, then mapping the methods provided by that module to the ones used by native JSON, so that the same calls work.

You can also bypass this issue by using the `nsIJSON` interface directly.

## Changes to context menus

In order to support the new audio and video features added in Gecko 1.9.1, the `nsContextMenu` class has renamed the `imageURL` getter to `mediaURL`; however, `imageURL` was added back in on June 9, 2009.

## Changes to chrome registration

Firefox 3.5 closes a security hole that made it possible to use remote chrome. This will affect any add-on that includes a resource in their `chrome.manifest` file that references a website, data or resource URLs. See [Security changes in Firefox 3.5](/en-US/Security_changes_in_Firefox_3.5) for details.

## Getting a load context from a request

Previously, it was possible to get a load context from a request by querying various docShell APIs. In particular, it was a common practice to use `notificationCallbacks.getInterface(nsIDOMWindow)` to get the window object associated with the load. While the older approach may work in some circumstances, it is not recommended to use it anymore ([details](https://bugzil.la/457153#c16)).

This correct and reliable way to do this is to use an `nsILoadContext` (see the [interface definition](http://mxr.mozilla.org/mozilla-central/source/docshell/base/nsILoadContext.idl) on mxr).

From JavaScript, you do it like this:

```js
var loadContext;
try {
  loadContext = aRequest
    .QueryInterface(Components.interfaces.nsIChannel) // aRequest is equivalent to aSubject from observe
    .notificationCallbacks.getInterface(Components.interfaces.nsILoadContext);
} catch (ex) {
  try {
    loadContext = aRequest.loadGroup.notificationCallbacks.getInterface(
      Components.interfaces.nsILoadContext,
    );
  } catch (ex) {
    loadContext = null;
  }
}
// you can now use |loadContext.associatedWindow| to get the Window object
```

Another JavaScript example if the above does not work:

```js
// SOURCE: http://stackoverflow.com/questions/10719606/is-it-possible-to-know-the-target-domwindow-for-an-httprequest

function getWindowForRequest(request) {
  if (request instanceof Components.interfaces.nsIRequest) {
    try {
      if (request.notificationCallbacks) {
        return request.notificationCallbacks.getInterface(
          Components.interfaces.nsILoadContext,
        ).associatedWindow;
      }
    } catch (e) {}
    try {
      if (request.loadGroup && request.loadGroup.notificationCallbacks) {
        return request.loadGroup.notificationCallbacks.getInterface(
          Components.interfaces.nsILoadContext,
        ).associatedWindow;
      }
    } catch (e) {}
  }
  return null;
}
```

From C++, you can do it like this:

```cpp
nsCOMPtr<nsILoadContext> loadContext;
nsCOMPtr<nsIChannel> channel = do_QueryInterface(aRequest);
NS_QueryNotificationCallbacks(channel, loadContext);
```

## Customizable toolbars

In Firefox 3.5, customizable toolbar behavior has changed such that the `<xul:toolbar/>` binding now removes toolbar items from its associated `<xul:toolbarpalette/>` and adds them to the toolbar, rather than cloning them and copying them to the toolbar. This means that the palette will now only contain items not present on the toolbar, as opposed to the previous behavior of containing all customizable elements whether or not they were displayed on the toolbar. This might cause trouble for addons that depend on being able to retrieve all customizable toolbar items from the `<xul:toolbarpalette/>`, or which attempt to dynamically insert items into the palette to make them available during toolbar customization. More information is available in [Webkit bug 407725](https://bugzil.la/407725) and [Webkit bug 467045](https://bugzil.la/467045).

## XPCNativeWrapper

Starting in Firefox 3.5, you can no longer use `data:` bindings in chrome packages that get `XPCNativeWrapper` automation. This resolves a potential security issue.

XUL documents now get `XPCNativeWrapper` treatment, so you now need to use the `getAttribute()` method to fetch attribute values instead of reading them directly.

If your extension is using `xpcnativewrappers=no` (which it shouldn't be doing in the first place, since it's not safe to do so), XBL from that extension will not be applied to documents which are using `XPCNativeWrapper` automation starting in Firefox 3.5.

## New capabilities of interest

### Listening to events on all tabs

Firefox 3.5 introduces support for adding and removing progress listeners that listen on all tabs. See [Listening to events on all tabs](/en-US/Listening_to_events_on_all_tabs) for details.

## For Theme developers

- Check [Theme changes in Firefox 3.1](/en-US/Theme_changes_in_Firefox_3.1).
- Go to the Mozillazine forum [Theme changes for FF3.1](https://forums.mozillazine.org/viewtopic.php?f=18&t=665138) to get an overview / listing of all changes between 3.0 and 3.1 that impact theme developers. This concerns new CSS features (like nth-child, -moz-box-shadow, etc.), changes to existing widgets, overall UI improvements, and new FF3.1 features (audio/video support, private browsing, extended session restore, box/window/text shadows).
