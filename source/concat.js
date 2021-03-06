/**
 * @description
 *  Merges two arrays. Returns a new array.
 *  Same behaviour as Array.prototype.concat except array must be passed explicitly
 * @signature
 *  concat :: [a] -> [b] -> [a, b]
 *  concat :: ([a], [b]) -> [a, b] 
 * @example
 *  concat([1, 2, 3], [4, 5, 6]) = [1, 2, 3, 4, 5, 6];
 *  concat([1, 2, 3])([4, 5, 6]) = [1, 2, 3, 4, 5, 6];
 * 
 */

import {unmethod, pcurry } from "./exporter";
import twoParameter from "./private/twoParameter";

export default pcurry(twoParameter(unmethod(Array.prototype.concat)));
