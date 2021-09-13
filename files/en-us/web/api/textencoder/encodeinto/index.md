---
title: TextEncoder.prototype.encodeInto()
slug: Web/API/TextEncoder/encodeInto
tags:
  - API
  - Experimental
  - Method
  - Reference
  - TextEncoder
  - encodeInto
browser-compat: api.TextEncoder.encodeInto
---
{{APIRef("Encoding API")}}{{SeeCompatTable}}

The **`TextEncoder.prototype.encodeInto()`** method takes a
{{domxref("USVString")}} to encode and a destination {{jsxref("Uint8Array")}} to put
resulting UTF-8 encoded text into, and returns a dictionary object indicating the
progress of the encoding. This is potentially more performant than the older
`encode()` method especially when the target buffer is a view into a Wasm
heap.

## Syntax

```js
b1 = encoder.encodeInto(string, uint8Array);
```

### Parameters

- `string`
  - : Is a {{DOMxRef("USVString")}} containing the text to encode.
- `uint8Array`
  - : Is a {{jsxref("Uint8Array")}} object instance to place the resulting UTF-8
    encoded text into.

### Return value

A `TextEncoderEncodeIntoResult` dictionary, which contains two members:

- `read`
  - : The number of UTF-16 units of code from the source that has been converted over to
    UTF-8. This may be less than `string.length` if `uint8Array`
    did not have enough space.
- `written`
  - : The number of bytes modified in the destination `Uint8Array`. The bytes
    written are guaranteed to form complete UTF-8 byte sequences.

## Encode Into A Specific Position

_encoder_.encodeInto always puts its output at the start of the array.
However, it is sometimes useful to make the output start at a particular index. The
solution is [TypedArray.prototype.subarray()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray).
Observe.

```js
var encoder = new TextEncoder;
function encodeIntoAtPosition(string, u8array, position) {
    return encoder.encodeInto(string, position ? u8array.subarray(position|0) : u8array);
}

var u8array = new Uint8Array(8);
encodeIntoAtPosition("hello", u8array, 2);
console.log( "" + u8array.join() ); // 0,0,104,101,108,108,111,0
```

## Buffer Sizing

To convert a JavaScript string `s`, the output space needed for full
conversion is never less than `s.length` bytes and never greater than
`s.length * 3` bytes. If the output allocation (typically within Wasm heap)
is expected to be short-lived, it makes sense to allocate `s.length * 3`
bytes for the output, in which case the first conversion attempt is guaranteed to
convert the whole string. Note that the `s.length * 3` is rare because the
string would have to be packed with some of the few characters that expant into 3
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
always overallocate compared to the original length times three.The above advice
assumes that you don't need to allocate space for a zero terminator. That is, on the
Wasm side you are working with Rust strings or a non-zero-terminating C++ class. If
you are working with C++ `std::string`, even though the logical length is
shown to you, you need to take the extra terminator byte into account when computing
rounding up to allocator bucket size. See the next section about C strings.

## No Zero-Termination

If the input string contains the character U+0000 in the input,
`encodeInto()` will write a 0x00 byte in the output.
`encodeInto()` _does not_ write a C-style 0x00 sentinel byte after
the logical output.

If your Wasm program uses C strings, it's your responsibility to write the 0x00
sentinel and you can't prevent your Wasm program from seeing a logically truncated
string if the JavaScript string contained U+0000. Observe:

```js
var encoder = new TextEncoder;
function encodeIntoWithSentinel(string, u8array, position) {
    var stats = encoder.encodeInto(string, position ? u8array.subarray(position|0) : u8array);
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
resultPara.textContent += 'Bytes read: ' + encodedResults.read +
                          ' | Bytes written: ' + encodedResults.written +
                          ' | Encoded result: ' + utf8;
```

{{EmbedLiveSample('Examples')}}

## Polyfill

The polyfill below may be a bit long because of the switch cases and utilization of
native TextEncoder.prototype.encode in Safari when available, but it is well worth the
length because of the gains in performance.

