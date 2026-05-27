---
title: "`browsingContext.getTree` command"
short-title: getTree
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.getTree
sidebar: webdriver
---

The `browsingContext.getTree` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module returns the tree of all [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) or the subtree starting with the specified context.

## Syntax

```json-nolint
{
  "method": "browsingContext.getTree",
  "params": {}
}
```

### Parameters

The `params` field contains:

- `maxDepth` {{optional_inline}}
  - : A non-negative integer that specifies the maximum depth of the tree to return.
    If not included, which is equivalent to the value `null`, the full tree is returned.
    A value of `0` returns only the root context itself.
    For example, if a top-level context contains an `<iframe>`, which itself contains another `<iframe>`, then a `maxDepth` of `0` returns only the top-level context; a `maxDepth` of `1` returns the top-level context and the first `<iframe>`, but not the nested one.
- `root` {{optional_inline}}
  - : A string that contains the ID of the context to use as the root of the returned tree.
    Context IDs are returned by commands such as [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) or events such as [`browsingContext.contextCreated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated).
    If not included, all [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) are returned.

### Return value

The `result` object in the response contains the following fields:

- `contexts`
  - : An array of context objects, each representing the properties of a context. Each object has the following fields:
    - `children`
      - : An array of context objects that represents the child contexts of this context. Each child object has the same structure, with its own `children` array, making this a recursive representation of the context tree.
        An empty array indicates that the context has no children, while a `null` value indicates that children are excluded from the response, such as when the `maxDepth` limit is reached.
    - `clientWindow`
      - : A string that contains the ID of the [client window](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows) that contains this context.
    - `context`
      - : A string that contains the ID of the context.
    - `originalOpener`
      - : A string that contains the ID of the context that originally opened this context.
        The value is `null` if the context was opened directly (not by another context).

        > [!NOTE]
        > `originalOpener` is set once at the time the context is created, never changes, and always retains the opener's context ID. This differs from the JavaScript [`window.opener`](/en-US/docs/Web/API/Window/opener) property, which references the window that opened the current window — it becomes `null` if the [`rel=noopener`](/en-US/docs/Web/HTML/Attributes/rel/noopener) attribute is used on the link or if the [`noopener`](/en-US/docs/Web/API/Window/open#noopener) window feature is specified in {{domxref("window.open()")}}.

    - `parent` {{optional_inline}}
      - : A string that contains the ID of the parent context.
        The value is `null` if the context has no parent.
        This field is present only for the root-level items in the returned array.
    - `url`
      - : A string that contains the URL of the context, including the fragment.
    - `userContext`
      - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) associated with this context.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
- `no such frame`
  - : No context with the given `root` ID is found.

## Examples

### Getting all top-level contexts

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), consider a scenario where two tabs are open in the browser: the first tab at `https://example.com/page1.html` has an `<iframe>` loading `https://example.com/frame.html`, and the second tab shows `https://example.com/page2.html`:

```plain
Browser
├── https://example.com/page1.html (Tab 1)
│   └── https://example.com/frame.html (<iframe>)
└── https://example.com/page2.html (Tab 2)
```

Send the following message to get the full context tree:

```json
{
  "id": 1,
  "method": "browsingContext.getTree",
  "params": {}
}
```

The `contexts` array lists the two top-level contexts. The `<iframe>` inside Tab 1 appears nested under its `children`. The browser responds as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "contexts": [
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f", // Tab 1
        "children": [
          // Tab 1 has one child <iframe>
          {
            "context": "6442450945", // The <iframe>
            "children": [], // No child contexts
            "originalOpener": null,
            "url": "https://example.com/frame.html",
            "userContext": "default",
            "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386"
          }
        ],
        "originalOpener": null,
        "url": "https://example.com/page1.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
        "parent": null
      },
      {
        "context": "32ed30da-24ad-459d-8f0d-660526e92d96", // Tab 2
        "children": [], // No child contexts
        "originalOpener": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "url": "https://example.com/page2.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
        "parent": null
      }
    ]
  }
}
```

### Getting a subtree from a specific context

Using the same setup as in the previous example, to get only Tab 1 and its immediate child context, send the following message with Tab 1's context ID as `root` and `maxDepth` set to `1`:

```json
{
  "id": 2,
  "method": "browsingContext.getTree",
  "params": {
    "root": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "maxDepth": 1
  }
}
```

The browser responds with Tab 1 and its immediate child. The `children` field for the iframe is `null`; the `maxDepth` setting of `1` limits the response to one level below the root, so the iframe's own children are not included:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "contexts": [
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "children": [
          {
            "context": "6442450945",
            "children": null,
            "originalOpener": null,
            "url": "https://example.com/frame.html",
            "userContext": "default",
            "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386"
          }
        ],
        "originalOpener": null,
        "url": "https://example.com/page1.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
        "parent": null
      }
    ]
  }
}
```

In this example, if the `root` parameter of the `browsingContext.getTree` message were set to the iframe's context ID (`"6442450945"`), the iframe's `parent` field in the response would be `"93ee5bd6-d256-4608-a002-9a8995cc0e5f"` (Tab 1's context ID) rather than `null`.

To limit the lookup to only the root context with no children, set `maxDepth` to `0`:

```json
{
  "id": 3,
  "method": "browsingContext.getTree",
  "params": {
    "root": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "maxDepth": 0
  }
}
```

The browser responds as follows:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "contexts": [
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "children": null,
        "originalOpener": null,
        "url": "https://example.com/page1.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
        "parent": null
      }
    ]
  }
}
```

### Identifying the opener of a context

Expanding on the same setup, consider that Tab 2 (`https://example.com/page2.html`) was opened from Tab 1 (`https://example.com/page1.html`) using `window.open()`. Send the following message to see how this relationship is conveyed in the response:

```json
{
  "id": 4,
  "method": "browsingContext.getTree",
  "params": {}
}
```

The browser responds with the full context tree. The `originalOpener` field identifies the context that opened Tab 2:

```json
{
  "id": 4,
  "type": "success",
  "result": {
    "contexts": [
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "children": [
          {
            "context": "6442450945",
            "children": [],
            "originalOpener": null,
            "url": "https://example.com/frame.html",
            "userContext": "default",
            "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386"
          }
        ],
        "originalOpener": null, // Opened directly
        "url": "https://example.com/page1.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
        "parent": null
      },
      {
        "context": "32ed30da-24ad-459d-8f0d-660526e92d96",
        "children": [],
        "originalOpener": "93ee5bd6-d256-4608-a002-9a8995cc0e5f", // Opened by Tab 1
        "url": "https://example.com/page2.html",
        "userContext": "default",
        "clientWindow": "08c697a1-2664-447d-9c88-52bcee3bb386",
        "parent": null
      }
    ]
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.activate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate) command
- [`browsingContext.close`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close) command
- [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) command
- [`browsingContext.contextCreated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated) event
- [`browsingContext.contextDestroyed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed) event
