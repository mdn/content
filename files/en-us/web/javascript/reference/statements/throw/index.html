---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
tags:
- Exception
- JavaScript
- Language feature
- Statement
browser-compat: javascript.statements.throw
---
<div>{{jsSidebar("Statements")}}</div>

<p>The <strong><code>throw</code> statement</strong> throws a user-defined exception.
  Execution of the current function will stop (the statements after <code>throw</code>
  won't be executed), and control will be passed to the first <a
    href="/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"><code>catch</code></a>
  block in the call stack. If no <code>catch</code> block exists among caller functions,
  the program will terminate.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-throw.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">throw <var>expression</var>; </pre>

<dl>
  <dt><code><var>expression</var></code></dt>
  <dd>The expression to throw.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Use the <code>throw</code> statement to throw an exception. When you throw an
  exception, <code><var>expression</var></code> specifies the value of the exception. Each
  of the following throws an exception:</p>

<pre class="brush: js">throw 'Error2'; // generates an exception with a string value
throw 42;       // generates an exception with the value 42
throw true;     // generates an exception with the value true
throw new Error('Required');  // generates an error object with the message of Required
</pre>

<p>Also note that the <code>throw</code> statement is affected by <a
    href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion">automatic
    semicolon insertion (ASI)</a> as no line terminator between the <code>throw</code>
  keyword and the expression is allowed.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Throw_an_object">Throw an object</h3>

<p>You can specify an object when you throw an exception. You can then reference the
  object's properties in the <code>catch</code> block. The following example creates an
  object of type <code>UserException</code> and uses it in a <code>throw</code> statement.
</p>

<pre class="brush: js">function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}
function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo] !== undefined) {
    return months[mo];
  } else {
    throw new UserException('InvalidMonthNo');
  }
}

try {
  // statements to try
  var myMonth = 15; // 15 is out of bound to raise the exception
  var monthName = getMonthName(myMonth);
} catch (e) {
  monthName = 'unknown';
  console.error(e.message, e.name); // pass exception object to err handler
}
</pre>

<h3 id="Another_example_of_throwing_an_object">Another example of throwing an object</h3>

<p>The following example tests an input string for a U.S. zip code. If the zip code uses
  an invalid format, the throw statement throws an exception by creating an object of type
  <code>ZipCodeFormatException</code>.</p>

<pre class="brush: js">/*
 * Creates a ZipCode object.
 *
 * Accepted formats for a zip code are:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * If the argument passed to the ZipCode constructor does not
 * conform to one of these patterns, an exception is thrown.
 */

function ZipCode(zip) {
  zip = new String(zip);
  pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
  if (pattern.test(zip)) {
    // zip code value will be the first match in the string
    this.value = zip.match(pattern)[0];
    this.valueOf = function() {
      return this.value
    };
    this.toString = function() {
      return String(this.value)
    };
  } else {
    throw new ZipCodeFormatException(zip);
  }
}

function ZipCodeFormatException(value) {
  this.value = value;
  this.message = 'does not conform to the expected format for a zip code';
  this.toString = function() {
    return this.value + this.message;
  };
}

/*
 * This could be in a script that validates address data
 * for US addresses.
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
  try {
    z = new ZipCode(z);
  } catch (e) {
    if (e instanceof ZipCodeFormatException) {
      return ZIPCODE_INVALID;
    } else {
      return ZIPCODE_UNKNOWN_ERROR;
    }
  }
  return z;
}

a = verifyZipCode(95060);         // returns 95060
b = verifyZipCode(9560);          // returns -1
c = verifyZipCode('a');           // returns -1
d = verifyZipCode('95060');       // returns 95060
e = verifyZipCode('95060 1234');  // returns 95060 1234
</pre>

<h3 id="Rethrow_an_exception">Rethrow an exception</h3>

<p>You can use <code>throw</code> to rethrow an exception after you catch it. The
  following example catches an exception with a numeric value and rethrows it if the value
  is over 50. The rethrown exception propagates up to the enclosing function or to the top
  level so that the user sees it.</p>

<pre class="brush: js">try {
  throw n; // throws an exception with a numeric value
} catch (e) {
  if (e &lt;= 50) {
    // statements to handle exceptions 1-50
  } else {
    // cannot handle this exception, so rethrow
    throw e;
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Statements/try...catch", "try...catch")}}</li>
  <li>{{jsxref("Global_Objects/Error", "Error")}}</li>
</ul>
