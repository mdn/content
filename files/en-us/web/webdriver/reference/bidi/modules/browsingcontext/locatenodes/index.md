---
title: "`browsingContext.locateNodes` command"
short-title: locateNodes
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/locateNodes
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.locateNodes
sidebar: webdriver
---

The `browsingContext.locateNodes` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module finds the nodes in a [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) that match a locator, which specifies the search criteria.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browsingContext.locateNodes",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "locator": {
      "type": "css",
      "value": ".product"
    }
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.locateNodes",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "locator": {
      "type": "xpath",
      "value": "//a[text()='Learn more']"
    },
    "maxNodeCount": 3,
    "serializationOptions": {
      "maxDomDepth": 2,
      "includeShadowTree": "all"
    },
    "startNodes": [
      {
        "sharedId": "f8f6a1f2-3d8a-4b8e-9f1a-6f6a2f6a2f6a"
      }
    ]
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID of the context to search.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

- `locator`
  - : An object that specifies one of five criteria to find nodes, using a combination of `type` and `value` fields.
    The `value` field's shape depends on the `type` field.
    Some `type` values allow additional fields in the `locator` object.

    - `type`
      - : A string that specifies the strategy to use for finding nodes.
        It can take one of the following values:
        - `"accessibility"`: Finds nodes with a matching accessible `role`, `name`, or both.
        - `"context"`: Finds the container element (such as an `<iframe>` or `<embed>`) of a child context.
        - `"css"`: Finds nodes that match a CSS selector.
        - `"innerText"`: Finds nodes whose rendered text ({{domxref("HTMLElement.innerText", "innerText")}}) matches or contains the specified string.
        - `"xpath"`: Finds nodes that match an [XPath](/en-US/docs/Web/XML/XPath) expression.

    - `value`
      - : A string or an object, depending on `type`, that specifies what to search:
        - For `type: "accessibility"`, `value` is an object that must contain at least one of the following fields:
          - `name` {{optional_inline}}
            - : A string that contains the [accessible name](/en-US/docs/Glossary/Accessible_name) to match, such as `"Submit"` for a button labeled by `aria-label="Submit"`.
          - `role` {{optional_inline}}
            - : A string that contains the [accessible role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles) to match, such as `"checkbox"` for an element with `role="checkbox"`.
        - For `type: "context"`, `value` is an object with the following field:
          - `context`
            - : A string that contains the ID of a child context.
              It must be a direct child of the context specified in the command's `context` parameter.
        - For `type: "css"`, `value` is a string that contains the [CSS selector](/en-US/docs/Web/CSS/Reference/Selectors) to evaluate, such as `"li:nth-child(2)"`.
        - For `type: "innerText"`, `value` is a string that contains the text to find.
        - For `type: "xpath"`, `value` is a string that contains the [XPath](/en-US/docs/Web/XML/XPath) expression to evaluate, such as `"//img[@alt='logo']"`.

    - `ignoreCase` {{optional_inline}}
      - : A boolean that indicates whether the text comparison ignores case.
        This field is available only for `type: "innerText"`.
        - `false`: The comparison is case-sensitive. This is the default.
        - `true`: The comparison ignores case.

    - `matchType` {{optional_inline}}
      - : A string that specifies whether the search text must exactly match the entire node's text or only part of it.
        This field is available only for `type: "innerText"`.
        It can take one of the following values:
        - `"full"`: The search text must exactly match the entire node's text.
          This is the default.
        - `"partial"`: The search text must match only part of the node's text.

    - `maxDepth` {{optional_inline}}
      - : A non-negative integer that specifies the maximum number of levels of descendants to search.
        At the deepest allowed level, a node is matched on its own rendered text instead of being searched further.
        This field is available only for `type: "innerText"`.
        If not specified, there is no limit on the number of levels searched.

- `maxNodeCount` {{optional_inline}}
  - : A positive integer that specifies the maximum number of nodes returned.
    If not specified, all matching nodes are returned.

