---
title: "`network.setExtraHeaders` command"
short-title: setExtraHeaders
slug: Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders
page-type: webdriver-command
browser-compat: webdriver.bidi.network.setExtraHeaders
spec-urls: https://w3c.github.io/webdriver-bidi/#command-network-setExtraHeaders
sidebar: webdriver
---

The `network.setExtraHeaders` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module specifies headers that the browser adds to the requests it sends, replacing any existing header with the same name.
The headers apply to requests from all [contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) or from the specified [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) or [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).

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
  - : An array of one or more context ID strings, each identifying a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) whose requests include the specified headers.
    Requests from their child contexts, such as iframes, also include these headers.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

    This field cannot be used if `userContexts` is also specified.

- `headers`
  - : An array of objects, each specifying a header to add to requests.
    The array replaces the headers previously set for the same contexts, the same user contexts, or for all contexts.
    Specify an empty array to remove the previously set headers.

    Each object contains the following fields:
    - `name`
      - : A string that contains the header name, such as `X-Test-Run`.
        It must be a valid [HTTP header](/en-US/docs/Web/HTTP/Reference/Headers) name.
    - `value`
      - : An object that specifies the header value.
        It contains the following fields:
        - `type`
          - : A string that specifies how the header value is encoded.
            It can take one of the following values:
            - `base64`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes.
            - `string`: The value is text, which the browser sends encoded as [UTF-8](/en-US/docs/Glossary/UTF-8) bytes.
        - `value`
          - : A string that contains the header value in the encoding specified by the [`type`](#type) field.
            The decoded header value cannot contain line breaks or null characters, or start or end with a space or tab.

- `userContexts` {{optional_inline}}
  - : An array of one or more strings, each identifying a [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) whose requests include the specified headers.
    User context IDs are returned by commands such as [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) or [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts).

    This field cannot be used if `contexts` is also specified.

If neither `contexts` nor `userContexts` is specified, the headers are added to requests from all contexts.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing, or a parameter has an invalid type.
    - The `type` field in a header's `value` object is not `base64` or `string`.
    - Both `contexts` and `userContexts` are specified.
    - `contexts` or `userContexts` is specified but empty.
    - A header name is invalid.
    - A header value is invalid.
    - A context specified in `contexts` is not a top-level context.
- `no such frame`
  - : No context with an ID specified in `contexts` is found.
- `no such user context`
  - : No user context with an ID specified in `userContexts` is found.

## Description

The browser adds the headers to all requests from the specified contexts or user contexts, or to all requests if neither `contexts` nor `userContexts` is specified.
These include navigation requests and requests made by scripts, such as with {{domxref("Window/fetch", "fetch()")}}.
The headers are added before the browser emits the [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) event, so the `headers` array in the event's `request` object already includes them.

A header you specify replaces any existing header with the same name that the browser would otherwise send.
The browser doesn't add to the existing value.
For example, specifying {{HTTPHeader("Accept-Language")}} with the value `de-DE` replaces the browser's existing value, such as `en-US,en;q=0.9`.

The browser combines the headers you specify for all contexts, for a user context, and for a top-level context within the same session.
If you set the same header for more than one of these, the most specific value is sent: a value set for the top-level context wins over a value set for the user context, which wins over a value set for all contexts.

Each call to `network.setExtraHeaders` replaces the previously set headers only for the specified contexts or user contexts, or for all contexts if neither parameter is specified.
For example, changing the headers for one tab doesn't remove the headers set for its user context.

Headers set for all contexts or for a user context also apply to contexts created after the command is processed.
Headers set for a top-level context also apply to child contexts created within it later.
The headers stay in effect until you replace them with another `network.setExtraHeaders` command or until the session ends.

## Examples

### Adding a header to every request

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Assume also that two tabs are open, both showing the page you're testing.
You got the first tab's context ID using [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
You created a user context using [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext), which returned its ID.
You then opened the second tab in that user context using [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create).

Suppose your test server logs requests, and you want to identify the test responsible for each request.
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
If you're subscribed to [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent), the header also appears in the `headers` array of each event's `request` object.

### Overriding a header value for a user context

Using the same connection, session, and tabs as in the first example, suppose you replace the headers for all contexts with two headers, `X-Test-Run: checkout-flow` and `X-Tenant: tenant-b`, using a single `network.setExtraHeaders` command.

Send the following message to set a different `X-Tenant` value for requests from the second tab's user context:

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

Requests from the second tab now carry `X-Test-Run: checkout-flow` and `X-Tenant: tenant-a`.
Requests from the first tab still carry `X-Test-Run: checkout-flow` and `X-Tenant: tenant-b`.

### Replacing a request header for one tab

Using the same connection, session, and tabs as in the first example, suppose you want to check how a page responds to a user whose preferred language is Canadian French.

Send the following message to replace the `Accept-Language` header for the first tab:

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

Using the same connection and session as in the first example, send the following message with an empty `headers` array to remove the headers set for all contexts:

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

From then on, requests no longer carry the `X-Test-Run` header.
Headers set for specific user contexts or top-level contexts are not affected.
To remove those headers, send an empty `headers` array and include the corresponding IDs in `userContexts` or `contexts`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.setCacheBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setCacheBehavior) command
- [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [HTTP headers](/en-US/docs/Web/HTTP/Reference/Headers) reference
