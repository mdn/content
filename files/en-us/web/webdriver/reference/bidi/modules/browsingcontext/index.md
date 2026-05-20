---
title: browsingContext module
short-title: browsingContext
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext
page-type: listing-page
browser-compat: webdriver.bidi.browsingContext
sidebar: webdriver
---

The **`browsingContext`** module contains commands and events for managing contexts.

## Contexts

A context is a navigable that can load a document, such as a tab, an iframe, or a popup.
Each context has a unique string identifier called a context ID that is used to reference it across commands and events.

There are two types of contexts:

- **Top-level context**
  - : This type of context has no parent, corresponding to a browser tab or a standalone window.
    Top-level contexts belong to a [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) and live inside a [client window](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows).
- **Child context**
  - : This type of context is nested inside a top-level context, such as an {{HTMLElement("iframe")}}.
    Child contexts are returned as children of their parent by [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

For example, if you open a browser window and navigate to `https://example.com`, that creates one top-level context with its own context ID.
If that page contains an `<iframe>` loading `https://other.com`, that creates a child context nested under the top-level context.
Opening a new tab creates a second top-level context with its own context ID.
Calling [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) would return both top-level contexts, with the first one having a child context.

## Commands

- [`browsingContext.activate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate)
- [`browsingContext.close`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close)
- [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
