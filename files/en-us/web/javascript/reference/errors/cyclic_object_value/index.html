---
title: 'TypeError: cyclic object value'
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
tags:
- Error
- Errors
- JavaScript
- TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "cyclic object value" occurs when object references were found
  in <a href="https://www.json.org/">JSON</a>. {{jsxref("JSON.stringify()")}} doesn't try
  to solve them and fails accordingly.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: cyclic object value (Firefox)
TypeError: Converting circular structure to JSON (Chrome and Opera)
TypeError: Circular reference in value argument not supported (Edge)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The <a href="https://www.json.org/">JSON format</a> per se doesn't support object
  references (although an <a
    href="https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03">IETF draft
    exists</a>), hence {{jsxref("JSON.stringify()")}} doesn't try to solve them and fails
  accordingly.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Circular_references">Circular references</h3>

<p>In a circular structure like the following</p>

<pre class="brush: js">var circularReference = {otherData: 123};
circularReference.myself = circularReference;
</pre>

<p>{{jsxref("JSON.stringify()")}} will fail</p>

<pre class="brush: js example-bad">JSON.stringify(circularReference);
// TypeError: cyclic object value
</pre>

<p>To serialize circular references you can use a library that supports them (e.g. <a
    href="https://github.com/douglascrockford/JSON-js/blob/master/cycle.js">cycle.js</a>)
  or implement a solution by yourself, which will require finding and replacing (or
  removing) the cyclic references by serializable values.</p>

<p>The snippet below illustrates how to find and filter (thus causing data loss) a cyclic
  reference by using the <code>replacer</code> parameter of
  {{jsxref("JSON.stringify()")}}:</p>

<pre class="brush: js">const getCircularReplacer = () =&gt; {
  const seen = new WeakSet();
  return (key, value) =&gt; {
    if (typeof value === "object" &amp;&amp; value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

JSON.stringify(circularReference, getCircularReplacer());
// {"otherData":123}
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("JSON.stringify")}}</li>
  <li><a
      href="https://github.com/douglascrockford/JSON-js/blob/master/cycle.js">cycle.js</a>
    – Introduces two functions, <code>JSON.decycle</code> and
    <code>JSON.retrocycle</code>, which makes it possible to encode and decode cyclical
    structures and dags into an extended and retrocompatible JSON format.</li>
</ul>
