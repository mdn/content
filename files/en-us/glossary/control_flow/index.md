---
title: Control flow
slug: Glossary/Control_flow
page-type: glossary-definition
---

{{GlossarySidebar}}

The _control flow_ is the order in which the computer executes statements in a script.

Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.

For example, imagine a script used to validate user data from a webpage form. The script submits validated data, but if the user, say, leaves a required field empty, the script prompts them to fill it in. To do this, the script uses a {{Glossary("Conditional", "conditional")}} structure or `if...else`, so that different code executes depending on whether the form is complete or not:

```js
if (isEmpty(field)) {
  promptUser();
} else {
  submitForm();
}
```

A typical script in {{glossary("JavaScript")}} or {{glossary("PHP")}} (and the like) includes many control structures, including conditionals, {{Glossary("Loop", "loops")}} and {{Glossary("Function", "functions")}}. Parts of a script may also be set to execute when {{Glossary("Event", "events")}} occur.

For example, the above excerpt might be inside a function that runs when the user clicks the **Submit** button for the form. The function could also include a loop, which iterates through all of the fields in the form, checking each one in turn. Looking back at the code in the `if` and `else` sections, the lines `promptUser` and `submitForm` could also be calls to other functions in the script. As you can see, control structures can dictate complex flows of processing even with only a few lines of code.

Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.

## See also

- [Control flow](https://en.wikipedia.org/wiki/Control_flow) on Wikipedia
- [JavaScript Reference - Control flow](/en-US/docs/Web/JavaScript/Reference#control_flow) on MDN
- [Statements (Control flow)](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) on MDN
