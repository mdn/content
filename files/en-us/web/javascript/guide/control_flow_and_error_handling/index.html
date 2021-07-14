---
title: Control flow and error handling
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
tags:
  - Beginner
  - Decision making
  - Error Handling
  - Flow control
  - Guide
  - JavaScript
  - Logic
  - control
  - l10n:priority
  - statements
---
<div>{{jsSidebar("JavaScript Guide")}}
  {{PreviousNext("Web/JavaScript/Guide/Grammar_and_types",
  "Web/JavaScript/Guide/Loops_and_iteration")}}</div>

<p class="seoSummary">JavaScript supports a compact set of statements, specifically
  control flow statements, that you can use to incorporate a great deal of interactivity
  in your application. This chapter provides an overview of these statements.</p>

<p>The <a href="/en-US/docs/Web/JavaScript/Reference/Statements">JavaScript reference</a>
  contains exhaustive details about the statements in this chapter. The semicolon
  (<code>;</code>) character is used to separate statements in JavaScript code.</p>

<p>Any JavaScript expression is also a statement. See <a
    href="/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators">Expressions and
    operators</a> for complete information about expressions.</p>

<h2 id="Block_statement">Block statement</h2>

<p>The most basic statement is a <dfn>block statement</dfn>, which is used to group
  statements. The block is delimited by a pair of curly brackets:</p>

<pre class="brush: js">{
  <var>statement_1</var>;
  <var>statement_2</var>;
  ⋮
  <var>statement_n</var>;
}
</pre>

<h3 id="Example">Example</h3>

<p>Block statements are commonly used with control flow statements (<code>if</code>,
  <code>for</code>, <code>while</code>).</p>

<pre class="brush: js">while (x &lt; 10) {
  x++;
}
</pre>

<p>Here, <code>{ x++; }</code> is the block statement.</p>

<div class="notecard note">
  <p><strong>Note:</strong> JavaScript before ECMAScript2015 (6th edition)
    <strong>does not</strong> have block scope!  In older JavaScript, variables introduced
    within a block are scoped to the containing function or script, and the effects of
    setting them persist beyond the block itself. In other words, <em>block statements do
      not define a scope</em>.</p>

  <p>"Standalone" blocks in JavaScript can produce completely different results from what
    they would produce in C or Java. For example:</p>

  <pre class="brush: js">var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2
</pre>

  <p>This outputs <code>2</code> because the <code>var x</code> statement within the block
    is in the same scope as the <code>var x</code> statement before the block. (In C or
    Java, the equivalent code would have outputted <code>1</code>.)</p>

  <p><strong>Since ECMAScript2015</strong>, the <code>let</code> and
    <code>const</code> variable declarations are block-scoped. See the
    {{jsxref("Statements/let", "let")}} and {{jsxref("Statements/const", "const")}}
    reference pages for more information.</p>
</div>

<h2 id="Conditional_statements">Conditional statements</h2>

<p>A conditional statement is a set of commands that executes if a specified condition is
  true. JavaScript supports two conditional statements: <code>if...else</code> and
  <code>switch</code>.</p>

<h3 id="if...else_statement"><code>if...else</code> statement</h3>

<p>Use the <code>if</code> statement to execute a statement if a logical condition is
  <code>true</code>. Use the optional <code>else</code> clause to execute a statement if
  the condition is <code>false</code>.</p>

<p>An <code>if</code> statement looks like this:</p>

<pre class="brush: js">if (<var>condition</var>) {
  <var>statement_1</var>;
} else {
  <var>statement_2</var>;
}</pre>

<p>Here, the <code><var>condition</var></code> can be any expression that evaluates to
  <code>true</code> or <code>false</code>. (See <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#description">Boolean</a>
  for an explanation of what evaluates to <code>true</code> and <code>false</code>.)</p>

<p>If <code><var>condition</var></code> evaluates to <code>true</code>,
  <code><var>statement_1</var></code> is executed. Otherwise,
  <code><var>statement_2</var></code> is executed. <code><var>statement_1</var></code> and
  <code><var>statement_2</var></code> can be any statement, including further nested
  <code>if</code> statements.</p>

<p>You can also compound the statements using <code>else if</code> to have multiple
  conditions tested in sequence, as follows:</p>

<pre class="brush: js">if (<var>condition_1</var>) {
  <var>statement_1</var>;
} else if (<var>condition_2</var>) {
  <var>statement_2</var>;
} else if (<var>condition_n</var>) {
  <var>statement_n</var>;
} else {
  <var>statement_last</var>;
}
</pre>

