---
title: ElementInternals.ariaAutoComplete
slug: Web/API/ElementInternals/ariaAutoComplete
tags:
  - API
  - Property
  - Reference
  - ariaAutoComplete
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaAutoComplete
---
{{DefaultAPISidebar("DOM")}}

The **`ariaAutoComplete`** property of the {{domxref("ElementInternals")}} interface reflects the value of the `aria-autocomplete` attribute, which indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions would be presented if they were made.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaAutoComplete = ElementInternals.ariaAutoComplete;
ElementInternals.ariaAutoComplete = ariaAutoComplete;
```

### Value

A {{domxref("DOMString")}} with one of the following values:

- `"inline"`
  - : When a user is providing input, text suggesting one way to complete the provided input may be dynamically inserted after the caret.
- `"list"`
  - : When a user is providing input, an element containing a collection of values that could complete the provided input may be displayed.
- `"both"`
  - : When a user is providing input, an element containing a collection of values that could complete the provided input may be displayed. If displayed, one value in the collection is automatically selected, and the text needed to complete the automatically selected value appears after the caret in the input.
- `"none"`
  - : When a user is providing input, there is no display of an automatic suggestion that attempts to predict how the user intends to complete the input.

## Examples

In this example the value of `ariaAutoComplete` is set to "inline".

```js
this.internals_.ariaAutoComplete = "inline";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
