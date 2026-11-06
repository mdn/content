---
title: "`network.setCacheBehavior` command"
short-title: setCacheBehavior
slug: Web/WebDriver/Reference/BiDi/Modules/network/setCacheBehavior
page-type: webdriver-command
browser-compat: webdriver.bidi.network.setCacheBehavior
sidebar: webdriver
---

The `network.setCacheBehavior` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module controls whether the browser uses or bypasses its cache for requests from all [contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) or from specific [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "network.setCacheBehavior",
  "params": {
    "cacheBehavior": "bypass"
  }
}

/* With required and optional parameters */
{
  "method": "network.setCacheBehavior",
  "params": {
    "cacheBehavior": "bypass",
    "contexts": ["5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"]
  }
}
```

### Parameters

The `params` field contains:

- `cacheBehavior`
  - : A string that specifies whether the browser uses its cache for requests.
    It can take one of the following values:

    - `bypass`: The browser doesn't serve responses from its cache, so requests go to the network.
    - `default`: The browser uses its cache as it usually does.

- `contexts` {{optional_inline}}
  - : An array of one or more context ID strings, each identifying a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) in which to apply the cache behavior.
    This cache behavior also applies to requests from their child contexts, such as iframes.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

    If not specified, the cache behavior applies to requests from all contexts and replaces any cache behavior set for specific contexts.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing, or a parameter has an invalid type.
    - `cacheBehavior` is not `bypass` or `default`.
    - `contexts` is specified but empty.
    - A context specified in `contexts` is not a top-level context.
- `no such frame`
  - : No context with an ID specified in `contexts` is found.

## Description

A cache behavior you set for specific contexts takes precedence over the cache behavior you set for all contexts.
For example, you can bypass the cache for all contexts and then set `default` for one tab so that only that tab uses the cache.
A command sent without `contexts` replaces every cache behavior set for specific contexts.

A cache behavior set for all contexts also applies to contexts created after the command is processed, and one set for a top-level context also applies to child contexts created within it later.
The cache behavior is shared by all sessions and stays in effect until changed by another `network.setCacheBehavior` command or until the last active session ends.

To check whether a response came from the cache, [subscribe](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to any event that reports the response ([`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted), [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted), or [`network.authRequired`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired)) and examine the `fromCache` field of the `response` object.

## Examples

### Bypassing the cache for all contexts

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted).

Assume also that two tabs are open, both showing the page you're testing.
You opened the second tab using [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create), which returned its context ID.
You then loaded the page in the second tab using [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate).

Suppose the page you're testing fetches a resource that the server allows the browser to cache for an hour.
The second time the page fetches the resource, the browser serves it from its cache, and the `response` object in the `network.responseCompleted` event has `fromCache` set to `true`.

Send the following message to bypass the browser's cache for all contexts:

```json
{
  "id": 1,
  "method": "network.setCacheBehavior",
  "params": {
    "cacheBehavior": "bypass"
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

From then on, requests for the resource from any tab go to the server, and the `response` objects in their `network.responseCompleted` events have `fromCache` set to `false`.

### Restoring the default cache behavior

Using the same connection and session as in the first example, send the following message to restore the browser's default cache behavior in all contexts:

```json
{
  "id": 2,
  "method": "network.setCacheBehavior",
  "params": {
    "cacheBehavior": "default"
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

If the resource is still cached and fresh, the browser serves it from its cache again.
In this case, the `response` object in the `network.responseCompleted` event for the next request has `fromCache` set to `true`.

### Bypassing the cache for a single tab

Using the same connection, session, and tabs as in the first example, send the following message to bypass the cache for the second tab only:

```json
{
  "id": 3,
  "method": "network.setCacheBehavior",
  "params": {
    "cacheBehavior": "bypass",
    "contexts": ["5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"]
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

Requests from the second tab now bypass the cache, while requests from the first tab can still be served from the cache.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.setExtraHeaders`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders) command
- [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) command
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
- [HTTP caching](/en-US/docs/Web/HTTP/Guides/Caching) guide
