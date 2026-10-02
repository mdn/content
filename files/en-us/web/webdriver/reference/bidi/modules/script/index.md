---
title: script module
short-title: script
slug: Web/WebDriver/Reference/BiDi/Modules/script
page-type: listing-page
browser-compat: webdriver.bidi.script
sidebar: webdriver
---

The **`script`** module contains commands and events for executing JavaScript and managing realms in the browser.

## Realms

JavaScript code runs in an execution environment called a [realm](/en-US/docs/Web/JavaScript/Reference/Execution_model#realms), which has its own global object, such as {{domxref("Window")}} for a document.
Normally, a document has one realm, but it can have an additional realm for each of the workers and worklets it owns.

In WebDriver BiDi, each realm has a unique string identifier called a realm ID.
Each [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) (a tab or an iframe) has at least one realm.

### Types of realms

WebDriver BiDi defines the following realm type values, grouped by execution environment:

- `"window"` represents document realms, including [sandbox realms](#sandbox_realms).
- `"dedicated-worker"`, `"shared-worker"`, and `"service-worker"` represent the corresponding worker realms.
  `"worker"` represents any other worker realm.
- `"audio-worklet"` and `"paint-worklet"` represent the corresponding worklet realms.
  `"worklet"` represents any other worklet realm.

### Identifying realms

You can identify a realm in one of the following ways:

- By using its realm ID.
- By using the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) that contains it, since each context has a realm for its active document.

Worker and worklet realms have no context ID, so you can identify them only by their realm ID.

Commands such as [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) and [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) take a `target` parameter that accepts either a realm ID or a context ID.
When you pass a context ID, the script runs in the realm of the active document of that context.

Each cross-document navigation loads a new document with a new realm, so a realm ID from before the navigation is no longer valid.

### Sandbox realms

In WebDriver BiDi, a sandbox realm is a named realm that you create in a context.

By default, a script that you evaluate in a context runs in the realm of the active document.
This means that your script can accidentally change the globals that the page relies on, and the page can read or change the variables that your script defines.

A sandbox realm avoids this.
It has its own global object, separate from that of the active document and from that of every other sandbox realm in that context.
Scripts inside it can access the same DOM as the page's scripts, but they are not affected by changes the page makes to built-in objects and DOM APIs.
Variables defined by scripts inside a sandbox realm cannot be accessed by the page's scripts.

There is no separate command for creating a sandbox realm. You create one by passing a sandbox name alongside a context ID in the `target` parameter of the [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#target) or [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction#target) command.
The browser creates the sandbox realm the first time you use that name in that context.
Each combination of a context and a sandbox name has one realm, so the same sandbox name in two contexts gives you two separate realms.

### How realms differ

Realms differ in their access to the DOM, in their isolation from the page's scripts, and in how you identify them:

| Realm                        | Access to DOM | Isolated from the page's scripts | How you identify it                         |
| ---------------------------- | ------------- | -------------------------------- | ------------------------------------------- |
| Realm of the active document | Yes           | No                               | Realm ID or context ID                      |
| Sandbox realm                | Yes           | Yes                              | Realm ID, or context ID with a sandbox name |
| Worker or worklet realm      | No            | Yes                              | Realm ID only                               |

## Commands

- [`script.getRealms`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms)

## Events

- [`script.realmCreated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated)
- [`script.realmDestroyed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
