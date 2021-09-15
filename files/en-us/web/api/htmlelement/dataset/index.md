---
title: HTMLElement.dataset
slug: Web/API/HTMLElement/dataset
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Property
  - Read-only
  - Reference
  - dataset
browser-compat: api.HTMLElement.dataset
---
{{APIRef("HTML DOM")}}

The **`dataset`** read-only property
of the {{DOMxRef("HTMLElement")}} interface provides read/write access to [custom data attributes](/en-US/docs/Web/HTML/Global_attributes/data-*)
(`data-*`) on elements. It exposes a map of strings
({{domxref("DOMStringMap")}}) with an entry for each `data-*` attribute.

> **Note:** The `dataset` property itself can be read, but not directly written.
> Instead, all writes must be to the individual properties within the
> `dataset`, which in turn represent the data attributes.

An HTML `data-*` attribute and its corresponding DOM
`dataset.property` modify their shared name according to where
they are read or written:

- In HTML
  - : The attribute name begins with `data-`. It can contain only letters,
    numbers, dashes (`-`), periods (`.`), colons (`:`),
    and underscores (`_`). Any ASCII capital letters (`A` to
    `Z`) are converted to lowercase.
- In JavaScript
  - : The property name of a custom data attribute is the same as the HTML attribute
    without the `data-` prefix, and removes single dashes (`-`) for
    when to capitalize the property's "camelCased" name.

In addition to the information below, you'll find a how-to guide for using HTML data
attributes in our article [_Using data
attributes_.](/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

### Name conversion

- `dash-style` to `camelCase` conversion

  - : A custom data attribute name is transformed to a key for the {{
      domxref("DOMStringMap") }} entry by the following:

    1.  Lowercase all ASCII capital letters (`A` to
        `Z`);
    2.  Remove the prefix `data-` (including the dash);
    3.  For any dash (`U+002D`) followed by an ASCII lowercase letter
        `a` to `z`, remove the dash and uppercase the letter;
    4.  Other characters (including other dashes) are left unchanged.

- `camelCase` to `dash-style` conversion

  - : The opposite transformation, which maps a key to an attribute name, uses the
    following:

    1.  **Restriction:** Before transformation, a dash _must not_ be
        immediately followed by an ASCII lowercase letter `a` to
        `z`;
    2.  Add the `data-` prefix;
    3.  Add a dash before any ASCII uppercase letter `A` to `Z`,
        then lowercase the letter;
    4.  Other characters are left unchanged.

For example, a `data-abc-def` attribute corresponds to
`dataset.abcDef`.

### Accessing values

- Attributes can be set and read by the camelCase name/key as an object property of
  the dataset: `element.dataset.keyname`
- Attributes can also be set and read using bracket syntax:
  `element.dataset['keyname']`
- The [`in`
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/in) can check if a given attribute exists:
  `'keyname' in element.dataset`

### Setting values

- When the attribute is set, its value is always converted to a string.

  For example: `element.dataset.example = null` is
  converted into `data-example="null"`.

- To remove an attribute, you can use the [`delete`
  operator](/en-US/docs/Web/JavaScript/Reference/Operators/delete): `delete element.dataset.keyname`

## Syntax

```js
const dataAttrMap = element.dataset
```

### Value

A {{domxref("DOMStringMap")}}.

## Examples

```html
<div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth>John Doe</div>
```

```js
const el = document.querySelector('#user');

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'johndoe'
// el.dataset.dateOfBirth === ''

// set a data attribute
el.dataset.dateOfBirth = '1960-10-03';
// Result: el.dataset.dateOfBirth === '1960-10-03'

delete el.dataset.dateOfBirth;
// Result: el.dataset.dateOfBirth === undefined

if ('someDataAttr' in el.dataset === false) {
  el.dataset.someDataAttr = 'mydata';
  // Result: 'someDataAttr' in el.dataset === true
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML [`data-*`](/en-US/docs/Web/HTML/Global_attributes/data-*) class
  of global attributes.
- [Using data attributes](/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- {{DOMxRef("Element.getAttribute()")}} and {{DOMxRef("Element.setAttribute()")}}
