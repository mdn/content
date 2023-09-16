---
title: Compiling from Rust to WebAssembly
slug: WebAssembly/Rust_to_Wasm
---

{{WebAssemblySidebar}}

If you have some Rust code, you can compile it into [WebAssembly](/en-US/docs/WebAssembly) (Wasm). This tutorial will show you how to compile a Rust project into WebAssembly and use it in an existing web app.

## Rust and WebAssembly use cases

There are two main use cases for Rust and WebAssembly:

- Build an entire application — an entire web app based in Rust.
- Build a part of an application — using Rust in an existing JavaScript frontend.

For now, the Rust team is focusing on the latter case, and so that's what we cover here. For the former case, check out projects like [`yew`](https://github.com/yewstack/yew).

In this tutorial, we build a package using `wasm-pack`, a tool for building JavaScript packages in Rust. This package will contain only WebAssembly and JavaScript code, and so the users of the package won't need Rust installed. They may not even notice that it's written in Rust.

## Rust Environment Setup

Let's go through all the required steps to get our environment set up.

### Install Rust

Install Rust by going to the [Install Rust](https://www.rust-lang.org/tools/install) page and following the instructions. This installs a tool called "rustup", which lets you manage multiple versions of Rust. By default, it installs the latest stable Rust release, which you can use for general Rust development. Rustup installs `rustc`, the Rust compiler, as well as `cargo`, Rust's package manager, `rust-std`, Rust's standard libraries, and some helpful docs — `rust-docs`.

> **Note:** Pay attention to the post-install note about needing cargo's `bin` directory in your system `PATH`. This is added automatically, but you must restart your terminal for it to take effect.

### wasm-pack

To build the package, we need an additional tool, `wasm-pack`. This helps compile the code to WebAssembly, as well as produce the right packaging for use in the browser. To download and install it, enter the following command into your terminal:

```bash
cargo install wasm-pack
```

## Building our WebAssembly package

Enough setup; let's create a new package in Rust. Navigate to wherever you keep your personal projects, and type this:

```bash
cargo new --lib hello-wasm
```

This creates a new library in a subdirectory named `hello-wasm` with everything you need to get going:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

First, we have `Cargo.toml`; this is the file that we use to configure our build. If you've used `Gemfile` from Bundler or `package.json` from npm, this is likely to be familiar; Cargo works in a similar manner to both of them.

Next, Cargo has generated some Rust code for us in `src/lib.rs`:

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

We won't use this test code at all, so go ahead and delete it.

### Let's write some Rust

Let's put this code into `src/lib.rs` instead:

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

This is the contents of our Rust project. It has three main parts; let's talk about each of them in turn. We give a high-level explanation here, and gloss over some details; to learn more about Rust, please check the free online book [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Using `wasm-bindgen` to communicate between Rust and JavaScript

The first part looks like this:

```rust
use wasm_bindgen::prelude::*;
```

Libraries are called "crates" in Rust.

Get it? _Cargo_ ships _crates_.

The first line contains a `use` command, which imports code from a library into your code. In this case, we're importing everything in the `wasm_bindgen::prelude` module. We use these features in the next section.

Before we move on to the next section, we should talk a bit more about `wasm-bindgen`.

`wasm-pack` uses `wasm-bindgen`, another tool, to provide a bridge between the types of JavaScript and Rust. It allows JavaScript to call a Rust API with a string, or a Rust function to catch a JavaScript exception.

We use `wasm-bindgen`'s functionality in our package. In fact, that's the next section.

#### Calling external functions in JavaScript from Rust

The next part looks like this:

```rust
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}
```

The bit inside the `#[ ]` is called an "attribute", and it modifies the next statement somehow. In this case, that statement is an `extern`, which tells Rust that we want to call some externally defined functions. The attribute says "wasm-bindgen knows how to find these functions".

The third line is a function signature, written in Rust. It says "the `alert` function takes one argument, a string named `s`."

As you might suspect, this is [the `alert` function provided by JavaScript](/en-US/docs/Web/API/Window/alert). We call this function in the next section.

Whenever you want to call JavaScript functions, you can add them to this file, and `wasm-bindgen` takes care of setting everything up for you. Not everything is supported yet, but we're working on it. Please [file bugs](https://github.com/rustwasm/wasm-bindgen/issues/new) if something is missing.

#### Producing Rust functions that JavaScript can call

The final part is this one:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Once again, we see the `#[wasm_bindgen]` attribute. In this case, it's not modifying an `extern` block, but a `fn`; this means that we want this Rust function to be able to be called by JavaScript. It's the opposite of `extern`: these aren't the functions we need, but rather the functions we're giving out to the world.

This function is named `greet`, and takes one argument, a string (written `&str`), `name`. It then calls the `alert` function we asked for in the `extern` block above. It passes a call to the `format!` macro, which lets us concatenate strings.

The `format!` macro takes two arguments in this case, a format string, and a variable to put in it. The format string is the `"Hello, {}!"` bit. It contains `{}`s, where variables will be interpolated. The variable we're passing is `name`, the argument to the function, so if we call `greet("Steve")` we should see `"Hello, Steve!".`

This is passed to `alert()`, so when we call this function we will see an alert box with "Hello, Steve!" in it.

Now that our library is written, let's build it.

### Compiling our code to WebAssembly

To compile our code correctly, we first need to configure it with `Cargo.toml`. Open this file, and change its contents to look like this:

```toml
[package]
name = "hello-wasm"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
description = "A sample project with wasm-pack"
license = "MIT/Apache-2.0"
repository = "https://github.com/yourgithubusername/hello-wasm"
edition = "2018"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

Fill in your own repository and use the same info that `git` uses for the `authors` field.

The big part to add is the `[package]`. The `[lib]` part tells Rust to build a `cdylib` version of our package; we won't get into what that means in this tutorial. For more, consult the [Cargo](https://doc.rust-lang.org/cargo/guide/) and [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html) documentation.

The last section is the `[dependencies]` section. Here's where we tell Cargo what version of `wasm-bindgen` we want to depend on; in this case, that's any `0.2.z` version (but not `0.3.0` or above).

### Building the package

Now that we've got everything set up, let's build the package. Type this into your terminal:

```bash
wasm-pack build --target web
```

This does a number of things (and they take a lot of time, especially the first time you run `wasm-pack`). To learn about them in detail, check out [this blog post on Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). In short, `wasm-pack build`:

1. Compiles your Rust code to WebAssembly.
2. Runs `wasm-bindgen` on that WebAssembly, generating a JavaScript file that wraps up that WebAssembly file into a module the browser can understand.
3. Creates a `pkg` directory and moves that JavaScript file and your WebAssembly code into it.
4. Reads your `Cargo.toml` and produces an equivalent `package.json`.
5. Copies your `README.md` (if you have one) into the package.

The end result? You have a package inside the `pkg` directory.

#### A digression about code size

If you check out the generated WebAssembly code size, it may be a few hundred kilobytes. We haven't instructed Rust to optimize for size at all, and doing so cuts down on the size _a lot_. This is beyond the scope of this tutorial, but if you'd like to learn more, check out the Rust WebAssembly Working Group's documentation on [Shrinking .wasm Size](https://rustwasm.github.io/book/game-of-life/code-size.html#shrinking-wasm-size).

## Using the package on the web

Now that we've got a compiled Wasm module, let's run it in the browser.
Let's start by creating a file named `index.html` in the root of the project, so we end up with the following project structure:

```plain
├── Cargo.lock
├── Cargo.toml
├── index.html
├── pkg
│   ├── hello_wasm.d.ts
│   ├── hello_wasm.js
│   ├── hello_wasm_bg.wasm
│   ├── hello_wasm_bg.wasm.d.ts
│   └── package.json
├── src
│   └── lib.rs
└── target
    ├── CACHEDIR.TAG
    ├── release
    └── wasm32-unknown-unknown
```

Put the following content in the `index.html` file:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>hello-wasm example</title>
  </head>
  <body>
    <script type="module">
      import init, { greet } from "./pkg/hello_wasm.js";
      init().then(() => {
        greet("WebAssembly");
      });
    </script>
  </body>
</html>
```

The script in this file will import the js glue code, initialize the Wasm module, and call the `greet` function we wrote in rust.

Serve the root directory of the project with a local web server, (e.g. `python3 -m http.server`). If you're not sure how to do that, refer to [Running a simple local HTTP server](/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> **Note:** Make sure to use an up-to-date web server that supports the `application/wasm` MIME type. Older web servers might not support it yet.

Load `index.html` from the web server (if you used the Python3 example: `http://localhost:8000`). An alert box appears on the screen, with `Hello, WebAssembly!` in it. We've successfully called from JavaScript into Rust, and from Rust into JavaScript.

## Making our package available to npm

If you want to use the WebAssembly module with npm, we'll need to make a few changes.

Let's start by recompiling our Rust with the target bundler option:

```bash
wasm-pack build --target bundler
```

### Install Node.js and npm

We are building an npm package, so you need to have Node.js and npm installed.

To get Node.js and npm, go to the [Get npm!](https://docs.npmjs.com/getting-started/) page and follow the instructions.
This tutorial targets node 16, if you need to switch between node versions, you can use [nvm](https://github.com/nvm-sh/nvm).

Next, let's use `npm link` to make this package available to other JavaScript packages installed

```bash
cd pkg
npm link
```

We now have an npm package, written in Rust, but compiled to WebAssembly. It's ready for use from JavaScript, and doesn't require the user to have Rust installed; the code included was the WebAssembly code, not the Rust source.

### Using the npm package on the web

Let's build a website that uses our new npm package. Many people use npm packages through various bundler tools, and we'll be using one of them, `webpack`, in this tutorial. It's only a bit complex, and shows a realistic use-case.

Let's move back out of the `pkg` directory, and make a new directory, `site`, to try this out in:

```bash
cd ..
mkdir site
cd site
npm link hello-wasm
```

Create a new file, `package.json`, and put the following code in it:

```json
{
  "scripts": {
    "serve": "webpack-dev-server"
  },
  "dependencies": {
    "hello-wasm": "^0.1.0"
  },
  "devDependencies": {
    "webpack": "^4.25.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  }
}
```

Next, we need to configure Webpack. Create `webpack.config.js` and put the following in it:

```js
const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
};
```

Next, create a file named `index.js`, and give it these contents:

```js
import("./node_modules/hello-wasm/hello_wasm.js").then((js) => {
  js.greet("WebAssembly with npm");
});
```

This imports the new module from the `node_modules` folder. This isn't considered a best practice, but this is a demo, so it's OK for now. Once it's loaded, it calls the `greet` function from that module, passing `"WebAssembly"` as a string. Note how there's nothing special here, yet we're calling into Rust code. As far as the JavaScript code can tell, this is just a normal module.

Finally, we need to add a HTML file to load the JavaScript. Create an `index.html` file and add the following:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>hello-wasm example</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

The `hello-wasm/site` directory should look like this:

```plain
├── index.html
├── index.js
├── node_modules
│   └── hello-wasm -> ../../pkg
├── package.json
└── webpack.config.js
```

We're done making files. Let's give this a shot:

```bash
npm install
npm run serve
```

This starts a web server. Load `http://localhost:8080` and an alert box appears on the screen, with `Hello, WebAssembly with npm!` in it. We've successfully used the Rust module with npm.

## Conclusion

This is the end of our tutorial; we hope you've found it useful.

There's lots of exciting work going on in this space; if you'd like to help make it even better, check out [the Rust WebAssembly Working Group](https://fitzgeraldnick.com/2018/02/27/wasm-domain-working-group.html).
