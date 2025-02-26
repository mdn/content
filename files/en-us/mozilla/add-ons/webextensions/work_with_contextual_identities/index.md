---
title: Work with contextual identities
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
page-type: guide
---

{{AddonSidebar}}

Many people need or want to interact with the web using multiple personas. They may have accounts for web-based work and personal email. They might sign out of their social media accounts before accessing online shopping, to ensure that any tracking scripts on the shopping sites can't pick up their social media activity. Users often use a standard and private browser window or two different browsers to address these requirements.

To address this need, Firefox includes a feature known as contextual identities, container tabs, or account containers. This feature enables the creation of a cookie container (store) for each of the identities the user wants to use in their browser. Tabs can be associated with one of these identities, keeping cookies separate from those of other identities in the browser. The practical upshot of this is that, for example, a user could have a personal and work identity. They can then, for example, use the personal identity in one tab, where they sign into their personal web mail, and the work identity in another tab, where they sign into their work web mail.

For more background on this feature, see:

- [Put your multiple online personalities in Firefox Multi-Account Containers](https://blog.mozilla.org/en/products/firefox/introducing-firefox-multi-account-containers/)
- [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Firefox support article on containers](https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&as=u&redirectslug=containers-experiment&utm_source=inproduct)

## APIs for working with contextual identities

Depending on the nature of your extension, you may want to manage contextual identities, associate objects your extension manipulates with contextual identities, or both.

### Managing contextual identities

To manage contextual identities, you use the {{WebExtAPIRef("contextualIdentities")}} API. This API enables you to add, query, update, and delete contextual identities. When you create a contextual identity, it is given a unique `cookieStoreId`. You use this ID to work with entities related to the contextual identity.

### Using `cookieStoreId`

Several extension APIs include the `cookieStoreId` in objects to enable extensions to associate these objects with specific contextual identities.

- {{WebExtAPIRef("browsingData.removeCookies()")}} and {{WebExtAPIRef("browsingData.removeLocalStorage()")}} where you use {{WebExtAPIRef("browsingData.removalOptions")}} to set the cookie store items are removed from.
- {{WebExtAPIRef("contentScripts.register")}} enables you to register a content script restricted to documents associated with one or more `cookieStoreIds`.
- {{WebExtAPIRef("downloads")}} where you can associate a download with a cookie store.
- {{WebExtAPIRef("proxy")}} where the details passed into the {{WebExtAPIRef("proxy.onRequest")}} listener identify the cookie store associated with the request.
- {{WebExtAPIRef("tabs")}} where you can {{WebExtAPIRef("tabs.create","create")}} a tab in a container tab, {{WebExtAPIRef("tabs.tab","get")}} the `cookieStoreId` for a tab, and {{WebExtAPIRef("tabs.query","query")}} tabs based on their associated cookie store.
- {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}} (legacy version, Manifest V2 only) enables you to register a content script restricted to documents associated with one or more `cookieStoreIds`.
- {{WebExtAPIRef("webRequest")}} where all the events return the `cookieStoreId` of the request.
- {{WebExtAPIRef("windows.create")}} where you can specify the cookie store for the tabs added to a window when it's created.

## Permissions

