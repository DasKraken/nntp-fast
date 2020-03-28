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

*Defined in [src/nntp.ts:24](https://github.com/DasKraken/nntp-fast/blob/fe1dce3/src/nntp.ts#L24)*

Response code. See [RFC 3977 section 3.2](https://tools.ietf.org/html/rfc3977#section-3.2).

___

### `Optional` data

• **data**? : *Buffer*

*Defined in [src/nntp.ts:30](https://github.com/DasKraken/nntp-fast/blob/fe1dce3/src/nntp.ts#L30)*

Content of multi line data block.

___

###  message

• **message**: *string*

*Inherited from [BasicResponse](_nntp_.basicresponse.md).[message](_nntp_.basicresponse.md#message)*

*Defined in [src/nntp.ts:26](https://github.com/DasKraken/nntp-fast/blob/fe1dce3/src/nntp.ts#L26)*

Response message
