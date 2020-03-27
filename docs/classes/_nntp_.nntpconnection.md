[nntp-fast](../README.md) › [Globals](../globals.md) › ["nntp"](../modules/_nntp_.md) › [NntpConnection](_nntp_.nntpconnection.md)

# Class: NntpConnection

## Hierarchy

* EventEmitter

  ↳ **NntpConnection**

## Index

### Constructors

* [constructor](_nntp_.nntpconnection.md#constructor)

### Properties

* [defaultMaxListeners](_nntp_.nntpconnection.md#static-defaultmaxlisteners)

### Methods

* [addListener](_nntp_.nntpconnection.md#addlistener)
* [article](_nntp_.nntpconnection.md#article)
* [body](_nntp_.nntpconnection.md#body)
* [bodyStream](_nntp_.nntpconnection.md#bodystream)
* [capabilities](_nntp_.nntpconnection.md#capabilities)
* [connect](_nntp_.nntpconnection.md#connect)
* [date](_nntp_.nntpconnection.md#date)
* [emit](_nntp_.nntpconnection.md#emit)
* [eventNames](_nntp_.nntpconnection.md#eventnames)
* [getMaxListeners](_nntp_.nntpconnection.md#getmaxlisteners)
* [group](_nntp_.nntpconnection.md#group)
* [head](_nntp_.nntpconnection.md#head)
* [help](_nntp_.nntpconnection.md#help)
* [last](_nntp_.nntpconnection.md#last)
* [listenerCount](_nntp_.nntpconnection.md#listenercount)
* [listeners](_nntp_.nntpconnection.md#listeners)
* [listgroup](_nntp_.nntpconnection.md#listgroup)
* [modeReader](_nntp_.nntpconnection.md#modereader)
* [newsgroups](_nntp_.nntpconnection.md#newsgroups)
* [next](_nntp_.nntpconnection.md#next)
* [off](_nntp_.nntpconnection.md#off)
* [on](_nntp_.nntpconnection.md#on)
* [once](_nntp_.nntpconnection.md#once)
* [prependListener](_nntp_.nntpconnection.md#prependlistener)
* [prependOnceListener](_nntp_.nntpconnection.md#prependoncelistener)
* [quit](_nntp_.nntpconnection.md#quit)
* [rawListeners](_nntp_.nntpconnection.md#rawlisteners)
* [removeAllListeners](_nntp_.nntpconnection.md#removealllisteners)
* [removeListener](_nntp_.nntpconnection.md#removelistener)
* [runCommand](_nntp_.nntpconnection.md#runcommand)
* [runCommandStream](_nntp_.nntpconnection.md#runcommandstream)
* [setMaxListeners](_nntp_.nntpconnection.md#setmaxlisteners)
* [stat](_nntp_.nntpconnection.md#stat)
* [listenerCount](_nntp_.nntpconnection.md#static-listenercount)

## Constructors

###  constructor

\+ **new NntpConnection**(`options?`: undefined | object): *[NntpConnection](_nntp_.nntpconnection.md)*

*Defined in [src/nntp.ts:57](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L57)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | undefined &#124; object | options  |

**Returns:** *[NntpConnection](_nntp_.nntpconnection.md)*

## Properties

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

###  article

▸ **article**(`messageid?`: string | number): *Promise‹object›*

*Defined in [src/nntp.ts:435](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L435)*

The ARTICLE command selects an article according to the arguments and
presents the entire article (that is, the headers, and the body) to
the client.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messageid?` | string &#124; number |   |

**Returns:** *Promise‹object›*

___

###  body

▸ **body**(`messageid?`: string | number): *Promise‹object›*

*Defined in [src/nntp.ts:479](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L479)*

The BODY command selects an article according to the arguments and
presents the body to the client.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messageid?` | string &#124; number |   |

**Returns:** *Promise‹object›*

___

###  bodyStream

▸ **bodyStream**(`messageid?`: string | number): *object*

*Defined in [src/nntp.ts:498](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L498)*

The BODY command selects an article according to the arguments and
presents the body to the client. Body is given as stream.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messageid?` | string &#124; number |   |

**Returns:** *object*

* **response**: *Promise‹BasicResponse›*

* **stream**: *Readable*

___

###  capabilities

▸ **capabilities**(`keyword?`: undefined | string): *Promise‹object›*

*Defined in [src/nntp.ts:301](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L301)*

The CAPABILITIES command allows a client to determine the
capabilities of the server at any given time.

See [RFC 3977 Section 3.3](https://tools.ietf.org/html/rfc3977#section-3.3)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keyword?` | undefined &#124; string |   |

**Returns:** *Promise‹object›*

___

###  connect

▸ **connect**(`host`: string, `port`: number): *Promise‹BasicResponse›*

*Defined in [src/nntp.ts:84](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L84)*

Connect to nntp server

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`host` | string | - |
`port` | number |   |

**Returns:** *Promise‹BasicResponse›*

___

###  date

▸ **date**(): *Promise‹object›*

*Defined in [src/nntp.ts:541](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L541)*

This command exists to help clients find out the current Coordinated
Universal Time from the server's perspective.

**Returns:** *Promise‹object›*

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

###  group

▸ **group**(`group`: string): *Promise‹object›*

*Defined in [src/nntp.ts:340](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L340)*

The GROUP command selects a newsgroup as the currently selected
newsgroup and returns summary information about it.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group` | string |   |

**Returns:** *Promise‹object›*

___

###  head

▸ **head**(`messageid?`: string | number): *Promise‹object›*

*Defined in [src/nntp.ts:458](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L458)*

The HEAD command selects an article according to the arguments and
presents the headers to the client.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messageid?` | string &#124; number |   |

**Returns:** *Promise‹object›*

___

###  help

▸ **help**(): *Promise‹BasicResponse›*

*Defined in [src/nntp.ts:559](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L559)*

This command provides a short summary of the commands that are
understood by this implementation of the server.

**Returns:** *Promise‹BasicResponse›*

___

###  last

▸ **last**(): *Promise‹StatResponse›*

*Defined in [src/nntp.ts:389](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L389)*

The current article number will be set to the previous article in
that newsgroup

**Returns:** *Promise‹StatResponse›*

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

###  listgroup

▸ **listgroup**(`group?`: undefined | string, `range?`: undefined | string): *Promise‹object›*

*Defined in [src/nntp.ts:369](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L369)*

The LISTGROUP command selects a newsgroup in the same manner as the
GROUP command but also provides a list of article
numbers in the newsgroup.  If no group is specified, the currently
selected newsgroup is used.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group?` | undefined &#124; string | - |
`range?` | undefined &#124; string |   |

**Returns:** *Promise‹object›*

___

###  modeReader

▸ **modeReader**(): *Promise‹BasicResponse›*

*Defined in [src/nntp.ts:314](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L314)*

The MODE READER command instructs a mode-switching server to switch
modes, as described in [RFC 3977 Section 3.4.2](https://tools.ietf.org/html/rfc3977#section-3.4.2).

**Returns:** *Promise‹BasicResponse›*

___

###  newsgroups

▸ **newsgroups**(`date`: Date): *Promise‹DataResponse›*

*Defined in [src/nntp.ts:574](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L574)*

This command returns a list of newsgroups created on the server since
the specified date and time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date |   |

**Returns:** *Promise‹DataResponse›*

▸ **newsgroups**(`date`: string, `time`: string, `gmt?`: undefined | false | true): *Promise‹DataResponse›*

*Defined in [src/nntp.ts:575](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L575)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | string |
`time` | string |
`gmt?` | undefined &#124; false &#124; true |

**Returns:** *Promise‹DataResponse›*

___

###  next

▸ **next**(): *Promise‹StatResponse›*

*Defined in [src/nntp.ts:411](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L411)*

The current article number will be set to the next article in
that newsgroup

**Returns:** *Promise‹StatResponse›*

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

###  quit

▸ **quit**(): *Promise‹BasicResponse›*

*Defined in [src/nntp.ts:326](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L326)*

The client uses the QUIT command to terminate the session.

**Returns:** *Promise‹BasicResponse›*

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

###  runCommand

▸ **runCommand**(`command`: string, `decideMldb?`: undefined | function): *Promise‹DataResponse›*

*Defined in [src/nntp.ts:258](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L258)*

Sends command to server.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | string | command to execute |
`decideMldb?` | undefined &#124; function | optional function that decides from response code whether a multi line data block is to be expected  |

**Returns:** *Promise‹DataResponse›*

___

###  runCommandStream

▸ **runCommandStream**(`command`: string, `decideMldb?`: undefined | function): *object*

*Defined in [src/nntp.ts:277](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L277)*

Sends command to server. Creates a stream for the multi line data block.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | string | command to execute |
`decideMldb?` | undefined &#124; function | optional function that decides from response code whether a multi line data block is to be expected  |

**Returns:** *object*

* **response**: *Promise‹BasicResponse›*

* **stream**: *Readable*

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

###  stat

▸ **stat**(`messageid?`: string | number): *Promise‹StatResponse›*

*Defined in [src/nntp.ts:511](https://github.com/DasKraken/nntp-fast/blob/31910d4/src/nntp.ts#L511)*

The STAT command selects an article according to the arguments.
This command allows the client to determine whether an article exists
and what its message-id is, without having to process an arbitrary
amount of text.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messageid?` | string &#124; number |   |

**Returns:** *Promise‹StatResponse›*

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
