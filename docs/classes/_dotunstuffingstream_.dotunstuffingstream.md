[nntp-fast](../README.md) › [Globals](../globals.md) › ["DotUnstuffingStream"](../modules/_dotunstuffingstream_.md) › [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md)

# Class: DotUnstuffingStream

Transform stream that performs dot-unstuffing

## Hierarchy

* Transform

  ↳ **DotUnstuffingStream**

## Implements

* ReadableStream
* Writable

## Index

### Constructors

* [constructor](_dotunstuffingstream_.dotunstuffingstream.md#constructor)

### Properties

* [_streamsearch](_dotunstuffingstream_.dotunstuffingstream.md#_streamsearch)
* [destroyed](_dotunstuffingstream_.dotunstuffingstream.md#destroyed)
* [readable](_dotunstuffingstream_.dotunstuffingstream.md#readable)
* [readableHighWaterMark](_dotunstuffingstream_.dotunstuffingstream.md#readablehighwatermark)
* [readableLength](_dotunstuffingstream_.dotunstuffingstream.md#readablelength)
* [readableObjectMode](_dotunstuffingstream_.dotunstuffingstream.md#readableobjectmode)
* [writable](_dotunstuffingstream_.dotunstuffingstream.md#writable)
* [writableEnded](_dotunstuffingstream_.dotunstuffingstream.md#writableended)
* [writableFinished](_dotunstuffingstream_.dotunstuffingstream.md#writablefinished)
* [writableHighWaterMark](_dotunstuffingstream_.dotunstuffingstream.md#writablehighwatermark)
* [writableLength](_dotunstuffingstream_.dotunstuffingstream.md#writablelength)
* [writableObjectMode](_dotunstuffingstream_.dotunstuffingstream.md#writableobjectmode)
* [defaultMaxListeners](_dotunstuffingstream_.dotunstuffingstream.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_dotunstuffingstream_.dotunstuffingstream.md#[symbol.asynciterator])
* [_destroy](_dotunstuffingstream_.dotunstuffingstream.md#_destroy)
* [_final](_dotunstuffingstream_.dotunstuffingstream.md#_final)
* [_flush](_dotunstuffingstream_.dotunstuffingstream.md#_flush)
* [_read](_dotunstuffingstream_.dotunstuffingstream.md#_read)
* [_write](_dotunstuffingstream_.dotunstuffingstream.md#_write)
* [_writev](_dotunstuffingstream_.dotunstuffingstream.md#optional-_writev)
* [addListener](_dotunstuffingstream_.dotunstuffingstream.md#addlistener)
* [cork](_dotunstuffingstream_.dotunstuffingstream.md#cork)
* [destroy](_dotunstuffingstream_.dotunstuffingstream.md#destroy)
* [emit](_dotunstuffingstream_.dotunstuffingstream.md#emit)
* [end](_dotunstuffingstream_.dotunstuffingstream.md#end)
* [eventNames](_dotunstuffingstream_.dotunstuffingstream.md#eventnames)
* [getMaxListeners](_dotunstuffingstream_.dotunstuffingstream.md#getmaxlisteners)
* [isPaused](_dotunstuffingstream_.dotunstuffingstream.md#ispaused)
* [listenerCount](_dotunstuffingstream_.dotunstuffingstream.md#listenercount)
* [listeners](_dotunstuffingstream_.dotunstuffingstream.md#listeners)
* [off](_dotunstuffingstream_.dotunstuffingstream.md#off)
* [on](_dotunstuffingstream_.dotunstuffingstream.md#on)
* [once](_dotunstuffingstream_.dotunstuffingstream.md#once)
* [pause](_dotunstuffingstream_.dotunstuffingstream.md#pause)
* [pipe](_dotunstuffingstream_.dotunstuffingstream.md#pipe)
* [prependListener](_dotunstuffingstream_.dotunstuffingstream.md#prependlistener)
* [prependOnceListener](_dotunstuffingstream_.dotunstuffingstream.md#prependoncelistener)
* [push](_dotunstuffingstream_.dotunstuffingstream.md#push)
* [rawListeners](_dotunstuffingstream_.dotunstuffingstream.md#rawlisteners)
* [read](_dotunstuffingstream_.dotunstuffingstream.md#read)
* [removeAllListeners](_dotunstuffingstream_.dotunstuffingstream.md#removealllisteners)
* [removeListener](_dotunstuffingstream_.dotunstuffingstream.md#removelistener)
* [resume](_dotunstuffingstream_.dotunstuffingstream.md#resume)
* [setDefaultEncoding](_dotunstuffingstream_.dotunstuffingstream.md#setdefaultencoding)
* [setEncoding](_dotunstuffingstream_.dotunstuffingstream.md#setencoding)
* [setMaxListeners](_dotunstuffingstream_.dotunstuffingstream.md#setmaxlisteners)
* [uncork](_dotunstuffingstream_.dotunstuffingstream.md#uncork)
* [unpipe](_dotunstuffingstream_.dotunstuffingstream.md#unpipe)
* [unshift](_dotunstuffingstream_.dotunstuffingstream.md#unshift)
* [wrap](_dotunstuffingstream_.dotunstuffingstream.md#wrap)
* [write](_dotunstuffingstream_.dotunstuffingstream.md#write)
* [from](_dotunstuffingstream_.dotunstuffingstream.md#static-from)
* [listenerCount](_dotunstuffingstream_.dotunstuffingstream.md#static-listenercount)

## Constructors

###  constructor

\+ **new DotUnstuffingStream**(): *[DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md)*

*Overrides void*

*Defined in [src/DotUnstuffingStream.ts:10](https://github.com/DasKraken/nntp-fast/blob/fe1dce3/src/DotUnstuffingStream.ts#L10)*

**Returns:** *[DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md)*

## Properties

###  _streamsearch

• **_streamsearch**: *StreamSearch*

*Defined in [src/DotUnstuffingStream.ts:10](https://github.com/DasKraken/nntp-fast/blob/fe1dce3/src/DotUnstuffingStream.ts#L10)*

___

###  destroyed

• **destroyed**: *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[destroyed](_dotunstuffingstream_.dotunstuffingstream.md#destroyed)*

Defined in node_modules/@types/node/stream.d.ts:30

___

###  readable

• **readable**: *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[readable](_dotunstuffingstream_.dotunstuffingstream.md#readable)*

Defined in node_modules/@types/node/stream.d.ts:26

___

###  readableHighWaterMark

• **readableHighWaterMark**: *number*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[readableHighWaterMark](_dotunstuffingstream_.dotunstuffingstream.md#readablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:27

___

###  readableLength

• **readableLength**: *number*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[readableLength](_dotunstuffingstream_.dotunstuffingstream.md#readablelength)*

Defined in node_modules/@types/node/stream.d.ts:28

___

###  readableObjectMode

• **readableObjectMode**: *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[readableObjectMode](_dotunstuffingstream_.dotunstuffingstream.md#readableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:29

___

###  writable

• **writable**: *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[writable](_dotunstuffingstream_.dotunstuffingstream.md#writable)*

Defined in node_modules/@types/node/stream.d.ts:224

___

###  writableEnded

• **writableEnded**: *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[writableEnded](_dotunstuffingstream_.dotunstuffingstream.md#writableended)*

Defined in node_modules/@types/node/stream.d.ts:225

___

###  writableFinished

• **writableFinished**: *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[writableFinished](_dotunstuffingstream_.dotunstuffingstream.md#writablefinished)*

Defined in node_modules/@types/node/stream.d.ts:226

___

###  writableHighWaterMark

• **writableHighWaterMark**: *number*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[writableHighWaterMark](_dotunstuffingstream_.dotunstuffingstream.md#writablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:227

___

###  writableLength

• **writableLength**: *number*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[writableLength](_dotunstuffingstream_.dotunstuffingstream.md#writablelength)*

Defined in node_modules/@types/node/stream.d.ts:228

___

###  writableObjectMode

• **writableObjectMode**: *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[writableObjectMode](_dotunstuffingstream_.dotunstuffingstream.md#writableobjectmode)*

Defined in node_modules/@types/node/stream.d.ts:229

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[defaultMaxListeners](_dotunstuffingstream_.dotunstuffingstream.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *AsyncIterableIterator‹any›*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[[Symbol.asyncIterator]](_dotunstuffingstream_.dotunstuffingstream.md#[symbol.asynciterator])*

Defined in node_modules/@types/node/stream.d.ts:103

**Returns:** *AsyncIterableIterator‹any›*

___

###  _destroy

▸ **_destroy**(`error`: Error | null, `callback`: function): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[_destroy](_dotunstuffingstream_.dotunstuffingstream.md#_destroy)*

*Overrides void*

Defined in node_modules/@types/node/stream.d.ts:233

**Parameters:**

▪ **error**: *Error | null*

▪ **callback**: *function*

▸ (`error`: Error | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error &#124; null |

**Returns:** *void*

___

###  _final

▸ **_final**(`callback`: function): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[_final](_dotunstuffingstream_.dotunstuffingstream.md#_final)*

Defined in node_modules/@types/node/stream.d.ts:234

**Parameters:**

▪ **callback**: *function*

▸ (`error?`: Error | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Error &#124; null |

**Returns:** *void*

___

###  _flush

▸ **_flush**(`callback`: TransformCallback): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[_flush](_dotunstuffingstream_.dotunstuffingstream.md#_flush)*

Defined in node_modules/@types/node/stream.d.ts:260

**Parameters:**

Name | Type |
------ | ------ |
`callback` | TransformCallback |

**Returns:** *void*

___

###  _read

▸ **_read**(`size`: number): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[_read](_dotunstuffingstream_.dotunstuffingstream.md#_read)*

Defined in node_modules/@types/node/stream.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

###  _write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: function): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[_write](_dotunstuffingstream_.dotunstuffingstream.md#_write)*

Defined in node_modules/@types/node/stream.d.ts:231

**Parameters:**

▪ **chunk**: *any*

▪ **encoding**: *string*

▪ **callback**: *function*

▸ (`error?`: Error | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Error &#124; null |

**Returns:** *void*

___

### `Optional` _writev

▸ **_writev**(`chunks`: Array‹object›, `callback`: function): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[_writev](_dotunstuffingstream_.dotunstuffingstream.md#optional-_writev)*

Defined in node_modules/@types/node/stream.d.ts:232

**Parameters:**

▪ **chunks**: *Array‹object›*

▪ **callback**: *function*

▸ (`error?`: Error | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Error &#124; null |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[addListener](_dotunstuffingstream_.dotunstuffingstream.md#addlistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[addListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:54

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. readable
5. error

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[addListener](_dotunstuffingstream_.dotunstuffingstream.md#addlistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[addListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:55

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **addListener**(`event`: "end", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[addListener](_dotunstuffingstream_.dotunstuffingstream.md#addlistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[addListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:56

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[addListener](_dotunstuffingstream_.dotunstuffingstream.md#addlistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[addListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:57

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[addListener](_dotunstuffingstream_.dotunstuffingstream.md#addlistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[addListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:58

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[addListener](_dotunstuffingstream_.dotunstuffingstream.md#addlistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[addListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:59

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  cork

▸ **cork**(): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[cork](_dotunstuffingstream_.dotunstuffingstream.md#cork)*

Defined in node_modules/@types/node/stream.d.ts:241

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: Error): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[destroy](_dotunstuffingstream_.dotunstuffingstream.md#destroy)*

Defined in node_modules/@types/node/stream.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Error |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[emit](_dotunstuffingstream_.dotunstuffingstream.md#emit)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[emit](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `chunk`: any): *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[emit](_dotunstuffingstream_.dotunstuffingstream.md#emit)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[emit](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:62

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`chunk` | any |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[emit](_dotunstuffingstream_.dotunstuffingstream.md#emit)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[emit](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "readable"): *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[emit](_dotunstuffingstream_.dotunstuffingstream.md#emit)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[emit](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`event` | "readable" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: Error): *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[emit](_dotunstuffingstream_.dotunstuffingstream.md#emit)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[emit](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | Error |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[emit](_dotunstuffingstream_.dotunstuffingstream.md#emit)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[emit](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: undefined | function): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[end](_dotunstuffingstream_.dotunstuffingstream.md#end)*

Defined in node_modules/@types/node/stream.d.ts:238

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: undefined | function): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[end](_dotunstuffingstream_.dotunstuffingstream.md#end)*

Defined in node_modules/@types/node/stream.d.ts:239

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding?`: undefined | string, `cb?`: undefined | function): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[end](_dotunstuffingstream_.dotunstuffingstream.md#end)*

Defined in node_modules/@types/node/stream.d.ts:240

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[eventNames](_dotunstuffingstream_.dotunstuffingstream.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[getMaxListeners](_dotunstuffingstream_.dotunstuffingstream.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[isPaused](_dotunstuffingstream_.dotunstuffingstream.md#ispaused)*

Defined in node_modules/@types/node/stream.d.ts:37

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[listenerCount](_dotunstuffingstream_.dotunstuffingstream.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[listeners](_dotunstuffingstream_.dotunstuffingstream.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[off](_dotunstuffingstream_.dotunstuffingstream.md#off)*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[on](_dotunstuffingstream_.dotunstuffingstream.md#on)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[on](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#on)*

Defined in node_modules/@types/node/stream.d.ts:68

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[on](_dotunstuffingstream_.dotunstuffingstream.md#on)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[on](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#on)*

Defined in node_modules/@types/node/stream.d.ts:69

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **on**(`event`: "end", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[on](_dotunstuffingstream_.dotunstuffingstream.md#on)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[on](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#on)*

Defined in node_modules/@types/node/stream.d.ts:70

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "readable", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[on](_dotunstuffingstream_.dotunstuffingstream.md#on)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[on](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#on)*

Defined in node_modules/@types/node/stream.d.ts:71

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[on](_dotunstuffingstream_.dotunstuffingstream.md#on)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[on](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#on)*

Defined in node_modules/@types/node/stream.d.ts:72

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[on](_dotunstuffingstream_.dotunstuffingstream.md#on)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[on](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#on)*

Defined in node_modules/@types/node/stream.d.ts:73

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[once](_dotunstuffingstream_.dotunstuffingstream.md#once)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[once](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#once)*

Defined in node_modules/@types/node/stream.d.ts:75

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[once](_dotunstuffingstream_.dotunstuffingstream.md#once)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[once](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#once)*

Defined in node_modules/@types/node/stream.d.ts:76

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **once**(`event`: "end", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[once](_dotunstuffingstream_.dotunstuffingstream.md#once)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[once](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#once)*

Defined in node_modules/@types/node/stream.d.ts:77

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "readable", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[once](_dotunstuffingstream_.dotunstuffingstream.md#once)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[once](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#once)*

Defined in node_modules/@types/node/stream.d.ts:78

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[once](_dotunstuffingstream_.dotunstuffingstream.md#once)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[once](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#once)*

Defined in node_modules/@types/node/stream.d.ts:79

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[once](_dotunstuffingstream_.dotunstuffingstream.md#once)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[once](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#once)*

Defined in node_modules/@types/node/stream.d.ts:80

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  pause

▸ **pause**(): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[pause](_dotunstuffingstream_.dotunstuffingstream.md#pause)*

Defined in node_modules/@types/node/stream.d.ts:35

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[pipe](_dotunstuffingstream_.dotunstuffingstream.md#pipe)*

Defined in node_modules/@types/node/stream.d.ts:5

**Type parameters:**

▪ **T**: *WritableStream*

**Parameters:**

Name | Type |
------ | ------ |
`destination` | T |
`options?` | undefined &#124; object |

**Returns:** *T*

___

###  prependListener

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[prependListener](_dotunstuffingstream_.dotunstuffingstream.md#prependlistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:82

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "data", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[prependListener](_dotunstuffingstream_.dotunstuffingstream.md#prependlistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:83

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **prependListener**(`event`: "end", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[prependListener](_dotunstuffingstream_.dotunstuffingstream.md#prependlistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:84

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[prependListener](_dotunstuffingstream_.dotunstuffingstream.md#prependlistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:85

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[prependListener](_dotunstuffingstream_.dotunstuffingstream.md#prependlistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:86

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[prependListener](_dotunstuffingstream_.dotunstuffingstream.md#prependlistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:87

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[prependOnceListener](_dotunstuffingstream_.dotunstuffingstream.md#prependoncelistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependOnceListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:89

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "data", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[prependOnceListener](_dotunstuffingstream_.dotunstuffingstream.md#prependoncelistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependOnceListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:90

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "end", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[prependOnceListener](_dotunstuffingstream_.dotunstuffingstream.md#prependoncelistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependOnceListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:91

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[prependOnceListener](_dotunstuffingstream_.dotunstuffingstream.md#prependoncelistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependOnceListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:92

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[prependOnceListener](_dotunstuffingstream_.dotunstuffingstream.md#prependoncelistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependOnceListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:93

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[prependOnceListener](_dotunstuffingstream_.dotunstuffingstream.md#prependoncelistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependOnceListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:94

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  push

▸ **push**(`chunk`: any, `encoding?`: undefined | string): *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[push](_dotunstuffingstream_.dotunstuffingstream.md#push)*

Defined in node_modules/@types/node/stream.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |

**Returns:** *boolean*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[rawListeners](_dotunstuffingstream_.dotunstuffingstream.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  read

▸ **read**(`size?`: undefined | number): *any*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[read](_dotunstuffingstream_.dotunstuffingstream.md#read)*

Defined in node_modules/@types/node/stream.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *any*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[removeAllListeners](_dotunstuffingstream_.dotunstuffingstream.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[removeListener](_dotunstuffingstream_.dotunstuffingstream.md#removelistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[removeListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:96

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "data", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[removeListener](_dotunstuffingstream_.dotunstuffingstream.md#removelistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[removeListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:97

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **removeListener**(`event`: "end", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[removeListener](_dotunstuffingstream_.dotunstuffingstream.md#removelistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[removeListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:98

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[removeListener](_dotunstuffingstream_.dotunstuffingstream.md#removelistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[removeListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:99

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[removeListener](_dotunstuffingstream_.dotunstuffingstream.md#removelistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[removeListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:100

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *this*

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[removeListener](_dotunstuffingstream_.dotunstuffingstream.md#removelistener)*

*Overrides [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[removeListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:101

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  resume

▸ **resume**(): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[resume](_dotunstuffingstream_.dotunstuffingstream.md#resume)*

Defined in node_modules/@types/node/stream.d.ts:36

**Returns:** *this*

___

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[setDefaultEncoding](_dotunstuffingstream_.dotunstuffingstream.md#setdefaultencoding)*

Defined in node_modules/@types/node/stream.d.ts:237

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[setEncoding](_dotunstuffingstream_.dotunstuffingstream.md#setencoding)*

Defined in node_modules/@types/node/stream.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[setMaxListeners](_dotunstuffingstream_.dotunstuffingstream.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  uncork

▸ **uncork**(): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[uncork](_dotunstuffingstream_.dotunstuffingstream.md#uncork)*

Defined in node_modules/@types/node/stream.d.ts:242

**Returns:** *void*

___

###  unpipe

▸ **unpipe**(`destination?`: NodeJS.WritableStream): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[unpipe](_dotunstuffingstream_.dotunstuffingstream.md#unpipe)*

Defined in node_modules/@types/node/stream.d.ts:38

**Parameters:**

Name | Type |
------ | ------ |
`destination?` | NodeJS.WritableStream |

**Returns:** *this*

___

###  unshift

▸ **unshift**(`chunk`: any, `encoding?`: BufferEncoding): *void*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[unshift](_dotunstuffingstream_.dotunstuffingstream.md#unshift)*

Defined in node_modules/@types/node/stream.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | BufferEncoding |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: ReadableStream): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[wrap](_dotunstuffingstream_.dotunstuffingstream.md#wrap)*

Defined in node_modules/@types/node/stream.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** *this*

___

###  write

▸ **write**(`chunk`: any, `encoding?`: undefined | string, `cb?`: undefined | function): *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[write](_dotunstuffingstream_.dotunstuffingstream.md#write)*

Defined in node_modules/@types/node/stream.d.ts:235

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `cb?`: undefined | function): *boolean*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[write](_dotunstuffingstream_.dotunstuffingstream.md#write)*

Defined in node_modules/@types/node/stream.d.ts:236

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

___

### `Static` from

▸ **from**(`iterable`: Iterable‹any› | AsyncIterable‹any›, `options?`: ReadableOptions): *Readable*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[from](_dotunstuffingstream_.dotunstuffingstream.md#static-from)*

Defined in node_modules/@types/node/stream.d.ts:24

A utility method for creating Readable Streams out of iterators.

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹any› &#124; AsyncIterable‹any› |
`options?` | ReadableOptions |

**Returns:** *Readable*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[listenerCount](_dotunstuffingstream_.dotunstuffingstream.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
