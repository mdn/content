---
title: "`network` module"
short-title: network
slug: Web/WebDriver/Reference/BiDi/Modules/network
page-type: listing-page
browser-compat: webdriver.bidi.network
sidebar: webdriver
---

The **`network`** module contains commands and events for monitoring and changing the network requests that the browser sends.

## Request modifiers

Request modifiers change how the browser sends requests, without blocking them or requiring an event subscription:

- [`network.setCacheBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setCacheBehavior) makes the browser bypass its cache, so that requests go to the network.
- [`network.setExtraHeaders`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders) adds headers to requests, replacing any header with the same name that the browser would otherwise send.

Each command applies a setting to requests from all [contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) or to requests from specific contexts.
A setting for a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) also applies to requests from its child contexts, such as iframes.
Settings for all contexts, and headers set for a user context, also apply to contexts created after the command.

The two commands differ in the scopes they accept and in how settings for different scopes combine:

|                                  | `network.setCacheBehavior`                                                             | `network.setExtraHeaders`                                                                                                                                                    |
| -------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scopes                           | All contexts, or specific top-level contexts (`contexts`)                              | All contexts, specific [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) (`userContexts`), or specific top-level contexts (`contexts`) |
| Settings for more than one scope | The setting for a top-level context takes precedence over the setting for all contexts | Headers from all scopes are combined; for the same header name, a top-level context's value wins over a user context's, which wins over the value for all contexts           |
| A command for all contexts       | Replaces the settings for all scopes                                                   | Replaces only the headers for all contexts                                                                                                                                   |
| Removing a setting               | Send `"default"` without `contexts`, which resets every scope                          | Send an empty `headers` array for the same scope                                                                                                                             |
| Lifetime                         | Until changed, or until the last active session ends; shared by all sessions           | Until replaced, or until the session ends; the headers of every active session are added to each request                                                                     |

## Commands

- [`network.setCacheBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setCacheBehavior)
- [`network.setExtraHeaders`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
