---
title: TextEncoder.encodeInto()
slug: Web/API/TextEncoder/encodeInto
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - TextEncoder
  - encodeInto
browser-compat: api.TextEncoder.encodeInto
---
{{APIRef("Encoding API")}}

The **`TextEncoder.encodeInto()`** method takes a
string to encode and a destination {{jsxref("Uint8Array")}} to put
resulting UTF-8 encoded text into, and returns a dictionary object indicating the
progress of the encoding. This is potentially more performant than the older
`encode()` method especially when the target buffer is a view into a Wasm
heap.

## Syntax

```js
encodeInto(string, uint8Array)
```

### Parameters

- `string`
  - : A string containing the text to encode.
- `uint8Array`
  - : A {{jsxref("Uint8Array")}} object instance to place the resulting UTF-8
    encoded text into.

### Return value

An object, which contains two members:

- `read`
  - : The number of UTF-16 units of code from the source that has been converted over to
    UTF-8. This may be less than `string.length` if `uint8Array`
    did not have enough space.
- `written`
  - : The number of bytes modified in the destination `Uint8Array`. The bytes
    written are guaranteed to form complete UTF-8 byte sequences.

## Encode into a specific position

_encoder_`.encodeInto()` always puts its output at the start of the array.
However, it is sometimes useful to make the output start at a particular index. The
solution is [`TypedArray.prototype.subarray()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray):

```js
const encoder = new TextEncoder();

function encodeIntoAtPosition(string, u8array, position) {
    return encoder.encodeInto(string, position ? u8array.subarray(position|0) : u8array);
}

const u8array = new Uint8Array(8);
encodeIntoAtPosition("hello", u8array, 2);
console.log(u8array.join()); // 0,0,104,101,108,108,111,0
```

## Buffer sizing

To convert a JavaScript string `s`, the output space needed for full
conversion is never less than `s.length` bytes and never greater than
`s.length * 3` bytes. If the output allocation (typically within Wasm heap)
is expected to be short-lived, it makes sense to allocate `s.length * 3`
bytes for the output, in which case the first conversion attempt is guaranteed to
convert the whole string. Note that the `s.length * 3` is rare because the
string would have to be packed with some of the few characters that expand into 3
bytes. It is unlikely that long text will exceed `s.length * 2` bytes in
length. Thus, a more optimistic approach might be to allocate
`s.length * 2 + 5` bytes, and perform reallocation in the rare circumstance
that the optimistic prediction was wrong.

If the output is expected to be long-lived, it makes sense to compute minimum
allocation `roundUpToBucketSize(s.length)`, the maximum allocation size
`s.length * 3`, and to have a chosen (as a tradeoff between memory usage
and speed) threshold `t` such that if
`roundUpToBucketSize(s.length) + t >= s.length * 3`, you allocate for
`s.length * 3`. Otherwise, first allocate for
`roundUpToBucketSize(s.length)` and convert. If the `read` item
it the return dictionary is `s.length`, the conversion is done. If not,
reallocate the target buffer to `written + (s.length - read) * 3` and then
convert the rest by taking a substring of `s` starting from index
`read` and a subbuffer of the target buffer starting from index
`written`.

Above `roundUpToBucketSize()` is a function that rounds up to the allocator
bucket size. For example, if your Wasm allocator is known to use power-of-two buckets,
`roundUpToBucketSize()` should return the argument if it is a power-of-two
or the next power-of-two otherwise. If the behavior of the Wasm allocator is unknown,
`roundUpToBucketSize()` should be an identity function.

If the behavior of your allocator is unknown, you might want to have up to two
reallocation steps and make the first reallocation step multiply the _remaining
unconverted_ length by two instead of three. However, in that case, it makes
sense not to implement the usual multiplying by two of the _already written_
buffer length, because in such a case if a second reallocation happened, it would
always overallocate compared to the original length times three. The above advice
assumes that you don't need to allocate space for a zero terminator. That is, on the
Wasm side you are working with Rust strings or a non-zero-terminating C++ class. If
you are working with C++ `std::string`, even though the logical length is
shown to you, you need to take the extra terminator byte into account when computing
rounding up to allocator bucket size. See the next section about C strings.

## No Zero-termination

If the input string contains the character U+0000 in the input,
`encodeInto()` will write a 0x00 byte in the output.
`encodeInto()` _does not_ write a C-style 0x00 sentinel byte after
the logical output.

If your Wasm program uses C strings, it's your responsibility to write the 0x00
sentinel and you can't prevent your Wasm program from seeing a logically truncated
string if the JavaScript string contained U+0000. Observe:

```js
const encoder = new TextEncoder();

function encodeIntoWithSentinel(string, u8array, position) {
    const stats = encoder.encodeInto(string, position ? u8array.subarray(position|0) : u8array);
    if (stats.written < u8array.length) u8array[stats.written] = 0; // append null if room
    return stats;
}
```

## Examples

```html
<p class="source">This is a sample paragraph.</p>
<p class="result"></p>
```

```js
const sourcePara = document.querySelector('.source');
const resultPara = document.querySelector('.result');
const string = sourcePara.textContent;

const textEncoder = new TextEncoder();
const utf8 = new Uint8Array(string.length);

let encodedResults = textEncoder.encodeInto(string, utf8);
resultPara.textContent += `Bytes read: ${encodedResults.read}` +
    ` | Bytes written: ${encodedResults.written}` +
    ` | Encoded result: ${utf8}`;
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextEncoder")}} interface it belongs to.
- {{DOMxRef("TextEncoder.encode()")}}
