---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
tags:
- JavaScript
- Language feature
- Reference
- Statement
- Web
browser-compat: javascript.statements.switch
---
<div>{{jsSidebar("Statements")}}</div>

<p><span class="seoSummary">The <strong><code>switch</code></strong> statement evaluates
    an <a
      href="/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators">expression</a>,
    matching the expression's value to a <code>case</code> clause, and executes <a
      href="/en-US/docs/Web/JavaScript/Reference/Statements">statements</a> associated
    with that <code>case</code>, as well as statements in <code>case</code>s that follow
    the matching <code>case</code>.</span></p>

<div>{{EmbedInteractiveExample("pages/js/statement-switch.html", "taller")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">switch (<var>expression</var>) {
  case <var>value1</var>:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case <var>value2</var>:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case <var>valueN</var>:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}</pre>

<dl>
  <dt><code><var>expression</var></code></dt>
  <dd>An expression whose result is matched against each <code>case</code> clause.</dd>
  <dt><code>case <var>valueN</var></code> {{optional_inline}}</dt>
  <dd>A <code>case</code> clause used to match against <code><var>expression</var></code>.
    If the <code><var>expression</var></code> matches the specified
    <code><var>valueN</var></code>, the statements inside the <code>case</code> clause are
    executed until either the end of the <code>switch</code> statement or a
    <code>break</code>.</dd>
  <dt><code>default</code> {{optional_inline}}</dt>
  <dd>A <code>default</code> clause; if provided, this clause is executed if the value of
    <code><var>expression</var></code> doesn't match any of the <code>case</code> clauses.
  </dd>
</dl>

<h2 id="Description">Description</h2>

<p>A <code>switch</code> statement first evaluates its expression. It then looks for the
  first <code>case</code> clause whose expression evaluates to the same value as the
  result of the input expression (using the <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">strict
    comparison</a>, <code>===</code>) and transfers control to that clause, executing the
  associated statements. (If multiple <code>case</code>s match the provided value, the
  first <code>case</code> that matches is selected, even if the <code>case</code>s are not
  equal to each other.)</p>

<p>If no matching <code>case</code> clause is found, the program looks for the optional
  <code>default</code> clause, and if found, transfers control to that clause, executing
  the associated statements. If no <code>default</code> clause is found, the program
  continues execution at the statement following the end of <code>switch</code>. By
  convention, the <code>default</code> clause is the last clause, but it does not need to
  be so.</p>

<p>The optional
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/break">break</a></code>
  statement associated with each <code>case</code> label ensures that the program breaks
  out of <code>switch</code> once the matched statement is executed and continues
  execution at the statement following <code>switch</code>. If <code>break</code> is
  omitted, the program continues execution at the next statement in the
  <code>switch</code> statement. The
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/break">break</a></code>
  statement is not required if a
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/return">return</a></code>
  statement precedes it.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_switch">Using <code>switch</code></h3>

<p>In the following example, if <code>expr</code> evaluates to <code>Bananas</code>, the
  program matches the value with case <code>case 'Bananas'</code> and executes the
  associated statement. When <code>break</code> is encountered, the program breaks out of
  <code>switch</code> and executes the statement following <code>switch</code>. If
  <code>break</code> were omitted, the statement for the <code>case 'Cherries'</code>
  would also be executed.</p>

<pre class="brush: js">switch (expr) {
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
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");
</pre>

<h3 id="what_happens_if_i_forgot_a_break">What happens if I forgot a <code>break</code>?
</h3>

<p>If you forget a <code>break</code> then the script will run from the <code>case</code>
  where the criterion is met and will run the cases after that <strong>regardless if a
    criterion was met</strong>.</p>

<p>See example here:</p>

<pre class="brush: js">var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
    // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}</pre>

<h3 id="Can_I_put_a_default_between_cases">Can I put a <code>default</code> between cases?
</h3>

<p>Yes, you can! JavaScript will drop you back to the <code>default</code> if it can't
  find a match:</p>

<pre class="brush: js">var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log('default')
    // fall-through
  case 1:
    console.log('1');
}
</pre>

<p>It also works when you put <code>default</code> before all other <code>case</code>s.
</p>

<h3 id="Methods_for_multi-criteria_case">Methods for multi-criteria <code>case</code></h3>

<p>This technique is also commonly called fall-through.</p>

<h4 id="Multi-case_single_operation">Multi-<code>case</code> : single operation</h4>

<p>This method takes advantage of the fact that if there is no break below a
  <code>case</code> clause it will continue to execute the next <code>case</code> clause
  regardless if the <code>case</code> meets the criteria. (See the section <a
    href="#what_happens_if_i_forgot_a_break">What happens if I forgot a
    <code>break</code>?</a>)</p>

<p>This is an example of a single operation sequential <code>case</code> statement, where
  four different values perform exactly the same.</p>

<pre class="brush: js">var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}</pre>

