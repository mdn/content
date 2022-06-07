---
title: ReadableStreamDefaultController
slug: Web/API/ReadableStreamDefaultController
page-type: web-api-interface
tags:
  - API
  - Fetch
  - Interface
  - ReadableStreamDefaultController
  - Reference
  - Streams
browser-compat: api.ReadableStreamDefaultController
---
{{APIRef("Streams")}}

The **`ReadableStreamDefaultController`** interface of the [Streams API](/en-US/docs/Web/API/Streams_API) represents a controller allowing control of a {{domxref("ReadableStream")}}'s state and internal queue. Default controllers are for streams that are not byte streams.

## Constructor

None. `ReadableStreamDefaultController` instances are created automatically during `ReadableStream` construction.

## Properties

- {{domxref("ReadableStreamDefaultController.desiredSize")}} {{readonlyInline}}
  - : Returns the desired size required to fill the stream's internal queue.

## Methods

- {{domxref("ReadableStreamDefaultController.close()")}}
  - : Closes the associated stream.
- {{domxref("ReadableStreamDefaultController.enqueue()")}}
  - : Enqueues a given chunk in the associated stream.
- {{domxref("ReadableStreamDefaultController.error()")}}
  - : Causes any future interactions with the associated stream to error.

## Examples

In the following simple example, a custom `ReadableStream` is created using a constructor (see our [Simple random stream example](https://mdn.github.io/dom-examples/streams/simple-random-stream/) for the full code). The `start()` function generates a random string of text every second and enqueues it into the stream. A `cancel()` function is also provided to stop the generation if {{domxref("ReadableStream.cancel()")}} is called for any reason.

Note that a {{domxref("ReadableStreamDefaultController")}} object is provided as the parameter of the `start()` and `pull()` functions.

When a button is pressed, the generation is stopped, the stream is closed using {{domxref("ReadableStreamDefaultController.close()")}}, and another function is run, which reads the data back out of the stream.

```css
.input {
  float: left;
  width: 50%;
}
.output {
  float: right;
  width: 50%;
}
hr {
  clear: both;
}
button {
  display: block;
}
```

```html
<button>Close stream</button>
<h2>Final result</h2>
<p>Waiting ...</p>

<hr>
<div class="input">
  <h2>Custom stream input</h2>
  <ul>
  </ul>
</div>
<div class="output">
  <h2>Reading custom stream</h2>
  <ul>
  </ul>
</div>
```

```js
//My Underlying Source object
class MyPushSource extends EventTarget {
  constructor() {
    super();
    this.interval;
    this.maxdata = 10; //maximum data that can be sent (magic)
  }

  init() {
    // emit this event after every second
    this.interval = setInterval(() => {
      if (this.maxdata > 0) {
        let string = this.randomChars();
        let newEvent = new Event("newdata");
        newEvent.data=string;
        this.dispatchEvent(newEvent);
      } else {
        let endEvent = new Event("enddata");
        this.dispatchEvent(endEvent);
      } 
      //Iterate down until all "data" sent 
      this.maxdata--;
    }, 1000);
  }

  pauseSource() { clearInterval( this.interval ); }

  // function to generate random character string
  randomChars() {
    let string = "";
    let choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (let i = 0; i < 8; i++) {
      string += choices.charAt(Math.floor(Math.random() * choices.length));
    }
    return string;
  }
};
```

```js
// Store reference to lists, paragraph and button
const list1 = document.querySelector('.input ul');
const list2 = document.querySelector('.output ul');
const para = document.querySelector('p');
const button = document.querySelector('button');

// create empty string in which to store final result
let result = "";

//Create my underlying source
let myUnderlyingSource = new MyPushSource();

//Close my source
button.addEventListener('click', function() {
  //myUnderlyingSource.pauseSource(); //This I can do!
  reader.releaseLock(); //These fail, I can't cancel without releasing a lock and I can't release a lock while I have an outstanding read. Not sure of "right" approach.
  stream.cancel();
})
```

```js
const stream = new ReadableStream({
  start(controller) {
    myUnderlyingSource.init();

    myUnderlyingSource.addEventListener("newdata", (e) =>  {
      // Add the string to the stream
      controller.enqueue(e.data);
    });

    myUnderlyingSource.addEventListener("enddata", (e) =>  {
      // We've run out of data
      controller.close();
    });


    myUnderlyingSource.addEventListener("newdata", (e) =>  {
      // show it on the screen
      let listItem = document.createElement('li');
      listItem.textContent = e.data;
      list1.appendChild(listItem);
    });

  },
  pull(controller) {
    // We don't really need a pull in this example
  },
  cancel() {
    // This is called if the reader cancels,
    // so we should stop generating strings
    myUnderlyingSource.pauseSource();
  }
});
```

```js
const reader = stream.getReader();
readStream(reader);

function readStream(reader) {
  let charsReceived = 0;

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      console.log("Stream complete");
      para.textContent = result;
      return;
    }

    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement('li');
    listItem.textContent = `Read ${charsReceived} chars. Chunk = ${chunk}`;
    list2.appendChild(listItem);
    result += chunk;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

{{EmbedLiveSample("Examples","100%","500px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