<p>In the case of multiple conditions, only the first logical condition which evaluates to
  <code>true</code> will be executed. To execute multiple statements, group them within a
  block statement (<code>{ … }</code>).</p>

<h4 id="Best_practice">Best practice</h4>

<p>In general, it's good practice to always use block statements—<em>especially</em> when
  nesting <code>if</code> statements:</p>

<pre class="brush: js">if (<var>condition</var>) {
  <var>statement_1_runs_if_condition_is_true</var>;
  <var>statement_2_runs_if_condition_is_true</var>;
} else {
  <var>statement_3_runs_if_condition_is_false</var>;
  <var>statement_4_runs_if_condition_is_false</var>;
}
</pre>

<p>It's unwise to use simple assignments in a conditional expression, because the
  assignment can be confused with equality when glancing over the code.</p>

<p>For example, do <em>not</em> write code like this:</p>

<pre class="example-bad brush: js">// Prone to being misread as "x == y"
if (x = y) {
  /* statements here */
}
</pre>

<p>If you need to use an assignment in a conditional expression, a common practice is to
  put additional parentheses around the assignment, like this:</p>

<pre class="example-good brush: js">if ((x = y)) {
  /* statements here */
}
</pre>

<h4 id="Falsy_values">Falsy values</h4>

<p>The following values evaluate to <code>false</code> (also known as <a
    href="/en-US/docs/Glossary/Falsy">Falsy</a> values):</p>

<ul>
  <li><code>false</code></li>
  <li><code>undefined</code></li>
  <li><code>null</code></li>
  <li><code>0</code></li>
  <li><code>NaN</code></li>
  <li>the empty string (<code>""</code>)</li>
</ul>

<p>All other values—including all objects—evaluate to <code>true</code> when passed to a
  conditional statement.</p>

<div class="notecard note">
  <p><strong>Note:</strong> Do not confuse the primitive boolean values
    <code>true</code> and <code>false</code> with the true and false values of the
    {{jsxref("Boolean")}} object!</p>

  <p>For example:</p>

  <pre class="brush: js">var b = new Boolean(false);
if (b)         // this condition evaluates to true
if (b == true) // this condition evaluates to false
</pre>
</div>

<h4 id="Example_2"><strong>Example</strong></h4>

<p>In the following example, the function <code>checkData</code> returns <code>true</code>
  if the number of characters in a <code>Text</code> object is three. Otherwise, it
  displays an alert and returns <code>false</code>.</p>

<pre class="brush: js">function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
        'Enter exactly three characters. ' +
        `${document.form1.threeChar.value} is not valid.`);
    return false;
  }
}
</pre>

<h3 id="switch_statement"><code>switch</code> statement</h3>

<p>A <code>switch</code> statement allows a program to evaluate an expression and attempt
  to match the expression's value to a <code>case</code> label. If a match is found, the
  program executes the associated statement.</p>

<p>A <code>switch</code> statement looks like this:</p>

<pre class="brush: js">switch (<var>expression</var>) {
  case <var>label_1</var>:
    <var>statements_1</var>
    [break;]
  case <var>label_2</var>:
    <var>statements_2</var>
    [break;]
    …
  default:
    <var>statements_def</var>
    [break;]
}
</pre>

<p>JavaScript evaluates the above switch statement as follows:</p>

<ul>
  <li>The program first looks for a <code>case</code> clause with a label matching the
    value of expression and then transfers control to that clause, executing the
    associated statements.</li>
  <li>If no matching label is found, the program looks for the optional
    <code>default</code> clause:
    <ul>
      <li>If a <code>default</code> clause is found, the program transfers control to that
        clause, executing the associated statements.</li>
      <li>If no <code>default</code> clause is found, the program resumes execution at the
        statement following the end of <code>switch</code>.</li>
      <li>(By convention, the <code>default</code> clause is written as the last clause,
        but it does not need to be so.)</li>
    </ul>
  </li>
</ul>

<h4 id="break_statements">break statements</h4>

<p>The optional <code>break</code> statement associated with each <code>case</code> clause
  ensures that the program breaks out of <code>switch</code> once the matched statement is
  executed, and then continues execution at the statement following <code>switch</code>.
  If <code>break</code> is omitted, the program continues execution inside the
  <code>switch</code> statement (and will evaluate the next <code>case</code>, and so on).
</p>

<h5 id="Example_3"><strong>Example</strong></h5>