To use the {{WebExtAPIRef("contextualIdentities")}} API, you must include the "contextualIdentities" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in your [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

If an API enables cookies to be modified, you need the "cookies" permission. For example, using `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} does not require the "cookies" API, as reading the property doesn't affect the cookies in the containers. However, using {{WebExtAPIRef("tabs.create")}} requires the permission because the opened tab can read and modify cookies in a container.

## Example walkthrough

The example extension [contextual-identities](https://github.com/mdn/webextensions-examples/tree/main/contextual-identities) provides a toolbar button with a popup that lists the identities in the browser. For each identity, the extension provides options to create a tab using its cookies container or remove all of its tabs.

Here is a short video of the extension in action:

{{EmbedYouTube("SgLCS7_ppas")}}

### manifest.json

The main features of the [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/manifest.json) file are:

- the permissions request:

  ```json
    "permissions": [
        "contextualIdentities",
        "cookies"
    ],
  ```

- specification of the toolbar button (browserAction) that provides access to the extension's features:

  ```json
    "browser_action": {
      "default_title": "Contextual Identities",
      "default_popup": "context.html",
      "default_icon": {
        "128": "identity.svg"
      }
  ```

## context.html

A popup on the toolbar button provides the extension's user interface. [context.html](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.html) implements this popup, but it's just a shell into which the context.js script writes the list of contextual identities and their related options.

```html
<body>
  <div class="panel">
    <div id="identity-list"></div>
  </div>
  <script src="context.js"></script>
</body>
```

## context.js

All the extension's features are implemented through [context.js](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.js), which is invoked whenever the toolbar popup is displayed.

The script first gets the 'identity-list' `<div>` from context.html.

```js
let div = document.getElementById("identity-list");
```

It then checks whether the contextual identities feature is turned on in the browser. If it's not on, information on how to activate it is added to the popup.

```js
if (browser.contextualIdentities === undefined) {
  div.innerText = 'browser.contextualIdentities not available. Check that the privacy.userContext.enabled pref is set to true, and reload the add-on.';
} else {
```

Firefox installs with the contextual identity feature turned off. It's turned on when an extension using the `contextualIdentities` API is installed. However, the user can turn the feature off using an option on the preferences page (about:preferences), hence the need for the check.

The script now uses {{WebExtAPIRef("contextualIdentities.query.")}} to determine whether any contextual identities are defined in the browser. If there are none, a message is added to the popup and the script stops.

```js
  browser.contextualIdentities.query({})
    .then((identities) => {
      if (!identities.length) {
        div.innerText = 'No identities returned from the API.';
        return;
      }
```

If there are contextual identities present—Firefox comes with four default identities—the script loops through each one adding its name, styled in its chosen color, to the `<div>` element. The function `createOptions()` then adds the options to "create" or "close all" to the `<div>` before it's added to the popup.

```js
     for (const identity of identities) {
       const row = document.createElement('div');
       const span = document.createElement('span');
       span.className = 'identity';
       span.innerText = identity.name;
       span.style = `color: ${identity.color}`;
       console.log(identity);
       row.appendChild(span);
       createOptions(row, identity);
       div.appendChild(row);
     }
  });
}

function createOptions(node, identity) {
  for (const option of ['Create', 'Close All']) {
    const a = document.createElement('a');
    a.href = '#';
    a.innerText = option;
    a.dataset.action = option.toLowerCase().replace(' ', '-');
    a.dataset.identity = identity.cookieStoreId;
    a.addEventListener('click', eventHandler);
    node.appendChild(a);
  }
}
```

The script now waits for the user to select an option in the popup.

```js
function eventHandler(event) {
```

If the user clicks the option to create a tab for an identity, one is opened using {{WebExtAPIRef("tabs.create")}} by passing the identity's cookie store ID.

```js
if (event.target.dataset.action === "create") {
  browser.tabs.create({
    url: "about:blank",
    cookieStoreId: event.target.dataset.identity,
  });
}
```

If the user selects the option to close all tabs for the identity, the script performs a {{WebExtAPIRef("tabs.query")}} to get all the tabs using the identity's cookie store. The script then passes this list of tabs to {{WebExtAPIRef("tabs.remove")}}.

```js
  if (event.target.dataset.action === 'close-all') {
    browser.tabs.query({
      cookieStoreId: event.target.dataset.identity
    }).then((tabs) => {
      browser.tabs.remove(tabs.map((i) => i.id));
    });
  }
  event.preventDefault();
}
```

## Learn more

If you want to learn more about the contextualIdentities API, check out:

- [contextualIdentities API reference](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities).
- [Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme) extension source code. This is code for the [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) extension. This extension provides users with enhanced functionality for contextual identities, such as the ability to long-click the new tab button and then select the identity to use in the new tab. It showcases contextual identities' capabilities and is well worth a look.
