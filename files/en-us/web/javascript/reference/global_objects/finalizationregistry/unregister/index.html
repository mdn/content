---
title: FinalizationRegistry.prototype.unregister()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister
tags:
  - FinalizationRegistry
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.FinalizationRegistry.unregister
---
<div>{{JSRef}}</div>

<p>The <code>unregister</code> unregisters a target object from a
    {{jsxref("FinalizationRegistry")}} instance.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">unregister(unregisterToken);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
    <dt><code><var>unregisterToken</var></code></dt>
    <dd>The token used with the {{jsxref("FinalizationRegistry.prototype.register",
        "register")}} method when registering the target object.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><code>undefined</code>.</p>

<h2 id="Notes">Notes</h2>

<p>When a target object has been reclaimed, it is no longer registered in the registry.
    There is no need to all <code>unregister</code> in your cleanup callback. Only call
    <code>unregister</code> if you haven't received a cleanup callback and no longer need
    to receive one.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_unregister">Using unregister</h3>

<p>This example shows registering a target object using that same object as the unregister
    token, then later unregistering it via <code>unregister</code>:</p>

<pre class="brush: js">class Thingy {
    #cleanup = label =&gt; {
    //         ^^^^^−−−−− held value
        console.error(
            `The \`release\` method was never called for the object with the label "${label}"`
        );
    };
    #registry = new FinalizationRegistry(this.#cleanup);

    /**
     * Constructs a `Thingy` instance. Be sure to call `release` when you're done with it.
     *
     * @param   label       A label for the `Thingy`.
     */
    constructor(label) {
        //                            vvvvv−−−−− held value
        this.#registry.register(this, label, this);
        //          target −−−−−^^^^         ^^^^−−−−− unregister token
    }

    /**
     * Releases resources held by this `Thingy` instance.
     */
    release() {
        this.#registry.unregister(this);
        //                        ^^^^−−−−− unregister token
    }
}
</pre>

<p>This example shows registering a target object using a different object as its
    unregister token:</p>

<pre class="brush: js"> {
    //         ^^^^−−−−− held value
        console.error(
            `The \`release\` method was never called for the \`Thingy\` for the file "${file.name}"`
        );
    };
    #registry = new FinalizationRegistry(this.#cleanup);

    /**
     * Constructs a `Thingy` instance for the given file. Be sure to call `release` when you're done with it.
     *
     * @param   filename    The name of the file.
     */
    constructor(filename) {
        this.#file = File.open(filename);
        //                            vvvvv−−−−− held value
        this.#registry.register(this, label, this.#file);
        //          target −−−−−^^^^         ^^^^^^^^^^−−−−− unregister token
    }

    /**
     * Releases resources held by this `Thingy` instance.
     */
    release() {
        if (this.#file) {
            this.#registry.unregister(this.#file);
            //                        ^^^^^^^^^^−−−−− unregister token
            File.close(this.#file);
            this.#file = null;
        }
    }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
    <li>{{jsxref("FinalizationRegistry")}}</li>
</ul>
