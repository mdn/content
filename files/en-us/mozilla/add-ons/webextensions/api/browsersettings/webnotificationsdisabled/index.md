---
title: browserSettings.webNotificationsDisabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.webNotificationsDisabled
---

{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that can be used to prevent websites from showing notifications using the [`Notifications`](/en-US/docs/Web/API/Notifications_API) Web API.

The `Notifications` API is used to display desktop notifications to the user. There are three levels of permission for notifications: _allow_, _deny_, and _prompt_. Users can set this permission for every site. If the user has not set a permission for a particular site, then the browser will fall back to a global permission, which defaults to _prompt_.

Setting `browserSettings.webNotificationsDisabled` to `true` switches the global permission to _deny_.

Note that this won't affect sites for which the user has set a per-site preference. For example, if the user sets <https://example.org> to _allow_, and an extension then sets `browserSettings.webNotificationsDisabled` to `true`, then pages under [https://example.org](https://example.org) will still be allowed to show notifications.

Setting `browserSettings.webNotificationsDisabled` to `false` switches the global default back to its default value.

Note that this setting has no effect on notifications created by extensions using the [`notifications`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API.

## Browser compatibility

{{Compat}}

## Examples

Toggle the setting:

```js
async function toggleWebNotifications() {
  let current = await browser.browserSettings.webNotificationsDisabled.get({});
  console.log(`Current value: ${current.value}`);
  browser.browserSettings.webNotificationsDisabled.set({
    value: !current.value,
  });
}

browser.browserAction.onClicked.addListener(() => {
  toggleWebNotifications();
});
```

{{WebExtExamples}}