<h4 id="Multi-case_chained_operations">Multi-<code>case</code> : chained operations</h4>

<p>This is an example of a multiple-operation sequential <code>case</code> clause, where,
  depending on the provided integer, you can receive different output. This shows you that
  it will traverse in the order that you put the <code>case</code> clauses, and it does
  not have to be numerically sequential. In JavaScript, you can even mix in definitions of
  strings into these <code>case</code> statements as well.</p>

<pre class="brush: js">var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}</pre>

<p>The output from this example:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Log text</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>foo</code> is <code>NaN</code> or not <code>1</code>, <code>2</code>,
        <code>3</code>, <code>4</code>, <code>5</code>, or <code>0</code></td>
      <td>Please pick a number from 0 to 5!</td>
    </tr>
    <tr>
      <td><code>0</code></td>
      <td>Output: So What Is Your Name?</td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td>Output: What Is Your Name?</td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td>Output: Your Name?</td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td>Output: Name?</td>
    </tr>
    <tr>
      <td><code>4</code></td>
      <td>Output: ?</td>
    </tr>
    <tr>
      <td><code>5</code></td>
      <td>Output: !</td>
    </tr>
  </tbody>
</table>

<h3 id="Block-scope_variables_within_switch_statements">Block-scope variables within
  <code>switch</code> statements</h3>

<p>With ECMAScript 2015 (ES6) support made available in most modern browsers, there will
  be cases where you would want to use {{jsxref("Statements/let", "let")}} and
  {{jsxref("Statements/const", "const")}} statements to declare block-scoped variables.
</p>

<p>Take a look at this example:</p>

<pre class="brush: js">const action = 'say_hello';
switch (action) {
  case 'say_hello':
    let message = 'hello';
    console.log(message);
    break;
  case 'say_hi':
    let message = 'hi';
    console.log(message);
    break;
  default:
    console.log('Empty action received.');
    break;
}</pre>

<p>This example will output the error
  <code>Uncaught SyntaxError: Identifier 'message' has already been declared</code> which
  you were not probably expecting.</p>

<p>This is because the first <code>let message = 'hello';</code> conflicts with second let
  statement <code>let message = 'hi';</code> even they're within their own separate case
  clauses <code>case 'say_hello':</code> and <code>case 'say_hi':</code>. Ultimately, this
  is due to both <code>let</code> statements being interpreted as duplicate declarations
  of the same variable name within the same block scope.</p>

<p>We can easily fix this by wrapping our <code>case</code> clauses with brackets:</p>

<pre class="brush: js">const action = 'say_hello';
switch (action) {
  case 'say_hello': <strong>{ // added brackets</strong>
    let message = 'hello';
    console.log(message);
    break;
  <strong>} // added brackets</strong>
  case 'say_hi': <strong>{ // added brackets</strong>
    let message = 'hi';
    console.log(message);
    break;
  <strong>} // added brackets</strong>
  default: <strong>{ // added brackets</strong>
    console.log('Empty action received.');
    break;
  <strong>} // added brackets</strong>
}</pre>

<p>This code will now output <code>hello</code> in the console as it should, without any
  errors at all.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Statements/if...else", "if...else")}}</li>
</ul>
