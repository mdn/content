---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
tags:
- Array
- ECMAScript 2015
- JavaScript
- Method
- Reference
- Polyfill
browser-compat: javascript.builtins.Array.from
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <code><strong>Array.from()</strong></code> static method
        creates a new, shallow-copied <code>Array</code> instance from an array-like or
        iterable object.</span></p>

<div>{{EmbedInteractiveExample("pages/js/array-from.html","shorter")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
Array.from(arrayLike, (element) => { ... } )
Array.from(arrayLike, (element, index) => { ... } )
Array.from(arrayLike, (element, index, array) => { ... } )

// Mapping function
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

// Inline mapping function
Array.from(arrayLike, function mapFn(element) { ... })
Array.from(arrayLike, function mapFn(element, index) { ... })
Array.from(arrayLike, function mapFn(element, index, array){ ... })
Array.from(arrayLike, function mapFn(element, index, array) { ... }, thisArg)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
    <dt><code><var>arrayLike</var></code></dt>
    <dd>An array-like or iterable object to convert to an array.</dd>
    <dt><code><var>mapFn</var></code> {{Optional_inline}}</dt>
    <dd>Map function to call on every element of the array.</dd>
    <dt><code><var>thisArg</var></code> {{Optional_inline}}</dt>
    <dd>Value to use as <code>this</code> when executing <code><var>mapFn</var></code>.
    </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new {{jsxref("Array")}} instance.</p>

<h2 id="Description">Description</h2>

<p><code>Array.from()</code> lets you create <code>Array</code>s from:</p>

<ul>
    <li>array-like objects (objects with a <code>length</code> property and indexed
        elements); or</li>
    <li><a href="/en-US/docs/Web/JavaScript/Guide/iterable">iterable objects</a> (objects
        such as {{jsxref("Map")}} and {{jsxref("Set")}}).</li>
</ul>

<p><code>Array.from()</code> has an optional parameter <code><var>mapFn</var></code>,
    which allows you to execute a {{jsxref("Array.prototype.map()", "map()")}} function on
    each element of the array being created.</p>

<p>More clearly,
    <code>Array.from(<var>obj</var>, <var>mapFn</var>, <var>thisArg</var>)</code><br>
    has the same result
    as <code>Array.from(<var>obj</var>).map(<var>mapFn</var>, <var>thisArg</var>)</code>,<br>
    except that it does not create an intermediate array.</p>

<div class="note"><p><strong>Note:</strong> This is especially important for certain array subclasses, like <a
        href="/en-US/docs/Web/JavaScript/Typed_arrays">typed arrays</a>, since the
    intermediate array would necessarily have values truncated to fit into the appropriate
    type.</p></div>

<p>The <code>length</code> property of the <code>from()</code> method is <code>1</code>.
</p>

<p>In ES2015, the class syntax allows sub-classing of both built-in and user-defined
    classes. As a result, static methods such as <code>Array.from()</code> are "inherited"
    by subclasses of <code>Array</code>, and create new instances <em>of the
        subclass</em>, not <code>Array</code>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Array_from_a_String">Array from a <code>String</code></h3>

<pre class="brush: js">Array.from('foo');
// [ "f", "o", "o" ]</pre>

<h3 id="Array_from_a_Set">Array from a <code>Set</code></h3>

<pre class="brush: js">const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]</pre>

<h3 id="Array_from_a_Map">Array from a <code>Map</code></h3>

<pre class="brush: js">const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
</pre>

<h3 id="Array_from_a_NodeList">Array from a <code>NodeList</code></h3>

<pre class="brush: js">// Create an array based on a property of DOM Elements
const images = document.getElementsByTagName('img');
const sources = Array.from(images, image =&gt; image.src);
const insecureSources = sources.filter(link =&gt; link.startsWith('http://'));</pre>

<h3 id="Array_from_an_Array-like_object_arguments">Array from an Array-like object
    (arguments)</h3>

<pre class="brush: js">function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]</pre>

<h3 id="Using_arrow_functions_and_Array.from">Using arrow functions and
    <code>Array.from()</code></h3>

