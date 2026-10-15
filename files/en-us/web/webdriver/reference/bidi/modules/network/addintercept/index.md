---
title: "`network.addIntercept` command"
short-title: addIntercept
slug: Web/WebDriver/Reference/BiDi/Modules/network/addIntercept
page-type: webdriver-command
browser-compat: webdriver.bidi.network.addIntercept
sidebar: webdriver
---

The `network.addIntercept` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module adds an intercept, which makes the browser block matching requests until the client lets them continue, changes them, or fails them.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "network.addIntercept",
  "params": {
    "phases": ["beforeRequestSent"]
  }
}

/* With required and optional parameters */
{
  "method": "network.addIntercept",
  "params": {
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "phases": ["beforeRequestSent"],
    "urlPatterns": [
      {
        "type": "pattern",
        "pathname": "/api/items"
      }
    ]
  }
}
```

### Parameters

The `params` field contains:

- `contexts` {{optional_inline}}
  - : An array of one or more context ID strings, each identifying a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) whose requests the intercept applies to.
    Requests from the child contexts of each top-level context, such as iframes, match too.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

    If not specified, the intercept doesn't filter requests by context.

- `phases`
  - : An array of one or more strings, each specifying a phase of a request in which the intercept blocks it.
    Each value can be one of the following:
    - `authRequired`: The request is blocked when the server asks for authentication, when the browser sends the `network.authRequired` event.
    - `beforeRequestSent`: The request is blocked before the browser sends it, when the browser sends the [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) event.
    - `responseStarted`: The request is blocked after the browser receives the response headers, when the browser sends the [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) event.
- `urlPatterns` {{optional_inline}}
  - : An array of objects, each specifying a pattern that request URLs are compared with.
    The intercept matches a request whose URL matches any of the patterns.
    If not specified, or if the array is empty, the intercept matches every URL.

    Each object contains a `type` field and the fields for that type:
    - `hostname` {{optional_inline}}
      - : A string that contains the host name to match, such as `example.com`.
        It can't be empty, contain `/`, `?`, or `#`, or contain `:` outside square brackets, so it can't include a port.
        It can't be specified when `protocol` is `file`.
        Specify this when the `type` field value is `pattern`.
    - `pathname` {{optional_inline}}
      - : A string that contains the path to match, such as `/api/items`.
        It can't contain `?` or `#`.
        Specify this when the `type` field value is `pattern`.
    - `pattern`
      - : A string that contains the URL to match, such as `https://example.com/api/items`.
        It must be an absolute URL.
        A request matches only if its URL has the same protocol, host, port, path, and query.
        Specify this when the `type` field value is `string`.
    - `port` {{optional_inline}}
      - : A string that contains the port to match, such as `8080`.
        It can contain only digits and can't be empty.
        Specify this when the `type` field value is `pattern`.
    - `protocol` {{optional_inline}}
      - : A string that contains the URL scheme to match, without the colon, such as `https`.
        It can contain only ASCII letters, digits, `+`, `-`, and `.`, and can't be empty.
        Specify this when the `type` field value is `pattern`.
    - `search` {{optional_inline}}
      - : A string that contains the query to match, with or without the leading `?`, such as `page=2`.
        It can't contain `#`.
        Specify this when the `type` field value is `pattern`.
    - `type`
      - : A string that specifies how the pattern is written.
        It can take one of the following values:
        - `pattern`: The pattern is split into the `hostname`, `pathname`, `port`, `protocol`, and `search` fields.
          A request matches if its URL matches every field that is specified: a field that isn't specified matches any value.
        - `string`: The pattern is a URL in the `pattern` field.

    In every field, the characters `(`, `)`, `*`, `{`, and `}` must be escaped with a backslash (`\`), written as `\\` in JSON.
    There are no wildcards.

### Return value

The `result` object in the response contains the following field:

- `intercept`
  - : A string that contains the ID of the intercept.
    Network events list this ID in their `intercepts` field when the intercept blocks a request, and [`network.removeIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeIntercept) takes it to remove the intercept.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - `phases` is missing or empty, or a parameter has an invalid type, such as a `phases` value that is not `authRequired`, `beforeRequestSent`, or `responseStarted`.
    - `contexts` is specified but empty.
    - A context specified in `contexts` is not a top-level context.
    - A URL pattern is not valid, for example a `pattern` that is not an absolute URL, a field that contains an unescaped `(`, `)`, `*`, `{`, or `}`, a `hostname` that includes a port, or a `hostname` with the `file` protocol.
