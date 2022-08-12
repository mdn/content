---
title: Work with the Bookmarks API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
tags:
  - Add-ons
  - Beginner
  - Bookmarks
  - Extensions
  - How-to
  - WebExtensions
---
{{AddonSidebar}}

Bookmarks enable users to collect and organize lists of web pages, so they can easily get back to their favorites. Using the Bookmarks API, your extensions can manipulate bookmarks in much the same way users can.

## Permissions

To make use of the Bookmarks API, you need to ask for the `"bookmarks"` permission in your extension's manifest.json file:

```json
"permissions": [
  "bookmarks"
],
```

## Features

The Bookmarks API lets your extension do the things users can do with bookmarks and includes functions for:

- Basic bookmark item manipulation, offering:

  - add ({{WebExtAPIRef("bookmarks.create")}}).
  - retrieve ({{WebExtAPIRef("bookmarks.get")}}).
  - update ({{WebExtAPIRef("bookmarks.update")}}).
  - move ({{WebExtAPIRef("bookmarks.move")}}).
  - delete ({{WebExtAPIRef("bookmarks.remove")}}).
  - search ({{WebExtAPIRef("bookmarks.search")}}).

- Obtaining a list of recently added bookmarks ({{WebExtAPIRef("bookmarks.getRecent")}}).
- Bookmark folder tree manipulation to:

  - get tree information ({{WebExtAPIRef("bookmarks.getTree")}}, {{WebExtAPIRef("bookmarks.getChildren")}}, and {{WebExtAPIRef("bookmarks.getSubTree")}}).
  - add branches ({{WebExtAPIRef("bookmarks.create")}}).
  - delete nodes ({{WebExtAPIRef("bookmarks.removeTree")}}).
  - move nodes ({{WebExtAPIRef("bookmarks.move")}}).

- Listening for bookmarks (or bookmark tree folders) events that:

  - add ({{WebExtAPIRef("bookmarks.onCreated")}}).
  - change ({{WebExtAPIRef("bookmarks.onChanged")}}).
  - move ({{WebExtAPIRef("bookmarks.onMoved")}}).
  - reorder ({{WebExtAPIRef("bookmarks.onChildrenReordered")}}).
  - remove ({{WebExtAPIRef("bookmarks.onRemoved")}}).

- Listening for bookmark imports, which can be used to suspend other bookmark processing while an import is in progress:

  - import started ({{WebExtAPIRef("bookmarks.onImportBegan")}}).
  - import finished ({{WebExtAPIRef("bookmarks.onImportEnded")}}).

## Example walkthrough

To gain an understanding of how to work with the Bookmarks API let's take a look at the [bookmark-it](https://github.com/mdn/webextensions-examples/tree/master/bookmark-it) example. This example adds a toolbar icon ({{WebExtAPIRef("browserAction")}}) which, when clicked, adds or removes the current page from bookmarks. If the page is bookmarked (or removed from bookmarks) in some other way, the icon is updated to show the state of the page's bookmarking.

This video shows the extension in action:

{{EmbedYouTube("hCDN0FotiFw")}}

### manifest.json

The [manifest.json](https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/manifest.json) describes the extension:

```json
{
  "manifest_version": 2,
  "name": "Bookmark it!",
  "version": "1.1",
  "description": "A simple bookmark button",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/bookmark-it",
```

Defines the icons that'll be used to represent the extension, in places such as the add-on manager.

```json
  "icons": {
    "48": "icons/bookmark-it.png",
    "96": "icons/bookmark-it@2x.png"
  },
```

Requests permissions. `"bookmarks"` is requested to enable use of the Bookmarks API. `"tabs"` is requested so that the active tab's URL and title can be read and used to create or find the page's bookmark. The need for the Tabs API to access these details means that you're unlikely to use the Bookmark API without the Tabs API.

```json
  "permissions": [
    "bookmarks",
    "tabs"
  ],
```

Sets up the basic toolbar button details. Most of the button's features will be set up in code after the page's bookmark status is known.

```json
  "browser_action": {
    "default_icon": "icons/star-empty-38.png",
    "default_title": "Bookmark it!"
  },
```

Defines the background script that'll add and remove the page's bookmark and set the characteristics of the toolbar button.

```json
  "background": {
    "scripts": ["background.js"]
  }

}
```

### background.js

As with any background script, [background.js](https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/background.js) is run as soon as the extension is started. Initially the script calls `updateActiveTab()` that starts by obtaining the `Tabs` object for the current tab, using {{WebExtAPIRef("tabs.query")}}, and passing the object to `updatetab()` with this code:

```js
  let gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);
```

`updatetab()` first passes the active tab's URL to `isSupportedProtocol()`:

```js
  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
```

`isSupportedProtocol()` determines if the URL displayed in the active tab is one that can be bookmarked. To extract the protocol from the tab's URL, the extension takes advantage of the [HTMLAnchorElement](/en-US/docs/Web/API/HTMLAnchorElement) by adding the tab's URL to an `<a>` element and then getting the protocol using the `protocol` property.

```js
  function isSupportedProtocol(urlString) {
    let supportedProtocols = ["https:", "http:", "file:"];
    let url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.includes(url.protocol);
  }
```

If the protocol is one supported by bookmarks, the extension determines if the tab's URL is already bookmarked and if it is, calls `updateIcon()`:

```js
      let searching = browser.bookmarks.search({url: currentTab.url});
      searching.then((bookmarks) => {
        currentBookmark = bookmarks[0];
        updateIcon();
```

`updateIcon()` sets the toolbar button's icon and title, depending on whether the URL is bookmarked or not.

```js
function updateIcon() {
  browser.browserAction.setIcon({
    path: currentBookmark ? {
      19: "icons/star-filled-19.png",
      38: "icons/star-filled-38.png"
    } : {
      19: "icons/star-empty-19.png",
      38: "icons/star-empty-38.png"
    },
    tabId: currentTab.id
  });
  browser.browserAction.setTitle({
    // Screen readers can see the title
    title: currentBookmark ? 'Unbookmark it!' : 'Bookmark it!',
    tabId: currentTab.id
  });
}
```

With the toolbar button initialized, the extension starts listening for a click on the toolbar button, calling `toggleBookmark()` when that happens.

```js
browser.browserAction.onClicked.addListener(toggleBookmark);
```

`toggleBookmark()` uses the result from the search made by `updateTabs()`, which looks for the presence of the URL in a bookmark, to determine whether to remove or add a bookmark for the current URL.

```js
function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
  } else {
    browser.bookmarks.create({title: currentTab.title, url: currentTab.url});
  }
}
```

To update the toolbar icon, the extension listens for the creation or removal of bookmarks. This approach has the benefit of capturing both the bookmark update made by the extension and any update made by the user outside the extension.

```js
// listen for bookmarks being created
browser.bookmarks.onCreated.addListener(updateActiveTab);

// listen for bookmarks being removed
browser.bookmarks.onRemoved.addListener(updateActiveTab);
```

Finally, the extension listens for a change to the active tab's URL, or the user switching to another tab or window. These actions could change the viewed URL and therefore the status of the extension's toolbar icon.

```js
// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);
```

## Learn more

If you want to learn more, check out the [Bookmarks API reference](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks).
