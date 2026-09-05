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
Each context (a tab or an iframe) has at least one realm.

### Types of realms

WebDriver BiDi defines the following realm types:

- A document realm: `"window"`, which also includes sandbox realms
- A worker realm: `"dedicated-worker"`, `"shared-worker"`, `"service-worker"`, or `"worker"` for any other worker
- A worklet realm: `"audio-worklet"`, `"paint-worklet"`, or `"worklet"` for any other worklet

### Identifying realms

You can identify a realm in one of the following ways:

- By using its realm ID.
- By using the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) that contains it, since each context has a realm for its active document.

A worker and a worklet realm have no context ID, so you can identify them only by their realm ID.

Commands such as [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) and [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) take a `target` parameter that accepts either a realm ID or a context ID.
When you pass a context ID, the script runs in the realm of the active document of that context.

Each cross-document navigation loads a new document with a new realm, so a realm ID from before the navigation is no longer valid.

### Sandbox realms

In WebDriver BiDi, a sandbox realm is a named realm that you create in a context.

By default, a script that you evaluate in a context runs in the realm of the active document.
This means that your script can accidentally change the globals that the page relies on, and the page can read or change the variables that your script defines.

A sandbox realm avoids this.
It has its own global object, which is separate from that of the active document and that of every other sandbox realm of that context.
Scripts inside it can access the same DOM as the scripts of the page.
Scripts inside it are not affected by changes that the page makes to built-in objects and DOM APIs.
The variables defined by scripts inside a sandbox realm are also not visible to the page.

Creating a sandbox realm does not require an explicit step; you only need to pass a sandbox name alongside a context ID.
The browser creates the sandbox realm the first time you use that name.
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
