---
title: User actions
slug: Mozilla/Add-ons/WebExtensions/User_actions
page-type: guide
sidebar: addonsidebar
---

Some WebExtension APIs perform functions that usually occur as a result of a user action. These APIs are:

- The {{WebExtAPIRef("action.openPopup")}}, {{WebExtAPIRef("browserAction.openPopup")}}, and {{WebExtAPIRef("pageAction.openPopup")}} APIs that open an extension's browser or page action popup. Users do the same by clicking the browser or page action.
- The {{WebExtAPIRef("sidebarAction.open")}}, {{WebExtAPIRef("sidebarAction.close")}}, and {{WebExtAPIRef("sidebarAction.toggle")}} APIs open and close an extension's sidebar. The user does this from some part of the browser's built-in user interface, such as the **View** > **Sidebar** menu.
- The {{WebExtAPIRef("downloads.open")}} API opens a downloaded file. The user does this from some part of the browser's built-in user interface, such as the **Tools** > **Downloads** menu.
- The {{WebExtAPIRef("management.setenabled")}} API. The user can turn off a theme extension from the extension's Add-on Manager page.
- The {{WebExtAPIRef("permissions.request")}} API. The user can grant permissions from the extension's Add-on Manager permissions and data tab.

Following the principle of "no surprises", these APIs can only be called from inside the handler for a user action. User actions include:

- Clicking the extension's browser action or page action.
- Selecting a context menu item defined by the extension.
- Activating a keyboard shortcut defined by the extension (this is only treated as a user action from Firefox 63).
- Clicking a button on a page bundled with the extension.
- Clicking an extension suggestion in the address bar (omnibox) (this is only treated as a user action from Firefox 142).

In addition to enabling the APIs, these actions also enable the [`"activeTab"` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). This permission grants extra privileges for the tab visible when the user action takes place.

For example:

```js
function handleClick() {
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```

User interactions in normal web pages aren't treated as user actions. For example, consider a button on a normal web page that uses a content script. This content script added a click handler for the button that sends a message to the extension's background page. When a user clicks the button, the background page message handler is not considered to be handling a user action.

Also, if a user input handler waits on a [promise](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), then its status as a user input handler is lost. For example:

```js
async function handleClick() {
  let result = await someAsyncFunction();

  // this fails, because the handler lost its "user action handler" status
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```
