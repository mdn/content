---
title: Input validation
slug: Web/Security/Defenses/Input_validation
page-type: guide
sidebar: security
---

Input validation is the practice of checking that any input that your website accepts is what you expect it to be.

For a website to provide almost any kind of interactivity or customization it will need to accept some input, typically from users via a web browser, but also sometimes from other applications.

Users typically provide input using {{htmlelement("input")}} elements in a {{htmlelement("form")}} element on the site's front end, and the input is typically sent to the server as the body of a {{httpmethod("POST")}} request, or as URL parameters appended to a {{httpmethod("GET")}} request. However, input might also arrive on the server via other means, such as cookie values or additional HTTP headers.

If the input provided by the user doesn't have the form or content that the server expects — for example, if they enter an invalid email address — this can cause the site to malfunction. Catching problems like this as early as possible improves the user's experience.

However, aside from innocent errors by the user, supplying unexpected input enables a malicious actor to attempt various security attacks, including cross-site scripting (XSS), SQL injection, and command injection. In these situations, the attacker deliberately crafts some input that will enable an attack, and passes it to the application. The attacker might completely bypass the website's front-end, providing the malicious input directly in an HTTP request. Although input validation is not usually a complete solution to these security threats, it's an important first line of defense.

## Validation guidelines

### Implement validation as an allowlist

Applications should implement validation as an allowlist, rather than a denylist. That is, applications should allow only input that positively matches the expected value.

For example, suppose we wanted to check that a numeric input is between zero and 10. We can test that the input matches this range, and deny everything else:

```js
function checkRange(input) {
  if (input >= 0 && input <= 10) {
    return true;
  }
  return false;
}
```

Alternatively, we can test whether the input is outside the range, and allow everything else:

```js example-bad
function checkRange(input) {
  if (input < 0 || input > 10) {
    return false;
  }
  return true;
}
```

This is much less safe, because it's easier for an attacker to craft some input that would evade the check, and fall through to the default "allow" condition.

### Syntactic and semantic validation

We can distinguish two types of input validation:

- _syntactic validation_, which checks that input is in the correct format. For example, if the application expects a number, it is receiving a number.
- _semantic validation_, which checks that the content of the input is within expected bounds. For example, a number that should be within a specific range, or a string value that should exactly match one of a set of values.

Applications typically implement syntactic validation using type-checking features of the programming languages that they use.

To implement semantic validation, they can use various methods including range checking, checking a value against a set of allowed values, or, for more complex cases, regular expressions.

Note that regular expressions can be hard to get right, and can make an application vulnerable to [denial of service attacks](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS) in some cases. For this reason, it's usually better to use well-regarded third party libraries here. One popular choice is [validator.js](https://github.com/validatorjs/validator.js).

### When to validate

Applications should validate input as soon as possible after it has been entered, so the user has immediate feedback about the problem, and can be given the chance to fix it. This generally means that you should validate input on the client side, in the website's front-end code.

However, you must not rely on front-end validation to catch security issues, because an attacker may subvert or completely bypass the front-end code. So you must also validate input on the server, before processing it.

## Client-side validation

The HTML {{htmlelement("input")}} element supports a number of attributes that enable you to define valid values for the input the user provides. They include:

- [`type`](/en-US/docs/Web/HTML/Reference/Elements/input#input_types), which defines the type of input that is expected, and triggers validation based on the type. For example, if `type` is [`email`](/en-US/docs/Web/HTML/Reference/Elements/input/email), then the browser will automatically check that the input is a syntactically valid email address.

- [`minLength`](/en-US/docs/Web/HTML/Reference/Attributes/minlength) and [`maxLength`](/en-US/docs/Web/HTML/Reference/Attributes/maxlength), which define the minimum and maximum lengths that textual input is allowed to have.

- [`min`](/en-US/docs/Web/HTML/Reference/Attributes/min) and [`max`](/en-US/docs/Web/HTML/Reference/Attributes/max), which define the minimum and maximum values that a numeric value is allowed to have.

- [`step`](/en-US/docs/Web/HTML/Reference/Attributes/step), which defines the granularity that a numeric input value must have.

- [`pattern`](/en-US/docs/Web/HTML/Reference/Attributes/pattern), which defines a regular expression that textual input must match.

You can also define a custom validity check in JavaScript, by adding an event handler to the element's {{domxref("HTMLElement/change_event", "change")}} event. Inside the event handler, you can perform a custom validity check, and then call the element's {{domxref("HTMLInputElement/setCustomValidity", "setCustomValidity()")}} method to set its validity.

If the input fails validation, the browser will not submit the form, and will instead show an error message to the user.

See [Using HTML form validation](/en-US/docs/Web/HTML/Guides/Constraint_validation) for more information.

## Server-side validation

On the server side, applications should, if possible, use the validation functions provided by their framework of choice, such as Django's [validators](https://docs.djangoproject.com/en/6.0/ref/validators/).

It's especially important to pay attention to validation failures which could not have been made by a user interacting with the site's front end: for example, a {{htmlelement("select")}} element containing an option that was not provided in the form's HTML. Failures like this are strong indicators that an attacker is deliberately crafting invalid input.

When input is represented as JSON, you can use [JSON Schema](https://json-schema.org/) to define validity: this includes APIs that are specified using [OpenAPI](https://swagger.io/). If you use a database, you can also define a database schema and validate input against that.

## File uploads

If your site allows file uploads, you need to consider various additional threats. Attackers may:

- Upload malicious files that exploit bugs in the software that processes them.
- Upload very large files, that create a denial of service attack.
- Upload undesirable or illegal content.
- Confuse file-handling code into overwriting your own site's files.
- Upload files containing exploits such as XSS, and trick other users into downloading and executing them.

In this section we'll outline a few practices to help defend against these threats. For more details, see OWASP's [File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html).

- Only allow authenticated users to upload files.

- Filenames are also user input, so they need to be validated. If possible, generate your own name for files you save. If you have to use the names provided by users, be highly restrictive in the characters that users may choose, and validate names against this.

- Determine which file types you need to support, and allow only these types, based on the file extension. Be especially wary of web-executable file types such as HTML or JavaScript. Since checking file extensions involves processing the filenames provided by users, be sure to validate filenames first.

- Restrict the size of files that can be uploaded.

- Allow users to report undesirable or illegal content, and have a process for removing it.

- If possible, store files on a different host. If this is not possible, store files outside the website's root. This reduces the risk that malicious uploads could be served to other users in attacks such as XSS.

## Input validation and security

Tricking a site into accepting malicious input is a vector for a number of attacks in which the site inadvertently executes the content as code or as a command. This includes:

- Cross-site scripting (XSS) attacks, in which the browser executes malicious code as though it were part of the website.

- SQL injection attacks, in which the server executes malicious SQL queries on their database.

- Command injection attacks, in which the site runs malicious commands on the host's operating system.

Generic input validation as we've discussed it here is a useful first line of defense against attacks like this, but it is _not_ a complete defense against them, or even the primary defense. This is because it's extremely hard to protect against these attacks without knowing the specific context in which the input will be used.

Instead, applications should use defenses that are specific to these attacks:

- [Cross-site scripting (XSS) defenses](/en-US/docs/Web/Security/Attacks/XSS).

- [SQL injection defenses](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html).

- [Command injection defenses](https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html).

## See also

- [Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) (OWASP)
- [File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) (OWASP)
