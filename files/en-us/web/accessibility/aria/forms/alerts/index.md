---
title: Alerts
slug: Web/Accessibility/ARIA/forms/alerts
tags:
  - ARIA
  - Accessibility
  - Forms
  - Web
---
## The problem

You have a form — a contact form, for example — that you want to put some accessible error checking into. Examples of common problems include e-mail addresses which are not valid, or a name field which does not contain at least a first name or a surname.

## The form

First, please read about the [`aria-required` technique](/en-US/docs/Web/Accessibility/ARIA/forms/Basic_form_hints#required_and_invalid_fields) if you have not done so, as this technique expands upon that.

Here is a simple form:

```html
 <form method="post" action="post.php">
   <fieldset>
     <legend>Please enter your contact details</legend>
     <label for="name">Your name (required):</label>
     <input name="name" id="name" aria-required="true"/>
     <br />
     <label for="email">E-Mail address (required):</label>
     <input name="email" id="email" aria-required="true"/>
     <br />
     <label for="website">Website (optional):</label>
     <input name="website" id="website"/>
   </fieldset>
   <label for="message">Please enter your message (required):</label>
   <br />
   <textarea name="message" id="message" rows="5" cols="80"
             aria-required="true"></textarea>
   <br />
   <input type="submit" name="submit" value="Send message"/>
   <input type="reset" name="reset" value="Reset form"/>
 </form>
```

## <span class="mw-headline" id="Checking_for_validity_and_notifying_the_user">Checking for validity and notifying the user</span>

Form validations consists of several steps:

1.  Checking if the e-mail address or entered name are valid. Each field has a set of criteria which must be met in order to pass validation.  In order to simplify this example, we’ll check whether the e-mail address contains the “@” symbol, and if the name entry contains at least 1 character.
2.  If the above criteria is not met, the field’s `aria-invalid` attribute will be given a value of “`true`”.
3.  If the criteria was not met, the user will be notified via an alert. Instead of using the JavaScript ‘`alert`’ function, we’ll use a simple WAI-ARIA widget for notification. This notifies the user of the error, but allows for them continue modifying the form without losing focus (caused by the “`onblur`” handler in JavaScript's default ‘`alert`’ function).

Below is example JavaScript code which could be inserted above the closing “`head`” tag:

```js
 <script type="application/javascript">
 function removeOldAlert()
 {
   var oldAlert = document.getElementById("alert");
   if (oldAlert){
     document.body.removeChild(oldAlert);
   }
 }

 function addAlert(aMsg)
 {
   removeOldAlert();
   var newAlert = document.createElement("div");
   newAlert.setAttribute("role", "alert");
   newAlert.setAttribute("id", "alert");
   var msg = document.createTextNode(aMsg);
   newAlert.appendChild(msg);
   document.body.appendChild(newAlert);
 }

 function checkValidity(aID, aSearchTerm, aMsg)
 {
   var elem = document.getElementById(aID);
   var invalid = (elem.value.indexOf(aSearchTerm) < 0);
   if (invalid) {
     elem.setAttribute("aria-invalid", "true");
     addAlert(aMsg);
   } else {
     elem.setAttribute("aria-invalid", "false");
     removeOldAlert();
   }
 }
 </script>
```

## <span class="mw-headline" id="The_checkValidity_function">The <code>checkValidity</code> function</span>

The primary method in JavaScript used for form validation is the `checkValidity` function. This method takes three parameters: The ID of the `input` that is to be validated, the term to search for to ensure validity, and the error message to be inserted into the alert.

To see if it is valid, the function checks whether the `indexOf` the `input`’s value is anything greater than `-1`. A value of `-1` or less is returned if the index of the search term could not be found within the value.

If invalid, the function does two things:

1.  It sets the element’s `aria-invalid` attribute to “`true`”, which will indicate to screen readers that there is invalid content in here.
2.  It will call the `addAlert` function to add the alert with the provided error message.

If the search term is found, the `aria-invalid` attribute is reset to “`false`”. In addition, any leftover alerts are removed.

## <span class="mw-headline" id="The_addAlert_function">The <code>addAlert</code> function</span>

This function first removes any old alerts. The function is simple: It looks for an element with id “`alert`”, and if found, removes that from the [document object model](/en-US/docs/Mozilla/Tech/XUL/Tutorial/Document_Object_Model).

Next, the function creates a `div` element to hold the alert text. It gets an ID of “`alert`”. And it gets a role set of “alert”. This is actually ARIA-inspired, even though it doesn’t say “aria” in the attribute name. This is because that role is based on the <a class="external text" href="https://www.w3.org/TR/xhtml-role/">XHTML Role Attribute Module</a> that was ported to HTML for simplicity.

The text is added to the `div` element, and the `div` element is added to the document.

The moment this happens, Firefox will fire an “alert” event to assistive technologies when this `div` appears. Most screen readers will pick this one up automatically and speak it. This is similar to the Notification Bar in Firefox that prompts you whether you want to save a password. The alert we just created does not have any buttons to press, it just tells us what’s wrong.

## <span class="mw-headline" id="Adding_the_magic_to_the_.E2.80.9Conblur.E2.80.9D_event">Modifying the “<code>onblur</code>” event</span>

All that’s left now is add the event handler. We need to change the two inputs for e-mail and name for this:

```html
 <input name="name" id="name" aria-required="true"
        onblur="checkValidity('name', ' ', 'Invalid name entered!');"/>
 <br />
 <input name="email" id="email" aria-required="true"
        onblur="checkValidity('email', '@', 'Invalid e-mail address');"/>
```

**Testing the example**

If you use Firefox 3 and a currently-supported screen reader, try the following:

1.  Enter only your first name as the name. When tabbing, you’ll hear an alert that tells you you’ve entered an invalid name. You can then shift-tab back and correct the error.
2.  Enter an e-mail address without the “@” symbol. When tabbing out of this field, you should hear a warning that says you didn’t enter a valid e-mail address.

In both cases, when returning focus to the field in question, your screen reader should tell you that this field is invalid. JAWS 9 supports this, but JAWS 8 does not, so this may not work in all versions of the screen readers supported.

## <span class="mw-headline" id="A_few_questions_that_you_might_have">A few questions that you might have</span>

- Q. Why did you put both “`(required)`” in the label text and the `aria-required` attribute on some of the inputs?
  - : A. If this were a real live form, and the site was being visited by a browser that does not yet support ARIA, we’d still want to give an indication that this is a required field.
- Q. Why don’t you set focus back to the invalid field automatically?
  - : A. Because this is not allowed by the Windows API specs, and possibly others. Also, letting the focus jump around without real user interaction too often is not a nice thing to do in general.

<div class="warning">TBD: let's rethink this -- personally, I think setting focus might be good if done without causing a keyboard trap.</div>
