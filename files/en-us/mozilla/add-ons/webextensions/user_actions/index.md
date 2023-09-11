---
title: User actions
slug: Mozilla/Add-ons/WebExtensions/User_actions
page-type: guide
---

{{AddonSidebar}}

Some WebExtension APIs perform functions that are generally performed as a result of a user action. For example:

- a browser action with a popup will display the popup when the user clicks it, but there's also a {{WebExtAPIRef("browserAction.openPopup")}} API enabling an extension to open the popup programmatically.
- if an extension adds a sidebar, it is typically opened by the user via some part of the browser's built-in user interface, such as the View/Sidebar menu. But there's also a {{WebExtAPIRef("sidebarAction.open")}} API enabling an extension to open their sidebar programmatically.

To follow the principle of "no surprises", APIs like this can only be called from inside the handler for a user action. User actions include the following:

- Clicking the extension's browser action or page action.
- Selecting a context menu item defined by the extension.
- Activating a keyboard shortcut defined by the extension (this only treated as a user action from Firefox 63 onwards).
- Clicking a button in a page bundled with the extension.

For example:

```js
function handleClick() {
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```

Note that user actions in normal web pages are not treated as user actions for this purpose. For example, if a user clicks a button in a normal web page, and a content script has added a click handler for that button and in that handler sends a message to the extension's background page, then the background page message handler is not considered to be handling a user action.

Also, if a user input handler waits on a [promise](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), then its status as a user input handler is lost. For example:

```js
async function handleClick() {
  let result = await someAsyncFunction();

  // this will fail, because the handler lost its "user action handler" status
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```
