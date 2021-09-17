---
title: HTMLSelectElement.add()
slug: Web/API/HTMLSelectElement/add
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - Method
  - Reference
browser-compat: api.HTMLSelectElement.add
---
{{APIRef("HTML DOM")}}

The **`HTMLSelectElement.add()`** method adds an element to the
collection of `option` elements for this `select` element.

## Syntax

```js
collection.add(item[, before]);
```

### Parameters

- _item_ is an {{domxref("HTMLOptionElement")}} or
  {{domxref("HTMLOptGroupElement")}}
- _before_ is optional and an element of the collection, or an index of type
  _long_, representing the _item_ should be inserted before. If this
  parameter is `null` (or the index does not exist), the new element is
  appended to the end of the collection.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown if the _item_ passed to the method is an ancestor of the`{{domxref("HTMLSelectElement")}}`.

## Examples

### Creating Elements from Scratch

```js
var sel = document.createElement("select");
var opt1 = document.createElement("option");
var opt2 = document.createElement("option");

opt1.value = "1";
opt1.text = "Option: Value 1";

opt2.value = "2";
opt2.text = "Option: Value 2";

sel.add(opt1, null);
sel.add(opt2, null);

/*
  Produces the following, conceptually:

  <select>
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>
*/
```

The before parameter is optional. So the following is accepted.

```js
...
sel.add(opt1);
sel.add(opt2);
...
```

### Append to an Existing Collection

```js
var sel = document.getElementById("existingList");

var opt = document.createElement("option");
opt.value = "3";
opt.text = "Option: Value 3";

sel.add(opt, null);

/*
  Takes the existing following select object:

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>

  And changes it to:

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
    <option value="3">Option: Value 3</option>
  </select>
*/
```

The before parameter is optional. So the following is accepted.

```js
...
sel.add(opt);
...
```

### Inserting to an Existing Collection

```js
var sel = document.getElementById("existingList");

var opt = document.createElement("option");
opt.value = "3";
opt.text = "Option: Value 3";

sel.add(opt, sel.options[1]);

/*
  Takes the existing following select object:

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>

  And changes it to:

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="3">Option: Value 3</option>
    <option value="2">Option: Value 2</option>
  </select>
*/
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
