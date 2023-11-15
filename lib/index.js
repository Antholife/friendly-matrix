/**
 * Class representing a friendly matrix with various operations.
 */
class FriendlyMatrix {

    /**
     * Constructor for the FriendlyMatrix class.
     * @param {Object} params - Constructor parameters.
     * @param {number} [params.rows] - The number of rows.
     * @param {number} [params.cols] - The number of columns.
     * @param {ORDER} [params.ORDER] - The ORDER of the matrix.
     * @param {number[]} [params.matrix] - Array of numbers representing the matrix.
     * @throws {Error} Throws an error if parameters are invalid.
     */
    constructor({
                    rows = undefined,
                    cols = undefined,
                    ORDER = undefined,
                    matrix = undefined,
                }) {
        if (rows && cols && (rows < 0 || cols < 0)) {
            throw new Error("rows and cols must be positive\n" + usage());
        }

        if (rows && cols && ((rows * cols) !== matrix?.length)) {
            throw new Error("The size of the matrix must correspond to the size deduced from the rows * columns.\n" + usage())
        }
        if (rows && cols && ORDER && matrix !== undefined) {
            this.rows = rows;
            this.cols = cols;
            this.size = rows * cols;
            this.ORDER = ORDER;
            this.matrix = matrix;
        } else {
            throw new Error("invalid parameters");
        }
    }

    /**
     * Transposes the matrix.
     * @returns {FriendlyMatrix} New transposed matrix.
     */
    transpose() {
        const transposed = this.copy().inverseColsRows();

        if (this.ORDER === ORDER.RowMajor) {
            transposed.updateOrder(ORDER.ColumnMajor);
        } else {
            transposed.updateOrder(ORDER.RowMajor);
        }
        return transposed;
    }

    /**
     * Transposes the matrix in place.
     */
    transposeInPlace() {
        this.inverseColsRows();
        this.updateOrder(this.ORDER === ORDER.RowMajor ? ORDER.ColumnMajor : this.updateOrder(ORDER.RowMajor));
    }

     /**
     * Add another matrix to this matrix and return a new matrix.
     * @param {FriendlyMatrix} other - The matrix to add.
     * @returns {FriendlyMatrix} - The resulting matrix.
     * @throws Will throw an error if matrix dimensions or ORDERing do not match.
     */
    addition(other) {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error("matrix dimensions must match");
        }