- `serializationOptions` {{optional_inline}}
  - : An object that controls the amount of detail to include in the response for each matched node.
    It can contain the following fields:
    - `includeShadowTree` {{optional_inline}}
      - : A string that specifies whether shadow roots are included in the response (see the `shadowRoot` field described in the [Return value](#return_value) section).
        It can take one of the following values:
        - `"none"`: Shadow roots are not included.
          This is the default.
        - `"all"`: Both open shadow roots (accessible from JavaScript outside the root) and closed shadow roots (not accessible from JavaScript outside the root) are included.
        - `"open"`: Only open shadow roots are included.
    - `maxDomDepth` {{optional_inline}}
      - : A non-negative integer, or `null` for unlimited, that specifies the number of levels of descendant nodes included for each matched node in the response (see the `children` field described in the [Return value](#return_value) section).
        The default is `0`, which excludes descendants.
    - `maxObjectDepth` {{optional_inline}}
      - : A non-negative integer, or `null` for unlimited, that specifies the number of levels of nested objects included when serializing a node's JavaScript properties.
        The default is `null`.

- `startNodes` {{optional_inline}}
  - : An array of one or more node references that specifies the nodes to search within, instead of searching the entire document.
    Each reference is an object with the following fields:
    - `handle` {{optional_inline}}
      - : A string that contains a handle to a JavaScript object, such as one retained from an earlier [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) or [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) response.
    - `sharedId`
      - : A string that contains the ID of a previously returned node, such as one from an earlier `browsingContext.locateNodes` response.

    > [!NOTE]
    > `startNodes` cannot be used if `locator.type` is `"context"`.

### Return value

The `result` object in the response contains the following fields:

- `nodes`
  - : An array of node objects, one for each matching node.
    Each object can have the following fields:
    - `internalId` {{optional_inline}}
      - : A string that uniquely identifies this node object within the response.
        This field is present only when the same node object appears more than once in the same response, such as when a node appears both as a top-level match and again as a descendant of another matched node.
    - `sharedId` {{optional_inline}}
      - : A string that contains an ID for referencing this node in later commands, such as in `startNodes` of a subsequent `browsingContext.locateNodes` call.
        This ID is unique across the entire session, and it remains valid for the lifetime of the session as long as the node still exists.
    - `type`
      - : A string that always has the value `"node"`.
    - `value` {{optional_inline}}
      - : An object that describes properties of the matched node.
        This object can contain the following fields:
        - `attributes` {{optional_inline}}
          - : An object that maps each [attribute](/en-US/docs/Web/API/Element/attributes) to its string value.
            This field is present only for element nodes.
        - `childNodeCount`
          - : A non-negative integer that specifies the number of direct [child nodes](/en-US/docs/Web/API/Node/childNodes) of the returned node.
            This is the actual count, even if the `children` field is missing or includes fewer of them.
        - `children` {{optional_inline}}
          - : An array of descendant nodes, each containing the same fields as this object.
            Descendants are included up to the level specified by `maxDomDepth` in `serializationOptions`.
        - `localName` {{optional_inline}}
          - : A string that contains the [local name](/en-US/docs/Web/API/Element/localName) of the node.
            For an HTML element, this is the tag name in lowercase.
            This field is present only for element nodes.
        - `mode` {{optional_inline}}
          - : A string that specifies the [mode of the shadow root](/en-US/docs/Web/API/ShadowRoot/mode) attached to the node.
            This field is present only for shadow root nodes.
            It can take one of the following values:
            - `"closed"`: Indicates that nodes inside the shadow root cannot be accessed from JavaScript outside the root.
            - `"open"`: Indicates that nodes inside the shadow root are accessible from JavaScript outside the root.
        - `namespaceURI` {{optional_inline}}
          - : A string that contains the [namespace URI](/en-US/docs/Web/API/Element/namespaceURI) of the node.
            This field is present only for element nodes.
            For HTML elements, the value is always the standard HTML namespace, `"http://www.w3.org/1999/xhtml"`.
        - `nodeType`
          - : An integer that represents the [type of node](/en-US/docs/Web/API/Node/nodeType), such as `1` for an element or `3` for a text node.
        - `nodeValue` {{optional_inline}}
          - : A string that contains the [value of the node](/en-US/docs/Web/API/Node/nodeValue), such as the text of a text node or the data of a comment node.
            This field is absent for element and document nodes.
        - `shadowRoot` {{optional_inline}}
          - : An object that describes the [shadow root](/en-US/docs/Web/API/Element/shadowRoot) attached to the node.
            The object has the same fields as each node object in `nodes`, including `sharedId`, `type`, and `value`.

            The value of this field is `null` when the returned node has no shadow root or when the shadow root is excluded using the `includeShadowTree` setting.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing or has an invalid type.
    - `startNodes` is specified when `locator.type` is `"context"`.
    - The child context identified by `locator.value.context` is not a direct child of the context specified in the `context` parameter.

- `invalid selector`
  - : Thrown in any of the following cases:
    - The CSS selector or XPath expression in `locator.value` cannot be parsed.
    - `locator.type` is `"innerText"` and `value` is an empty string.
    - `locator.type` is `"accessibility"` and neither `role` nor `name` is specified.

- `no such frame`
  - : No context with the given `context` ID is found.

- `no such handle`
  - : A node referenced in `startNodes` cannot be resolved, such as when it has been garbage collected.

- `unknown error`
  - : Evaluating the XPath expression in `locator.value` failed for a reason other than a parsing error.

## Description

The `browsingContext.locateNodes` command is the primary way to find nodes in a document's DOM — it is similar to the `Find Element(s)` commands in [WebDriver classic](/en-US/docs/Web/WebDriver/Reference/Classic/Commands).
It turns a locator, such as a CSS selector or XPath expression, into node references (with `sharedId` and optionally `handle`).
You can use these references in later commands, such as in `startNodes` in a subsequent `browsingContext.locateNodes` call or as a target for [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction).

As an alternative to this command, you can use [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate), though it requires writing the appropriate JavaScript code.

When locating nodes, you can specify three limits to control the amount of data returned in the response:

- `maxNodeCount` is a top-level parameter that controls the number of matched nodes returned overall.
  This controls the breadth of the search result.
- The other two parameters, `maxDomDepth` and `maxObjectDepth`, both in the `serializationOptions` object, control the depth of the data returned for each matched node.
  - `maxDomDepth` controls the number of levels of DOM descendants included in each matched node's `children` field.
  - `maxObjectDepth` controls the number of levels of nested JavaScript object properties included when representing non-node values in the response.

## Examples

### Locating nodes using a CSS selector

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose your document has a single `<button>` with a `submit` class.
Using the context ID of that document, obtained using [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree), send the following message to find the button by its class:

```json
{
  "id": 1,
  "method": "browsingContext.locateNodes",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "locator": {
      "type": "css",
      "value": "button.submit"
    }
  }
}
```

The browser responds with the matching node as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "nodes": [
      {
        "type": "node",
        "sharedId": "f8f6a1f2-3d8a-4b8e-9f1a-6f6a2f6a2f6a",
        "value": {
          "nodeType": 1,
          "localName": "button",
          "namespaceURI": "http://www.w3.org/1999/xhtml",
          "childNodeCount": 1,
          "attributes": {
            "class": "submit"
          },
          "shadowRoot": null
        }
      }
    ]
  }
}
```

Note that in this response, the `nodes` array contains a single object, corresponding to one matched node.
Its `localName` is `"button"`, which matches the element's tag.
The button has one child node, its text "Submit", which is why `childNodeCount` is `1`.
`shadowRoot` is `null` because the button has no shadow root.

### Limiting the number of matched nodes returned

Suppose your document has three `<li>` elements with an `item` class.

Using the same connection and session as in the first example, send the following message to find two of them using a CSS selector and `maxNodeCount`:

```json
{
  "id": 2,
  "method": "browsingContext.locateNodes",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "locator": {
      "type": "css",
      "value": "li.item"
    },
    "maxNodeCount": 2
  }
}
```

The browser responds with two matching nodes as follows:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "nodes": [
      {
        "type": "node",
        "sharedId": "a1b2c3d4-1111-4b8e-9f1a-6f6a2f6a2f6a",
        "value": {
          "nodeType": 1,
          "localName": "li",
          "namespaceURI": "http://www.w3.org/1999/xhtml",
          "childNodeCount": 1,
          "attributes": {
            "class": "item"
          },
          "shadowRoot": null
        }
      },
      {
        "type": "node",
        "sharedId": "a1b2c3d4-2222-4b8e-9f1a-6f6a2f6a2f6a",
        "value": {
          "nodeType": 1,
          "localName": "li",
          "namespaceURI": "http://www.w3.org/1999/xhtml",
          "childNodeCount": 1,
          "attributes": {
            "class": "item"
          },
          "shadowRoot": null
        }
      }
    ]
  }
}
```

### Locating a node by accessible role and name

Suppose your document has the following markup, giving the element an accessible role of `"checkbox"` and the accessible name as `"Checkbox name"`:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="checkbox-label"></span>
<span id="checkbox-label">Checkbox name</span>
```

Using the same connection and session as in the first example, send the following message to find the checkbox using its accessibility characteristics:

```json
{
  "id": 3,
  "method": "browsingContext.locateNodes",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "locator": {
      "type": "accessibility",
      "value": {
        "role": "checkbox",
        "name": "Checkbox name"
      }
    }
  }
}
```

The browser responds with the matching node as follows:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "nodes": [
      {
        "type": "node",
        "sharedId": "f8f6a1f2-4444-4b8e-9f1a-6f6a2f6a2f6a",
        "value": {
          "nodeType": 1,
          "localName": "span",
          "namespaceURI": "http://www.w3.org/1999/xhtml",
          "childNodeCount": 0,
          "attributes": {
            "role": "checkbox",
            "aria-checked": "false",
            "tabindex": "0",
            "aria-labelledby": "checkbox-label"
          },
          "shadowRoot": null
        }
      }
    ]
  }
}
```

You can also find this checkbox using only its accessible role or only its accessible name, since this locator works with either one alone.

### Locating a child context's container element

Suppose your document has an `<iframe>` that contains a child context.

Using the same connection and session as in the first example, obtain the child context's ID by using [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
Send the following message to find the iframe using a context locator:

```json
{
  "id": 4,
  "method": "browsingContext.locateNodes",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "locator": {
      "type": "context",
      "value": {
        "context": "6442450945"
      }
    }
  }
}
```

The browser responds with the matching node as follows:

```json
{
  "id": 4,
  "type": "success",
  "result": {
    "nodes": [
      {
        "type": "node",
        "sharedId": "f8f6a1f2-5555-4b8e-9f1a-6f6a2f6a2f6a",
        "value": {
          "nodeType": 1,
          "localName": "iframe",
          "namespaceURI": "http://www.w3.org/1999/xhtml",
          "childNodeCount": 0,
          "attributes": {
            "src": "https://example.com/frame.html"
          },
          "shadowRoot": null
        }
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

- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) command
- [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) command
- [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) command
