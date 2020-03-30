[nntp-fast](../README.md) › [Globals](../globals.md) › ["nntp"](../modules/_nntp_.md) › [NntpConnection](_nntp_.nntpconnection.md)

# Class: NntpConnection

## Hierarchy

* EventEmitter

  ↳ **NntpConnection**

## Index

### Constructors

* [constructor](_nntp_.nntpconnection.md#constructor)

### Events

* [end](_nntp_.nntpconnection.md#end)
* [error](_nntp_.nntpconnection.md#error)
* [timeout](_nntp_.nntpconnection.md#timeout)

### Methods

* [article](_nntp_.nntpconnection.md#article)
* [body](_nntp_.nntpconnection.md#body)
* [bodyStream](_nntp_.nntpconnection.md#bodystream)
* [capabilities](_nntp_.nntpconnection.md#capabilities)
* [connect](_nntp_.nntpconnection.md#connect)
* [date](_nntp_.nntpconnection.md#date)
* [group](_nntp_.nntpconnection.md#group)
* [head](_nntp_.nntpconnection.md#head)
* [help](_nntp_.nntpconnection.md#help)
* [last](_nntp_.nntpconnection.md#last)
* [listgroup](_nntp_.nntpconnection.md#listgroup)
* [modeReader](_nntp_.nntpconnection.md#modereader)
* [newsgroups](_nntp_.nntpconnection.md#newsgroups)
* [next](_nntp_.nntpconnection.md#next)
* [quit](_nntp_.nntpconnection.md#quit)
* [runCommand](_nntp_.nntpconnection.md#runcommand)
* [runCommandStream](_nntp_.nntpconnection.md#runcommandstream)
* [stat](_nntp_.nntpconnection.md#stat)

## Constructors

###  constructor

\+ **new NntpConnection**(`options?`: [NntpConnectionConstructorOptions](../interfaces/_nntp_.nntpconnectionconstructoroptions.md)): *[NntpConnection](_nntp_.nntpconnection.md)*

*Defined in [src/nntp.ts:99](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [NntpConnectionConstructorOptions](../interfaces/_nntp_.nntpconnectionconstructoroptions.md) |

**Returns:** *[NntpConnection](_nntp_.nntpconnection.md)*

## Events

###  end

• **end**(): *void*

*Defined in [src/nntp.ts:61](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L61)*

Emitted when socket is closed.

**`asmemberof`** NntpConnection

**Returns:** *void*

___

###  error

• **error**(`error`: Error): *void*

*Defined in [src/nntp.ts:68](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L68)*

Emitted when an socket or protocoll error occurs.

**`asmemberof`** NntpConnection

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *void*

___

###  timeout

• **timeout**(): *void*

*Defined in [src/nntp.ts:75](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L75)*

Emitted when socket timeouts.

**`asmemberof`** NntpConnection

**Returns:** *void*

## Methods

###  article

▸ **article**(`messageid?`: string | number): *Promise‹object›*

*Defined in [src/nntp.ts:512](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L512)*

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

*Defined in [src/nntp.ts:556](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L556)*

The BODY command selects an article according to the arguments and
presents the body to the client.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messageid?` | string &#124; number |   |

**Returns:** *Promise‹object›*

___

###  bodyStream

▸ **bodyStream**(`messageid?`: string | number): *[SteamResponse](../interfaces/_nntp_.steamresponse.md)*

*Defined in [src/nntp.ts:575](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L575)*

The BODY command selects an article according to the arguments and
presents the body to the client. Body is given as stream.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messageid?` | string &#124; number |   |

**Returns:** *[SteamResponse](../interfaces/_nntp_.steamresponse.md)*

___

###  capabilities

▸ **capabilities**(`keyword?`: undefined | string): *Promise‹[DataResponse](../interfaces/_nntp_.dataresponse.md)›*

*Defined in [src/nntp.ts:378](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L378)*

The CAPABILITIES command allows a client to determine the
capabilities of the server at any given time.

See [RFC 3977 Section 3.3](https://tools.ietf.org/html/rfc3977#section-3.3)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keyword?` | undefined &#124; string |   |

**Returns:** *Promise‹[DataResponse](../interfaces/_nntp_.dataresponse.md)›*

___

###  connect

▸ **connect**(`options`: ConnectionOptions | net.NetConnectOpts, `secure?`: undefined | false | true): *Promise‹[BasicResponse](../interfaces/_nntp_.basicresponse.md)›*

*Defined in [src/nntp.ts:129](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L129)*

Connect to nntp server

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | ConnectionOptions &#124; net.NetConnectOpts | See [TCP options](https://nodejs.org/api/net.html#net_socket_connect_options_connectlistener) or [TLS options](https://nodejs.org/api/tls.html#tls_tls_connect_options_callback). |
`secure?` | undefined &#124; false &#124; true | Whether to use a secure connection  |

**Returns:** *Promise‹[BasicResponse](../interfaces/_nntp_.basicresponse.md)›*

▸ **connect**(`host`: string, `port`: number, `secure?`: undefined | false | true): *Promise‹[BasicResponse](../interfaces/_nntp_.basicresponse.md)›*

*Defined in [src/nntp.ts:137](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L137)*

Connect to nntp server

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`host` | string | - |
`port` | number | - |
`secure?` | undefined &#124; false &#124; true | Wheter to use a secure connection  |

**Returns:** *Promise‹[BasicResponse](../interfaces/_nntp_.basicresponse.md)›*

___

###  date

▸ **date**(): *Promise‹object›*

*Defined in [src/nntp.ts:618](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L618)*

This command exists to help clients find out the current Coordinated
Universal Time from the server's perspective.

**Returns:** *Promise‹object›*

___

###  group

▸ **group**(`group`: string): *Promise‹object›*

*Defined in [src/nntp.ts:417](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L417)*

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

*Defined in [src/nntp.ts:535](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L535)*

The HEAD command selects an article according to the arguments and
presents the headers to the client.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messageid?` | string &#124; number |   |

**Returns:** *Promise‹object›*

___

###  help

▸ **help**(): *Promise‹[BasicResponse](../interfaces/_nntp_.basicresponse.md)›*

*Defined in [src/nntp.ts:636](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L636)*

This command provides a short summary of the commands that are
understood by this implementation of the server.

**Returns:** *Promise‹[BasicResponse](../interfaces/_nntp_.basicresponse.md)›*

___

###  last

▸ **last**(): *Promise‹[StatResponse](../interfaces/_nntp_.statresponse.md)›*

*Defined in [src/nntp.ts:466](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L466)*

The current article number will be set to the previous article in
that newsgroup

**Returns:** *Promise‹[StatResponse](../interfaces/_nntp_.statresponse.md)›*

___

###  listgroup

▸ **listgroup**(`group?`: undefined | string, `range?`: undefined | string): *Promise‹object›*

*Defined in [src/nntp.ts:446](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L446)*

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

▸ **modeReader**(): *Promise‹[BasicResponse](../interfaces/_nntp_.basicresponse.md)›*

*Defined in [src/nntp.ts:391](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L391)*

The MODE READER command instructs a mode-switching server to switch
modes, as described in [RFC 3977 Section 3.4.2](https://tools.ietf.org/html/rfc3977#section-3.4.2).

**Returns:** *Promise‹[BasicResponse](../interfaces/_nntp_.basicresponse.md)›*

___

###  newsgroups

▸ **newsgroups**(`date`: Date): *Promise‹[DataResponse](../interfaces/_nntp_.dataresponse.md)›*

*Defined in [src/nntp.ts:651](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L651)*

This command returns a list of newsgroups created on the server since
the specified date and time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date |   |

**Returns:** *Promise‹[DataResponse](../interfaces/_nntp_.dataresponse.md)›*

▸ **newsgroups**(`date`: string, `time`: string, `gmt?`: undefined | false | true): *Promise‹[DataResponse](../interfaces/_nntp_.dataresponse.md)›*

*Defined in [src/nntp.ts:652](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L652)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | string |
`time` | string |
`gmt?` | undefined &#124; false &#124; true |

**Returns:** *Promise‹[DataResponse](../interfaces/_nntp_.dataresponse.md)›*

___

###  next

▸ **next**(): *Promise‹[StatResponse](../interfaces/_nntp_.statresponse.md)›*

*Defined in [src/nntp.ts:488](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L488)*

The current article number will be set to the next article in
that newsgroup

**Returns:** *Promise‹[StatResponse](../interfaces/_nntp_.statresponse.md)›*

___

###  quit

▸ **quit**(): *Promise‹[BasicResponse](../interfaces/_nntp_.basicresponse.md)›*

*Defined in [src/nntp.ts:403](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L403)*

The client uses the QUIT command to terminate the session.

**Returns:** *Promise‹[BasicResponse](../interfaces/_nntp_.basicresponse.md)›*

___

###  runCommand

▸ **runCommand**(`command`: string, `decideMldb?`: undefined | function): *Promise‹[DataResponse](../interfaces/_nntp_.dataresponse.md)›*

*Defined in [src/nntp.ts:335](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L335)*

Sends command to server.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | string | command to execute |
`decideMldb?` | undefined &#124; function | optional function that decides from response code whether a multi line data block is to be expected  |

**Returns:** *Promise‹[DataResponse](../interfaces/_nntp_.dataresponse.md)›*

___

###  runCommandStream

▸ **runCommandStream**(`command`: string, `decideMldb?`: undefined | function): *[SteamResponse](../interfaces/_nntp_.steamresponse.md)*

*Defined in [src/nntp.ts:354](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L354)*

Sends command to server. Creates a stream for the multi line data block.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | string | command to execute |
`decideMldb?` | undefined &#124; function | optional function that decides from response code whether a multi line data block is to be expected  |

**Returns:** *[SteamResponse](../interfaces/_nntp_.steamresponse.md)*

___

###  stat

▸ **stat**(`messageid?`: string | number): *Promise‹[StatResponse](../interfaces/_nntp_.statresponse.md)›*

*Defined in [src/nntp.ts:588](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L588)*

The STAT command selects an article according to the arguments.
This command allows the client to determine whether an article exists
and what its message-id is, without having to process an arbitrary
amount of text.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`messageid?` | string &#124; number |   |

**Returns:** *Promise‹[StatResponse](../interfaces/_nntp_.statresponse.md)›*
