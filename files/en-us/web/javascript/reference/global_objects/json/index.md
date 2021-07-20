---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
tags:
  - JSON
  - JavaScript
  - Namespace
  - Object
  - Reference
browser-compat: javascript.builtins.JSON
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <strong><code>JSON</code></strong> object contains methods
    for parsing <a href="https://json.org/">JavaScript Object
      Notation</a> ({{glossary("JSON")}}) and converting values to JSON. It can't be
    called or constructed, and aside from its two method properties, it has no interesting
    functionality of its own.</span></p>

<h2 id="Description">Description</h2>

<h3 id="JavaScript_and_JSON_differences">JavaScript and JSON differences</h3>

<p>JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and
  {{jsxref("null")}}. It is based upon JavaScript syntax but is distinct from it: some
  JavaScript is <em>not</em> JSON.</p>

<dl>
  <dt><strong>Objects and Arrays</strong></dt>
  <dd>Property names must be double-quoted strings; <a
      href="/en-US/docs/Web/JavaScript/Reference/Trailing_commas">trailing commas</a> are
    forbidden.</dd>
  <dt><strong>Numbers</strong></dt>
  <dd>Leading zeros are prohibited. A decimal point must be followed by at least one
    digit. <code>NaN</code> and <code>Infinity</code> are unsupported.</dd>
  <dt><strong>Any JSON text is a valid JavaScript expression...</strong></dt>
  <dd>...But only in JavaScript engines that have implemented the <a
      href="https://github.com/tc39/proposal-json-superset">proposal to make all JSON text
      valid ECMA-262</a>. In engines that haven't implemented the proposal, U+2028 LINE
    SEPARATOR and U+2029 PARAGRAPH SEPARATOR are allowed in string literals and property
    keys in JSON; but their use in these features in JavaScript string literals is a
    {{jsxref("SyntaxError")}}.</dd>
</dl>

<p>Consider this example where {{jsxref("JSON.parse()")}} parses the string as JSON and
  {{jsxref("Global_Objects/eval")}} executes the string as JavaScript:</p>

<pre class="brush: js">let code = '"\u2028\u2029"'
JSON.parse(code)  // evaluates to "\u2028\u2029" in all engines
eval(code)        // throws a SyntaxError in old engines
</pre>

<p>Other differences include allowing only double-quoted strings and having no provisions
  for {{jsxref("undefined")}} or comments. For those who wish to use a more human-friendly
  configuration format based on JSON, there is <a href="https://json5.org/">JSON5</a>,
  used by the Babel compiler, and the more commonly used <a
    href="https://en.wikipedia.org/wiki/YAML">YAML</a>.</p>

<h3 id="full_json_grammar">Full JSON grammar</h3>

<p>Valid JSON syntax is formally defined by the following grammar, expressed in <a href="https://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_form">ABNF</a>, and copied from <a href="https://datatracker.ietf.org/doc/html/rfc8259">IETF JSON standard (RFC)</a>:</p>

<pre>
JSON-text = object / array
begin-array     = ws %x5B ws  ; [ left square bracket
begin-object    = ws %x7B ws  ; { left curly bracket
end-array       = ws %x5D ws  ; ] right square bracket
end-object      = ws %x7D ws  ; } right curly bracket
name-separator  = ws %x3A ws  ; : colon
value-separator = ws %x2C ws  ; , comma
ws = *(
     %x20 /              ; Space
     %x09 /              ; Horizontal tab
     %x0A /              ; Line feed or New line
     %x0D                ; Carriage return
     )
value = false / null / true / object / array / number / string
false = %x66.61.6c.73.65   ; false
null  = %x6e.75.6c.6c      ; null
true  = %x74.72.75.65      ; true
object = begin-object [ member *( value-separator member ) ]
         end-object
member = string name-separator value
array = begin-array [ value *( value-separator value ) ] end-array
number = [ minus ] int [ frac ] [ exp ]
decimal-point = %x2E       ; .
digit1-9 = %x31-39         ; 1-9
e = %x65 / %x45            ; e E
exp = e [ minus / plus ] 1*DIGIT
frac = decimal-point 1*DIGIT
int = zero / ( digit1-9 *DIGIT )
minus = %x2D               ; -
plus = %x2B                ; +
zero = %x30                ; 0
string = quotation-mark *char quotation-mark
char = unescaped /
    escape (
        %x22 /          ; "    quotation mark  U+0022
        %x5C /          ; \    reverse solidus U+005C
        %x2F /          ; /    solidus         U+002F
        %x62 /          ; b    backspace       U+0008
        %x66 /          ; f    form feed       U+000C
        %x6E /          ; n    line feed       U+000A
        %x72 /          ; r    carriage return U+000D
        %x74 /          ; t    tab             U+0009
        %x75 4HEXDIG )  ; uXXXX                U+XXXX
escape = %x5C              ; \
quotation-mark = %x22      ; "
unescaped = %x20-21 / %x23-5B / %x5D-10FFFF

HEXDIG = DIGIT / %x41-46 / %x61-66   ; 0-9, A-F, or a-f
       ; HEXDIG equivalent to HEXDIG rule in [RFC5234]
DIGIT = %x30-39            ; 0-9
      ; DIGIT equivalent to DIGIT rule in [RFC5234]
</pre>

<p>Insignificant {{glossary("whitespace")}} may be present anywhere except within a
  <code><var>JSONNumber</var></code> (numbers must contain no whitespace) or
  <code><var>JSONString</var></code> (where it is interpreted as the corresponding
  character in the string, or would cause an error). The tab character (<a
    href="https://unicode-table.com/en/0009/">U+0009</a>), carriage return (<a
    href="https://unicode-table.com/en/000D/">U+000D</a>), line feed (<a
    href="https://unicode-table.com/en/000A/">U+000A</a>), and space (<a
    href="https://unicode-table.com/en/0020/">U+0020</a>) characters are the only valid
  whitespace characters.</p>

<h2 id="Static_methods">Static methods</h2>

<dl>
  <dt>{{jsxref("JSON.parse()", "JSON.parse(<var>text</var>[, <var>reviver</var>])")}}</dt>
  <dd>Parse the string <code><var>text</var></code> as JSON, optionally transform the
    produced value and its properties, and return the value. Any violations of the JSON
    syntax, including those pertaining to the differences between JavaScript and JSON,
    cause a {{jsxref("SyntaxError")}} to be thrown. The <code><var>reviver</var></code>
    option allows for interpreting what the <code><var>replacer</var></code> has used to
    stand in for other datatypes.</dd>
  <dt>{{jsxref("JSON.stringify()", "JSON.stringify(<var>value</var>[,
    <var>replacer</var>[, <var>space</var>]])")}}</dt>
  <dd>Return a JSON string corresponding to the specified value, optionally including only
    certain properties or replacing property values in a user-defined manner. By default,
    all instances of {{jsxref("undefined")}} are replaced with {{jsxref("null")}}, and
    other unsupported native data types are censored. The <code><var>replacer</var></code>
    option allows for specifying other behavior.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Example_JSON">Example JSON</h3>

<pre class="brush: json">{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Date.prototype.toJSON()")}}</li>
  <li><a href="https://json-diff.com/">JSON Diff</a> checker</li>
  <li><a href="https://jsonbeautifier.org/">JSON Beautifier/editor</a></li>
  <li><a href="https://jsonparser.org/">JSON Parser</a></li>
  <li><a href="https://tools.learningcontainer.com/json-validator/">JSON Validator</a>
  </li>
</ul>
