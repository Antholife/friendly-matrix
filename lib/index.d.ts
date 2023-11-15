// SPDX-FileCopyrightText: 2023 Antholife
//
// SPDX-License-Identifier: MIT

/**
 * Generate an identity matrix of the given size.
 * @param {number} size - The size of the identity matrix.
 * @returns {FriendlyMatrix} - The identity matrix.
 */
declare function identity(size: number): FriendlyMatrix;
/**
 * Returns a string describing the usage of the FriendlyMatrix class.
 * @returns {string} Description of the FriendlyMatrix class usage.
 */
declare function usage(): string;
/**
 * Enumeration representing the order of a matrix.
 */
type ORDER_TYPES = string;
declare namespace ORDER_TYPES {
    const RowMajor: string;
    const ColumnMajor: string;
}
/**
 * Class representing a friendly matrix with various operations.
 */
declare class FriendlyMatrix {
    /**
     * Constructor for the FriendlyMatrix class.
     * @param {Object} params - Constructor parameters.
     * @param {number} [params.rows] - The number of rows.
     * @param {number} [params.cols] - The number of columns.
     * @param {ORDER} [params.ORDER] - The order of the matrix.
     * @param {number[]} [params.matrix] - Array of numbers representing the matrix.
     * @throws {Error} Throws an error if parameters are invalid.
     */
    constructor({ rows, cols, ORDER, matrix }: {
        rows: number;
        cols: number;
        ORDER: ORDER_TYPES;
        matrix: number[];
    });
    rows: number;
    cols: number;
    size: number;
    ORDER: string;
    matrix: number[];
    /**
     * Transposes the matrix.
     * @returns {FriendlyMatrix} New transposed matrix.
     */
    transpose(): FriendlyMatrix;
    /**
     * Transposes the matrix in place.
     */
    transposeInPlace(): void;
    /**
     * Add another matrix to this matrix and return a new matrix.
     * @param {FriendlyMatrix} other - The matrix to add.
     * @returns {FriendlyMatrix} - The resulting matrix.
     * @throws Will throw an error if matrix dimensions or ordering do not match.
     */
    addition(other: FriendlyMatrix): FriendlyMatrix;
    /**
     * Add another matrix to this matrix in place.
     * @param {FriendlyMatrix} other - The matrix to add.
     * @throws Will throw an error if matrix dimensions or ordering do not match.
     */
    additionInPlace(other: FriendlyMatrix): void;
    /**
     * Subtract another matrix from this matrix and return a new matrix.
     * @param {FriendlyMatrix} other - The matrix to subtract.
     * @returns {FriendlyMatrix} - The resulting matrix.
     * @throws Will throw an error if matrix dimensions or ordering do not match.
     */
    subtraction(other: FriendlyMatrix): FriendlyMatrix;
    /**
     * Subtract another matrix from this matrix in place.
     * @param {FriendlyMatrix} other - The matrix to subtract.
     * @throws Will throw an error if matrix dimensions or ordering do not match.
     */
    subtractionInPlace(other: FriendlyMatrix): void;
    /**
     * Multiply this matrix by another matrix and return a new matrix.
     * @param {FriendlyMatrix} other - The matrix to multiply by.
     * @returns {FriendlyMatrix} - The resulting matrix.
     * @throws Will throw an error if matrix dimensions do not match.
     */
    multiplication(other: FriendlyMatrix): FriendlyMatrix;
    /**
     * Multiply this matrix by another matrix in place.
     * @param {FriendlyMatrix} other - The matrix to multiply by.
     * @throws Will throw an error if matrix dimensions do not match.
     */
    multiplicationInPlace(other: FriendlyMatrix): void;
    /**
     * Scale this matrix by a scalar value and operator type and return a new matrix.
     * Operator available: +, -, *, /, %, ^, sqrt
     * @param {number} scalar - The scalar value to scale by.
     * @param operator
     * @returns {FriendlyMatrix} - The resulting matrix.
     */
    scale(scalar: number, operator: "+" | "-" | "*" | "/" | "%" | "^" | "sqrt"): FriendlyMatrix;
    /**
     * Scale this matrix by a scalar value and operator type and return a new matrix.
     * Operator available: +, -, *, /, %, ^, sqrt
     * @param {number} scalar - The scalar value to scale by.
     * @param operator
     */
    scaleInPlace(scalar: number, operator: "+" | "-" | "*" | "/" | "%" | "^" | "sqrt"): void;
    /**
     * Check if this matrix is equal to another matrix.
     * @param {FriendlyMatrix} other - The matrix to compare with.
     * @returns {boolean} - True if matrices are equal, false otherwise.
     */
    equals(other: FriendlyMatrix): boolean;
    /**
     * Convert this matrix order to the opposed order and return a new matrix (with new matrix array).
     * @returns {FriendlyMatrix}
     */
    convertToOpposedOrder(): FriendlyMatrix;
    /**
     * Convert this matrix order to the opposed order in place (with new matrix array).
     */
    convertToOpposedOrderInPlace(): void;
    /**
     * Convert this matrix ORDER to the opposed ORDER and return the matrix array (No modified or created object matrix).
     * @returns {number[]}
     */
    getConvertedMatrix(): number[];
    /**
     * Raise this matrix to a given exponent and return a new matrix.
     * @param {number} exponent - The exponent to raise the matrix to.
     * @returns {FriendlyMatrix} - The resulting matrix.
     * @throws Will throw an error if the matrix is not square or the exponent is negative.
     */
    pow(exponent: number): FriendlyMatrix;
    /**
     * Raise this matrix to a given exponent in place.
     * @param {number} exponent - The exponent to raise the matrix to.
     * @throws Will throw an error if the matrix is not square or the exponent is negative.
     */
    powInPlace(exponent: number): void;
    /**
     * Print the matrix to the console.
     */
    trace(): string;
    /**
     * Copy this matrix and return a new matrix.
     * @returns {FriendlyMatrix}
     */
    copy(): FriendlyMatrix;

    /**
     * Assign this matrix to another matrix.
     * @param other
     */
    assign(other): void;
    /**
     * Update the matrix array of this matrix.
     * @param matrix
     */
    updateMatrix(matrix): void;
    /**
     * Update the ORDER of this matrix.
     * @param order
     */
    updateOrder(order): void;
    /**
     * Inverse the rows and columns of this matrix.
     */
    inverseColsRows(): FriendlyMatrix;
    /**
     * Get the value at the specified row and column.
     * @param {number} row - The row index.
     * @param {number} col - The column index.
     * @returns {number} - The value at the specified position.
     */
    get(row: number, col: number): number;
    /**
     * Set the value at the specified row and column.
     * @param {number} row - The row index.
     * @param {number} col - The column index.
     * @param {number} value - The value to set.
     */
    set(row: number, col: number, value: number): void;
    getRows(): number;
    getCols(): number;
    getSize(): number;
    getOrder(): string;
    getMatrix(): number[];
}
export { FriendlyMatrix as Matrix, identity as fm_identity, usage as fm_usage, ORDER_TYPES as FM_ORDER };
