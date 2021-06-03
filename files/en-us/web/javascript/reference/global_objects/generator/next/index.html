---
title: Generator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
tags:
  - ECMAScript 2015
  - Generator
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Generator.next
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <strong><code>next()</code></strong> method returns an
    object with two properties <code>done</code> and <code>value</code>. You can also
    provide a parameter to the <code>next</code> method to send a value to the
    generator.</span></p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">next(value)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>value</var></code></dt>
  <dd>
    <p>The value to send to the generator.</p>
    <p>The value will be assigned as a result of a <code>yield</code> expression. For
    example, in <code><var>variable</var> = yield <var>expression</var></code>, the value
    passed to the <code>.next()</code> function will be assigned to
    <code><var>variable</var></code>.</p>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An {{jsxref("Object")}} with two properties:</p>

<dl>
  <dt><code>done</code> (boolean)</dt>
  <dd>
    <p>Has the value <code>true</code> if the iterator is past the end of the iterated
    sequence. In this case <code>value</code> optionally specifies the <em>return
      value</em> of the iterator.</p>
    <p>Has the value <code>false</code> if the iterator was able to produce the next value
    in the sequence. This is equivalent of not specifying the <code>done</code> property
    altogether.</p>
  </dd>
  <dt><code>value</code></dt>
  <dd>Any JavaScript value returned by the iterator. Can be omitted when <code>done</code>
    is <code>true</code>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_next">Using next()</h3>

<p>The following example shows a simple generator and the object that the
  <code>next</code> method returns:</p>

<pre class="brush: js">function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); // "Generator { }"
g.next();      // "Object { value: 1, done: false }"
g.next();      // "Object { value: 2, done: false }"
g.next();      // "Object { value: 3, done: false }"
g.next();      // "Object { value: undefined, done: true }"
</pre>

<h3 id="Using_next_with_a_list">Using next() with a list</h3>

<pre class="brush: js">function* getPage(pageSize = 1, list) {
    let output = [];
    let index = 0;

    while (index &lt; list.length) {
        output = [];
        for (let i = index; i &lt; index + pageSize; i++) {
            if (list[i]) {
                output.push(list[i]);
            }
        }

        yield output;
        index += pageSize;
    }
}

list = [1, 2, 3, 4, 5, 6, 7, 8]
var page = getPage(3, list);              // Generator { }

page.next();                              // Object {value: (3) [1, 2, 3], done: false}
page.next();                              // Object {value: (3) [4, 5, 6], done: false}
page.next();                              // Object {value: (2) [7, 8], done: false}
page.next();                              // Object {value: undefined, done: true}
</pre>

<h3 id="Sending_values_to_the_generator">Sending values to the generator</h3>

<p>In this example, <code>next</code> is called with a value.</p>

<p>Note that the first call does not log anything, because the generator was not yielding
  anything initially.</p>

<pre class="brush: js">function* gen() {
  while (true) {
    let value = yield null;
    console.log(value);
  }
}

const g = gen();
g.next(1);
// "{ value: null, done: false }"
g.next(2);
// 2
// "{ value: null, done: false }"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Statements/function*", "function*")}}</li>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators">Iterators and
      generators</a></li>
</ul>
