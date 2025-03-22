---
title: "CharacterData: data property"
short-title: data
slug: Web/API/CharacterData/data
page-type: web-api-instance-property
browser-compat: api.CharacterData.data
---

{{APIRef("DOM")}}

The **`data`** property of the {{domxref("CharacterData")}} interface represent the value of the current object's data.

## Value

A string with the character information contained in the {{domxref("CharacterData")}} node.

When set to the `null` value, that `null` value is converted to the empty string (`""`), so `cd.data = null` is equivalent to `cd.data = ""`.

## Example

> **Note:** {{domxref("CharacterData")}} is an abstract interface.
> The examples below use two concrete interfaces implementing it, {{domxref("Text")}} and {{domxref("Comment")}}.

### Reading a comment using data

```html
<!-- This is an HTML comment -->
<output id="result"></output>
```

```js
const comment = document.body.childNodes[1];
const output = document.getElementById("result");

output.value = comment.data;
```

{{EmbedLiveSample("Reading_a_comment_using_data", "100%", 50)}}

### Setting the content of a text node using data

```html
<span>Result: </span>Not set.
```

```js
const span = document.querySelector("span");
const textNode = span.nextSibling;

textNode.data = "This text has been set using 'textNode.data'.";
```

{{EmbedLiveSample("Setting_the_content_of_a_text_node_using_data", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.length")}} returning the length of the data contained in the {{domxref("CharacterData")}} node.
