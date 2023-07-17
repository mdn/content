---
title: Work with the Cookies API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API
page-type: guide
---

{{AddonSidebar}}

With the Cookies API your extensions have access to capabilities similar to those used by websites to store and read cookies. The API's features give extensions the ability to store information on a site-by-site basis. So, as we shall see in the example, you could store details of a user's choice of background color for a site. Then, when the user revisits the site, your extension can use the API's ability to get details about cookies and read them to recover the user's choice and apply it to the website.

> **Note:** The behavior of cookies can be controlled using the {{WebExtAPIRef("privacy.websites")}} `cookieConfig` property. This property controls whether and how cookies are accepted or whether all cookies are treated as session cookies.

## Permissions

To use the Cookies API you need to request both the `"cookies"` permission and [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the protocols, domains, or websites you want to access or use `"<all_urls>"` to access any protocol and domain. The way in which you define your host permission string affects your extension's ability to read, write, and delete cookies.

<table>
  <colgroup>
    <col />
    <col />
    <col />
    <col />
    <col />
  </colgroup>
  <tbody>
    <tr>
      <td rowspan="2"><p>Host permission string</p></td>
      <td colspan="2"><p>Read</p></td>
      <td colspan="2"><p>Write/Delete</p></td>
    </tr>
    <tr>
      <td><p>Secure</p></td>
      <td><p>Non-secure</p></td>
      <td><p>Secure</p></td>
      <td><p>Non-secure</p></td>
    </tr>
    <tr>
      <td>
        <p><code>"http://*.example.com/"</code></p>
      </td>
      <td><p>No</p></td>
      <td><p>Main and sub domains, with any path</p></td>
      <td><p>Main and sub domains, with any path</p></td>
      <td><p>Main and sub domains, with any path</p></td>
    </tr>
    <tr>
      <td>
        <p><code>"https://www.example.com/"</code></p>
      </td>
      <td>
        <p>www.example.com or .example.com with any path, but no subdomains</p>
      </td>
      <td>
        <p>www.example.com or .example.com with any path, but no subdomains</p>
      </td>
      <td>
        <p>www.example.com or .example.com with any path, but no subdomains</p>
      </td>
      <td>
        <p>www.example.com or .example.com with any path, but no subdomains</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>"*://*.example.com/"</code></p>
      </td>
      <td><p>Main and sub domains, with any path</p></td>
      <td><p>Main and sub domains, with any path</p></td>
      <td><p>Main and sub domains, with any path</p></td>
      <td><p>Main and sub domains, with any path</p></td>
    </tr>
    <tr>
      <td>
        <p><code>"&#x3C;all_urls>"</code></p>
      </td>
      <td><p>Any domain with any path</p></td>
      <td><p>Any domain with any path</p></td>
      <td><p>Any domain with any path</p></td>
      <td><p>Any domain with any path</p></td>
    </tr>
  </tbody>
</table>

## Cookie stores

Firefox provides three types of cookie store:

- The default store, which stores cookies from normal browsing.
- Private browsing mode stores, which stores cookies created during a private browsing session. These stores and any cookies they contain are removed when the related private browsing window closes.

  > **Note:**
  > Only visible if {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}} returns true. Safari doesn't support access to private cookies.

- Container tabs stores, which stores cookies for each contextual identity in Firefox. Contextual identities enable a user to maintain multiple identities within one browser window. This is useful if, for example, you've a company and personal email account on Gmail. With contextual identities, you can open one tab against a personal identity and a second tab against a business identity. Each tab can then sign into Google mail with a different username, and the two accounts can be used side-by-side. For more information, see [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) in the Mozilla wiki.

You can find out what cookie stores are available using {{WebExtAPIRef("cookies.getAllCookieStores")}}, which returns an object containing the ID of each cookie store and a list of the IDs of the tabs using each cookie store.

## Example walkthrough

