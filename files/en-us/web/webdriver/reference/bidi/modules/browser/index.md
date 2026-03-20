---
title: browser module
short-title: browser
slug: Web/WebDriver/Reference/BiDi/Modules/browser
page-type: listing-page
browser-compat: webdriver.bidi.browser
sidebar: webdriver
---

The **`browser`** module contains commands for managing the browser, including user contexts, client windows, and download behavior.

## User contexts

A user context is a collection of zero or more top-level contexts (tabs) within the browser. Tabs within the same user context share the same browser storage (such as cookies and session data), while tabs in different user contexts are completely isolated from one another and do not share any browser data. A user context with no tabs is called an empty user context.

Each user context has a unique string identifier (user context ID). The browser always has a default user context with the ID `"default"`, which cannot be removed.

User contexts can be created using [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) and removed using [`browser.removeUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/removeUserContext).

## Client windows

A client window is a browser window, which includes the viewport (the area where web content is displayed) and browser UI elements such as the address bar and toolbars.

Each client window has the following properties:

- A unique string identifier (client window ID)
- A position expressed as `x` and `y` coordinates in CSS pixels from the left and top edges of the screen, respectively
- A size expressed as `width` and `height` in CSS pixels

Multiple tabs from different [user contexts](#user_contexts) can share the same client window.

A list of client windows can be obtained using [`browser.getClientWindows`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getClientWindows) and their state can be changed using [`browser.setClientWindowState`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setClientWindowState).

## Commands

{{ListSubPages}}

## Events

The `browser` module has no associated events.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