        const result = this.copy();
        result.updateMatrix(new Array(this.size));
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.set(i,j, this.get(i, j) + other.get(i, j))
            }
        }
        return result;
    }

    /**
     * Add another matrix to this matrix in place.
     * @param {FriendlyMatrix} other - The matrix to add.
     * @throws Will throw an error if matrix dimensions or ORDERing do not match.
     */
    additionInPlace(other) {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error("matrix dimensions must match");
        }
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.set(i, j, this.get(i, j) + other.get(i, j));
            }
        }
    }

    /**
     * Subtract another matrix from this matrix and return a new matrix.
     * @param {FriendlyMatrix} other - The matrix to subtract.
     * @returns {FriendlyMatrix} - The resulting matrix.
     * @throws Will throw an error if matrix dimensions or ORDERing do not match.
     */
    subtraction(other) {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error("matrix dimensions must match");
        }

        const result = this.copy();
        result.updateMatrix(new Array(this.size));
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.set(i, j, this.get(i, j) - other.get(i, j));
            }
        }

        return result;
    }

    /**
     * Subtract another matrix from this matrix in place.
     * @param {FriendlyMatrix} other - The matrix to subtract.
     * @throws Will throw an error if matrix dimensions or ORDERing do not match.
     */
    subtractionInPlace(other) {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error("matrix dimensions must match");
        }
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.set(i, j, this.get(i, j) - other.get(i, j));
            }
        }
    }

    /**
     * Multiply this matrix by another matrix and return a new matrix.
     * @param {FriendlyMatrix} other - The matrix to multiply by.
     * @returns {FriendlyMatrix} - The resulting matrix.
     * @throws Will throw an error if matrix dimensions do not match.
     */
    multiplication(other) {
        if (this.cols !== other.rows) {
            throw new Error("matrix rows and columns must match for multiplication");
        }

        const result = this.copy();
        result.updateMatrix(new Array(this.rows * other.cols));

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < other.cols; j++) {
                let sum = 0;
                for (let k = 0; k < this.cols; k++) {
                    sum += this.get(i, k) * other.get(k, j);
                }
                result.set(i, j, sum);
            }
        }

        return result;
    }


    /**
     * Multiply this matrix by another matrix in place.
     * @param {FriendlyMatrix} other - The matrix to multiply by.
     * @throws Will throw an error if matrix dimensions do not match.
     */
    multiplicationInPlace(other) {
        if (this.cols !== other.rows) {
            throw new Error("matrix rows and columns must match for multiplication");
        }

        const result = this.copy();
        result.updateMatrix(new Array(this.rows * other.cols));
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < other.cols; j++) {
                let sum = 0;
                for (let k = 0; k < this.cols; k++) {
                    sum += this.get(i, k) * other.get(k, j);
                }
                result.set(i, j, sum);
            }
        }
        this.assign(result);
    }

    /**
     * Scale this matrix by a scalar value and operator type and return a new matrix.
     * Operator available: +, -, *, /, %, ^, sqrt
     * @param {number} scalar - The scalar value to scale by.
     * @param operator
     * @returns {FriendlyMatrix} - The resulting matrix.
     */
    scale(scalar, operator) {
        const result = this.copy();
        result.updateMatrix(new Array(this.size));
        for (let i = 0; i < this.size; i++) {
            switch (operator) {
                case "*": {
                    result.matrix[i] = this.matrix[i] * scalar;
                }
                    break;
                case "+": {
                    result.matrix[i] = this.matrix[i] + scalar;
                }
                    break;
                case "-": {
                    result.matrix[i] = this.matrix[i] - scalar;
                }
                    break;
                case "/": {
                    result.matrix[i] = this.matrix[i] / scalar;
                }
                    break;
                case "%": {
                    result.matrix[i] = this.matrix[i] % scalar;
                }
                    break;
                case "^": {
                    result.matrix[i] = Math.pow(this.matrix[i], scalar);
                }
                    break;
                case "sqrt": {
                    result.matrix[i] = Math.pow(this.matrix[i], 1 / scalar);
                }
                    break;
                default: {
                    throw new Error("operator not supported");
                }
            }
        }

        return result;
    }

    /**
     * Scale this matrix by a scalar value and operator type in place.
     * Operator available: +, -, *, /, %, ^, sqrt
     * @param {number} scalar - The scalar value to scale by.
     * @param operator
     */
    scaleInPlace(scalar, operator) {
        for (let i = 0; i < this.size; i++) {
            switch (operator) {
                case "*": {
                    this.matrix[i] = this.matrix[i] * scalar;
                }
                    break;
                case "+": {
                    this.matrix[i] = this.matrix[i] + scalar;
                }
                    break;
                case "-": {
                    this.matrix[i] = this.matrix[i] - scalar;
                }
                    break;
                case "/": {
                    this.matrix[i] = this.matrix[i] / scalar;
                }
                    break;
                case "%": {
                    this.matrix[i] = this.matrix[i] % scalar;
                }
                    break;
                case "^": {
                    this.matrix[i] = Math.pow(this.matrix[i], scalar);
                }
                    break;
                case "sqrt": {
                    this.matrix[i] = Math.pow(this.matrix[i], 1 / scalar);
                }
                    break;
                default: {
                    throw new Error("operator not supported");
                }
            }
        }
    }

    /**
     * Check if this matrix is equal to another matrix.
     * @param {FriendlyMatrix} other - The matrix to compare with.
     * @returns {boolean} - True if matrices are equal, false otherwise.
     */
    equals(other) {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            return false;
        }

        let otherMatrix = other.copy();

        if(this.ORDER !== other.ORDER) {
            otherMatrix.convertToOpposedOrderInPlace();
        }

        for (let i = 0; i < this.size; i++) {
            if (this.matrix[i] !== otherMatrix.matrix[i]) {
                return false;
            }
        }

        return true;
    }

    /**
     * Convert this matrix ORDER to the opposed ORDER and return a new matrix (with new matrix array).
     * @returns {FriendlyMatrix}
     */
    convertToOpposedOrder() {
        const result = this.copy();
        result.updateOrder(this.ORDER === ORDER.RowMajor ? ORDER.ColumnMajor : ORDER.RowMajor)
        result.updateMatrix(new Array(this.size));

        for (let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                result.set(i, j, this.get(i,j));
            }
        }
        return result;
    }

    /**
     * Convert this matrix ORDER to the opposed ORDER in place (with new matrix array).
     */
    convertToOpposedOrderInPlace() {
        const result = this.copy();
        result.updateOrder(this.ORDER === ORDER.RowMajor ? ORDER.ColumnMajor : ORDER.RowMajor)
        result.updateMatrix(new Array(this.size));

        for (let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                result.set(i, j, this.get(i,j));
            }
        }

        this.assign(result);
    }

    /**
     * Convert this matrix ORDER to the opposed ORDER and return the matrix array (No modified or created object matrix).
     * @returns {number[]}
     */
    getConvertedMatrix() {

        let result = new Array(this.size);

        for (let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                if (this.ORDER !== ORDER.RowMajor) {
                    result[i * this.cols + j] = this.get(i, j);
                }
                else result[j * this.rows + i] = this.get(i, j);
            }
        }
        return result;
    }

    /**
     * Raise this matrix to a given exponent and return a new matrix.
     * @param {number} exponent - The exponent to raise the matrix to.
     * @returns {FriendlyMatrix} - The resulting matrix.
     * @throws Will throw an error if the matrix is not square or the exponent is negative.
     */
    pow(exponent) {
        if (this.rows !== this.cols) {
            throw new Error("matrix must be square");
        }

        if (exponent < 0) {
            throw new Error("exponent must be positive");
        }

        if (exponent === 0) {
            return identity(this.rows);
        }

        const result = this.copy();

        for (let i = 1; i < exponent; i++) {
            result.multiplicationInPlace(this);
        }
        return result;
    }

    /**
     * Raise this matrix to a given exponent in place.
     * @param {number} exponent - The exponent to raise the matrix to.
     * @throws Will throw an error if the matrix is not square or the exponent is negative.
     */
    powInPlace(exponent) {
        if (this.rows !== this.cols) {
            throw new Error("matrix must be square");
        }

        if (exponent < 0) {
            throw new Error("exponent must be positive");
        }

        if (exponent === 0) {
            const r = identity(this.rows);
            this.assign(r);
            return;
        }

        for (let i = 1; i < exponent; i++) {
            this.multiplicationInPlace(this);
        }
    }

    /**
     * Trace the matrix.
     * @returns {string}
     */
    trace() {
        let str = "";
        for (let i = 0; i < this.rows; i++) {
            let row = "";
            for (let j = 0; j < this.cols; j++) {
                row += this.get(i, j) + " ";
            }
            str = str.concat(row + "\n");
        }
        return str
    }

    /**
     * Copy this matrix and return a new matrix.
     * @returns {FriendlyMatrix}
     */
    copy() {
        return new FriendlyMatrix({
            rows: this.rows,
            cols: this.cols,
            ORDER: this.ORDER,
            matrix: this.matrix,
        });
    }

    /**
     * Assign this matrix to another matrix.
     * @param other
     */
    assign(other) {
        this.rows = other.rows;
        this.cols = other.cols;
        this.size = other.size;
        this.ORDER = other.ORDER;
        this.matrix = other.matrix;
    }

    /**
     * Update the matrix array of this matrix.
     * @param matrix
     */
    updateMatrix(matrix) {
        if (this.size !== matrix.length) {
            throw new Error("The size of the matrix must correspond to the size deduced from the rows * columns.\n" + usage())
        }
        this.matrix = matrix;
    }

    /**
     * Update the ORDER of this matrix.
     * @param order
     */
    updateOrder(order) {
        this.ORDER = order;
    }

    /**
     * Inverse the rows and columns of this matrix.
     */
    inverseColsRows() {
        const tmp = this.rows;
        this.rows = this.cols;
        this.cols = tmp;
        return this;
    }

    /**
     * Get the value at the specified row and column.
     * @param {number} row - The row index.
     * @param {number} col - The column index.
     * @returns {number} - The value at the specified position.
     */
    get(row, col) {
        if(this.ORDER === ORDER.RowMajor)
            return this.matrix[row * this.cols + col] ;
        return this.matrix[col * this.rows + row] ;
    }

    /**
     * Set the value at the specified row and column.
     * @param {number} row - The row index.
     * @param {number} col - The column index.
     * @param {number} value - The value to set.
     */
    set(row, col, value) {
        if (this.ORDER === ORDER.RowMajor) {
            this.matrix[row * this.cols + col] = value;
        }
        else this.matrix[col * this.rows + row] = value;

    }

    getRows() {
        return this.rows;
    }

    getCols() {
        return this.cols;
    }

    getSize() {
        return this.size;
    }

    getOrder() {
        return this.ORDER;
    }

    getMatrix() {
        return this.matrix;
    }
}

