<!--
SPDX-FileCopyrightText: 2023 Antholife

SPDX-License-Identifier: MIT
-->

![plot](docs/assets/FM.png)

[![GitHub License](https://img.shields.io/badge/Licence-MIT-green)](https://opensource.org/license/mit/)
[![REUSE Compliance](https://img.shields.io/reuse/compliance/github.com%2Ffsfe%2Freuse-tool)](https://reuse.software/)

[![GitHub package.json version](https://img.shields.io/github/package-json/v/antholife/friendly-matrix)](https://github.com/Antholife/friendly-matrix)

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/friendly-matrix)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Antholife/friendly-matrix)

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

#
Friendly-matrix is a JavaScript library that provides a user-friendly interface for matrix manipulation. It simplifies various matrix operations, offering flexibility and ease of use for developers working with matrices in JS/TS projects.

****=> For better visibility, details, docs, readMe and the complete API documentation can be found [here](https://antholife.github.io/friendly-matrix/) ! 😎****
# Contents
- [Requirements 📋](#requirements)
- [Motivations 💪](#motivations)
- [Contributing](#contributing)
- [Features 🛠️](#features)
- [Installation ⬇️](#installation)
- [Basic usage 🧐](#basic-usage)
- [API ⚙️](#api)
- [Advanced API 🧪](#advanced-api)
- [License 📝](#license)

---

## Requirements

This project was developed under Node.js 20.9.0 LTS, and we strongly recommend using it.

![plot](https://www.developpez.net/forums/attachments/p288914d1/a/a/a)

Compatible with JS and TS, this module imports type declarations.

For more information on the use of TypeScript with Node.js, please refer to the [official documentation](https://www.typescriptlang.org/).

⚠️ This module is compatible with CommonJS and ECMAScript formats.

For use with vanilla JavaScript (pure JS), no modifications are required.

If you wish to force the use of `import` and `export` declarations (ECMAScript), you have two options:
1. Rename your files from `.js` to `.mjs`.
2. Add the key `"type": "module"` to your `package.json` file.

When using frameworks such as React, the ECMAScript format is generally expected by default. So no further action is required.

---

## Motivations

The motivation behind the creation of **Friendly-matrix** is to provide a simple and flexible library for manipulating matrices in JS/TS. This library has been designed to offer developers a user-friendly and versatile solution for working with matrix operations in a variety of development contexts.

Matrix operations are commonly used in fields such as machine learning, image processing, simulation, video games and more. However, matrix manipulation can be complex and tedious without the right tools. That's why **Friendly-matrix** aims to simplify these operations by providing an intuitive interface and robust functionality for matrix creation, manipulation and analysis.

This library has been created with the aim of giving developers easy access to basic matrix manipulation functionality, while offering them the possibility of extending this functionality according to their specific needs.


---

## Contributing

Contributions are welcome! To contribute to Friendly-matrix, follow these steps:

1. **Fork** the project
2. Create a branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push the branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

Please also read the [Contribution Guide](CONTRIBUTING.md) for detailed information on the contribution process, coding style, etc.

We welcome all kinds of contributions, from bug fixes to new features, and greatly appreciate your efforts to enhance this project.

---

## Features

- **Matrix Operations**
- **Matrix Comparison**
- **Matrix Order Manipulation**
- **Matrix Transformation**
- **Additional Matrix Operations**
- **Accessing Matrix Elements**
- **In Place Operations**

For detailed usage and API documentation, refer to [API Section](#api).

---

## Installation

You can install Friendly-matrix:

### Using NPM
```bash
npm i friendly-matrix
```

### Using Yarn
⚠️ The Plug'n'Play feature of Yarn is not supported by this module.

If the mode is activated (The node modules are not installed in the `node_modules` folder), the module will not work.

If you want to use it, you'll need to add the following line to a `.yarnrc.yml` file located at the root of the project
```yaml
nodeLinker: node-modules
```
then,
```bash
yarn add friendly-matrix
```
### Using PNPM
Yes ! You can use PNPM with this module ! 😎

The compatibility is ensured.
```bash
pnpm add friendly-matrix
```

---

## Basic Usage

```typescript
// Import required functions and classes
import { Matrix, fm_identity, FM_ORDER, fm_usage } from 'friendly-matrix';
//OR
import your_name from 'friendly-matrix';
your_name.fm_identity(4);
```

```typescript
// Example usage of the FriendlyMatrix class

// Create a matrix instance
const matrix = new Matrix({
    rows: 3,
    cols: 3,
    ORDER: FM_ORDER.RowMajor,
    matrix: [1, 2, 3, 4, 5, 6, 7, 8, 9]
});

// Get matrix details
console.log('Rows:', matrix.getRows()); // Output: Rows: 3
console.log('Columns:', matrix.getCols()); // Output: Columns: 3
console.log('Size:', matrix.getSize()); // Output: Size: 9
console.log('Order:', matrix.getOrder()); // Output: Order: RowMajor

// Transpose the matrix
const transposedMatrix = matrix.transpose();
console.log('Transposed Matrix:', transposedMatrix.getMatrix()); // Output: Transposed Matrix: [1, 4, 7, 2, 5, 8, 3, 6, 9]

// Add another matrix
const anotherMatrix = new Matrix({
    rows: 3,
    cols: 3,
    ORDER: FM_ORDER.RowMajor,
    matrix: [9, 8, 7, 6, 5, 4, 3, 2, 1]
});

const addedMatrix = matrix.addition(anotherMatrix);
console.log('Added Matrix:', addedMatrix.getMatrix()); // Output: Added Matrix: [10, 10, 10, 10, 10, 10, 10, 10, 10]

// Scale the matrix
const scaledMatrix = matrix.scale(2, '+');
console.log('Scaled Matrix:', scaledMatrix.getMatrix()); // Output: Scaled Matrix: [2, 4, 6, 8, 10, 12, 14, 16, 18]

// Check matrix equality
console.log('Matrix Equality:', matrix.equals(scaledMatrix)); // Output: Matrix Equality: false

// Get a specific value from the matrix
console.log('Value at (2, 2):', matrix.get(1, 1)); // Output: Value at (2, 2): 5

// Set a value in the matrix
matrix.set(1, 1, 10);
console.log('Updated Matrix:', matrix.getMatrix()); // Output: Updated Matrix: [1, 2, 3, 4, 10, 6, 7, 8, 9]

// Generate an identity matrix
const identityMatrix = identity(4);
console.log('Identity Matrix:', identityMatrix.getMatrix()); // Output: Identity Matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

const multipliedMatrix = matrix.multiplication(anotherMatrix);
console.log('Multiplied Matrix:', multipliedMatrix.getMatrix()); // Output: Multiplied Matrix: [2, 4, 6, 8, 10, 12, 14, 16, 18]

// Raise matrix to a given exponent
const squaredMatrix = matrix.pow(2);
console.log('Squared Matrix:', squaredMatrix.getMatrix()); // Output: Squared Matrix: [30, 36, 42, 66, 81, 96, 102, 126, 150]

// Update matrix array
const updatedMatrixArray = [3, 6, 9, 2, 5, 8, 1, 4, 7];
matrix.updateMatrix(updatedMatrixArray);
console.log('Updated Matrix:', matrix.getMatrix()); // Output: Updated Matrix: [3, 6, 9, 2, 5, 8, 1, 4, 7]

// Update matrix order
matrix.updateOrder(FM_ORDER.ColumnMajor);
console.log('Updated Order:', matrix.getOrder()); // Output: Updated Order: ColumnMajor

// In-place scaling
matrix.scaleInPlace(2, '+');
console.log('Scaled Matrix:', matrix.getMatrix()); // Output: Scaled Matrix: [3, 6, 9, 6, 7, 10, 9, 8, 11]

//Other operations...
```
---

## API

### Simply modules

#### Matrix Class
The `Matrix` class is a representation of a matrix (a one-dimensional array of numbers) that offers various functionalities for performing operations on these matrices.

It has a constructor that takes several parameters:
- `rows`: the number of rows in the matrix.
- `cols`: the number of columns in the matrix.
- `ORDER` : the order of the matrix, either "RowMajor" or "ColumnMajor".
- `matrix` : an array of numbers representing the matrix.

If the parameters supplied to the constructor are invalid, an error will be generated.

The `Matrix` class also contains a `size` property, which is calculated as a function of row and column.
It provides methods for performing various operations on matrices, such as transposition, addition, subtraction, multiplication, scaling, matrix inversion, and many more. These methods can be used to manipulate and perform calculations on matrices efficiently.

These parameters represent a config (so it's possible to import from a config.(js|ts) file, in the form of an object.

```typescript
const matrix = new Matrix({
    rows: 3,
    cols: 3,
    ORDER: FM_ORDER.RowMajor,
    matrix: [1, 2, 3, 4, 5, 6, 7, 8, 9]
});
```

**What's the order of the matrix ?** 

`FM_ORDER` is an enumeration used to represent the order of a matrix in the `Matrix` class. This enumeration offers two constants:
- `RowMajor`: This constant represents the storage order of the matrix where elements are ordered successively by rows.
- `ColumnMajor`: This constant represents the storage order of the matrix, where elements are arranged successively by column.

The use of this enumeration makes it possible to specify the organization of data in a matrix when creating or manipulating it in the `Matrix` class. It provides a clear and explicit way of defining the order of matrix elements for operations such as matrix creation, initialization or manipulation.

```typescript
const ORDER = {
    RowMajor: 'RowMajor',
    ColumnMajor: 'ColumnMajor',
};
```

These values are displayed through FM_ORDER:

```typescript
import { FM_ORDER } from 'friendly-matrix';
```

For example:

```typescript
// RowMajor
const rowMajorMatrix = new FriendlyMatrix({
    rows: 2,
    cols: 2,
    ORDER: FM_ORDER.RowMajor,
    matrix: [1, 2, 3, 4]
});
// rowMajorMatrix.trace()
        | 1  2 |
        | 3  4 |


// ColumnMajor
const colMajorMatrix = new FriendlyMatrix({
    rows: 2,
    cols: 2,
    ORDER: FM_ORDER.ColumnMajor,
    matrix: [1, 2, 3, 4]
});
// columnMajorMatrix.trace()
        | 1  3 |
        | 2  4 |
```

#### Identity Matrix

The `fm_identity` function is used to generate an identity matrix of the given size. It takes a single parameter, `size`, which is the size of the identity matrix to be generated.

```typescript
const identityMatrix = fm_identity(4);
```

#### Usage

The `fm_usage` function is used to display a string describing the usage of the `Matrix` class. It takes no parameters and returns a string describing the usage of the `Matrix` class.

```typescript
const usage = fm_usage();
```

**NOTE**

For the trace() method, the matrix is displayed in the console, the output is formatted string (with \n) 

***So it's up to you to adapt the reading of this string to your own framework and so on.***

For example, use `<pre>` tag in HTML.

---

### Advanced API

****For better visibility, the complete API documentation can be found [here](https://antholife.github.io/friendly-matrix/) ! 😎****

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

• **new Matrix**(`config`): [`Matrix`](#matrix)

Constructor for the FriendlyMatrix class.

###### Parameters

| Name            | Type | Description |
|:----------------| :------ | :------ |
| `config`        | `Object` | Constructor parameters. |
| `config.ORDER`  | `string` | The order of the matrix. |
| `config.cols`   | `number` | The number of columns. |
| `config.matrix` | `number`[] | Array of numbers representing the matrix. |
| `config.rows`   | `number` | The number of rows. |

###### Returns

[`Matrix`](#matrix)

#### Properties

##### ORDER

• **ORDER**: `string`

___

##### cols

• **cols**: `number`
___

##### matrix

• **matrix**: `number`[]

___

##### rows

• **rows**: `number`_

##### size

• **size**: `number`

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

___

##### convertToOpposedOrder

▸ **convertToOpposedOrder**(): [`Matrix`](#matrix)

Convert this matrix order to the opposed order and return a new matrix (with new matrix array).

###### Returns

[`Matrix`](#matrix)

___

##### convertToOpposedOrderInPlace

▸ **convertToOpposedOrderInPlace**(): `void`

Convert this matrix order to the opposed order in place (with new matrix array).

###### Returns

`void`
___

##### copy

▸ **copy**(): [`Matrix`](#matrix)

Copy this matrix and return a new matrix.

###### Returns

[`Matrix`](#matrix)

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

___

##### getCols

▸ **getCols**(): `number`

###### Returns

`number`

###### Defined in

##### getConvertedMatrix

▸ **getConvertedMatrix**(): `number`[]

Convert this matrix ORDER to the opposed ORDER and return the matrix array (No modified or created object matrix).

###### Returns

`number`[]
___

##### getMatrix

▸ **getMatrix**(): `number`[]

###### Returns

`number`[]
___

##### getOrder

▸ **getOrder**(): `string`

###### Returns

`string`

___

##### getRows

▸ **getRows**(): `number`

###### Returns

`number`

___

##### getSize

▸ **getSize**(): `number`

###### Returns

`number`

___

##### inverseColsRows

▸ **inverseColsRows**(): [`Matrix`](#matrix)

Inverse the rows and columns of this matrix.

###### Returns

[`Matrix`](#matrix)

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

___

##### trace

▸ **trace**(): `string`

Print the matrix to the console.

###### Returns

`string`

___

##### transpose

▸ **transpose**(): [`Matrix`](#matrix)

Transposes the matrix.

###### Returns

[`Matrix`](#matrix)

New transposed matrix.

___

##### transposeInPlace

▸ **transposeInPlace**(): `void`

Transposes the matrix in place.

###### Returns

`void`

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

---

## License

© 2023, Antholife. Released under [MIT License](./LICENSES/MIT.txt).

Some non-copyrighted files are available under [CC0 1.0 Universal](./LICENSES/CC0-1.0.txt).

