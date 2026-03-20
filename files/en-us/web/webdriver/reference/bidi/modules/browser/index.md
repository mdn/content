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

## Commands

{{ListSubPages}}

## Events

The `browser` module has no associated events.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
