[nntp-fast](../README.md) › [Globals](../globals.md) › ["DotUnstuffingStreamSearch"](../modules/_dotunstuffingstreamsearch_.md) › [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md)

# Class: DotUnstuffingStreamSearch

Searches for needle in stream while also dot-unstuffing.

## Hierarchy

* EventEmitter

  ↳ **DotUnstuffingStreamSearch**

## Index

### Constructors

* [constructor](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#constructor)

### Properties

* [_bufpos](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#_bufpos)
* [_needle](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#_needle)
* [_searchState](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#_searchstate)
* [matches](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#matches)
* [maxMatches](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#maxmatches)
* [defaultMaxListeners](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#static-defaultmaxlisteners)

### Methods

* [addListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#addlistener)
* [emit](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#emit)
* [eventNames](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#eventnames)
* [getMaxListeners](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#getmaxlisteners)
* [listenerCount](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#listenercount)
* [listeners](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#listeners)
* [off](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#off)
* [on](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#on)
* [once](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#once)
* [prependListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependlistener)
* [prependOnceListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependoncelistener)
* [push](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#push)
* [rawListeners](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#rawlisteners)
* [removeAllListeners](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#removealllisteners)
* [removeListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#removelistener)
* [reset](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#reset)
* [setMaxListeners](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#setmaxlisteners)
* [listenerCount](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#static-listenercount)

## Constructors

###  constructor

\+ **new DotUnstuffingStreamSearch**(`needle`: Buffer): *[DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md)*

*Defined in [src/DotUnstuffingStreamSearch.ts:27](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/DotUnstuffingStreamSearch.ts#L27)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`needle` | Buffer | Must me `Buffer.from("\r\n.\r\n")`  |

**Returns:** *[DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md)*

## Properties

###  _bufpos

• **_bufpos**: *number*

*Defined in [src/DotUnstuffingStreamSearch.ts:23](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/DotUnstuffingStreamSearch.ts#L23)*

___

###  _needle

• **_needle**: *Delimiter*

*Defined in [src/DotUnstuffingStreamSearch.ts:24](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/DotUnstuffingStreamSearch.ts#L24)*

___

###  _searchState

• **_searchState**: *DelimiterSearchState*

*Defined in [src/DotUnstuffingStreamSearch.ts:25](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/DotUnstuffingStreamSearch.ts#L25)*

___

###  matches

• **matches**: *number*

*Defined in [src/DotUnstuffingStreamSearch.ts:26](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/DotUnstuffingStreamSearch.ts#L26)*

___

###  maxMatches

• **maxMatches**: *number*

*Defined in [src/DotUnstuffingStreamSearch.ts:27](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/DotUnstuffingStreamSearch.ts#L27)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[defaultMaxListeners](_dotunstuffingstream_.dotunstuffingstream.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[addListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:20

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

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[emit](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[eventNames](_dotunstuffingstream_.dotunstuffingstream.md#eventnames)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[getMaxListeners](_dotunstuffingstream_.dotunstuffingstream.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[listenerCount](_dotunstuffingstream_.dotunstuffingstream.md#static-listenercount)*

*Overrides void*

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

*Overrides void*

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

*Overrides void*

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

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[on](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#on)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:21

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

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[once](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#once)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:22

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

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:23

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

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[prependOnceListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:24

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

▸ **push**(`chunk`: Buffer, `pos?`: undefined | number): *number*

*Defined in [src/DotUnstuffingStreamSearch.ts:60](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/DotUnstuffingStreamSearch.ts#L60)*

Processes `chunk`.

**`fires`** info

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chunk` | Buffer | - |
`pos?` | undefined &#124; number |   |

**Returns:** *number*

The last processed index in chunk + 1.

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[rawListeners](_dotunstuffingstream_.dotunstuffingstream.md#rawlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[removeAllListeners](_dotunstuffingstream_.dotunstuffingstream.md#removealllisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DotUnstuffingStreamSearch](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md).[removeListener](_dotunstuffingstreamsearch_.dotunstuffingstreamsearch.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:25

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

###  reset

▸ **reset**(): *void*

*Defined in [src/DotUnstuffingStreamSearch.ts:46](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/DotUnstuffingStreamSearch.ts#L46)*

Resets internal state

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [DotUnstuffingStream](_dotunstuffingstream_.dotunstuffingstream.md).[setMaxListeners](_dotunstuffingstream_.dotunstuffingstream.md#setmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

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
