---
title: "`network.setExtraHeaders` command"
short-title: setExtraHeaders
slug: Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders
page-type: webdriver-command
browser-compat: webdriver.bidi.network.setExtraHeaders
spec-urls: https://w3c.github.io/webdriver-bidi/#command-network-setExtraHeaders
sidebar: webdriver
---

The `network.setExtraHeaders` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module sets headers that the browser adds to the requests it sends, replacing any header with the same name, for all [contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) or for specific [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) or [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "network.setExtraHeaders",
  "params": {
    "headers": [
      {
        "name": "X-Test-Run",
        "value": {
          "type": "string",
          "value": "checkout-flow"
        }
      }
    ]
  }
}

/* With the optional `contexts` parameter */
{
  "method": "network.setExtraHeaders",
  "params": {
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "headers": [
      {
        "name": "X-Test-Run",
        "value": {
          "type": "string",
          "value": "checkout-flow"
        }
      }
    ]
  }
}

/* With the optional `userContexts` parameter */
{
  "method": "network.setExtraHeaders",
  "params": {
    "headers": [
      {
        "name": "X-Test-Run",
        "value": {
          "type": "string",
          "value": "checkout-flow"
        }
      }
    ],
    "userContexts": ["4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"]
  }
}
```

### Parameters

The `params` field contains:

- `contexts` {{optional_inline}}
  - : An array of one or more context ID strings, each identifying a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) whose requests get the headers.
    Requests from the child contexts of each top-level context, such as iframes, get the headers too.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

    This field cannot be used if `userContexts` is also specified.

- `headers`
  - : An array of objects, each specifying a header to add to requests.
    The array replaces the headers previously set for the same contexts, the same user contexts, or for all contexts.
    Specify an empty array to remove them.

    Each object contains the following fields:
    - `name`
      - : A string that contains the header name, such as `"X-Test-Run"`.
        It must be a valid [HTTP header](/en-US/docs/Web/HTTP/Reference/Headers) name.
    - `value`
      - : An object that specifies the header value. It contains the following fields:
        - `type`
          - : A string that specifies how the `value` field of this object is encoded.
            It can take one of the following values:
            - `"base64"`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes.
            - `"string"`: The value is text, which the browser sends encoded as [UTF-8](/en-US/docs/Glossary/UTF-8).
        - `value`
          - : A string that contains the header value, encoded as specified by `type`.
            The decoded header value cannot contain line breaks or null characters, or start or end with a space or tab.

- `userContexts` {{optional_inline}}
  - : An array of one or more [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) ID strings, each identifying a user context whose requests get the headers.
    User context IDs are returned by commands such as [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) or [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts).

    This field cannot be used if `contexts` is also specified.

If neither `contexts` nor `userContexts` is specified, the headers are added to requests from all contexts.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing or has an invalid type, or a header's `value.type` is not `"base64"` or `"string"`.
    - Both `contexts` and `userContexts` are specified.
    - `contexts` or `userContexts` is specified but empty.
    - A header name is not a valid header name.
    - A header value is not a valid header value.
    - A context specified in `contexts` is not a top-level context.
- `no such frame`
  - : No context is found for an ID specified in `contexts`.
- `no such user context`
  - : No user context is found for an ID specified in `userContexts`.

## Description

The browser adds the headers to every request from the contexts they apply to, including navigation requests and requests made by scripts, such as with {{domxref("Window/fetch", "fetch()")}}.
The headers are added before the browser emits the `network.beforeRequestSent` event, so the `request.headers` field of the event already includes them.

An extra header replaces any header with the same name that the browser would otherwise send, such as {{HTTPHeader("Accept-Language")}}.
It doesn't add to the existing value.

Headers set for all contexts, for a user context, and for a top-level context are combined.
When more than one of them sets the same header, the most specific value is sent: a value set for the top-level context wins over a value set for the user context, which wins over a value set for all contexts.

Each command replaces the headers only for the contexts, user contexts, or all contexts it specifies.
See [Request modifiers](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#request_modifiers) for how this compares to [`network.setCacheBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setCacheBehavior).

Headers set for all contexts or for a user context also apply to contexts created after the command.
Headers set for a top-level context also apply to child contexts created in it later.
The headers stay in effect until you replace them or the session ends.

## Examples

### Adding a header to every request

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose your test server logs requests, and you want to tell which requests came from which test.
Send the following message to add an `X-Test-Run` header to requests from all contexts:

```json
{
  "id": 1,
  "method": "network.setExtraHeaders",
  "params": {
    "headers": [
      {
        "name": "X-Test-Run",
        "value": {
          "type": "string",
          "value": "checkout-flow"
        }
      }
    ]
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

From then on, every request from every tab carries the `X-Test-Run: checkout-flow` header.
If you're subscribed to `network.beforeRequestSent`, the header also appears in the `request.headers` array of each event.

### Setting a different value for a user context

Using the same connection and session, suppose you've set two headers for all contexts: `X-Test-Run: checkout-flow` and `X-Tenant: tenant-b`.
You've also created a user context with [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext), which returned the ID `"4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"`, and opened a tab in it with [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create).

Send the following message to send a different `X-Tenant` value from that user context:

```json
{
  "id": 2,
  "method": "network.setExtraHeaders",
  "params": {
    "headers": [
      {
        "name": "X-Tenant",
        "value": {
          "type": "string",
          "value": "tenant-a"
        }
      }
    ],
    "userContexts": ["4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"]
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

Requests from the tab in the new user context now carry `X-Test-Run: checkout-flow` and `X-Tenant: tenant-a`.
Requests from other tabs still carry `X-Tenant: tenant-b`.

### Replacing a browser header in one tab

Using the same connection and session, suppose you want to check how a page responds to a visitor whose preferred language is Canadian French.
The tab has the context ID `"93ee5bd6-d256-4608-a002-9a8995cc0e5f"`, returned by [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

Send the following message to replace the `Accept-Language` header for that tab:

```json
{
  "id": 3,
  "method": "network.setExtraHeaders",
  "params": {
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "headers": [
      {
        "name": "Accept-Language",
        "value": {
          "type": "string",
          "value": "fr-CA"
        }
      }
    ]
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

Requests from that tab now carry `Accept-Language: fr-CA` instead of the value the browser would otherwise send, such as `en-US,en;q=0.9`.

### Removing the headers set for all contexts

Using the same connection and session, send the following message with an empty `headers` array to remove the headers set for all contexts:

```json
{
  "id": 4,
  "method": "network.setExtraHeaders",
  "params": {
    "headers": []
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 4,
  "type": "success",
  "result": {}
}
```

Headers set for specific user contexts or contexts are not affected.
To remove them, send an empty `headers` array with the same `userContexts` or `contexts`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.setCacheBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setCacheBehavior) command
- [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [HTTP headers](/en-US/docs/Web/HTTP/Reference/Headers) reference
