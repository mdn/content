---
title: "Document: querySelector() method"
short-title: querySelector()
slug: Web/API/Document/querySelector
page-type: web-api-instance-method
browser-compat: api.Document.querySelector
---

{{ApiRef("DOM")}}

The {{domxref("Document")}} method **`querySelector()`**
returns the first {{domxref("Element")}} within the document that matches the specified
selector, or group of selectors. If no matches are found, `null` is returned.

> **Note:** The matching is done using depth-first pre-order traversal of
> the document's nodes starting with the first element in the document's markup and
> iterating through sequential nodes by order of the number of child nodes.

## Syntax

```js-nolint
querySelector(selectors)
```

### Parameters

- `selectors`
  - : A string containing one or more selectors to match. This string
    must be a valid CSS selector string; if it isn't, a `SyntaxError` exception
    is thrown. See [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) for more about selectors and how to manage them.

> **Note:** Characters that are not part of standard CSS syntax must be
> escaped using a backslash character. Since JavaScript also uses backslash escaping, be
> especially careful when writing string literals using these characters. See
> [Escaping special characters](#escaping_special_characters) for more information.

### Return value

An {{domxref("Element")}} object representing the first element in the document
that matches the specified set of [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors), or `null` is returned if there are no matches.

If you need a list of all elements matching the specified selectors, you should use
{{domxref("Document.querySelectorAll", "querySelectorAll()")}} instead.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the syntax of the specified _selectors_ is invalid.

## Usage notes

If the specified selector matches an ID that is incorrectly used more than once in the
document, the first element with that ID is returned.

[CSS pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) will never return
any elements, as specified in the [Selectors API](https://www.w3.org/TR/selectors-api/#grammar).

### Escaping special characters

To match against an ID or selectors that do not follow standard CSS syntax (by using a
colon or space inappropriately, for example), you must escape the character with a
backslash ("`\`"). As the backslash is also an escape character in
JavaScript, if you are entering a literal string, you must escape it _twice_
(once for the JavaScript string, and another time for `querySelector()`):

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  console.log("#foo\bar"); // "#fooar" (\b is the backspace control character)
  document.querySelector("#foo\bar"); // Does not match anything

  console.log("#foo\\bar"); // "#foo\bar"
  console.log("#foo\\\\bar"); // "#foo\\bar"
  document.querySelector("#foo\\\\bar"); // Match the first div

  document.querySelector("#foo:bar"); // Does not match anything
  document.querySelector("#foo\\:bar"); // Match the second div
</script>
```

## Examples

### Finding the first element matching a class

In this example, the first element in the document with the class
"`myclass`" is returned:

```js
const el = document.querySelector(".myclass");
```

### Complex selectors

Selectors can also be really powerful, as demonstrated in the following example. Here,
the first {{HTMLElement("input")}} element with the name "login"
(`<input name="login"/>`) located inside a {{HTMLElement("div")}} whose
class is "user-panel main" (`<div class="user-panel main">`) in the
document is returned:

```js
const el = document.querySelector("div.user-panel.main input[name='login']");
```

### Negation

As all CSS selector strings are valid, you can also negate selectors:

```js
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']",
);
```

This will select an input with a parent div with the `user-panel` class but
not the `main` class.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- {{domxref("Element.querySelector()")}}
- {{domxref("Document.querySelectorAll()")}}
- {{domxref("Element.querySelectorAll()")}}
