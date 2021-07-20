---
title: Template literals (Template strings)
slug: Web/JavaScript/Reference/Template_literals
tags:
  - ECMAScript 2015
  - Guide
  - JavaScript
  - React
  - String
  - Template Strings
  - Template literals
  - Template string
  - strings
browser-compat: javascript.grammar.template_literals
---
<div>{{JsSidebar("More")}}</div>

<p><span class="seoSummary">Template literals are string literals allowing embedded
    expressions. You can use multi-line strings and string interpolation features with
    them. </span></p>

<p>They were called "template strings" in prior editions of the ES2015 specification.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">`string text`

`string text line 1
 string text line 2`

`string text ${<var>expression</var>} string text`

<var>tag</var>`string text ${<var>expression</var>} string text`
</pre>

<h2 id="Description">Description</h2>

<p>Template literals are enclosed by the backtick (` `) (<a
    href="https://en.wikipedia.org/wiki/Grave_accent">grave accent</a>) character instead
  of double or single quotes.</p>

<p>Template literals can contain placeholders. These are indicated by the dollar sign and
  curly braces (<code>${<var>expression</var>}</code>). The expressions in the
  placeholders and the text between the backticks (` `) get passed to a function.</p>

<p>The default function just concatenates the parts into a single string. If there is an
  expression preceding the template literal (<code><var>tag</var></code> here), this is
  called a <dfn><em>tagged template</em></dfn>. In that case, the tag expression (usually
  a function) gets called with the template literal, which you can then manipulate before
  outputting.</p>

<p>To escape a backtick in a template literal, put a backslash (<code>\</code>) before the
  backtick.</p>

<pre class="brush: js">`\`` === '`' // --&gt; true</pre>

<h3 id="Multi-line_strings">Multi-line strings</h3>

<p>Any newline characters inserted in the source are part of the template literal.</p>

<p>Using normal strings, you would have to use the following syntax in order to get
  multi-line strings:</p>

<pre class="brush: js">console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"</pre>

<p>Using template literals, you can do the same like this:</p>

<pre class="brush: js">console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"</pre>

<h3 id="Expression_interpolation">Expression interpolation</h3>

<p>In order to embed expressions within normal strings, you would use the following
  syntax:</p>

<pre class="brush: js">let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."</pre>

<p>Now, with template literals, you are able to make use of the syntactic sugar, making
  substitutions like this more readable:</p>

<pre class="brush: js">let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."</pre>

<h3 id="Nesting_templates">Nesting templates</h3>

<p>In certain cases, nesting a template is the easiest (and perhaps more readable) way to
  have configurable strings. Within a backticked template, it is simple to allow inner
  backticks by using them inside a placeholder <code>${ }</code> within the template.</p>

<p>For instance, if condition a is <code>true</code>, then <code>return</code> this
  templated literal.</p>

<p>In ES5:</p>

<pre class="brush: js">let classes = 'header';
classes += (isLargeScreen() ?
  '' : item.isCollapsed ?
    ' icon-expander' : ' icon-collapser');
</pre>

<p>In ES2015 with template literals and without nesting:</p>

<pre class="brush: js">const classes = `header ${ isLargeScreen() ? '' :
  (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;</pre>

<p>In ES2015 with nested template literals:</p>

<pre class="brush: js">const classes = `header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;</pre>

<h3 id="Tagged_templates">Tagged templates</h3>

<p>A more advanced form of template literals are <em>tagged</em> templates.</p>

<p>Tags allow you to parse template literals with a function. The first argument of a tag
  function contains an array of string values. The remaining arguments are related to the
  expressions.</p>

<p>The tag function can then perform whatever operations on these arguments you wish, and
  return the manipulated string. (Alternatively, it can return something completely
  different, as described in one of the following examples.)</p>

<p>The name of the function used for the tag can be whatever you want.</p>

<pre class="brush: js">let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp &gt; 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;

console.log(output);
// That Mike is a youngster.</pre>

