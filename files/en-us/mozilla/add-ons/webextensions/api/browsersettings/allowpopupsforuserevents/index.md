---
title: browserSettings.allowPopupsForUserEvents
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - WebExtensions
  - allowPopupsForUserEvents
  - browserSettings
browser-compat: webextensions.api.browserSettings.allowPopupsForUserEvents
---
{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that can be used to enable or disable the ability of web pages to open popups in response to user actions.

The underlying value is a boolean.

By default, browsers allow web pages to open popups in response to a particular set of events: for example, [click](/en-US/docs/Web/API/Element/click_event), [mouseup](/en-US/docs/Web/API/Element/mouseup_event), [submit](/en-US/docs/Web/API/HTMLFormElement/submit_event). If `allowPopupsForUserEvents` is set to `false`, no user events will be able to open popups. If it is set to `true`, the default set of events will be allowed to open popups.

For example, suppose a web page has code like this:

```js
window.addEventListener("click", (e) => {
  window.open("https://example.com","myPopup",'height=400,width=400');
});
```

By default, this will open a popup window. If your extension sets `allowPopupsForUserEvents` to `false`, then it will not open a popup, and the user will be informed that the popup was blocked.

## Browser compatibility

{{Compat}}

## Examples

Toggle the setting:

```js
function toggleAllowPopup() {

  function toggle(current) {
    console.log(`Current value: ${current.value}`);
    browser.browserSettings.allowPopupsForUserEvents.set({value: !current.value});
  }

  browser.browserSettings.allowPopupsForUserEvents.get({}).then(toggle);
}

browser.browserAction.onClicked.addListener(() => {
  toggleAllowPopup();
});
```

{{WebExtExamples}}
