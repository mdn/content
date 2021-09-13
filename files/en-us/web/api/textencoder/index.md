---
title: TextEncoder
slug: Web/API/TextEncoder
tags:
  - API
  - Encoding
  - Experimental
  - Interface
  - Reference
  - TextEncoder
browser-compat: api.TextEncoder
---
{{APIRef("Encoding API")}}

**`TextEncoder`** takes a stream of code points as input and emits a stream of UTF-8 bytes.

{{AvailableInWorkers}}

## Example

```js
const encoder = new TextEncoder()
const view = encoder.encode('€')
console.log(view); // Uint8Array(3) [226, 130, 172]
```

## Constructor

- {{DOMxRef("TextEncoder.TextEncoder", "TextEncoder()")}}
  - : Returns a newly constructed `TextEncoder` that will generate a byte stream with UTF-8 encoding.

## Properties

_The `TextEncoder` interface doesn't inherit any property._

- {{DOMxRef("TextEncoder.prototype.encoding")}}{{ReadOnlyInline}}
  - : Always returns "`utf-8`".

## Methods

_The `TextEncoder` interface doesn't inherit any method_.

- {{DOMxRef("TextEncoder.prototype.encode()")}}
  - : Takes a {{domxref("USVString")}} as input, and returns a {{jsxref("Uint8Array")}} containing UTF-8 encoded text.
- {{DOMxRef("TextEncoder.prototype.encodeInto()")}}
  - : Takes a {{domxref("USVString")}} to encode and a destination {{jsxref("Uint8Array")}} to put resulting UTF-8 encoded text into, and returns a dictionary object indicating the progress of the encoding. This is potentially more performant than the older `encode()` method.

## Polyfill

The below polyfill is compliant with the standard and therefore only supports UTF-8. It is designed to work in IE5 "out of the box". However, in IE5-IE9, it will return a regular Array instead of a TypedArray. In those cases a polyfill might be impractical for large strings. Finally, note that you should run the below code through a minifier (especially closure compiler) to turn sequences like `0x1e << 3` into `0xf0`. These sequences are not already precomputed because they serve to aesthetically illustrate how the polyfill works.

```js
if (typeof TextEncoder === "undefined") {
    TextEncoder=function TextEncoder(){};
    TextEncoder.prototype.encode = function encode(str) {
        "use strict";
        var Len = str.length, resPos = -1;
        // The Uint8Array's length must be at least 3x the length of the string because an invalid UTF-16
        //  takes up the equivelent space of 3 UTF-8 characters to encode it properly. However, Array's
        //  have an auto expanding length and 1.5x should be just the right balance for most uses.
        var resArr = typeof Uint8Array === "undefined" ? new Array(Len * 1.5) : new Uint8Array(Len * 3);
        for (var point=0, nextcode=0, i = 0; i !== Len; ) {
            point = str.charCodeAt(i), i += 1;
            if (point >= 0xD800 && point <= 0xDBFF) {
                if (i === Len) {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; break;
                }
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                nextcode = str.charCodeAt(i);
                if (nextcode >= 0xDC00 && nextcode <= 0xDFFF) {
                    point = (point - 0xD800) * 0x400 + nextcode - 0xDC00 + 0x10000;
                    i += 1;
                    if (point > 0xffff) {
                        resArr[resPos += 1] = (0x1e/*0b11110*/<<3) | (point>>>18);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>12)&0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/);
                        continue;
                    }
                } else {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; continue;
                }
            }
            if (point <= 0x007f) {
                resArr[resPos += 1] = (0x0/*0b0*/<<7) | point;
            } else if (point <= 0x07ff) {
                resArr[resPos += 1] = (0x6/*0b110*/<<5) | (point>>>6);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)  | (point&0x3f/*0b00111111*/);
            } else {
                resArr[resPos += 1] = (0xe/*0b1110*/<<4) | (point>>>12);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)    | ((point>>>6)&0x3f/*0b00111111*/);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)    | (point&0x3f/*0b00111111*/);
            }
        }
        if (typeof Uint8Array !== "undefined") return resArr.subarray(0, resPos + 1);
        // else // IE 6-9
        resArr.length = resPos + 1; // trim off extra weight
        return resArr;
    };
    TextEncoder.prototype.toString = function(){return "[object TextEncoder]"};
    try { // Object.defineProperty only works on DOM prototypes in IE8
        Object.defineProperty(TextEncoder.prototype,"encoding",{
            get:function(){if(TextEncoder.prototype.isPrototypeOf(this)) return"utf-8";
                           else throw TypeError("Illegal invocation");}
        });
    } catch(e) { /*IE6-8 fallback*/ TextEncoder.prototype.encoding = "utf-8"; }
    if(typeof Symbol!=="undefined")TextEncoder.prototype[Symbol.toStringTag]="TextEncoder";
}
```

Source: <https://github.com/anonyco/FastestSmallestTextEncoderDecoder>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextDecoder")}} interface describing the inverse operation.
- [Node.js supports global export from v11.0.0](https://nodejs.org/api/util.html#util_class_util_textencoder)