<p>Tag functions don't even need to return a string!</p>

<pre class="brush: js">function template(strings, ...keys) {
  return (function(...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function(key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

let t1Closure = template`${0}${1}${0}!`;
//let t1Closure = template(["","","","!"],0,1,0);
t1Closure('Y', 'A');                      // "YAY!"

let t2Closure = template`${0} ${'foo'}!`;
//let t2Closure = template([""," ","!"],0,"foo");
t2Closure('Hello', {foo: 'World'}); // "Hello World!"

let t3Closure = template`I'm ${'name'}. I'm almost ${'age'} years old.`;
//let t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure('foo', {name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."
t3Closure({name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."
</pre>

<h3 id="Raw_strings">Raw strings</h3>

<p>The special <code>raw</code> property, available on the first argument to the tag
  function, allows you to access the raw strings as they were entered, without processing
  <a
    href="/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings">escape
    sequences</a>.</p>

<pre class="brush: js">function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
</pre>

<p>In addition, the {{jsxref("String.raw()")}} method exists to create raw strings—just
  like the default template function and string concatenation would create.</p>

<pre class="brush: js">let str = String.raw`Hi\n${2+3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(',');
// "H,i,\\,n,5,!"
</pre>

<h3 id="Tagged_templates_and_escape_sequences">Tagged templates and escape sequences</h3>

<h4 id="ES2016_behavior">ES2016 behavior</h4>

<p>As of ECMAScript 2016, tagged templates conform to the rules of the following escape
  sequences:</p>

<ul>
  <li>Unicode escapes started by "<code>\u</code>", for example <code>\u00A9</code></li>
  <li>Unicode code point escapes indicated by "<code>\u{}</code>", for example
    <code>\u{2F804}</code></li>
  <li>Hexadecimal escapes started by "<code>\x</code>", for example <code>\xA9</code></li>
  <li>Octal literal escapes started by "<code>\0o</code>" and followed by one or more
    digits, for example <code>\0o251</code></li>
</ul>

<p>This means that a tagged template like the following is problematic, because, per
  ECMAScript grammar, a parser looks for valid Unicode escape sequences, but finds
  malformed syntax:</p>

<pre class="brush: js">latex`\unicode`
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence</pre>

<h4 id="ES2018_revision_of_illegal_escape_sequences">ES2018 revision of illegal escape
  sequences</h4>

<p>Tagged templates should allow the embedding of languages (for example <a
    href="https://en.wikipedia.org/wiki/Domain-specific_language">DSLs</a>, or <a
    href="https://en.wikipedia.org/wiki/LaTeX">LaTeX</a>), where other escapes sequences
  are common. The ECMAScript proposal <a
    href="https://tc39.github.io/proposal-template-literal-revision/">Template Literal
    Revision</a> (Stage 4, to be integrated in the ECMAScript 2018 standard) removes the
  syntax restriction of ECMAScript escape sequences from tagged templates.</p>

<p>However, illegal escape sequences must still be represented in the “cooked”
  representation. They will show up as {{jsxref("undefined")}} element in the “cooked”
  array:</p>

<pre class="brush: js">function latex(str) {
  return { "cooked": str[0], "raw": str.raw[0] }
}

latex`\unicode`

// { cooked: undefined, raw: "\\unicode" }</pre>

<p>Note that the escape sequence restriction is only dropped from <em>tagged</em>
  templates—not from <em>untagged</em> template literals:</p>

<pre
  class="brush: js example-bad">let bad = `bad escape sequence: \unicode`;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("String")}}</li>
  <li>{{jsxref("String.raw()")}}</li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar">Lexical grammar</a>
  </li>
  <li><a href="https://gist.github.com/WebReflection/8f227532143e63649804">Template-like
      strings in ES3 compatible syntax</a></li>
  <li><a href="https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/">"ES6 in
      Depth: Template strings" on hacks.mozilla.org</a></li>
</ul>
