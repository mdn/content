---
title: "Test your skills: Forms and buttons"
short-title: Forms and buttons
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to assess whether you understand how [HTML forms and buttons](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms) work.

> [!NOTE]
> Click **"Play"** in the code blocks below to edit the examples in the MDN Playground.
> You can also copy the code (click the clipboard icon) and paste it into an online editor such as [CodePen](https://codepen.io/) or [JSFiddle](https://jsfiddle.net/).
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Forms and buttons 1

This task starts you off nice and gently by asking you to create two `<input>` elements, for a user's ID and password, along with a submit button.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Create appropriate inputs for user ID and password.
3. You should also associate them with their text labels semantically.
4. Create a submit button inside the remaining list item, with button text of "Log in".

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/basic-controls/basic-controls1-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

<!-- Code shared across examples -->

```css hidden live-sample___forms-buttons-1 live-sample___forms-buttons-2 live-sample___forms-buttons-3 live-sample___forms-buttons-4 live-sample___forms-buttons-5 live-sample___forms-buttons-6
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Example-specific code -->

```html live-sample___forms-buttons-1
<form>
  <ul>
    <li>User ID</li>
    <li>Password</li>
    <li></li>
  </ul>
</form>
```

{{ EmbedLiveSample("forms-buttons-1", "100%", 150) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<form>
  <ul>
    <li>
      <label for="uid">User ID</label>
      <input type="text" id="uid" name="uid" />
    </li>
    <li>
      <label for="pwd">Password</label>
      <input type="password" id="pwd" name="pwd" />
    </li>
    <li>
      <button>Log in</button>
    </li>
  </ul>
</form>
```

</details>

## Forms and buttons 2

The next task requires you to create working sets of checkboxes and radio buttons, from the provided text labels.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Turn the first `<fieldset>`'s contents into a set of radio buttons — you should only be able to select one pony character at once.
3. Make it so that the first radio button is selected upon page load.
4. Turn the second `<fieldset>`'s content into a set of checkboxes.
5. Add a couple more hotdog choices of your own.

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/basic-controls/basic-controls2-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

```html live-sample___forms-buttons-2
<form>
  <fieldset>
    <legend>Who is your favorite pony?</legend>
    <ul>
      <li>
        <label for="pinkie">Pinkie Pie</label>
      </li>
      <li>
        <label for="rainbow">Rainbow Dash</label>
      </li>
      <li>
        <label for="twilight">Twilight Sparkle</label>
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Hotdog preferences</legend>
    <ul>
      <li>
        <label for="vegan">Vegan</label>
      </li>
      <li>
        <label for="onions">Onions</label>
      </li>
    </ul>
  </fieldset>
  <button>Submit</button>
</form>
```

{{ EmbedLiveSample("forms-buttons-2", "100%", 350) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<form>
  <fieldset>
    <legend>Who is your favorite pony?</legend>
    <ul>
      <li>
        <label for="pinkie">Pinkie Pie</label>
        <input type="radio" id="pinkie" name="pony" value="pinkie" checked />
      </li>
      <li>
        <label for="rainbow">Rainbow Dash</label>
        <input type="radio" id="rainbow" name="pony" value="rainbow" />
      </li>
      <li>
        <label for="twilight">Twilight Sparkle</label>
        <input type="radio" id="twilight" name="pony" value="twilight" />
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Hotdog preferences</legend>
    <ul>
      <li>
        <label for="vegan">Vegan</label>
        <input type="checkbox" id="vegan" name="hotdog" value="vegan" />
      </li>
      <li>
        <label for="onions">Onions</label>
        <input type="checkbox" id="onions" name="hotdog" value="onions" />
      </li>
      <li>
        <label for="mustard">Mustard</label>
        <input type="checkbox" id="mustard" name="hotdog" value="mustard" />
      </li>

      <li>
        <label for="ketchup">Ketchup</label>
        <input type="checkbox" id="ketchup" name="hotdog" value="ketchup" />
      </li>
    </ul>
  </fieldset>
  <button>Submit</button>
</form>
```

</details>

## Forms and buttons 3

In this task you'll explore some more specific input types.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Create appropriate inputs for a user to update their details for:
   1. Email
   2. Website
   3. Phone number
   4. Favorite color

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/html5-controls/html5-controls1-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

```html live-sample___forms-buttons-3
<form>
  <h2>Edit your preferences</h2>
  <ul>
    <li>
      <label for="email">Email</label>
    </li>
    <li>
      <label for="website">Website</label>
    </li>
    <li>
      <label for="phone">Phone number</label>
    </li>
    <li>
      <label for="fave-color">Favorite color</label>
    </li>
    <li>
      <button>Update preferences</button>
    </li>
  </ul>
</form>
```

{{ EmbedLiveSample("forms-buttons-3", "100%", 250) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<form>
  <h2>Edit your preferences</h2>
  <ul>
    <li>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" />
    </li>
    <li>
      <label for="website">Website</label>
      <input type="url" id="website" name="website" />
    </li>
    <li>
      <label for="phone">Phone number</label>
      <input type="tel" id="phone" name="phone" />
    </li>
    <li>
      <label for="fave-color">Favorite color</label>
      <input type="color" id="fave-color" name="fave-color" />
    </li>
    <li>
      <button>Update preferences</button>
    </li>
  </ul>
</form>
```

</details>

## Forms and buttons 4

Now it's time to have a go at implementing a drop-down select menu, to allow a user to pick their favorite food from the choices provided.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Create a basic select box structure.
3. Associate it semantically with the provided "food" label.
4. Inside the list, split the choices up into 2 subgroups — "mains" and "snacks".

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/other-controls/other-controls2-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

```html live-sample___forms-buttons-4
<form>
  <ul>
    <li>
      <label for="food">Pick your favorite food:</label>

      Salad Curry Pizza Fajitas Biscuits Crisps Fruit Breadsticks
    </li>
    <li>
      <button>Submit choice</button>
    </li>
  </ul>
</form>
```

{{ EmbedLiveSample("forms-buttons-4", "100%", 250) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<form>
  <ul>
    <li>
      <label for="food">Pick your favorite food:</label>
      <select name="food" id="food">
        <optgroup label="mains">
          <option>Salad</option>
          <option>Curry</option>
          <option>Pizza</option>
          <option>Fajitas</option>
        </optgroup>
        <optgroup label="snacks">
          <option>Biscuits</option>
          <option>Crisps</option>
          <option>Fruit</option>
          <option>Breadsticks</option>
        </optgroup>
      </select>
    </li>
    <li>
      <button>Submit choice</button>
    </li>
  </ul>
</form>
```

</details>

## Forms and buttons 5

In this task we want you to structure the provided form features.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Separate out the first two and second two form fields into two distinct containers, each with a descriptive legend (use "Personal details" for the first two, and "Comment information" for the second two).
3. Mark up each text label with an appropriate element so that it is semantically associated with its respective form field.
4. Add a suitable set of structural elements around the label/field pairs to separate them out.

> [!CALLOUT]
>
> You can [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-structure/form-structure1-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

```html live-sample___forms-buttons-5
<form>
  Name:
  <input type="text" id="name" name="name" />

  Age:
  <input type="number" id="age" name="age" />

  Comment:
  <input type="text" id="comment" name="comment" />

  Email:
  <input type="email" id="email" name="email" />
</form>
```

{{ EmbedLiveSample("forms-buttons-5", "100%", 250) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<form>
  <fieldset>
    <legend>Personal details</legend>
    <ul>
      <li>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
      </li>
      <li>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" />
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Comment information</legend>
    <ul>
      <li>
        <label for="comment">Comment:</label>
        <input type="text" id="comment" name="comment" />
      </li>
      <li>
        <label for="email">Email (include if you want a reply):</label>
        <input type="email" id="email" name="email" />
      </li>
    </ul>
  </fieldset>
</form>
```

</details>

## Forms and buttons 6

In this task, we are providing you with a simple support query form, and we want you to add some validation features to it. This task requires some knowledge that we don't teach in the "Forms and buttons in HTML" article, so you may need to do some research elsewhere.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Make all of the input fields mandatory to complete before the form can be submitted.
3. Change the type of the "Email address" and "Phone number" fields to make the browser apply some more specific validation suitable for the data being asked for.
4. Give the "User name" field a required length of between 5 and 20 characters, the "Phone number" field a maximum length of 15 characters, and the "Comment" field a maximum length of 200 characters.

Try submitting your form — it should refuse to submit until the above constraints are followed, and give suitable error messages.

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation1-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

```html live-sample___forms-buttons-6
<form>
  <h2>Enter your support query</h2>
  <ul>
    <li>
      <label for="uname">User name:</label>
      <input type="text" name="uname" id="uname" />
    </li>
    <li>
      <label for="email">Email address:</label>
      <input type="text" name="email" id="email" />
    </li>
    <li>
      <label for="phone">Phone number:</label>
      <input type="text" name="phone" id="phone" />
    </li>
    <li>
      <label for="comment">Comment:</label>
      <textarea name="comment" id="comment"> </textarea>
    </li>
    <li>
      <button>Submit comment</button>
    </li>
  </ul>
</form>
```

{{ EmbedLiveSample("forms-buttons-6", "100%", 300) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<form>
  <h2>Enter your support query</h2>
  <ul>
    <li>
      <label for="uname">User name:</label>
      <input
        type="text"
        name="uname"
        id="uname"
        required
        minlength="5"
        maxlength="20" />
    </li>
    <li>
      <label for="email">Email address:</label>
      <input type="email" name="email" id="email" required />
    </li>
    <li>
      <label for="phone">Phone number:</label>
      <input type="tel" name="phone" id="phone" required maxlength="15" />
    </li>
    <li>
      <label for="comment">Comment:</label>
      <textarea name="comment" id="comment" required maxlength="200"></textarea>
    </li>
    <li>
      <button>Submit comment</button>
    </li>
  </ul>
</form>
```

</details>
