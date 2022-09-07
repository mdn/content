---
title: Background scripts
slug: Mozilla/Add-ons/WebExtensions/Background_scripts
tags:
  - WebExtensions
---
{{AddonSidebar}}

Background scripts or a background page enable you to monitor and react to events in the browser, such as navigating to a new page, removing a bookmark, or closing a tab.

Background scripts or a page are:

- Persistent – loaded when the extension starts and unloaded when the extension is disabled or uninstalled.
- Non-persistent (which are also known as event pages) – loaded only when needed to respond to an event and unloaded when they become idle. However, a background page does not unload until all visible views and message ports are closed. Opening a view does not cause the background page to load but does prevent it from closing.

In Manifest V2, background scripts or a page can be persistent or non-persistent. Non-persistent background scripts are recommended as they reduce the resource cost of your extension. In Manifest V3, only non-persistent background scripts or a page are supported.

If you have persistent background scripts or a page in Manifest V2 and want to prepare your extension for migration to Manifest V3, [Convert to non-persistent](#convert_to_non-persistent) provides advice on transitioning the scripts or page to the non-persistent model.

## Background script environment

### DOM APIs

Background scripts run in the context of a special page called a background page. This gives them a [`window`](/en-US/docs/Web/API/Window) global, along with all the standard DOM APIs provided by that object.

> **Warning:** In Firefox, background pages do not support the use of [`alert()`](/en-US/docs/Web/API/Window/alert), [`confirm()`](/en-US/docs/Web/API/Window/confirm), or [`prompt()`](/en-US/docs/Web/API/Window/prompt).

### WebExtension APIs

Background scripts can use any [WebExtension APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API), as long as their extension has the necessary [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

### Cross-origin access

Background scripts can make XHR requests to hosts they have [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) for.

### Web content

Background scripts do not get direct access to web pages. However, they can load [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) into web pages and [communicate with these content scripts using a message-passing API](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

### Content security policy

Background scripts are restricted from certain potentially dangerous operations, such as the use of [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval), through a Content Security Policy.

See [Content Security Policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) for more details.

## Implementing background scripts

This section describes how to implement a non-persistent background script.

### Specify the background scripts

In your extension, you include a background script using the  [`"background"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) key in `manifest.json`. For Manifest V2 extensions, the `persistent` property must be set to `false` to create a non-persistent script. It can be omitted for Manifest V3 extensions or must be set to `false`.

```json
"background": {
  "scripts": ["background-script.js"],
  "persistent": false
}
```

You can specify multiple background scripts. If you do, they run in the same context, just like scripts loaded into a web page.

Instead of specifying background scripts, you can specify a background page. This has the added advantage of support for ES modules:

- manifest.json

  ```json
  "background": {
    "page": "background-page.html",
    "persistent": false
  }
  ```

- background-page.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <script type="module" src="background-script.js"></script>
    </head>
  </html>
  ```

You cannot specify background scripts and a background page.

### Initialize the extension

Listen to {{WebExtAPIRef("runtime.onInstalled")}} to initialize an extension on installation. Use this event to set a state or for one-time initialization. For extensions with event pages, this is where stateful APIs, such as a context menu created using `browser.menus.create`, should be used.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});
```

### Add listeners

Structure background scripts around events the extension depends on. Defining relevant events enables background scripts to lie dormant until those events are fired and prevents the extension from missing essential triggers.

Listeners must be registered synchronously from the start of the page.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});

// This will run when a bookmark is created.
browser.bookmarks.onCreated.addListener(() => {
  // do something
});
```

Do not register listeners asynchronously, as they will not be properly triggered. So, rather than:

```js
window.onload = () => {
  // WARNING! This event is not persisted, and will not restart the event page.
  browser.bookmarks.onCreated.addListener(() => {
    // do something
  });
}
```

Do this:

```js
browser.tabs.onUpdated.addListener(() => {
  // This event is run in the top level scope of the event page, and will persist, allowing
  // it to restart the event page if necessary.
});
```

Extensions can remove listeners from their background scripts by calling `removeListener`, such as with {{WebExtAPIRef("runtime.onMessage")}} `removeListener`. If all listeners for an event are removed, the browser no longer loads the extension's background script for that event.

```js
browser.runtime.onMessage.addListener(function messageListener(message, sender, reply) {
  browser.runtime.onMessage.removeListener(messageListener);
});
```

### Filter events

Use APIs that support event filters to restrict listeners to the cases the extension cares about. If an extension is listening for {{WebExtAPIRef("tabs.onUpdated")}}, use the {{WebExtAPIRef("webNavigation.onCompleted")}} event with filters instead, as the tabs API does not support filters.

```js
browser.webNavigation.onCompleted.addListener(() => {
  console.log("This is my favorite website!");
}, { url: [{ urlMatches : 'https://www.mozilla.org/' }] });
```

### React to listeners

Listeners exist to trigger functionality once an event has fired. To react to an event, structure the desired reaction inside of the listener event.

```js
browser.runtime.onMessage.addListener((message, callback) => {
  if (message.data === "setAlarm") {
    browser.alarms.create({delayInMinutes: 5})
  } else if (message.data === "runLogic") {
    browser.tabs.executeScript({file: 'logic.js'});
  } else if (message.data === "changeColor") {
    browser.tabs.executeScript(
      {code: 'document.body.style.backgroundColor="orange"'});
  };
});
```

### Unload background scripts

Data should be persisted periodically to not lose important information if an extension crashes without receiving {{WebExtAPIRef("runtime.onSuspend")}}. Use the storage API to assist with this.

```js
browser.storage.local.set({variable: variableInformation});
```

Message ports cannot prevent an event page from shutting down. If an extension uses message passing, the ports are closed when the event page idles. Listening to the {{WebExtAPIRef("runtime.Port")}} `onDisconnect` lets you discover when open ports are closing, however the listener will be under the same time constraints as {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onMessage.addListener((message, callback) => {
  if (message === 'hello') {
    sendResponse({greeting: 'welcome!'})
  } else if (message === 'goodbye') {
    browser.runtime.Port.disconnect();
  }
});
```

Background scripts unload after a few seconds of inactivity. However, if during the suspension of a background script another event wakes the background script, {{WebExtAPIRef("runtime.onSuspendCanceled")}} is called and the background script continues running. If any cleanup is required, listen to {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onSuspend.addListener(() => {
  console.log("Unloading.");
  chrome.browserAction.setBadgeText({text: ""});
});
```

However, persisting data should be preferred rather than relying on {{WebExtAPIRef("runtime.onSuspend")}}. It doesn't allow for as much cleanup as may be needed and does not help in case of a crash.

## Convert to non-persistent

If you've a persistent background script, this section provides instructions on converting it to the non-persistent model.

### Update your manifest.json file

In your extension's `manifest.json` file, change the persistent property of [`"background"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) key to `false` for your script or page.

```json
"background": {
  …,
  "persistent": false
}
```

### Move event listeners

Listeners must be at the top-level to activate the background script if an event is triggered. Registered listeners may need to be restructured to the synchronous pattern, moved to the top-level, and unnested.

```js
browser.runtime.onStartup.addListener(() => {
  // run startup function
})
```

### Record state changes

As scripts now open and close as needed, use the storage API to set and return states and values. Use {{WebExtAPIRef("storage.local")}} `set` to update on the local machine.

```js
browser.storage.local.set({ variable: variableInformation });
```

Use {{WebExtAPIRef("storage.local")}} `get` to retrieve the value of that variable.

```js
browser.storage.local.get(['variable'], (result) => {
  let someVariable = result.variable;
  // Do something with someVariable
});
```

### Change timers into alarms

DOM-based timers do not remain active after an event page has idled. Instead, use the {{WebExtAPIRef("alarms")}} API if you need a timer to wake an event page.

```js
browser.alarms.create({delayInMinutes: 3.0})
```

Then add a listener.

```js
browser.alarms.onAlarm.addListener(() => {
  alert("Hello, world!")
});
```

### Update calls for background script functions

If a content script or action must call a function, use {{WebExtAPIRef("runtime.getBackgroundPage")}} to ensure the event page is running. If the call is optional (that is, only needed if the event page is alive) then use {{WebExtAPIRef("extension.getBackgroundPage")}}, which return `null` if the page is not running.

```js
document.getElementById('target').addEventListener('click', async () => {
  let backgroundPage = await window.runtime.getBackgroundPage();
  backgroundPage.backgroundFunction();
});
```
