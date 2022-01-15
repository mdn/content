---
title: ProcessingInstruction.target
slug: Web/API/ProcessingInstruction/target
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.ProcessingInstruction.target
---
{{ApiRef("DOM")}}

The read-only **`target`** property of the {{domxref("ProcessingInstruction")}} interface
represent the application to which the `ProcessingInstruction` is targeted.

For example:

```html
<?xml version="1.0"?>
```

is a processing instruction whose `target`is `xml`.

## Value

A {{jsxref("String")}} containing the name of the application.

## Example

### In an XML document

```html hidden
<output>
```

```js
let parser = new DOMParser();
const doc = parser.parseFromString('<?xml version="1.0"?><test/>', "application/xml");
const pi = doc.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');
doc.insertBefore(pi, doc.firstChild);

const output = document.getElementsByTagName("output")[0];
output.textContent = "This processing instruction's target is: " + doc.firstChild.target;
```

{{EmbedLiveSample("In an XML document", "100%", 50)}}


### In an HTML document

The processing instruction line will be considered, and represented, as a {{domxref("Comment")}} object.

```html
<?xml version="1.0"?>
<pre></pre>
```

```js
let node = document.getElementsByTagName("pre")[0].previousSibling.previousSibling;

let result = "Node with the processing instructiion: " + node.nodeName + ": " + node.nodeValue + "\n";

document.getElementsByTagName("pre")[0].textContent = result;
```

{{EmbedLiveSample("In an HTML document", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [DOM API](/en-US/docs/Web/API/Document_Object_Model)

