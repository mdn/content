---
title: "`network.setCacheBehavior` command"
short-title: setCacheBehavior
slug: Web/WebDriver/Reference/BiDi/Modules/network/setCacheBehavior
page-type: webdriver-command
browser-compat: webdriver.bidi.network.setCacheBehavior
sidebar: webdriver
---

The `network.setCacheBehavior` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module makes the browser bypass its cache, or use it as usual, for requests from all [contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) or from specific [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).

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
  - : An array of one or more context ID strings, each identifying a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) to apply the cache behavior to.
    The cache behavior also applies to requests from the child contexts of each top-level context, such as iframes.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

    If not specified, the cache behavior applies to requests from all contexts, and replaces any cache behavior set for specific contexts.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - `cacheBehavior` is missing, or a parameter has an invalid type, such as a `contexts` value that is not an array of strings.
    - `cacheBehavior` is not `bypass` or `default`.
    - `contexts` is specified but empty.
    - A context specified in `contexts` is not a top-level context.
- `no such frame`
  - : No context is found for an ID specified in `contexts`.

## Description

A cache behavior set for specific contexts takes precedence over the cache behavior set for all contexts.
For example, you can bypass the cache for all contexts and then set `default` for one tab, so that only that tab uses the cache.
A command sent without `contexts` replaces every cache behavior set for specific contexts.
See [Request modifiers](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#request_modifiers) for how this compares to [`network.setExtraHeaders`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders).

A cache behavior set for all contexts also applies to contexts created after the command, and one set for a top-level context also applies to child contexts created in it later.
The cache behavior is shared by all sessions, and stays in effect until you change it or until the last active session ends.

To check whether a response came from the cache, [subscribe](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to any event that reports the response (`network.responseStarted`, `network.responseCompleted`, or `network.authRequired`) and look at the `fromCache` field of the response.

## Examples

### Bypassing the cache for all contexts

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `network.responseCompleted`.
Assume also that you have two tabs open, both showing the page you're testing: the first one, and a second one opened with [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create), which returned the context ID `5e5e96e8-5247-4f22-9b35-a4a2d841cbaa`, and loaded with [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate).

Suppose the page you're testing fetches a resource that the server allows the browser to cache for an hour.
The second time the page fetches it, the browser serves it from its cache, and the `network.responseCompleted` event for the request has `fromCache` set to `true`.

To make every request reach the server, send the following message to bypass the cache for all contexts:

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

From then on, requests for the resource from any tab go to the server, and their `network.responseCompleted` events have `fromCache` set to `false`.

### Restoring the default cache behavior

Using the same connection and session, send the following message to make the browser use its cache again in all contexts:

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

From then on, the browser serves the resource from its cache again, and the `network.responseCompleted` event for the next request has `fromCache` set to `true`.

### Bypassing the cache for a single tab

Using the same connection, session, and tabs, send the following message to bypass the cache for the second tab only:

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

Requests from the second tab now go to the server, while requests from the first tab are still served from the cache.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.setExtraHeaders`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders) command
- [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) command
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
- [HTTP caching](/en-US/docs/Web/HTTP/Guides/Caching) guide
