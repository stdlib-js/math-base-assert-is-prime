/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var trunc = require( '@stdlib/math-base-special-trunc' );
var randu = require( '@stdlib/random-base-randu' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var PRIMES = require( './fixtures/primes.js' );
var isPrime = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isPrime, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a prime number', function test( t ) {
	var N;
	var M;
	var v;
	var i;
	var j;

	// Test the first `M` prime numbers...
	M = 2e4;
	for ( i = 0; i < M; i++ ) {
		v = PRIMES[ i ];
		t.equal( isPrime( v ), true, 'returns expected value when provided '+v );
	}
	// Randomly test prime numbers chosen from the remainder of the list of known prime numbers...
	N = PRIMES.length - 1;
	for ( i = 0; i < 1e3; i++ ) {
		j = discreteUniform( M, N );
		v = PRIMES[ j ];
		t.equal( isPrime( v ), true, 'returns expected value when provided '+v );
	}
	t.end();
});

tape( 'the function returns `false` if provided a composite number', function test( t ) {
	var hash;
	var MAX;
	var M;
	var N;
	var i;
	var j;

	N = PRIMES.length;
	hash = {};
	for ( i = 0; i < N; i++ ) {
		hash[ PRIMES[ i ] ] = true;
	}
	// Only test odd integers, as even integers are trivially composite...
	M = 2e5;
	for ( i = 3; i < M; i += 2 ) {
		if ( hash[ i ] ) {
			continue;
		}
		t.equal( isPrime( i ), false, 'returns expected value when provided '+i );
	}
	// Generate random composite integers...
	MAX = PRIMES[ N-1 ];
	for ( i = 0; i < 1e3; i++ ) {
		// Generate an odd integer...
		j = discreteUniform( trunc( M / 2 ), trunc( MAX / 2 ) );
		j = ( 2 * j ) + 1;

		// Check if the generated integer is a known prime number...
		if ( hash[ j ] ) {
			// Repeat iteration...
			i -= 1;
			continue;
		}
		t.equal( isPrime( j ), false, 'returns expected value when provided '+j );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a positive integer', function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		v = ( randu() * 100.0 ) - 50.0;
		if ( trunc(v) !== v ) {
			t.equal( isPrime( v ), false, 'returns expected value when provided '+v );
		}
	}
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', function test( t ) {
	t.equal( isPrime( NaN ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `+infinity`', function test( t ) {
	t.equal( isPrime( PINF ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided `-infinity`', function test( t ) {
	t.equal( isPrime( NINF ), false, 'returns expected value' );
	t.end();
});
