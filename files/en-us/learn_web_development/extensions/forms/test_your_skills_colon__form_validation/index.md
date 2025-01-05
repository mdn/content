---
title: "Test your skills: Form validation"
slug: Learn_web_development/Extensions/Forms/Test_your_skills:_Form_validation
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) article.

> [!NOTE]
> You can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Form validation 1

In this task, we are providing you with a simple support query form, and we want you to add some validation features to it:

1. Make all of the input fields mandatory to complete before the form can be submitted.
2. Change the type of the "Email address" and "Phone number" fields to make the browser apply some more specific validation suitable for the data being asked for.
3. Give the "User name" field a required length of between 5 and 20 characters, the "Phone number" field a maximum length of 15 characters, and the "Comment" field a maximum length of 200 characters.

Try submitting your form — it should refuse to submit until the above constraints are followed, and give suitable error messages. To help, you might want to consider adding some simple CSS to show when a form field is valid or invalid.

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation1-download.html) to work in your own editor or in an online editor.

## Form validation 2

Now we want you to take the same form you saw in the previous task (use your previous answer if you want to), and add some more specific pattern validation to the first three fields using regular expressions.

1. All of the user names in our application consist of a single letter, followed by a dot, followed by three or more letters or numbers. All letters should be lowercase.
2. All of the email addresses for our users consist of one or more letters (lower or upper case) or numbers, followed by "@bigcorp.eu".
3. Remove the length validation from the phone number field if it is present, and set it so that it accepts 10 digits — either 10 digits in a row, or a pattern of three digits, three digits, then four digits, separated by either spaces, dashes, or dots.

> [!NOTE]
> Regular expressions are really challenging if you are new to them, but don't despair — have a go and see where you get to; there is no shame in asking for some help. You can find everything you need to answer these questions at our [regular expression reference](/en-US/docs/Web/JavaScript/Guide/Regular_expressions), and by searching on [Stack Overflow](https://stackoverflow.com/).

Again, to help you might want to consider adding some simple CSS to show when a form field is valid or invalid.

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation2-download.html) to work in your own editor or in an online editor.

## Form validation 3

In our final task for this set, we are providing you with a similar example to what you saw in the accompanying article — an email address entry input. We would like you to use the constraint validation API, plus some form validation attributes, to program some custom error messages.

1. Make the input mandatory to fill in, and give it a minimum length of 10 characters.
2. Add an event listener that checks whether the inputted value is an email address, and whether it is long enough. If it doesn't look like an email address or is too short, provide the user with appropriate custom error messages.

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation3-download.html) to work in your own editor or in an online editor.
