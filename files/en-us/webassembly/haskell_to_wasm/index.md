---
title: Compiling from Haskell to WebAssembly
slug: WebAssembly/Haskell_to_Wasm
page-type: guide
---

{{WebAssemblySidebar}}

# Compiling Haskell to WebAssembly: A Step-by-Step Guide

## Introduction

This guide demonstrates how to compile Haskell code into [WebAssembly](/en-US/docs/WebAssembly) (Wasm). You'll learn how to convert a single Haskell source file to WebAssembly and integrate it into a web application. Additionally, we'll cover compiling a Haskell Cabal project for WebAssembly, including handling data types like strings.

For detailed technical documentation, refer to the [GHC WebAssembly user guide](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/wasm.html).

## Environment Setup

### Installing the Custom GHC for WebAssembly

To compile Haskell to WebAssembly, you need a custom GHC version that supports the `wasm32-wasi` target. Detailed installation instructions can be found in the [GHC WebAssembly meta repository](https://gitlab.haskell.org/ghc/ghc-wasm-meta). Here’s a quick setup guide:

1. **(Optional): Choose a GHC flavor.**  
   This determines the specific GHC version. For stability, we'll use GHC 9.8.3:
   
   ```bash
   export FLAVOUR=9.8
   ```

2. **Run the installation script:**

   ```bash
   curl https://gitlab.haskell.org/ghc/ghc-wasm-meta/-/raw/master/bootstrap.sh | sh
   ```

3. **Update your environment:**

   ```bash
   source /home/username/.ghc-wasm/env
   ```

4. **Verify the installation:**

   ```bash
   wasm32-wasi-ghc --version
   wasm32-wasi-cabal --version
   ```


## Compiling a Simple Haskell File to WebAssembly

### Writing the Haskell Code

Let’s start with a simple Haskell function that takes an integer and adds 10:

```haskell
-- Test.hs
addTen :: Int -> Int
addTen n = n + 10

main :: IO ()
main = mempty
```

However, JavaScript and Haskell use different number types. To bridge this gap, we’ll use C FFI. Here’s the updated code:

```haskell
-- Test.hs
foreign export ccall addTen :: Int -> IO Int

addTen :: Int -> IO Int
addTen n = return $ n + 10

main :: IO ()
main = mempty
```

### Compiling the Code

Compile your Haskell file to WebAssembly:

```bash
wasm32-wasi-ghc Test.hs -optl-Wl,--export=hs_init,--export=addTen
```

- `--export=hs_init` initializes the Haskell runtime.
- `--export=addTen` exposes the `addTen` function for external calls.

If successful, this will generate a `Test.wasm` file.

## Running WebAssembly in a Browser

### Creating an HTML File

Now that you have a WebAssembly module, let’s run it in the browser. Create an `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Haskell + WASM</title>
</head>
<body>
    <h1>Haskell + WebAssembly</h1>
</body>
<script type="module">
    import { WASI } from 'https://cdn.jsdelivr.net/npm/@bjorn3/browser_wasi_shim@0.3.0/+esm';

    const wasi = new WASI([], [], []);
    const wasm = await WebAssembly.compileStreaming(fetch("Test.wasm"));

    const inst = await WebAssembly.instantiate(wasm, {
        "wasi_snapshot_preview1": wasi.wasiImport,
    });

    wasi.initialize(inst);
    inst.exports.hs_init(0, 0);
    console.log(inst.exports.addTen(23)); // Outputs: 33
</script>
</html>
```

This script initializes the Haskell runtime and calls the `addTen` function.

## Compiling a Cabal Project to WebAssembly

Next up, we will build a Haskell cabal project and will use strings instead of integer. as it is slightly more complicated to marshall Javascript strings.

### Creating a New Cabal Project

Let’s extend this by creating a Cabal project that handles strings:

```bash
mkdir haskell_wasm
cd haskell_wasm
cabal init
```
Note: You need to initialize project with normal `cabal` tool that you can install from [GHCup](https://www.haskell.org/ghcup/).

### Writing the Haskell Code

Here’s a simple function to greet a user:

```haskell
-- app/Main.hs
module Main where

import Foreign.C.String (CString, peekCString, newCString)
import Foreign.Marshal.Alloc (callocBytes, free)
import Foreign.Ptr (Ptr)

foreign export ccall "hs_sayHello" sayHello :: CString -> IO CString
foreign export ccall "callocBuffer" callocBuffer :: Int -> IO (Ptr a)
foreign export ccall "freeBuffer" freeBuffer :: Ptr a -> IO ()

sayHello :: CString -> IO CString
sayHello cstr = do
    inputStr <- peekCString cstr
    newCString $ "Hello, " <> inputStr

callocBuffer :: Int -> IO (Ptr a)
callocBuffer = callocBytes

freeBuffer :: Ptr a -> IO ()
freeBuffer = free

main :: IO ()
main = putStrLn "Hello, Haskell!"
```

### Updating the Cabal File

Add the following `ghc-options` in your Cabal configuration to export the necessary functions:

```cabal
executable haskell-wasm
    main-is:          Main.hs
    build-depends:    base ^>=4.19.1.0
    hs-source-dirs:   app
    default-language: Haskell2010
    ghc-options: -optl-mexec-model=reactor -optl-Wl,--export=hs_init,--export=hs_sayHello,--export=freeBuffer,--export=callocBuffer
```

### Building and Running

Build the project:

```bash
wasm32-wasi-cabal build
```

Copy the generated `.wasm` file into your project directory:

```bash
$ cp dist-newstyle/build/wasm32-wasi/ghc-9.8.3.20241108/haskell-wasm-0.1.0.0/x/haskell-wasm/opt/build/haskell-wasm/haskell-wasm.wasm .
```

Update your `index.html` to use the `hs_sayHello` function:

```html
<script type="module">
    import { WASI } from 'https://cdn.jsdelivr.net/npm/@bjorn3/browser_wasi_shim@0.3.0/+esm';

    const wasi = new WASI([], [], []);
    const wasm = await WebAssembly.compileStreaming(fetch("haskell-wasm.wasm"));

    const inst = await WebAssembly.instantiate(wasm, {
        "wasi_snapshot_preview1": wasi.wasiImport,
    });

    function callWithString(func, str) {
        const encoder = new TextEncoder();
        const decoder = new TextDecoder("utf8");

        const encoded = encoder.encode(str + '\0'); // Null-terminated string
        const ptr = inst.exports.callocBuffer(encoded.length);
        new Uint8Array(inst.exports.memory.buffer, ptr, encoded.length).set(encoded);

        const resultPtr = func(ptr);
        const resultBytes = new Uint8Array(inst.exports.memory.buffer, resultPtr);
        const length = resultBytes.findIndex(b => b === 0);
        const result = decoder.decode(new Uint8Array(inst.exports.memory.buffer, resultPtr, l));

        inst.exports.freeBuffer(ptr);
        inst.exports.freeBuffer(resultPtr);

        return result;
    }

    wasi.initialize(inst);
    inst.exports.hs_init(0, 0);
    console.log(callWithString(inst.exports.hs_sayHello, "John")); // Outputs: Hello, John
</script>
```

## Conclusion

Congratulations! You’ve successfully compiled Haskell to WebAssembly and integrated it into a web app. This guide covered the basics, but there’s much more to explore, including advanced data types and optimizations.


## Useful Links

- [GHC WebAssembly Meta Repository](https://gitlab.haskell.org/ghc/ghc-wasm-meta)
- [Ormolu live](https://github.com/tweag/ormolu/tree/master/ormolu-live)
- [Sql2er](https://github.com/tusharad/sql2er)