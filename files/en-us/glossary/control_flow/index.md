---
title: Control flow
slug: Glossary/Control_flow
tags:
  - CodingScripting
  - Glossary
  - JavaScript
---
<p>The <em>control flow</em> is the order in which the computer executes statements in a script.</p>

<p>Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops. </p>

<p>For example, imagine a script used to validate user data from a webpage form. The script submits validated data, but if the user, say, leaves a required field empty, the script prompts them to fill it in. To do this, the script uses a {{Glossary("Conditional", "conditional")}} structure or <code>if...else</code>, so that different code executes depending on whether the form is complete or not:</p>

<pre>if (field==empty) {
    promptUser();
} else {
    submitForm();
}
</pre>

<p>A typical script in {{glossary("JavaScript")}} or {{glossary("PHP")}} (and the like) includes many control structures, including conditionals, {{Glossary("Loop", "loops")}} and {{Glossary("Function", "functions")}}. Parts of a script may also be set to execute when {{Glossary("Event", "events")}} occur.</p>

<p>For example, the above excerpt might be inside a function that runs when the user clicks the <strong>Submit</strong> button for the form. The function could also include a loop, which iterates through all of the fields in the form, checking each one in turn. Looking back at the code in the <code>if</code> and <code>else</code> sections, the lines <code>promptUser</code> and <code>submitForm</code> could also be calls to other functions in the script. As you can see, control structures can dictate complex flows of processing even with only a few lines of code.</p>

<p>Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.</p>

<h2 id="see_also">See also</h2>

<ul>
 <li>{{Interwiki("wikipedia", "Control flow")}} on Wikipedia</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference#control_flow">JavaScript Reference - Control flow</a> on MDN</li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling">Statements (Control flow)</a> on MDN</li>
</ul>