<p>In the following example, if <code><var>fruittype</var></code> evaluates to
  <code>'Bananas'</code>, the program matches the value with case <code>'Bananas'</code>
  and executes the associated statement. When <code>break</code> is encountered, the
  program exits the <code>switch</code> and continues execution from the statement
  following <code>switch</code>. If <code>break</code> were omitted, the statement for
  <code>case 'Cherries'</code> would also be executed.</p>

<pre class="brush: js">switch (<var>fruittype</var>) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
   console.log(`Sorry, we are out of ${fruittype}.`);
}
console.log("Is there anything else you'd like?");</pre>

<h2 id="Exception_handling_statements">Exception handling statements</h2>

<p>You can throw exceptions using the <code>throw</code> statement and handle them using
  the <code>try...catch</code> statements.</p>

<ul>
  <li><a href="#throw_statement"><code>throw</code> statement</a></li>
  <li><a href="#try...catch_statement"><code>try...catch</code> statement</a></li>
</ul>

<h3 id="Exception_types">Exception types</h3>

<p>Just about any object can be thrown in JavaScript. Nevertheless, not all thrown objects
  are created equal. While it is common to throw numbers or strings as errors, it is
  frequently more effective to use one of the exception types specifically created for
  this purpose:</p>

<ul>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types">ECMAScript
      exceptions</a></li>
  <li><a href="/en-US/docs/Web/API/DOMException"
      title="The DOMException interface represents an abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API."><code>DOMException</code></a>
    and <a href="/en-US/docs/Web/API/DOMError"
      title="The DOMError interface describes an error object that contains an error name."><code>DOMError</code></a>
  </li>
</ul>

<h3 id="throw_statement"><code>throw</code> statement</h3>

<p>Use the <code>throw</code> statement to throw an exception. A <code>throw</code>
  statement specifies the value to be thrown:</p>

<pre class="brush: js">throw <var>expression</var>;
</pre>

<p>You may throw any expression, not just expressions of a specific type. The following
  code throws several exceptions of varying types:</p>

<pre class="brush: js">throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };
</pre>

<div class="note">
  <p><strong>Note:</strong> You can specify an object when you throw an exception. You can
    then reference the object's properties in the <code>catch</code> block.</p>
</div>

<pre class="brush: js">// Create an object type UserException
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

// Make the exception convert to a pretty string when used as a string
// (e.g., by the error console)
UserException.prototype.toString = function() {
  return `${this.name}: "${this.message}"`;
}

// Create an instance of the object type and throw it
throw new UserException('Value too high');</pre>

<h3 id="try...catch_statement"><code>try...catch</code> statement</h3>

<p>The <code>try...catch</code> statement marks a block of statements to try, and
  specifies one or more responses should an exception be thrown. If an exception is
  thrown, the <code>try...catch</code> statement catches it.</p>

<p>The <code>try...catch</code> statement consists of a <code>try</code> block, which
  contains one or more statements, and a <code>catch</code> block, containing statements
  that specify what to do if an exception is thrown in the <code>try</code> block.</p>

<p>In other words, you want the <code>try</code> block to succeed—but if it does not, you
  want control to pass to the <code>catch</code> block. If any statement within the
  <code>try</code> block (or in a function called from within the <code>try</code> block)
  throws an exception, control <em>immediately</em> shifts to the <code>catch</code>
  block. If no exception is thrown in the <code>try</code> block, the <code>catch</code>
  block is skipped. The <code>finally</code> block executes after the <code>try</code> and
  <code>catch</code> blocks execute but before the statements following the
  <code>try...catch</code> statement.</p>

<p>The following example uses a <code>try...catch</code> statement. The example calls a
  function that retrieves a month name from an array based on the value passed to the
  function. If the value does not correspond to a month number
  (<code>1</code>–<code>12</code>), an exception is thrown with the value
  <code>"InvalidMonthNo"</code> and the statements in the <code>catch</code> block set the
  <code><var>monthName</var></code> variable to <code>'unknown'</code>.</p>

<pre class="brush: js">function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; // throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}
</pre>

<h4 id="The_catch_block">The <code>catch</code> block</h4>

<p>You can use a <code>catch</code> block to handle all exceptions that may be generated
  in the <code>try</code> block.</p>

<pre class="brush: js">catch (<var>catchID</var>) {
  <var>statements</var>
}
</pre>

<p>The <code>catch</code> block specifies an identifier (<code><var>catchID</var></code>
  in the preceding syntax) that holds the value specified by the <code>throw</code>
  statement. You can use this identifier to get information about the exception that was
  thrown.</p>

<p>JavaScript creates this identifier when the <code>catch</code> block is entered. The
  identifier lasts only for the duration of the <code>catch</code> block. Once the
  <code>catch</code> block finishes executing, the identifier no longer exists.</p>

