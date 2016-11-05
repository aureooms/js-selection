"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.singletco = singletco;

/**
 * Template for the recursive implementation of quickselect with explicit tail
 * call optimization.
 *
 */

function singletco(partition) {

	var select = function select(compare, a, i, j, k) {

		while (true) {

			if (j - i < 2) return;

			var p = partition(compare, a, i, j);

			if (k < p) j = p;else if (k > p) i = p + 1;else return;
		}
	};

	return select;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWlja3NlbGVjdC9zaW5nbGV0Y28uanMiXSwibmFtZXMiOlsic2luZ2xldGNvIiwicGFydGl0aW9uIiwic2VsZWN0IiwiY29tcGFyZSIsImEiLCJpIiwiaiIsImsiLCJwIl0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsUyxHQUFBQSxTOztBQU5oQjs7Ozs7O0FBTU8sU0FBU0EsU0FBVCxDQUFxQkMsU0FBckIsRUFBaUM7O0FBRXZDLEtBQU1DLFNBQVMsU0FBVEEsTUFBUyxDQUFXQyxPQUFYLEVBQXFCQyxDQUFyQixFQUF5QkMsQ0FBekIsRUFBNkJDLENBQTdCLEVBQWlDQyxDQUFqQyxFQUFxQzs7QUFFbkQsU0FBUSxJQUFSLEVBQWU7O0FBRWQsT0FBS0QsSUFBSUQsQ0FBSixHQUFRLENBQWIsRUFBaUI7O0FBRWpCLE9BQU1HLElBQUlQLFVBQVdFLE9BQVgsRUFBcUJDLENBQXJCLEVBQXlCQyxDQUF6QixFQUE2QkMsQ0FBN0IsQ0FBVjs7QUFFQSxPQUFVQyxJQUFJQyxDQUFkLEVBQWtCRixJQUFJRSxDQUFKLENBQWxCLEtBQ0ssSUFBS0QsSUFBSUMsQ0FBVCxFQUFhSCxJQUFJRyxJQUFJLENBQVIsQ0FBYixLQUNhO0FBRWxCO0FBRUQsRUFkRDs7QUFnQkEsUUFBT04sTUFBUDtBQUVBIiwiZmlsZSI6InNpbmdsZXRjby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBUZW1wbGF0ZSBmb3IgdGhlIHJlY3Vyc2l2ZSBpbXBsZW1lbnRhdGlvbiBvZiBxdWlja3NlbGVjdCB3aXRoIGV4cGxpY2l0IHRhaWxcbiAqIGNhbGwgb3B0aW1pemF0aW9uLlxuICpcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xldGNvICggcGFydGl0aW9uICkge1xuXG5cdGNvbnN0IHNlbGVjdCA9IGZ1bmN0aW9uICggY29tcGFyZSAsIGEgLCBpICwgaiAsIGsgKSB7XG5cblx0XHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRcdGlmICggaiAtIGkgPCAyICkgcmV0dXJuIDtcblxuXHRcdFx0Y29uc3QgcCA9IHBhcnRpdGlvbiggY29tcGFyZSAsIGEgLCBpICwgaiApIDtcblxuXHRcdFx0aWYgICAgICAoIGsgPCBwICkgaiA9IHAgO1xuXHRcdFx0ZWxzZSBpZiAoIGsgPiBwICkgaSA9IHAgKyAxIDtcblx0XHRcdGVsc2UgICAgICAgICAgICAgIHJldHVybiA7XG5cblx0XHR9XG5cblx0fSA7XG5cblx0cmV0dXJuIHNlbGVjdCA7XG5cbn1cbiJdfQ==