/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const result_book: number[] = [];

    if (numbers.length > 0) {
        result_book.push(numbers[0], numbers[numbers.length - 1]);
    }

    return result_book;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const result: number[] = numbers.map((value: number): number => value * 3);
    return result;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str: string): number => {
        let result = 0;
        if (Number(str)) {
            result = parseInt(str);
        }

        return result;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str: string): number => {
        let result = 0;
        const temp = str[0] == "$" ? str.slice(1) : str;

        if (Number(temp)) {
            result = parseInt(temp);
        }

        return result;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const temp = messages.filter((str: string): boolean =>
        str[str.length - 1] == "?" ? false : true
    );

    return temp.map((str: string): string =>
        str[str.length - 1] == "!" ? str.toUpperCase() : str
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((str: string): boolean =>
        str.length < 4 ? true : false
    ).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let result = true;

    if (colors.length > 0) {
        const temp_colors = colors.filter((str: string): boolean =>
            str == "red" || str == "blue" || str == "green" ? true : false
        );

        result = temp_colors.length == colors.length;
    }

    return result;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let result = "0=0";
    if (addends.length > 0) {
        const sum_string = addends.reduce(
            (sum: number, value: number): number => sum + value,
            0
        );

        const number_string = addends.reduce(
            (str: string, value: number): string => str + value + "+",
            "="
        );

        result = sum_string + number_string.slice(0, number_string.length - 1);
    }

    return result;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const result = [...values];

    if (
        result.filter((value: number): boolean => (value > 0 ? true : false))
            .length != values.length
    ) {
        result.splice(
            result.findIndex((value: number): boolean =>
                value < 0 ? true : false
            ) + 1,
            0,
            result.reduce(
                (sum: number, value: number, index: number): number =>
                    sum +
                    value *
                        ((index <
                            result.findIndex((value: number): boolean =>
                                value < 0 ? true : false
                            )) as unknown as number),
                0
            )
        );
    } else {
        result.push(
            result.reduce(
                (sum: number, value: number): number => sum + value,
                0
            )
        );
    }

    return result;
}
