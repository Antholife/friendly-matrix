

![plot](./icon/FM.png)

[![npm version](https://img.shields.io/npm/v/friendly-matrix.svg)](https://www.npmjs.com/package/friendly-matrix)
[![Version Status](https://travis-ci.com/yourusername/friendly-matrix.svg?branch=master)](https://travis-ci.com/yourusername/friendly-matrix)
[![License](https://img.shields.io/npm/l/friendly-matrix.svg)](https://www.npmjs.com/package/friendly-matrix)
#
Friendly-matrix is a JavaScript library that provides a user-friendly interface for matrix manipulation. It simplifies various matrix operations, offering flexibility and ease of use for developers working with matrices in JS/TS projects.

# Contents
- [Requirements 📋](#-requirements)
- [Motivations 💪](#motivations)
- [Features 🛠️](#features)
- [Installation ⬇️](#installation)
- [Usage](#usage)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

---

## Requirements

This project was developed under NodeJS 20.9.0 LTS, and we strongly recommend using it.
#
![plot](https://www.developpez.net/forums/attachments/p288914d1/a/a/a)

Compatible with JS and TS, this module imports type declarations.
#

---

## Motivations

The motivation behind the creation of **Friendly-matrix** is to provide a simple and flexible library for manipulating matrices in JS/TS. This library has been designed to offer developers a user-friendly and versatile solution for working with matrix operations in a variety of development contexts.

Matrix operations are commonly used in fields such as machine learning, image processing, simulation, video games and more. However, matrix manipulation can be complex and tedious without the right tools. That's why **Friendly-matrix** aims to simplify these operations by providing an intuitive interface and robust functionality for matrix creation, manipulation and analysis.

This library has been created with the aim of giving developers easy access to basic matrix manipulation functionality, while offering them the possibility of extending this functionality according to their specific needs.
#

---

## Features

- **Matrix Operations**
- **Matrix Comparison**
- **Matrix Order Manipulation**
- **Matrix Transformation**
- **Additional Matrix Operations**
- **Accessing Matrix Elements**

For detailed usage and API documentation, refer to [API Section](https://link-to-full-documentation).

---

## Installation

You can install Friendly-matrix:

```bash
npm install friendly-matrix
or 
yarn add friendly-matrix
```

---

## Usage




- [Classes](#classes)
  - [Matrix](#matrix)
    - [Class: Matrix](#class-matrix)
- [Modules](#modules)
  - [friendly-matrix](#friendly-matrix)
    - [Table of contents](#table-of-contents)
    - [Type Aliases](#type-aliases)
    - [Functions](#functions)
- [Modules](#modules-1)
  - [FM ORDER](#fm-order)
    - [Namespace: FM\_ORDER](#namespace-fm%5C_order)

# Classes

## Matrix

### Class: Matrix

Class representing a friendly matrix with various operations.

#### Table of contents

##### Constructors

- [constructor](#constructor)

##### Properties

- [ORDER](#order)
- [cols](#cols)
- [matrix](#matrix)
- [rows](#rows)
- [size](#size)

##### Methods

- [addition](#addition)
- [additionInPlace](#additioninplace)
- [assign](#assign)
- [convertToOpposedOrder](#converttoopposedorder)
- [convertToOpposedOrderInPlace](#converttoopposedorderinplace)
- [copy](#copy)
- [equals](#equals)
- [get](#get)
- [getCols](#getcols)
- [getConvertedMatrix](#getconvertedmatrix)
- [getMatrix](#getmatrix)
- [getOrder](#getorder)
- [getRows](#getrows)
- [getSize](#getsize)
- [inverseColsRows](#inversecolsrows)
- [multiplication](#multiplication)
- [multiplicationInPlace](#multiplicationinplace)
- [pow](#pow)
- [powInPlace](#powinplace)
- [scale](#scale)
- [scaleInPlace](#scaleinplace)
- [set](#set)
- [subtraction](#subtraction)
- [subtractionInPlace](#subtractioninplace)
- [trace](#trace)
- [transpose](#transpose)
- [transposeInPlace](#transposeinplace)
- [updateMatrix](#updatematrix)
- [updateOrder](#updateorder)

#### Constructors

##### constructor

• **new Matrix**(`params`): [`Matrix`](#matrix)

Constructor for the FriendlyMatrix class.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | Constructor parameters. |
| `params.ORDER?` | `string` | The order of the matrix. |
| `params.cols?` | `number` | The number of columns. |
| `params.fromFriendlyMatrix?` | [`Matrix`](#matrix) | Another FriendlyMatrix to copy. |
| `params.matrix?` | `number`[] | Array of numbers representing the matrix. |
| `params.rows?` | `number` | The number of rows. |

###### Returns

[`Matrix`](#matrix)

**`Throws`**

Throws an error if parameters are invalid.

###### Defined in

index.d.ts:34

#### Properties

##### ORDER

• **ORDER**: `string`

###### Defined in

index.d.ts:44

___

##### cols

• **cols**: `number`

###### Defined in

index.d.ts:42

___

##### matrix

• **matrix**: `number`[]

###### Defined in

index.d.ts:45

___

##### rows

• **rows**: `number`

###### Defined in

index.d.ts:41

___

##### size

• **size**: `number`

###### Defined in

index.d.ts:43

#### Methods

##### addition

▸ **addition**(`other`): [`Matrix`](#matrix)

Add another matrix to this matrix and return a new matrix.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix`](#matrix) | The matrix to add. |

###### Returns

[`Matrix`](#matrix)

- The resulting matrix.

**`Throws`**

Will throw an error if matrix dimensions or ordering do not match.

###### Defined in

index.d.ts:61

___

##### additionInPlace

▸ **additionInPlace**(`other`): `void`

Add another matrix to this matrix in place.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix`](#matrix) | The matrix to add. |

###### Returns

`void`

**`Throws`**

Will throw an error if matrix dimensions or ordering do not match.

###### Defined in

index.d.ts:67

___

##### assign

▸ **assign**(`other`): `void`

Assign this matrix to another matrix.

###### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `any` |

###### Returns

`void`

###### Defined in

index.d.ts:169

___

##### convertToOpposedOrder

▸ **convertToOpposedOrder**(): [`Matrix`](#matrix)

Convert this matrix order to the opposed order and return a new matrix (with new matrix array).

###### Returns

[`Matrix`](#matrix)

###### Defined in

index.d.ts:119

___

##### convertToOpposedOrderInPlace

▸ **convertToOpposedOrderInPlace**(): `void`

Convert this matrix order to the opposed order in place (with new matrix array).

###### Returns

`void`

###### Defined in

index.d.ts:123

___

##### copy

▸ **copy**(): [`Matrix`](#matrix)

Copy this matrix and return a new matrix.

###### Returns

[`Matrix`](#matrix)

###### Defined in

index.d.ts:163

___

##### divide

▸ **divide**(`other`): [`Matrix`](#matrix)

Divide this matrix by another matrix and return a new matrix.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix`](#matrix) | The matrix to divide by. |

###### Returns

[`Matrix`](#matrix)

- The resulting matrix.

**`Throws`**

Will throw an error if matrix dimensions do not match.

###### Defined in

index.d.ts:135

___

##### divideInPlace

▸ **divideInPlace**(`other`): `void`

Divide this matrix by another matrix in place.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix`](#matrix) | The matrix to divide by. |

###### Returns

`void`

**`Throws`**

Will throw an error if matrix dimensions do not match.

###### Defined in

index.d.ts:141

___

##### equals

▸ **equals**(`other`): `boolean`

Check if this matrix is equal to another matrix.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix`](#matrix) | The matrix to compare with. |

###### Returns

`boolean`

- True if matrices are equal, false otherwise.

###### Defined in

index.d.ts:114

___

##### get

▸ **get**(`row`, `col`): `number`

Get the value at the specified row and column.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | The row index. |
| `col` | `number` | The column index. |

###### Returns

`number`

- The value at the specified position.

###### Defined in

index.d.ts:190

___

##### getCols

▸ **getCols**(): `number`

###### Returns

`number`

###### Defined in

index.d.ts:199

___

##### getConvertedMatrix

▸ **getConvertedMatrix**(): `number`[]

Convert this matrix ORDER to the opposed ORDER and return the matrix array (No modified or created object matrix).

###### Returns

`number`[]

###### Defined in

index.d.ts:128

___

##### getMatrix

▸ **getMatrix**(): `number`[]

###### Returns

`number`[]

###### Defined in

index.d.ts:202

___

##### getOrder

▸ **getOrder**(): `string`

###### Returns

`string`

###### Defined in

index.d.ts:201

___

##### getRows

▸ **getRows**(): `number`

###### Returns

`number`

###### Defined in

index.d.ts:198

___

##### getSize

▸ **getSize**(): `number`

###### Returns

`number`

###### Defined in

index.d.ts:200

___

##### inverseColsRows

▸ **inverseColsRows**(): [`Matrix`](#matrix)

Inverse the rows and columns of this matrix.

###### Returns

[`Matrix`](#matrix)

###### Defined in

index.d.ts:183

___

##### multiplication

▸ **multiplication**(`other`): [`Matrix`](#matrix)

Multiply this matrix by another matrix and return a new matrix.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix`](#matrix) | The matrix to multiply by. |

###### Returns

[`Matrix`](#matrix)

- The resulting matrix.

**`Throws`**

Will throw an error if matrix dimensions do not match.

###### Defined in

index.d.ts:87

___

##### multiplicationInPlace

▸ **multiplicationInPlace**(`other`): `void`

Multiply this matrix by another matrix in place.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix`](#matrix) | The matrix to multiply by. |

###### Returns

`void`

**`Throws`**

Will throw an error if matrix dimensions do not match.

###### Defined in

index.d.ts:93

___

##### pow

▸ **pow**(`exponent`): [`Matrix`](#matrix)

Raise this matrix to a given exponent and return a new matrix.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exponent` | `number` | The exponent to raise the matrix to. |

###### Returns

[`Matrix`](#matrix)

- The resulting matrix.

**`Throws`**

Will throw an error if the matrix is not square or the exponent is negative.

###### Defined in

index.d.ts:148

___

##### powInPlace

▸ **powInPlace**(`exponent`): `void`

Raise this matrix to a given exponent in place.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exponent` | `number` | The exponent to raise the matrix to. |

###### Returns

`void`

**`Throws`**

Will throw an error if the matrix is not square or the exponent is negative.

###### Defined in

index.d.ts:154

___

##### scale

▸ **scale**(`scalar`, `operator`): [`Matrix`](#matrix)

Scale this matrix by a scalar value and operator type and return a new matrix.
Operator available: +, -, *, /, %, ^, sqrt

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The scalar value to scale by. |
| `operator` | ``"+"`` \| ``"-"`` \| ``"*"`` \| ``"/"`` \| ``"%"`` \| ``"^"`` \| ``"sqrt"`` |  |

###### Returns

[`Matrix`](#matrix)

- The resulting matrix.

###### Defined in

index.d.ts:101

___

##### scaleInPlace

▸ **scaleInPlace**(`scalar`, `operator`): `void`

Scale this matrix by a scalar value and operator type and return a new matrix.
Operator available: +, -, *, /, %, ^, sqrt

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The scalar value to scale by. |
| `operator` | ``"+"`` \| ``"-"`` \| ``"*"`` \| ``"/"`` \| ``"%"`` \| ``"^"`` \| ``"sqrt"`` |  |

###### Returns

`void`

###### Defined in

index.d.ts:108

___

##### set

▸ **set**(`row`, `col`, `value`): `void`

Set the value at the specified row and column.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | The row index. |
| `col` | `number` | The column index. |
| `value` | `number` | The value to set. |

###### Returns

`void`

###### Defined in

index.d.ts:197

___

##### subtraction

▸ **subtraction**(`other`): [`Matrix`](#matrix)

Subtract another matrix from this matrix and return a new matrix.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix`](#matrix) | The matrix to subtract. |

###### Returns

[`Matrix`](#matrix)

- The resulting matrix.

**`Throws`**

Will throw an error if matrix dimensions or ordering do not match.

###### Defined in

index.d.ts:74

___

##### subtractionInPlace

▸ **subtractionInPlace**(`other`): `void`

Subtract another matrix from this matrix in place.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix`](#matrix) | The matrix to subtract. |

###### Returns

`void`

**`Throws`**

Will throw an error if matrix dimensions or ordering do not match.

###### Defined in

index.d.ts:80

___

##### trace

▸ **trace**(): `string`

Print the matrix to the console.

###### Returns

`string`

###### Defined in

index.d.ts:158

___

##### transpose

▸ **transpose**(): [`Matrix`](#matrix)

Transposes the matrix.

###### Returns

[`Matrix`](#matrix)

New transposed matrix.

###### Defined in

index.d.ts:50

___

##### transposeInPlace

▸ **transposeInPlace**(): `void`

Transposes the matrix in place.

###### Returns

`void`

###### Defined in

index.d.ts:54

___

##### updateMatrix

▸ **updateMatrix**(`matrix`): `void`

Update the matrix array of this matrix.

###### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | `any` |

###### Returns

`void`

###### Defined in

index.d.ts:174

___

##### updateOrder

▸ **updateOrder**(`order`): `void`

Update the ORDER of this matrix.

###### Parameters

| Name | Type |
| :------ | :------ |
| `order` | `any` |

###### Returns

`void`

###### Defined in

index.d.ts:179

# Modules

[friendly-matrix](#readme) / Exports

## friendly-matrix

### Table of contents

#### Namespaces

- [FM\_ORDER](#fm-order)

#### Classes

- [Matrix](#matrix)

#### Type Aliases

- [FM\_ORDER](#fm_order)

#### Functions

- [fm\_identity](#fm_identity)
- [fm\_usage](#fm_usage)

### Type Aliases

#### FM\_ORDER

Ƭ **FM\_ORDER**: `string`

Enumeration representing the order of a matrix.

##### Defined in

index.d.ts:15

index.d.ts:16

### Functions

#### fm\_identity

▸ **fm_identity**(`size`): [`Matrix`](#matrix)

Generate an identity matrix of the given size.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The size of the identity matrix. |

##### Returns

[`Matrix`](#matrix)

- The identity matrix.

##### Defined in

index.d.ts:6

___

#### fm\_usage

▸ **fm_usage**(): `string`

Returns a string describing the usage of the FriendlyMatrix class.

##### Returns

`string`

Description of the FriendlyMatrix class usage.

##### Defined in

index.d.ts:11

# Modules

## FM ORDER

### Namespace: FM\_ORDER

#### Table of contents

##### Variables

- [ColumnMajor](#columnmajor)
- [RowMajor](#rowmajor)

#### Variables

##### ColumnMajor

• `Const` **ColumnMajor**: `string`

###### Defined in

index.d.ts:18

___

##### RowMajor

• `Const` **RowMajor**: `string`

###### Defined in

index.d.ts:17
