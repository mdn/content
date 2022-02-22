---
title: Fetching data from the server
slug: Learn/JavaScript/Client-side_web_APIs/Fetching_data
tags:
  - API
  - Article
  - Beginner
  - CodingScripting
  - Fetch
  - JSON
  - JavaScript
  - Learn
  - Promises
  - Server
  - XHR
  - XML
  - XMLHttpRequest
  - data
  - request
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Another very common task in modern websites and applications is retrieving individual data items from the server to update sections of a webpage without having to load an entire new page. This seemingly small detail has had a huge impact on the performance and behavior of sites, so in this article, we'll explain the concept and look at technologies that make it possible: in particular, the [Fetch API](/en-US/docs/Web/API/Fetch_API).

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        JavaScript basics (see
        <a href="/en-US/docs/Learn/JavaScript/First_steps">first steps</a>,
        <a href="/en-US/docs/Learn/JavaScript/Building_blocks"
          >building blocks</a
        >,
        <a href="/en-US/docs/Learn/JavaScript/Objects">JavaScript objects</a>),
        the
        <a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >basics of Client-side APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn how to fetch data from the server and use it to update the
        contents of a web page.
      </td>
    </tr>
  </tbody>
</table>

## What is the problem here?

Originally page loading on the web was simple — you'd send a request for a website to a server, and as long as nothing went wrong, the assets that made the web page would be downloaded and displayed on your computer.

![A basic representation of a web site architecture](web-site-architechture@2x.png)

The trouble with this model is that whenever you want to update any part of the page, for example, to display a new set of products or load a new page, you've got to load the entire page again. This is extremely wasteful and results in a poor user experience, especially as pages get larger and more complex.

### Enter Ajax

This led to the creation of technologies that allow web pages to request small chunks of data (such as [HTML](/en-US/docs/Web/HTML), {{glossary("XML")}}, [JSON](/en-US/docs/Learn/JavaScript/Objects/JSON), or plain text) and display them only when needed, helping to solve the problem described above.

This is achieved by using the [Fetch API](/en-US/docs/Web/API/Fetch_API). This allows web pages to directly handle making [HTTP](/en-US/docs/Web/HTTP) requests for specific resources available on a server and formatting the resulting data as needed before it is displayed.