<pre class="brush: js">// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x =&gt; x + x);
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) =&gt; i);
// [0, 1, 2, 3, 4]
</pre>

<h3 id="Sequence_generator_range">Sequence generator (range)</h3>

<pre class="brush: js">// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) =&gt; Array.from({ length: (stop - start) / step + 1}, (_, i) =&gt; start + (i * step));

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x =&gt; String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Polyfill">Polyfill</h2>

<p><code>Array.from()</code> was added to the ECMA-262 standard in the 6th
    Edition (ES2015). As such, it may not be present in other implementations of the
    standard. </p>

<p>You can work around this by inserting the following code at the beginning of your
    scripts, allowing use of <code>Array.from()</code> in implementations that don't
    natively support it.</p>

<div class="notecard note">
    <p><strong>Note:</strong> This algorithm is exactly as specified in
        ECMA-6th> Edition (assuming <code>Object</code> and
        <code>TypeError</code> have their original values and that
        <code><var>callback</var>.call()</code> evaluates to the original value of
        {{jsxref("Function.prototype.call()")}}).</p>

    <p>In addition, since true iterables cannot be polyfilled, this implementation does
        not support generic iterables as defined in the 6th Edition of
        ECMA-262.</p>
</div>

<pre class="brush: js">// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
    Array.from = (function () {
        var symbolIterator;
        try {
            symbolIterator = Symbol.iterator
                ? Symbol.iterator
                : 'Symbol(Symbol.iterator)';
        } catch (e) {
            symbolIterator = 'Symbol(Symbol.iterator)';
        }

        var toStr = Object.prototype.toString;
        var isCallable = function (fn) {
            return (
                typeof fn === 'function' ||
                toStr.call(fn) === '[object Function]'
            );
        };
        var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) return 0;
            if (number === 0 || !isFinite(number)) return number;
            return (number &gt; 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        var setGetItemHandler = function setGetItemHandler(isIterator, items) {
            var iterator = isIterator &amp;&amp; items[symbolIterator]();
            return function getItem(k) {
                return isIterator ? iterator.next() : items[k];
            };
        };

        var getArray = function getArray(
            T,
            A,
            len,
            getItem,
            isIterator,
            mapFn
        ) {
            // 16. Let k be 0.
            var k = 0;

            // 17. Repeat, while k &lt; len… or while iterator is done (also steps a - h)
            while (k &lt; len || isIterator) {
                var item = getItem(k);
                var kValue = isIterator ? item.value : item;

                if (isIterator &amp;&amp; item.done) {
                    return A;
                } else {
                    if (mapFn) {
                        A[k] =
                            typeof T === 'undefined'
                                ? mapFn(kValue, k)
                                : mapFn.call(T, kValue, k);
                    } else {
                        A[k] = kValue;
                    }
                }
                k += 1;
            }

            if (isIterator) {
                throw new TypeError(
                    'Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1'
                );
            } else {
                A.length = len;
            }

            return A;
        };

        // The length property of the from method is 1.
        return function from(arrayLikeOrIterator /*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;

            // 2. Let items be ToObject(arrayLikeOrIterator).
            var items = Object(arrayLikeOrIterator);
            var isIterator = isCallable(items[symbolIterator]);

            // 3. ReturnIfAbrupt(items).
            if (arrayLikeOrIterator == null &amp;&amp; !isIterator) {
                throw new TypeError(
                    'Array.from requires an array-like object or iterator - not null or undefined'
                );
            }

            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length &gt; 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) {
                    throw new TypeError(
                        'Array.from: when provided, the second argument must be a function'
                    );
                }

                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length &gt; 2) {
                    T = arguments[2];
                }
            }

            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);

            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method
            // of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            return getArray(
                T,
                A,
                len,
                setGetItemHandler(isIterator, items),
                isIterator,
                mapFn
            );
        };
    })();
}</pre>

<h2 id="See_also">See also</h2>

<ul>
    <li>A polyfill of <code>Array.from</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
    <li>{{jsxref("Array")}}</li>
    <li>{{jsxref("Array.prototype.map()")}}</li>
    <li>{{jsxref("TypedArray.from()")}}</li>
</ul>
