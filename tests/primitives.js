describe("Primitives", function(){
	describe("car", function(){
		it("should return 'a' when param is ['a', 'b', 'c']", function(){
			var result = car(['a', 'b', 'c']);
			expect(result).toEqual('a');
		});

		it("should return ['a', 'b', 'c'] when param is [['a', 'b', 'c'], 'x', 'y', 'z']", function(){
			var subArr = ['a', 'b', 'c'];
			var arr = [subArr, 'x', 'y', 'z'];
			var result = car(arr);
			expect(result).toEqual(subArr);
		});

		it("should return 'null' when param is 'hotdog'", function(){
			expect(car('hotdog')).toBe(null);
		});

		it("should return 'null' when param is []", function(){
			expect(car([])).toBe(null);
		});
	});

	describe("cdr", function(){
		it("should return ['b', 'c'] when param is ['a', 'b', 'c']", function(){
			var result = cdr(['a', 'b', 'c']);
			expect(result.length).toEqual(2);
			expect(result[0]).toEqual('b');
			expect(result[1]).toEqual('c');
		});
		it("should return ['x', 'y', 'z'] when param is [['a', 'b', 'c'], 'x', 'y', 'z']", function(){
			var result = cdr([['a', 'b', 'c'], 'x', 'y', 'z']);
			expect(result.length).toEqual(3);
			expect(result[0]).toEqual('x');
			expect(result[1]).toEqual('y');
			expect(result[2]).toEqual('z');
		});
		it("should return [] when param is ['hamburger']", function(){
			var result = cdr(['hamburger']);
			expect(result.length).toEqual(0);
		});
		it("should return 'null' when param is 'hotdogs'", function(){
			var result = cdr('hotdogs');
			expect(result).toBe(null);
		});
		it("should return 'null' when param is []", function(){
			var result = cdr([]);
			expect(result).toBe(null);
		});

		describe("cdr with car", function(){
			it("should return ['x', 'y'] when calling car(cdr([['b'], ['x', 'y'], [['c']]]))", function(){
				var result = car(cdr([['b'], ['x', 'y'], [['c']]]));
				expect(result.constructor).toEqual(Array);
				expect(result.length).toEqual(2);
				expect(result[0]).toEqual('x');
				expect(result[1]).toEqual('y');
			});
			it("should return [[['c']]] when calling cdr(cdr([['b'], ['x', 'y'], [['c']]]))", function(){
				var result = cdr(cdr([['b'], ['x', 'y'], [['c']]]));
				expect(result instanceof Array).toEqual(true);
				expect(result.length).toEqual(1);
				var sub1 = result[0];
				expect(sub1 instanceof Array).toEqual(true);
				expect(sub1.length).toEqual(1);
				var sub2 = sub1[0];
				expect(sub2 instanceof Array).toEqual(true);
				expect(sub2.length).toEqual(1);
				expect(sub2[0]).toEqual('c');
			});
			it("should return 'null' when calling cdr(car(['a', ['b', ['c']], 'd']))", function(){
				var result = cdr(car(['a', ['b', ['c']], 'd']));
				expect(result).toBe(null);
			});
		});
	});

	describe("cons", function(){
		it("should return ['peanut', 'butter', 'and', 'jelly'] when calling cons('peanut', ['butter', 'and', 'jelly'])", function(){
			var result = cons('peanut', ['butter', 'and', 'jelly']);
			expect(result.length).toEqual(4);
			expect(result[0]).toEqual('peanut');
			expect(result[1]).toEqual('butter');
			expect(result[2]).toEqual('and');
			expect(result[3]).toEqual('jelly');
		});
		it("should return [['banana', 'and'], 'peanut', 'butter', 'and', 'jelly'] when calling cons(['banana', 'and'], ['peanut', 'butter', 'and', 'jelly'])", function () {
			var result = cons(['banana', 'and'], ['peanut', 'butter', 'and', 'jelly']);
			expect(result.length).toEqual(5);
			expect(result[0] instanceof Array).toEqual(true);
			expect(result[0].length).toEqual(2);
			expect(result[0][0]).toEqual('banana');
			expect(result[0][1]).toEqual('and');
			expect(result[1]).toEqual('peanut');
			expect(result[2]).toEqual('butter');
			expect(result[3]).toEqual('and');
			expect(result[4]).toEqual('jelly');
		});
		it("should return ['a'] when calling cons('a', [])", function(){
			var result = cons('a', []);
			expect(result.length).toEqual(1);
			expect(result[0]).toEqual('a');
		});
	});
	describe("isNull", function(){
		it("should return 'true' when calling isNull([])", function(){
			var result = isNull([]);
			expect(result).toEqual(true);
		});
		it("should return 'false' when calling isNull(['a', 'b', 'c'])", function(){
			var result = isNull(['a', 'b', 'c']);
			expect(result).toEqual(false);
		});
		it("should return 'null' when calling isNull('spaghetti')", function(){
			var result = isNull('spaghetti');
			expect(result).toEqual(null);
		});
	});
	describe("isAtom", function(){
		it("should return 'true' when calling isAtom('Harry')", function(){
			expect(isAtom('Harry')).toEqual(true);
		});
		it("should return 'false' when calling isAtom(['Harry', 'had', 'a', 'heap', 'of', 'apples'])", function(){
			expect(isAtom(['Harry', 'had', 'a', 'heap', 'of', 'apples'])).toEqual(false);
		});
		it("should return 'true' when calling isAtom(car(['Harry', 'had', 'a', 'heap', 'of', 'apples']))", function(){
			expect(isAtom(car(['Harry', 'had', 'a', 'heap', 'of', 'apples']))).toEqual(true);
		});
		it("should return 'false' when calling isAtom(cdr(['Harry', 'had', 'a', 'heap', 'of', 'apples']))", function(){
			expect(isAtom(cdr(['Harry', 'had', 'a', 'heap', 'of', 'apples']))).toEqual(false);
		});
	});
	describe("isEq", function () {
		it("should return 'true' when calling isEq('Harry', 'Harry')", function () {
			expect(isEq('Harry', 'Harry')).toEqual(true);
		});
		it("should return 'false' when calling isEq('margarine', 'butter')", function(){
			expect(isEq('margarine', 'butter')).toEqual(false);
		});
		it("should return 'null' when calling isEq([], ['strawberry'])", function(){
			expect(isEq([], ['strawberry'])).toEqual(null);
		});
		it("should return 'null' when calling isEq(6, 7)", function(){
			expect(isEq(6, 7)).toEqual(null);
		});
	});
});