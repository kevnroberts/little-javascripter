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
	});
});