```js
(function(window){
    "use strict";
    var log = Math.log;
    var LN2 = Math.LN2;
    var clz32 = Math.clz32 || function(x) {return 31 - log(x >>> 0) / LN2 | 0};
    var fromCharCode = String.fromCharCode;
    var patchedU8Array = window.Uint8Array || Array;
    var TextEncoderPrototype = TextEncoder["prototype"];
    var GlobalTextEncoder = window["TextEncoder"];
    var globalTextEncoderPrototype;
    var globalTextEncoderInstance;
    //////////////////////////////////////////////////////////////////////////////////////
    function encoderReplacer(nonAsciiChars){
        // make the UTF string into a binary UTF-8 encoded string
        var point = nonAsciiChars.charCodeAt(0)|0;
        if (0xD800 <= point && point <= 0xDBFF) {
            var nextcode = nonAsciiChars.charCodeAt(1)|0; // defaults to 0 when NaN, causing null replacement character

            if (0xDC00 <= nextcode && nextcode <= 0xDFFF) {
                //point = ((point - 0xD800)<<10) + nextcode - 0xDC00 + 0x10000|0;
                point = (point<<10) + nextcode - 0x35fdc00|0;
                if (point > 0xffff)
                    return fromCharCode(
                        (0x1e/*0b11110*/<<3) | (point>>>18),
                        (0x2/*0b10*/<<6) | ((point>>>12)&0x3f/*0b00111111*/),
                        (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/),
                        (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/)
                    );
            } else point = 65533/*0b1111111111111101*/;//return '\xEF\xBF\xBD';//fromCharCode(0xef, 0xbf, 0xbd);
        }
        /*if (point <= 0x007f) return nonAsciiChars;
        else */if (point <= 0x07ff) {
            return fromCharCode((0x6<<5)|(point>>>6), (0x2<<6)|(point&0x3f));
        } else return fromCharCode(
            (0xe/*0b1110*/<<4) | (point>>>12),
            (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/),
            (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/)
        );
    }
    function TextEncoder(){};
    TextEncoderPrototype["encode"] = function(inputString) {
        // 0xc0 => 0b11000000; 0xff => 0b11111111; 0xc0-0xff => 0b11xxxxxx
        // 0x80 => 0b10000000; 0xbf => 0b10111111; 0x80-0xbf => 0b10xxxxxx
        var encodedString = inputString === void 0 ?  "" : ("" + inputString).replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g, encoderReplacer);
        var len=encodedString.length|0, result = new patchedU8Array(len);
        var i=0;
        for (; i<len; i=i+1|0)
            result[i] = encodedString.charCodeAt(i) |0;
        return result;
    };
    function polyfill_encodeInto(inputString, u8Arr) {
        var encodedString = inputString === void 0 ?  "" : ("" + inputString).replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g, encoderReplacer);
        var len=encodedString.length|0, i=0, char=0, read=0, u8ArrLen = u8Arr.length|0, inputLength=inputString.length|0;
        if (u8ArrLen < len) len=u8ArrLen;
        putChars: for (; i<len; i=i+1|0) {
            char = encodedString.charCodeAt(i) |0;
            switch(char >>> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    read = read + 1|0;
                    // extension points:
                case 8:
                case 9:
                case 10:
                case 11:
                    break;
                case 12:
                case 13:
                    if ((i+1|0) < u8ArrLen) {
                        read = read + 1|0;
                        break;
                    }
                case 14:
                    if ((i+2|0) < u8ArrLen) {
                        read = read + 1|0;
                        break;
                    }
                case 15:
                    if ((i+3|0) < u8ArrLen) {
                        read = read + 1|0;
                        break;
                    }
                default:
                    break putChars;
            }
            //read = read + ((char >>> 6) !== 2) |0;
            u8Arr[i] = char;
        }
        return {"written": i, "read": inputLength < read ? inputLength : read};
    };
    TextEncoderPrototype["encodeInto"] = polyfill_encodeInto;

    if (!GlobalTextEncoder) {
        window["TextEncoder"] = TextEncoder;
    } else if (!(globalTextEncoderPrototype = GlobalTextEncoder["prototype"])["encodeInto"]) {
        globalTextEncoderInstance = new GlobalTextEncoder;
        globalTextEncoderPrototype["encodeInto"] = function(string, u8arr) {
            // Unfortunately, there's no way I can think of to quickly extract the number of bits written and the number of bytes read and such
            var strLen = string.length|0, u8Len = u8arr.length|0;
            if (strLen < ((u8Len >> 1) + 3|0)) { // in most circumstances, this means its safe. there are still edge-cases which are possible
                // in many circumstances, we can use the faster native TextEncoder
                var res8 = globalTextEncoderInstance["encode"](string);
                var res8Len = res8.length|0;
                if (res8Len < u8Len) { // if we dont have to worry about read/written
                    u8arr.set( res8 );
                    return {
                        "read": strLen,
                        "written": res8.length|0
                    };
                }
            }
            return polyfill_encodeInto(string, u8arr);
        };
    }
})(typeof global == "" + void 0 ? typeof self == "" + void 0 ? this : self : global);
```

Source: <https://github.com/anonyco/FastestSmallestTextEncoderDecoder>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextEncoder")}} interface it belongs to.
- {{DOMxRef("TextEncoder.encode()")}}
