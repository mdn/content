---
title: The add-on bar
slug: Mozilla/Firefox/Releases/4/The_add-on_bar
page-type: guide
---

{{FirefoxSidebar}}

Firefox 4 eliminates the status bar from the bottom of the browser window in favor of a new toolbar located at the bottom of the window. This new toolbar, with the ID "addon-bar", is a standard XUL `<toolbar>`; add-ons can insert content into it, and the user can drag buttons into it while customizing their toolbars. This is the primary difference between the add-on bar and the old status bar; you can now put any XUL element into it, since it's a standard toolbar.

> [!NOTE]
> For the time being, there is a status bar shim included so that add-ons that expect the status bar to be present will still work.

## Adding an element to the add-on bar

The add-on bar is an XUL toolbar with the ID "addon-bar". The code below locates the most-recently used window and adds a new item to the add-on bar that displays the text "Hello world!" using an XUL `<label>` element.

```js
// Find the most recently used window

var mediator = Components.classes[
  "@mozilla.org/appshell/window-mediator;1"
].getService(Components.interfaces.nsIWindowMediator);
var doc = mediator.getMostRecentWindow("navigator:browser").document;

// Get the add-on bar for that window

var addonBar = doc.getElementById("addon-bar");

// Construct the new toolbar item

var newItem = doc.createElement("toolbaritem");
var itemLabel = doc.createElement("label");

// Add the item to the toolbar and set its text label

newItem.appendChild(itemLabel);
addonBar.appendChild(newItem);
itemLabel.value = "Hello world!";
```

To add the button only once, create a bool pref to check if it is the first run. [For example](https://stackoverflow.com/questions/4978188/how-do-i-detect-a-first-run-in-firefox-a-addon/4978512#4978512):

```js
var firstRun = Services.prefs.getBoolPref("extensions.YOUREXT.firstRun");

var curVersion = "0.0.0";

if (firstRun) {
  Services.prefs.setBoolPref("extensions.YOUREXT.firstRun", false);
  Services.prefs.setCharPref("extensions.YOUREXT.installedVersion", curVersion);
  /* Code related to firstRun */
} else {
  try {
    var installedVersion = Services.prefs.getCharPref(
      "extensions.YOUREXT.installedVersion",
    );
    if (curVersion > installedVersion) {
      Services.prefs.setCharPref(
        "extensions.YOUREXT.installedVersion",
        curVersion,
      );
      /* Code related to upgrade */
    }
  } catch (ex) {
    /* Code related to a reinstall */
  }
}
```

## How to use one overlay per Firefox version

Adding support for the add-on bar while staying compatible with Firefox 3.6 and older will require using two overlays. The [chrome.manifest](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/en-US/docs/Mozilla/Chrome_Registration) file can specify which file is used by which Firefox version by using [manifest flags](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/en-US/docs/Mozilla/Chrome_Registration#Manifest_Flags):

```plain
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlay-old.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion<4.0
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlay.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion>=4.0
```

Note: the appversion has to be at least 2 digits long or it won't work with versions of Gecko before 1.8.0.13 and 1.8.1.5.

### Adding a button by default

See: [Adding a button by default](https://web.archive.org/web/20191010115941/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Code_snippets/Toolbar#Adding_button_by_default)

## Appearance differences

- Since the browser no longer occupies a large percentage of the bar with status information, the entire area is available for add-ons to use.
- The add-on bar is empty and hidden by default; the user must elect to make it visible.
- If a restartless add-on installs itself to the add-on bar directly and the bar is not already visible, the bar becomes visible automatically.
- If uninstalling a restartless add-on makes the number of items in the add-on bar become zero, the bar is hidden automatically.

## See also

- The [Firefox 4 add-on bar for developers](https://web.archive.org/web/20110129042912/https://mike.kaply.com/2011/01/25/the-firefox-4-add-on-bar-for-developers), by Mike Kaply
