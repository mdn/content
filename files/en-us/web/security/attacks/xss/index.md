---
title: Cross-site scripting (XSS)
slug: Web/Security/Attacks/XSS
page-type: guide
---

A cross-site scripting (XSS) attack is one in which an attacker is able to execute their code in the context of the target website.

A web browser downloads code from many different websites and runs it on the user's computer. Some of these websites may be highly trustworthy, and the user may use them for sensitive operations, such as financial transactions or medical advice. With others, such as a casual gaming site, the user may have no such trust relationship. The foundation of the browser's security model is that these sites should be kept separate from each other, so code from one site should not be able to access objects or {{glossary("credential", "credentials")}} in another site. This is called the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy).

![Diagram of 2 sites in the browsers, in separate worlds](same-origin.svg)

In a successful XSS attack, the attacker is able to subvert the same-origin policy, executing their code in the context of the target site. The code can then do anything that the site's own code can do, including, for example:

- access all the content of the site's loaded pages, and any content in local storage
- make HTTP requests with the user's credentials, enabling them to impersonate the user or access sensitive data

![Diagram of attacker code running in target website](xss.svg)

All XSS attacks depend on a website doing two things:

1. accepting some input that could have been crafted by an attacker
2. including this input in a page without _sanitizing_ it: that is, without ensuring that it won't be executable as JavaScript.

## An XSS example

Here's a web page that wants to display a welcome message, personalized for the current user. It displays the welcome in a {{htmlelement("Heading_Elements", "heading")}} element:

```html
<h1 id="welcome"></h1>
```

The page expects to find the current user's name in a [URL parameter](/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#parameters). It extracts the parameter value, and uses the value to create a personalized greeting message:

```js
const params = new URLSearchParams(window.location.search);
const user = params.get("user");
const welcome = document.querySelector("#welcome");

welcome.innerHTML = `Welcome back, ${user}!`;
```

Let's say this page is served from `https://example.org/welcome`. To exploit the vulnerability, an attacker sends the user a link like this:

```html
<a href="https://example.org/welcome?user=<img src=x onerror=alert('hello!')>">
  Win a free iPad!</a
>
```

When the user clicks the link:

1. The browser loads the page.
2. The page extracts the URL parameter named `user`, whose value is `<img src=x onerror=alert("hello!")>`.
3. The page then assigns this value to the `welcome` element's `innerHTML` property, which creates a new {{htmlelement("img")}} element, which has a `src` attribute value of `x`.
4. Since the `src` value generates an error, the `onerror` [event handler property](/en-US/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_—_dont_use_these) is executed, and the attacker gets to run its code in the page.

There are two features of this code that make it vulnerable to XSS, and these two features are common to all XSS vulnerabilities:

1. it uses input that could have been crafted by an attacker: in this case, the URL parameter
2. it includes the input in the page without sanitizing it: in this case, by directly assigning the URL parameter value to the {{domxref("Element.innerHTML")}} property.

To prevent this attack, the page should sanitize the input. It could do this by explicitly encoding characters like <kbd><</kbd> before assigning the input to `innerHTML`. Alternatively (and more likely, if HTML is not required), the website could assign the input to the element's {{domxref("Node.textContent", "textContent")}} property instead, which will just assign the value as text.

In this page we'll explore the different types of XSS attacks, and the different methods that can be used to counter them.

## Types of XSS

XSS attacks are commonly divided into three categories: _reflected XSS_, _stored XSS_, and _DOM-based XSS_. We'll describe them here: however, knowing or defining the categories is not as important as understanding where and how XSS attacks can originate, as this affects the ways they can be countered. Another useful taxonomy, which is related to this categorization but a little different, is whether they are client-side or server-side: that is whether the vulnerability is in the server or in the front-end code.

### Reflected XSS

A reflected XSS attack is one in which an HTTP request contains the malicious JavaScript, and the server mistakenly includes that JavaScript in the page it returns to the client. The client then loads the page and runs the JavaScript, and the attack succeeds.

For example, consider a website with a search function. The search page might look like this:

```html
<h1>Search</h1>

<form action="/results">
  <label for="mySearch">Search for an item:</label>
  <input id="mySearch" type="search" name="search" />
  <input type="submit" />
</form>
```

When the user enters a search term and clicks "Submit", the browser makes a GET request to "/results", including the search term as a URL parameter, like this:

```plain
https://example.org/results?search=bananas
```

The server wants to display a list of search results, with a title indicating what the user searched for. It extracts the search term from the URL parameter. Here's what this might look like in [Express](/en-US/docs/Learn/Server-side/Express_Nodejs):

```js
app.get("/results", (req, res) => {
  const searchQuery = req.query.search;
  const results = ""; // getResults(searchQuery);
  res.send(`
   <h1>You searched for ${searchQuery}</h1>
   <p>Here are the results: ${results}</p>`);
});
```

(For simplicity, we've omitted the code that fetches the results.)

To exploit this vulnerability, an attacker sends the user a link like this:

```html
<a href="http://example.org/results?search=<img src=x onerror=alert('hello')">
  Win a free iPad!</a
>
```

When the user clicks the link:

1. The browser sends a GET request to the server. The request's URL parameter contains the malicous code.
2. The server extracts the URL parameter value and embeds it in the page.
3. The server returns the page to the browser, which runs it.

This is a lot like our first example, except the vulnerability is in the server, not the front-end code. The same pattern applies here though: the website accepts input that could have been crafted by the attacker, and includes that input in the page without sanitizing it.

### Stored XSS

A stored XSS attack is functionally just like a reflected XSS attack, except the malicious JavaScript injected by the attacker is stored by the website, and served up to the user every time the page is accessed.

For example, a website might include a blog that allows comments. Since anyone can make comments, they constitute input that may be crafted by an attacker. If the website does not sanitize blog comments, then when a user accesses a page in the blog that includes these comments, the code in the comment may be executed in the user's context.

### DOM-based XSS

A DOM-based XSS attack happens when a website's front-end takes some input that could have been crafted by an attacker, and without sanitizing it, passes it to an API that could result in the input becoming executable. APIs like this are referred to as _sinks_.

The first XSS example we saw in this page is an example of DOM-based XSS, in which the sink is the {{domxref("Element.innerHTML")}} property. Some, like `innerHTML`, modify the DOM, and can make their input executable by injecting {{htmlelement("script")}} tags, `javascript:` URLs, or inline event handlers. Others, like [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval), directly execute their arguments as JavaScript.

### Client versus server XSS

## Defenses against XSS

### Do you need an XSS defense?

### Sanitizing input

### Implementing a CSP
