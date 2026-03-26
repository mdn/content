---
title: browser.createUserContext command
short-title: browser.createUserContext
slug: Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext
page-type: webdriver-command
browser-compat: webdriver.bidi.browser.createUserContext
sidebar: webdriver
---

The `browser.createUserContext` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browser`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser) module creates a new [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) in the browser.

## Syntax

```json-nolint
{
  "method": "browser.createUserContext",
  "params": {}
}
```

### Parameters

Set `params` to an empty object (`{}`) or include any of the following optional fields:

- [`acceptInsecureCerts`](/en-US/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts) {{optional_inline}}
  - : A boolean that controls whether untrusted TLS certificates (for example, self-signed or expired) are accepted within this user context. When set, it overrides the [session-level](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#acceptinsecurecerts) `acceptInsecureCerts` setting for this user context.
- `proxy` {{optional_inline}}
  - : An object that specifies the proxy configuration the browser should use for network requests within this user context. When set, it overrides the [session-level](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#proxy) `proxy` setting for this user context.
- `unhandledPromptBehavior` {{optional_inline}}
  - : An object that specifies the default behavior when a user prompt (such as an `alert`, `confirm`, or `prompt` dialog) is encountered within this user context. When set, it overrides the [session-level](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#unhandledpromptbehavior) `unhandledPromptBehavior` setting for this user context.

> [!NOTE]
> When a parameter is set, it applies to all existing and future tabs within this user context.

### Return value

The following field in the `result` object of the response describes the created user context:

- `userContext`
  - : A string that uniquely identifies the created user context.

### Errors

- `unsupported operation`
  - : `acceptInsecureCerts` is `true` but the browser does not support accepting insecure TLS connections, or `proxy` is specified but the browser cannot configure proxy settings for this user context or cannot apply the given proxy configuration.

## Examples

### Creating a user context with default settings

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), send the following message to create a user context:

```json
{
  "id": 1,
  "method": "browser.createUserContext",
  "params": {}
}
```

The browser responds with a successful user context creation as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "userContext": "4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"
  }
}
```

### Creating a user context with a proxy

Send the following message to create a user context that routes network requests through a proxy:

```json
{
  "id": 2,
  "method": "browser.createUserContext",
  "params": {
    "proxy": {
      "proxyType": "manual",
      "httpProxy": "127.0.0.1:80"
    }
  }
}
```

The browser responds with a successful user context creation as follows:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "userContext": "7d9e2a1b-5c3f-4e6d-8a7b-2c1d0e9f8a7b"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) command
- [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) command
- [`browser.removeUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/removeUserContext) command