> **Note:** In the early days, this general technique was known as [Asynchronous](/en-US/docs/Glossary/Asynchronous) JavaScript and XML ([Ajax](/en-US/docs/Glossary/AJAX)), because it tended to request XML data. This is normally not the case these days (you'd be more likely to request JSON), but the result is still the same, and the term "Ajax" is still often used to describe the technique.

![A simple modern architecture for web sites](moderne-web-site-architechture@2x.png)

The Ajax model involves using a web API as a proxy to more intelligently request data rather than just having the browser reload the entire page. Let's think about the significance of this:

1. Go to one of your favorite information-rich sites, like Amazon, YouTube, CNN, etc., and load it.
2. Now search for something, like a new product. The main content will change, but most of the surrounding information, like the header, footer, navigation menu, etc., will stay the same.

This is a really good thing because:

- Page updates are a lot quicker and you don't have to wait for the page to refresh, meaning that the site feels faster and more responsive.
- Less data is downloaded on each update, meaning less wasted bandwidth. This may not be such a big issue on a desktop on a broadband connection, but it's a major issue on mobile devices and in developing countries that don't have ubiquitous fast Internet service.

To speed things up even further, some sites also store assets and data on the user's computer when they are first requested, meaning that on subsequent visits they use the local versions instead of downloading fresh copies every time the page is first loaded. The content is only reloaded from the server when it has been updated.

![A basic web app data flow architecture](web-app-architecture@2x.png)

## The Fetch API

Let's walk through a couple of examples of the Fetch API.

### Fetching text content

For this example, we'll request data out of a few different text files and use them to populate a content area.

This series of files will act as our fake database; in a real application, we'd be more likely to use a server-side language like PHP, Python, or Node to request our data from a database. Here, however, we want to keep it simple and concentrate on the client-side part of this.

To begin this example, make a local copy of [ajax-start.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/ajax-start.html) and the four text files — [verse1.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse3.txt), and [verse4.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse4.txt) — in a new directory on your computer. In this example, we will fetch a different verse of the poem (which you may well recognize) when it's selected in the drop-down menu.

Just inside the {{htmlelement("script")}} element, add the following code. This stores references to the {{htmlelement("select")}} and {{htmlelement("pre")}} elements and adds a listener to the `<select>` element, so that when the user selects a new value, the new value is passed to function named `updateDisplay()` as a parameter.

```js
const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.addEventListener('change', () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});
```

Let's define our `updateDisplay()` function. First of all, put the following beneath your previous code block — this is the empty shell of the function. Note: Steps 4 - 9 will all be performed _within_ this function.

```js
function updateDisplay(verse) {

}
```

We'll start our function by constructing a relative URL pointing to the text file we want to load, as we'll need it later. The value of the {{htmlelement("select")}} element at any time is the same as the text inside the selected {{htmlelement("option")}} (unless you specify a different value in a value attribute) — so for example "Verse 1". The corresponding verse text file is "verse1.txt", and is in the same directory as the HTML file, therefore just the file name will do.

However, web servers tend to be case sensitive, and the file name doesn't have a space in it. To convert "Verse 1" to "verse1.txt" we need to convert the V to lower case, remove the space, and add .txt on the end. This can be done with {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}}, and [string concatenation](/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings). Add the following lines inside your `updateDisplay()` function:

```js
verse = verse.replace(' ', '');
verse = verse.toLowerCase();
const url = `${verse}.txt`;
```

Finally we're ready to use the Fetch API:

```js
// Call `fetch()`, passing in the URL.
fetch(url)
  // fetch() returns a promise. When we have received a response from the server,
  // the promise's `then()` handler is called with the response.
  .then( response => {
    // Our handler throws an error if the request did not succeed.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // Otherwise (if the response succeeded), our handler fetches the response
    // as text by calling response.text(), and immediately returns the promise
    // returned by `response.text()`.
    return response.text();
  })
  // When response.text() has succeeded, the `then()` handler is called with
  // the text, and we copy it into the `poemDisplay` box.
  .then( text => poemDisplay.textContent = text )
  // Catch any errors that might happen, and display a message
  // in the `poemDisplay` box.
  .catch( error => poemDisplay.textContent = `Could not fetch verse: ${error}`);
```

There's quite a lot to unpack in here.

First, the entry point to the Fetch API is a global function called {{domxref("fetch", "fetch()")}}, that takes the URL as a parameter (it takes another optional parameter for custom settings, but we're not using that here).

Next, `fetch()` is an asynchronous API which returns a {{jsxref("Promise")}}. If you don't know what that is, read the module on [asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous), and in particular the article on [promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises), then come back here. You'll find that that article also talks about the `fetch()` API!

So because `fetch()` returns a promise, we pass a function into the {{jsxref("Promise/then", "then()")}} function of the returned promise. This function will be called when the HTTP request has received a response from the server. In the handler, we check that the request succeeded, and throw an error if it didn't. Otherwise, we call {{domxref("Response/text", "response.text()")}}, to get the response body as text.

It turns out that `response.text()` is _also_ asynchronous, so we return the promise it returns, and pass a function into the `then()` function of this new promise. This function will be called when the response text is ready, and inside it we will update our `<pre>` block with the text.

Finally, we chain a {{jsxref("Promise/catch", "catch()")}} handler at the end, to catch any errors thrown in either of the asynchronous functions we called or their handlers.

One problem with the example as it stands is that it won't show any of the poem when it first loads. To fix this, add the following two lines at the bottom of your code (just above the closing `</script>` tag) to load verse 1 by default, and make sure the {{htmlelement("select")}} element always shows the correct value:

```js
updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
```

#### Serving your example from a server

Modern browsers will not run HTTP requests if you just run the example from a local file. This is because of security restrictions (for more on web security, read [Website security](/en-US/docs/Learn/Server-side/First_steps/Website_security)).

To get around this, we need to test the example by running it through a local web server. To find out how to do this, read [our guide to setting up a local testing server](/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server).

### The can store

In this example we have created a sample site called The Can Store — it's a fictional supermarket that only sells canned goods. You can find this [example live on GitHub](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/), and [see the source code](https://github.com/mdn/learning-area/tree/master/javascript/apis/fetching-data/can-store).

![A fake ecommerce site showing search options in the left hand column, and product search results in the right hand column.](can-store.png)

By default, the site displays all the products, but you can use the form controls in the left hand column to filter them by category, or search term, or both.

There is quite a lot of complex code that deals with filtering the products by category and search terms, manipulating strings so the data displays correctly in the UI, etc. We won't discuss all of it in the article, but you can find extensive comments in the code (see [can-script.js](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store/can-script.js)).

We will, however, explain the Fetch code.

The first block that uses Fetch can be found at the start of the JavaScript:

```js
fetch('products.json')
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => initialize(json) )
  .catch( err => console.error(`Fetch problem: ${err.message}`) );
```

The `fetch()` function returns a promise. If this completes successfully, the function inside the first `.then()` block contains the `response` returned from the network.

Inside this function we:
- check that the server didn't return an error (such as [`404 Not Found`](/en-US/docs/Web/HTTP/Status/404)). If it did, we throw the error.
- call {{domxref("Response.json","json()")}} on the response. This will retrieve the data as a [JSON object](/en-US/docs/Learn/JavaScript/Objects/JSON). We return the promise returned by `response.json()`.

Next we pass a function into the `then()` method of that returned promise. This function will be passed an object containing the response data as JSON, which we pass into the `initialize()` function. This function which starts the process of displaying all the products in the user interface.

To handle errors, we chain a `.catch()` block onto the end of the chain. This runs if the promise fails for some reason. Inside it, we include a function that is passed as a parameter, an `err` object. This `err` object can be used to report the nature of the error that has occurred, in this case we do it with a simple `console.log()`.

However, a complete website would handle this error more gracefully by displaying a message on the user's screen and perhaps offering options to remedy the situation, but we don't need anything more than a simple `console.error()`.

You can test the failure case yourself:

1. Make a local copy of the example files.
2. Run the code through a web server (as described above, in {{anch("Serving your example from a server")}}).
3. Modify the path to the file being fetched, to something like 'produc.json' (make sure it is misspelled).
4. Now load the index file in your browser (via `localhost:8000`) and look in your browser developer console. You'll see a message similar to "Fetch problem: HTTP error: 404".

The second Fetch block can be found inside the `fetchBlob()` function:

```js
fetch(url)
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.blob();
  })
  .then( blob => showProduct(blob, product) )
  .catch( err => console.error(`Fetch problem: ${err.message}`) );
```

This works in much the same way as the previous one, except that instead of using {{domxref("Response.json","json()")}}, we use {{domxref("Response.blob","blob()")}}. In this case we want to return our response as an image file, and the data format we use for that is [Blob](/en-US/docs/Web/API/Blob) (the term is an abbreviation of "Binary Large Object" and can basically be used to represent large file-like objects, such as images or video files).

Once we've successfully received our blob, we pass it into our `showProduct()` function, which displays it.

## The XMLHttpRequest API

Sometimes, especially in older code, you'll see another API called [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) (often abbreviated as "XHR") used to make HTTP requests. This predated Fetch, and was really the first API widely used to implement AJAX. We recommend you use Fetch if you can: it's a simpler API and has more features than `XMLHttpRequest`. We won't go through an example that uses `XMLHttpRequest`, but we will show you what the `XMLHttpRequest` version of our first can store request would look like:

```js
const request = new XMLHttpRequest();

try {
  request.open('GET', 'products.json');

  request.responseType = 'json';

  request.addEventListener('load', () => initialize(request.response));
  request.addEventListener('error', () => console.error('XHR error'));

  request.send();

} catch(error) {
  console.error(`XHR error ${request.status}`);
}
```

There are five stages to this:
1. Create a new `XMLHttpRequest` object.
2. Call its [`open()`](/en-US/docs/Web/API/XMLHttpRequest/open) method to initialize it.
3. Add an event listener to its [`load`](/en-US/docs/Web/API/XMLHttpRequest/load_event) event, which fires when the response has completed successfully. In the listener we call `initialize()` with the data.
4. Add an event listener to its [`error`](/en-US/docs/Web/API/XMLHttpRequest/error_event) event, which fires when the request encounters an error
5. Send the request.

We also have to wrap the whole thing in the [try...catch](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block, to handle any errors thrown by `open()` or `send()`.

Hopefully you think the Fetch API is an improvement over this. In particular, see how we have to handle errors in two different places.

## Summary

This article shows how to start working with Fetch to fetch data from the server.

## See also

There are however a lot of different subjects discussed in this article, which has only really scratched the surface. For a lot more detail on these subjects, try the following articles:

- [Ajax — Getting started](/en-US/docs/Web/Guide/AJAX/Getting_Started)
- [Using Fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Working with JSON data](/en-US/docs/Learn/JavaScript/Objects/JSON)
- [An overview of HTTP](/en-US/docs/Web/HTTP/Overview)
- [Server-side website programming](/en-US/docs/Learn/Server-side)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

## In this module

- [Introduction to web APIs](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [Manipulating documents](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- **Fetching data from the server**
- [Third party APIs](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [Drawing graphics](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Video and audio APIs](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [Client-side storage](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
