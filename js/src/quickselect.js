
/**
 * Template for the recursive implementation of quickselect.
 *
 */

var quickselect = function ( partition ) {

	var quickselect = function ( compare, a, i, j, k ) {

		var p;

		if (j - i < 2) {
			return;
		}

		p = partition( compare, a, i, j );

		if (k < p) {
			quickselect( compare, a, i, p, k );
		}
		else if (k > p) {
			quickselect( compare, a, p + 1, j, k );
		}
	};

	return quickselect;

};

exports.quickselect = quickselect;