- `no such frame`
  - : No context is found for an ID specified in `contexts`.

## Description

### Which requests are blocked

An intercept blocks a request when all of the following are true:

- The request reaches one of the intercept's `phases`.
- The request URL matches one of the `urlPatterns`, or the intercept has none.
- The request comes from one of the `contexts` or from one of their child contexts, or the intercept has no `contexts`.

An intercept blocks a request only if the session is [subscribed](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to the event for the phase, such as `network.beforeRequestSent` for the `beforeRequestSent` phase, for the context the request comes from.
Adding an intercept doesn't subscribe the session to any event, and without the subscription, the browser doesn't block the request.

A `string` pattern matches only URLs with the same protocol, host, port, path, and query: `https://example.com/api/items` doesn't match `https://example.com/api/items?page=2`.
To match a path whatever the query, use a `pattern` object without `search`.
With only `pathname`, as in the second [example](#blocking_requests_for_a_path_in_one_tab), it matches that path on any host.

### Blocked requests

When an intercept blocks a request, the event for the phase has `isBlocked` set to `true` and lists the IDs of the intercepts that match in its `intercepts` field.
The browser doesn't continue the request until the client sends one of the commands for its phase, such as [`network.continueRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest) or [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest) in the `beforeRequestSent` phase, or the session ends.
See [Intercepts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) for the commands that can resume a request in each phase.
If more than one intercept matches, one command resumes the request.

An intercept belongs to the session that adds it, and stays until it's removed with `network.removeIntercept` or the session ends.
When the session ends, the browser resumes every request that the session blocked.

## Examples

### Blocking requests for a URL

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `network.beforeRequestSent`.

Suppose the page you're testing, in a tab with the context ID `93ee5bd6-d256-4608-a002-9a8995cc0e5f`, loads a list of items from `https://example.com/api/items` with {{domxref("Window/fetch", "fetch()")}}, and you want to hold the request while you check how the page looks before the list arrives.
Send the following message to block requests for that URL before the browser sends them:

```json
{
  "id": 1,
  "method": "network.addIntercept",
  "params": {
    "phases": ["beforeRequestSent"],
    "urlPatterns": [
      {
        "type": "string",
        "pattern": "https://example.com/api/items"
      }
    ]
  }
}
```

The browser responds with the ID of the intercept:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "intercept": "7a721ad7-7a58-4b0c-b4c0-d7d80051cd25"
  }
}
```

When the page requests `https://example.com/api/items`, the browser sends a `network.beforeRequestSent` event with `isBlocked` set to `true` and the intercept's ID in `intercepts` (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.beforeRequestSent",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "intercepts": ["7a721ad7-7a58-4b0c-b4c0-d7d80051cd25"],
    "isBlocked": true,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://example.com/api/items"
    },
    "timestamp": 1792059953207
  }
}
```

The page's `fetch()` call doesn't settle while the request is blocked.
When you're ready, send the following message to let the request continue unchanged:

```json
{
  "id": 2,
  "method": "network.continueRequest",
  "params": {
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}
```

The browser responds with an empty `result` object, sends the request, and the `fetch()` call receives the response:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

### Blocking requests for a path in one tab

Using the same connection, session, and subscription, suppose you want to block requests for `/api/items` from the tab of the first example, whatever their query, such as `https://example.com/api/items?page=2`, which the first example's pattern doesn't match.
Send the following message to block those requests in that tab only:

```json
{
  "id": 3,
  "method": "network.addIntercept",
  "params": {
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "phases": ["beforeRequestSent"],
    "urlPatterns": [
      {
        "type": "pattern",
        "pathname": "/api/items"
      }
    ]
  }
}
```

The browser responds with the ID of the new intercept:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "intercept": "ecc57375-44cc-46f8-abfd-f3f1c5489f71"
  }
}
```

When the page requests `https://example.com/api/items?page=2`, the browser blocks the request and sends the following event (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.beforeRequestSent",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "intercepts": ["ecc57375-44cc-46f8-abfd-f3f1c5489f71"],
    "isBlocked": true,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "method": "GET",
      "request": "37cf22b4-f399-4450-828d-d54fce56004e",
      "url": "https://example.com/api/items?page=2"
    },
    "timestamp": 1792059954541
  }
}
```

Requests for other paths, such as `https://example.com/api/v2/items`, aren't blocked: their events have `isBlocked` set to `false`.
To let the blocked request continue, send `network.continueRequest` with its request ID, as in the first example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.removeIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeIntercept) command
- [`network.continueRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest) command
- [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest) command
- [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) event
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
