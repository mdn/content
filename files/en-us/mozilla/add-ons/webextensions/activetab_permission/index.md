---
title: activeTab permission
short-title: activeTab permission
slug: Mozilla/Add-ons/WebExtensions/activeTab_permission
page-type: guide
sidebar: addonsidebar
---

The `activeTab` permission gives an extension temporary access to the tab a user is working in. It is granted in response to an explicit [user action](/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions), such as clicking the extension's toolbar button. Access is limited to that tab and lasts until the user navigates elsewhere.

Its purpose is to enable extensions to fulfill the common use case of "do something to the current page when the user asks", without the extension needing broad privileges. For example, consider an extension that wants to run a script in the current page when the user clicks its toolbar button. Without `activeTab`, the extension would have to request the host permission `<all_urls>`, which gives it far more power than it needs: the ability to execute scripts in _any tab_, at _any time_, rather than in the active tab only and only in response to a user action.

Because `activeTab` provides limited access, browsers don't display a permission warning when the user installs the extension.

## Request the activeTab permission

Your extension requests `activeTab` using the [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest key:

```json
"permissions": ["activeTab"]
```

`activeTab` is an [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), not a [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). So, it's requested using the `permissions` key in all manifest versions. Unlike host permissions, it isn't moved to [`host_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) in Manifest V3 and later.

It's also possible to include `activeTab` in [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) and request it at runtime using {{WebExtAPIRef("permissions.request()")}}. It's one of the permissions granted silently, without a user prompt.

> [!NOTE]
> `activeTab` grants privileges for a tab. It doesn't, by itself, grant access to an API. For example, to inject a script, your extension needs the `"scripting"` permission to use the {{WebExtAPIRef("scripting")}} API.

## How activeTab is granted

The browser grants `activeTab` when the user interacts with the extension. These interactions are known as [user actions](/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions) and include the user:

- clicking the extension's [toolbar button](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) or [page action](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions).
- selecting an extension's context menu item, which triggers the {{WebExtAPIRef("menus.onClicked")}} event.
- activating a keyboard shortcut defined by the extension with the {{WebExtAPIRef("commands")}} API, which triggers the {{WebExtAPIRef("commands.onCommand")}} event.
- clicking a button on a page bundled with the extension, which triggers a DOM [`click`](/en-US/docs/Web/API/Element/click_event) event handled by the page's script.
- clicking an extension suggestion in the address bar (omnibox), which triggers the {{WebExtAPIRef("omnibox.onInputEntered")}} event (from Firefox 142).

Usually, the tab granted `activeTab` is the active tab. There is one exception: an extension can use the {{WebExtAPIRef("menus")}} API to create a menu item that displays when the user context-clicks a tab in the tab strip. If the user selects this menu item, `activeTab` is granted for the tab clicked, even if it isn't the active tab.

## What activeTab grants

While `activeTab` is granted for a tab, the extension can:

- Inject JavaScript or CSS into the tab, using the {{WebExtAPIRef("scripting")}} API (or {{WebExtAPIRef("tabs.executeScript()")}} and {{WebExtAPIRef("tabs.insertCSS()")}} in Manifest V2). See [Loading content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts).
- Read the privileged properties of the tab's {{WebExtAPIRef("tabs.Tab")}} object: `url`, `title`, and `favIconUrl`. Otherwise, these properties require the `"tabs"` permission or a matching host permission.
- Capture the tab's contents with {{WebExtAPIRef("tabs.captureVisibleTab()")}} (from Firefox 126). With `activeTab`, this method can also capture sensitive pages that are otherwise restricted, such as browser UI pages and other extensions' pages.
- Read the rules matched for the tab with {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}, without the `"declarativeNetRequestFeedback"` permission.

## Scope of the access

`activeTab` grants scripting access to the top-level page in the tab and to same-origin frames within it. Running scripts or modifying styles inside [cross-origin](/en-US/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access) frames requires additional [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions).

The [restrictions and limitations](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) that apply to particular sites and URI schemes also apply to `activeTab`. Some special pages don't allow script injection, including reader view, view-source, the PDF viewer, and other built-in browser UI pages.

## When the access ends

The extension can only access the tab, or the data, that existed when the user interaction occurred. When the tab navigates away, the extension loses permission to access it. This means that the extension must complete its work with the tab, or capture the data it needs, during the granted period. If the extension needs access again, the user must repeat the user action.

The point at which access ends varies by browser [browser_compatibility](#browser_compatibility).

## Example

This extension injects a script into the current page when the user clicks its toolbar button. It needs no host permissions.

manifest.json:

```json
{
  "manifest_version": 3,
  "name": "Heading highlighter",
  "version": "1.0",
  "permissions": ["activeTab", "scripting"],
  "action": {
    "default_title": "Highlight headings"
  },
  "background": {
    "scripts": ["background.js"]
  }
}
```

background.js:

```js
function highlightHeadings() {
  for (const heading of document.querySelectorAll("h1, h2, h3")) {
    heading.style.backgroundColor = "yellow";
  }
}

browser.action.onClicked.addListener((tab) => {
  // activeTab is granted for `tab` because the user clicked the toolbar button.
  browser.scripting.executeScript({
    target: { tabId: tab.id },
    func: highlightHeadings,
  });
});
```

The same click also makes the privileged tab properties readable, so `tab.url` and `tab.title` hold real values rather than being `undefined`.

### Further examples

These further examples showing the use of declare the `activeTab` permission are available in the repository of example extensions at <https://github.com/mdn/webextensions-examples>. :

<table>
  <thead>
    <tr>
      <th>Example</th>
      <th>How <code>activeTab</code> is used</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/apply-css/"
          >apply-css</a
        >
      </td>
      <td>
        A page action click grants access to inject or remove CSS on the active
        tab ({{WebExtAPIRef("tabs.insertCSS()")}} and {{WebExtAPIRef("tabs.removeCSS()")}}).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/beastify/"
          >beastify</a
        >
      </td>
      <td>
        A browser action click grants access for
        {{WebExtAPIRef("scripting.executeScript()")}} and {{WebExtAPIRef("scripting.insertCSS()")}}
        on the active tab.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/webextensions-examples/context-menu-copy-link-with-types/"
          >context-menu-copy-link-with-types</a
        >
      </td>
      <td>
        A context menu click on a link unlocks the page so the link can be
        copied to the clipboard.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/export-helpers/"
          >export-helpers</a
        >
      </td>
      <td>
        Grants access to the active tab to demo
        <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto"
          ><code>cloneInto()</code></a
        > and export helpers with page scripts.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/history-deleter/"
          >history-deleter</a
        >
      </td>
      <td>
        Reads the active tab's URL to determine the domain whose history is to
        be deleted.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/menu-demo/"
          >menu-demo</a
        >
      </td>
      <td>A menu item click unlock the active tab for the menu manipulation demo.</td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/webextensions-examples/menu-remove-element/"
          >menu-remove-element</a
        >
      </td>
      <td>
        A menu item click unlocks page access to inject a script that removes
        the element under the cursor.
      </td>
    </tr>
  </tbody>
</table>

## Browser compatibility

Firefox, Safari, and Chromium-based browsers, including Chrome and Edge, support `activeTab`. However, when it's granted, what it enables, and when it's revoked vary.

### Actions that grant activeTab

| User action                                     | Chrome          | Firefox          | Safari                                                                              |
| ----------------------------------------------- | --------------- | ---------------- | ----------------------------------------------------------------------------------- |
| Clicking the extension's toolbar button         | Yes             | Yes              | Yes                                                                                 |
| Selecting the extension's context menu item     | Yes             | Yes              | Yes                                                                                 |
| Activating the extension's keyboard shortcut    | Yes             | From Firefox 63  | Yes                                                                                 |
| Clicking a button on an extension's own page    | Yes             | Yes              | Yes                                                                                 |
| Accepting an address bar (omnibox) suggestion   | Yes             | From Firefox 142 | No, Safari doesn't support the {{WebExtAPIRef("omnibox")}} API                      |
| Selecting a menu item on a tab in the tab strip | From Chrome 150 | From Firefox 63  | No, Safari doesn't support the `tab` value of {{WebExtAPIRef("menus.ContextType")}} |

### Capabilities granted

| Capability                                                                          | Chrome                               | Firefox                                               | Safari         |
| ----------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------- | -------------- |
| Programmatic script and stylesheet injection                                        | Yes                                  | Yes                                                   | Yes            |
| Privileged {{WebExtAPIRef("tabs.Tab")}} properties (`url`, `title`, `favIconUrl`)   | Yes                                  | Yes                                                   | Yes            |
| {{WebExtAPIRef("tabs.captureVisibleTab()")}}                                        | Yes                                  | From Firefox 126                                      | Yes            |
| Intercepting the tab's network requests with the {{WebExtAPIRef("webRequest")}} API | Yes, for the tab's main frame origin | No ([Firefox bug 1617479](https://bugzil.la/1617479)) | Not documented |

### When access is revoked

- **Chrome and Safari**: access lasts while the tab stays on the same site. It's revoked when the user navigates the tab to a different origin, or closes the tab. Reloading the page or navigating within the same origin doesn't revoke the access.
- **Firefox**: access is revoked when the tab navigates, including on a reload or a same-origin navigation. So, the user must repeat the user action after each navigation.

### Other differences

- **Permission prompts**: Firefox and Chrome grant an extension's requested host permissions on installation, so `activeTab` avoids an install-time warning. Safari, by contrast, defaults host permissions to "ask", and prompts the user the first time the extension tries to access a site, offering **Allow for One Day** or **Always Allow**. Using `activeTab` avoids this prompt, as Safari treats the user's interaction with the extension as the grant.
- **Manifest V2 and V3**: `activeTab` works the same way in both manifest versions in all browsers. In Manifest V3, the {{WebExtAPIRef("scripting")}} API replaces {{WebExtAPIRef("tabs.executeScript()")}} and {{WebExtAPIRef("tabs.insertCSS()")}}, and the `"scripting"` permission is needed alongside `activeTab`.

## See also

- [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest key
- [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest key
- [User actions](/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions)
- [Content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) on Extension Workshop
- [The "activeTab" permission](https://developer.chrome.com/docs/extensions/develop/concepts/activeTab) in the Chrome extensions documentation