The example extension [cookie-bg-picker](https://github.com/mdn/webextensions-examples/tree/main/cookie-bg-picker) allows its user to pick a color and icon that are applied to the background of a site's web pages. These choices are saved on a per-site basis using {{WebExtAPIRef("cookies.set")}}. When a page from the site is opened, {{WebExtAPIRef("cookies.get")}} reads any earlier choice, and the extension applies it to the web page. A reset option removes the background icon and color from the site as well as the cookie, using {{WebExtAPIRef("cookies.remove")}}. It also uses {{WebExtAPIRef("cookies.onChanged")}} to listen for changes to cookies, sending details of the change to the console.

This video shows the extension in action:

{{EmbedYouTube("_rlp3eYqEMA")}}

This example also uses the Tabs and Runtime APIs, but we'll discuss those features only in passing.

### manifest.json

The key feature of the [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/manifest.json) file relating to the use of the Cookies API is the permissions request:

```json
  "permissions": [
      "tabs",
      "cookies",
      "<all_urls>"
],
```

Here, the extension requests permission to use the Cookies API (`"cookies"`) with all websites (`"<all_urls>"`). This enables the extension to save the background color icon choice for any website.

### Scripts—bgpicker.js

The extension's UI uses a toolbar button ({{WebExtAPIRef("browserAction")}}) implemented with [bgpicker.html](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.html) that calls [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js). Together these allow the user to select the icon and enter the color they want to apply as the site background. They also provide the option to clear those settings.

[bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) handles the selection of icon or entry of a color for the background in separate functions.

To handle the icon buttons the script first gathers all the class names used for the buttons in the HTML file:

```js
let bgBtns = document.querySelectorAll(".bg-container button");
```

It then loops through all the buttons assigning them their image and creating an onclick listener for each button:

```js
for (let i = 0; i < bgBtns.length; i++) {
  let imgName = bgBtns[i].getAttribute('class');
  let bgImg = 'url(\'images/' + imgName + '.png\')';
  bgBtns[i].style.backgroundImage = bgImg;

  bgBtns[i].onclick = (e) => {
```

When a button is clicked, its corresponding listener function gets the button class name and then the icon path which it passes to the page's content script ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) using a message. The content script then applies the icon to the web page's background. Meanwhile, [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) stores the details of the icon applied to the background in a cookie:

```js
cookieVal.image = fullURL;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

The color setting is handled in a similar way, triggered by a listener on the color input field. When a color is entered the active tab is discovered and the color selection details sent, using a message, to the page's content script to be applied to the web page background. Then the color selection is added to the cookie:

```js
    cookieVal.color = currColor;
    browser.cookies.set({
    url: tabs[0].url,
    name: "bgpicker",
    value: JSON.stringify(cookieVal)
```

When the user clicks the reset button, which has been assigned to the variable reset:

```js
let reset = document.querySelector(".color-reset button");
```

`reset.onclick` first finds the active tab. Then, using the tab's ID it passes a message to the page's content script ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) to get it to remove the icon and color from the page. The function then clears the cookie values (so the old values aren't carried forward and written onto a cookie created for a new icon or color selection on the same page) before removing the cookie:

```js
    cookieVal = { image : '',
                  color : '' };
    browser.cookies.remove({
    url: tabs[0].url,
    name: "bgpicker"
```

Also, so you can see what is going on with the cookies, the script reports on all changes to cookies in the console:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed:\n
    * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
    * Cause: ${changeInfo.cause}\n
    * Removed: ${changeInfo.removed}`);
});
```

### Scripts—background.js

A background script ([background.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/background_scripts/background.js)) provides for the possibility that the user has chosen a background icon and color for the website in an earlier session. The script listens for changes in the active tab, either the user switching between tabs or changing the URL of the page displayed in the tab. When either of these events happen, `cookieUpdate()` is called. `cookieUpdate()` in turn uses `getActiveTab()` to get the active tab ID. The function can then check whether a cookie for the extension exists, using the tab's URL:

```js
let gettingCookies = browser.cookies.get({
  url: tabs[0].url,
  name: "bgpicker",
});
```

If the `"bgpicker"` cookie exists for the website, the details of the icon and color selected earlier are retrieved and passed to the content script [updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js) using messages:

```js
gettingCookies.then((cookie) => {
  if (cookie) {
    let cookieVal = JSON.parse(cookie.value);
    browser.tabs.sendMessage(tabs[0].id, { image: cookieVal.image });
    browser.tabs.sendMessage(tabs[0].id, { color: cookieVal.color });
  }
});
```

## Other features

In addition to the APIs mentioned so far, the Cookies API also offers {{WebExtAPIRef("cookies.getAll")}}. This function takes the details object to specify filters for the selected cookies and returns an array of {{WebExtAPIRef("cookies.Cookie")}} objects that match the filter criteria.

## Learn more

If you want to learn more about the Cookies API, check out:

- [Cookies API reference](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies).
- [List-cookies](https://github.com/mdn/webextensions-examples/tree/main/list-cookies) example.