/**
 * Returns a string describing the usage of the FriendlyMatrix class.
 * @returns {string} Description of the FriendlyMatrix class usage.
 */
function usage() {
    return "usage: new Matrix({rows: number, cols: number, ORDER: ORDER, matrix: number[]})\n" +
        "rows: number of rows.\n" +
        "cols: number of columns.\n" +
        "ORDER: ORDER.RowMajor or ORDER.ColumnMajor.\n" +
        "matrix: array of numbers representing the matrix.\n" +
        "The size of the matrix must correspond to the size deduced from the rows * columns.";
}

/**
 * Enumeration representing the ORDER of a matrix.
 * @readonly
 * @enum {string}
 */
const ORDER = {
    RowMajor: 'RowMajor',
    ColumnMajor: 'ColumnMajor',
};

/**
 * Generate an identity matrix of the given size.
 * @param {number} size - The size of the identity matrix.
 * @returns {FriendlyMatrix} - The identity matrix.
 */
function identity(size) {
    const result = new FriendlyMatrix({
        rows: size,
        cols: size,
        ORDER: ORDER.RowMajor,
        matrix: new Array(size * size),
    });
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            result.set(i, j, i === j ? 1 : 0);
        }
    }

    return result;
}

module.exports = {Matrix: FriendlyMatrix, FM_ORDER: ORDER, fm_identity: identity, fm_usage: usage};
