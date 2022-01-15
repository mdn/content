---
title: CharacterData.data
slug: Web/API/CharacterData/data
tags:
  - Property
  - Reference
browser-compat: api.CharacterData.data
---
{{APIRef("DOM")}}

The **`data`** property of the {{domxref("CharacterData")}} interface represent the value of the current object's data.

## Value

A string with the character information contained in the {{domxref("CharacterData")}} node.

## Example

> **Note:** {{domxref("CharacterData")}} is an abstract interface.
> The examples below use two concrete interfaces implementing it, {{domxref("Text")}} and {{domxref("Comment")}}.

### Reading a comment using data

```html
<!-- This is an html comment !-->
<output id="Result"></output>
```

```js
let comment = document.body.childNodes[1];
let output = document.getElementById("Result");

output.value = comment.data;
```

{{EmbedLiveSample("Reading_a_comment_using_data", "100%", 50)}}

### Setting the content of a text node using data

```html
<span>Result: </span>Not set.
````

```js
let span = document.getElementsByTagName("span")[0];
let textnode = span.nextSibling;

textnode.data = "This text has been set using textnode.data."
```

{{EmbedLiveSample("Setting_the_content_of_a_text_node_using_data", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.length")}} returning the length of the data contained in the {{domxref("CharacterData")}} node.