<p>For example, the following code throws an exception. When the exception occurs, control
  transfers to the <code>catch</code> block.</p>

<pre class="brush: js">try {
  throw 'myException'; // generates an exception
}
catch (err) {
  // statements to handle any exceptions
  logMyErrors(err);    // pass exception object to error handler
}
</pre>

<div class="notecard note">
  <p><strong>Note:</strong> When logging errors to the console inside
    a <code>catch</code> block, using <code>console.error()</code> rather than
    <code>console.log()</code> is advised for debugging. It formats the message as an
    error, and adds it to the list of error messages generated by the page. </p>
</div>

<h4 id="The_finally_block">The <code>finally</code> block</h4>

<p>The <code>finally</code> block contains statements to be executed <em>after</em> the
  <code>try</code> and <code>catch</code> blocks execute. Additionally, the
  <code>finally</code> block executes <em>before</em> the code that follows the
  <code>try…catch…finally</code> statement.</p>

<p>It is also important to note that the <code>finally</code> block will execute
  <em>whether or not</em> an exception is thrown. If an exception is thrown, however, the
  statements in the <code>finally</code> block execute even if no <code>catch</code> block
  handles the exception that was thrown.</p>

<p>You can use the <code>finally</code> block to make your script fail gracefully when an
  exception occurs. For example, you may need to release a resource that your script has
  tied up.</p>

<p>The following example opens a file and then executes statements that use the file.
  (Server-side JavaScript allows you to access files.) If an exception is thrown while the
  file is open, the <code>finally</code> block closes the file before the script fails.
  Using <code>finally</code> here <em>ensures</em> that the file is never left open, even
  if an error occurs.</p>

<pre class="brush: js">openMyFile();
try {
  writeMyFile(theData); // This may throw an error
} catch(e) {
  handleError(e); // If an error occurred, handle it
} finally {
  closeMyFile(); // Always close the resource
}
</pre>

<p>If the <code>finally</code> block returns a value, this value becomes the return value
  of the entire <code>try…catch…finally</code> production, regardless of any
  <code>return</code> statements in the <code>try</code> and <code>catch</code> blocks:
</p>

<pre class="brush: js">function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true;    // this return statement is suspended
                    // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false;   // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5);   // not reachable
}
console.log(f()); // 0, 1, 3, false
</pre>

<p>Overwriting of return values by the <code>finally</code> block also applies to
  exceptions thrown or re-thrown inside of the <code>catch</code> block:</p>

<pre class="brush: js">function f() {
  try {
    throw 'bogus';
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // this throw statement is suspended until
             // finally block has completed
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  console.log(f());
} catch(e) {
  // this is never reached!
  // while f() executes, the `finally` block returns false,
  // which overwrites the `throw` inside the above `catch`
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
// false</pre>

<h4 id="Nesting_try...catch_statements">Nesting try...catch statements</h4>

<p>You can nest one or more <code>try...catch</code> statements.</p>

<p>If an inner <code>try</code> block does <em>not</em> have a corresponding
  <code>catch</code> block:</p>

<ol>
  <li>it <em>must</em> contain a <code>finally</code> block, and</li>
  <li>the enclosing <code>try...catch</code> statement's <code>catch</code> block is
    checked for a match.</li>
</ol>

<p>For more information, see <a
    href="/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try-blocks">nested
    try-blocks</a> on the
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/try...catch">try...catch</a></code>
  reference page.</p>

<h3 id="Utilizing_Error_objects">Utilizing Error objects</h3>

<p>Depending on the type of error, you may be able to use the <code>name</code> and
  <code>message</code> properties to get a more refined message.</p>

<p>The <code>name</code> property provides the general class of <code>Error</code> (such
  as <code>DOMException</code> or <code>Error</code>), while <code>message</code>
  generally provides a more succinct message than one would get by converting the error
  object to a string.</p>

<p>If you are throwing your own exceptions, in order to take advantage of these properties
  (such as if your <code>catch</code> block doesn't discriminate between your own
  exceptions and system ones), you can use the <code>Error</code> constructor.</p>

<p>For example:</p>

<pre class="brush: js">function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
⋮
try {
  doSomethingErrorProne();
} catch (e) {               // NOW, we actually use `console.error()`
  console.error(e.name);    // logs 'Error'
  console.error(e.message); // logs 'The message', or a JavaScript error message
}
</pre>

<div>{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types",
  "Web/JavaScript/Guide/Loops_and_iteration")}}</div>
