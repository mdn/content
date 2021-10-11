---
title: Memory
slug: Plugins/Guide/Memory
tags:
  - Gecko Plugin API Reference
  - Guide
  - NPAPI
  - Plugins
---
This chapter describes the Plug-in API functions that allocate and free memory as needed by the plug-in.

Because plug-ins share memory space with the browser, they can take advantage of any customized memory-allocation scheme the browser has. Browser memory schemes may be more efficient than standard OS memory functions, and can give the browser flexibility in the way it manages memory. In addition, the plug-in usually has the option of using its own memory functions.

The methods that handle memory belong to the browser group of methods.

- [`NPN_MemAlloc`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_MemAlloc) allocates memory from the browser's memory space. Use this function to allocate memory dynamically.
- [`NPN_MemFree`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_MemFree) requests that the browser free a specified block of memory. Use this function to free memory allocated with `NPN_MemAlloc`.
- [`NPN_MemFlush`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_MemFlush) requests the browser to free up a specified amount of memory if not enough is currently available for the plug-in's requirements.

### Allocating and freeing memory

To allocate memory and free memory, use these paired functions:

- `NPN_MemAlloc` allocates a specified amount of memory in the browser's memory space.
- `NPN_MemFree` deallocates a block of memory allocated using `NPN_MemAlloc`.

The plug-in can call the Plug-in API `NPN_MemAlloc` function instead of the standard malloc function to allocate dynamic memory. Using `NPN_MemAlloc` offers several advantages to the plug-in.

- A call to `NPN_MemAlloc` is more likely to succeed. The browser may be able to deallocate nonessential memory structures in response to a request.
- `NPN_MemAlloc` uses the browser's customized memory-allocation scheme, which is typically faster and causes less fragmentation than the standard OS memory functions.
- If the plug-in uses `NPN_MemAlloc`, the browser is able to manage memory more efficiently because it knows how much memory the plug-in is using at any given time.

#### Mac OS

The Mac OS browser frequently fills its memory partition with cached data that is purged only as necessary. Since `NPN_MemAlloc` automatically frees cached information if necessary to fulfill a request for memory, calls to `NPN_MemAlloc` may succeed where direct calls to `NewPtr` fail.

The `NPN_MemAlloc` method has the following syntax:

    void *NPN_MemAlloc (uint32 size);

The `size` parameter is an unsigned long integer that represents the amount of memory, in bytes, to allocate in the browser's memory space. This function returns a pointer to the allocated memory or null if not enough memory is available.

The `NPN_MemFree` method deallocates a block of memory that was allocated using `NPN_MemAlloc` only. `NPN_MemFree` does not free memory allocated by other means.

    void NPN_MemFree (void *ptr);

The `ptr` parameter represents a block of memory previously allocated using `NPN_MemAlloc`.

### Flushing memory (Mac OS only)

The `NPN_MemFlush` method frees a specified amount of memory. Normally, plug-ins should use `NPN_MemAlloc`, which automatically frees nonessential memory if necessary to fulfill the request. For Communicator 4.0 and later versions, this function is not necessary for the Mac OS platform; `NPN_MemAlloc` now performs memory flushing internally. You need to use `NPN_MemFlush` only when it is not possible to call `NPN_MemAlloc`, for example, when calling system methods that allocate memory indirectly. If `NPN_MemAlloc` is called, calls to `NPN_MemFlush` have no effect.

For example, suppose that the plug-in calls `NewGWorld`, and that the call fails because of insufficient memory. The plug-in should try calling `NPN_MemFlush` to free enough memory. If `NPN_MemFlush` returns a value indicating that enough memory was freed, the plug-in can call `NewGWorld` again. Calling `NPN_MemFlush` is particularly important to systems with small amounts of RAM and with virtual memory turned off.

To request that the browser free as much memory as possible, call `NPN_MemFlush` repeatedly until it returns 0.

    uint32 NPN_MemFlush (uint32 size);

The size parameter is an unsigned long integer that represents the amount of memory, in bytes, to free in the browser's memory space. This function returns the amount of freed memory, in bytes, or 0 if no memory could be freed.
