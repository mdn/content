---
title: DecompressionStream.writable
slug: Web/API/DecompressionStream/writable
tags:
  - API
  - Property
  - Reference
  - writable
  - DecompressionStream
browser-compat: api.DecompressionStream.writable
---
{{DefaultAPISidebar("Compression Streams API")}}

The **`writable`** read-only property of the {{domxref("DecompressionStream")}} interface returns a {{domxref("WritableStream")}}.

## Syntax

```js
let writableStream = DecompressionStream.writable;
```

### Value

A {{domxref("WritableStream")}}.

## Examples

The following example returns a {{domxref("WritableStream")}} from a `DecompressionStream`.

```js
let stream = new DecompressionStream('gzip');
console.log(stream.writeable); //a WritableStream
```

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>
      <td>
        {{SpecName('Streams','#dom-generictransformstream-writable','writable')}}
      </td>
      <td>{{Spec2('Streams')}}</td>
      <td>Initial definition.</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
