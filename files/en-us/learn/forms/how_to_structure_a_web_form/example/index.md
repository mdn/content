---
title: Example
slug: Learn/Forms/How_to_structure_a_web_form/Example
tags:
  - Beginner
  - CSS
  - Example
  - Guide
  - HTML
  - Intro
  - Reference
---
This the example for a basic payment form for the article [How to structure an HTML form](/en-US/docs/Learn/Forms/How_to_structure_a_web_form).

## A payment form

### HTML Content

```html
<form method="post">
  <h1>Payment form</h1>
  <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>
  <section>
    <h2>Contact information</h2>
    <fieldset>
      <legend>Title</legend>
      <ul>
        <li>
          <label for="title_1">
            <input type="radio" id="title_1" name="title" value="A">
            Ace
          </label>
        </li>
        <li>
          <label for="title_2">
            <input type="radio" id="title_2" name="title" value="K" >
            King
          </label>
        </li>
        <li>
          <label for="title_3">
            <input type="radio" id="title_3" name="title" value="Q">
            Queen
          </label>
        </li>
      </ul>
    </fieldset>
    <p>
      <label for="name">
        <span>Name: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="name" name="username">
    </p>
    <p>
      <label for="mail">
        <span>E-mail: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="email" id="mail" name="usermail">
    </p>
    <p>
      <label for="pwd">
        <span>Password: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="password" id="pwd" name="password">
    </p>
  </section>
  <section>
    <h2>Payment information</h2>
    <p>
      <label for="card">
        <span>Card type:</span>
      </label>
      <select id="card" name="usercard">
        <option value="visa">Visa</option>
        <option value="mc">Mastercard</option>
        <option value="amex">American Express</option>
      </select>
    </p>
    <p>
      <label for="number">
        <span>Card number:</span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="tel" id="number" name="cardnumber">
    </p>
    <p>
      <label for="date">
        <span>Expiration date:</span>
        <strong><abbr title="required">*</abbr></strong>
        <em>formatted as mm/dd/yyyy</em>
      </label>
      <input type="date" id="date" name="expiration">
    </p>
  </section>
  <section>
    <p> <button type="submit">Validate the payment</button> </p>
  </section>
</form>
```

### CSS Content

```css
h1 {
    margin-top: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

form {
    margin: 0 auto;
    width: 400px;
    padding: 1em;
    border: 1px solid #CCC;
    border-radius: 1em;
}

div+div {
    margin-top: 1em;
}

label span {
    display: inline-block;
    width: 120px;
    text-align: right;
}

input, textarea {
    font: 1em sans-serif;
    width: 250px;
    box-sizing: border-box;
    border: 1px solid #999;
}

input[type=checkbox], input[type=radio] {
    width: auto;
    border: none;
}

input:focus, textarea:focus {
    border-color: #000;
}

textarea {
    vertical-align: top;
    height: 5em;
    resize: vertical;
}

fieldset {
    width: 250px;
    box-sizing: border-box;
    margin-left: 136px;
    border: 1px solid #999;
}

button {
    margin: 20px 0 0 124px;
}

label {
  position: relative;
}

label em {
  position: absolute;
  right: 5px;
  top: 20px;
}
```

### Result

{{ EmbedLiveSample('A_payment_form', '100%', 620) }}
