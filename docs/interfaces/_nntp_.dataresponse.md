[nntp-fast](../README.md) › [Globals](../globals.md) › ["nntp"](../modules/_nntp_.md) › [DataResponse](_nntp_.dataresponse.md)

# Interface: DataResponse

## Hierarchy

* [BasicResponse](_nntp_.basicresponse.md)

  ↳ **DataResponse**

## Index

### Properties

* [code](_nntp_.dataresponse.md#code)
* [data](_nntp_.dataresponse.md#optional-data)
* [message](_nntp_.dataresponse.md#message)

## Properties

###  code

• **code**: *number*

*Inherited from [BasicResponse](_nntp_.basicresponse.md).[code](_nntp_.basicresponse.md#code)*

*Defined in [src/nntp.ts:25](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L25)*

Response code. See [RFC 3977 section 3.2](https://tools.ietf.org/html/rfc3977#section-3.2).

___

### `Optional` data

• **data**? : *Buffer*

*Defined in [src/nntp.ts:31](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L31)*

Content of multi line data block.

___

###  message

• **message**: *string*

*Inherited from [BasicResponse](_nntp_.basicresponse.md).[message](_nntp_.basicresponse.md#message)*

*Defined in [src/nntp.ts:27](https://github.com/DasKraken/nntp-fast/blob/08294ae/src/nntp.ts#L27)*

Response message
