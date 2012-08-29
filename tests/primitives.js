describe("Primitives", function(){
	describe("car", function(){
		it("should return 'a' when param is ['a', 'b', 'c']", function(){
			var result = car(['a', 'b', 'c']);
			expect(result).toEqual('a');
		});

		it("should return ['a', 'b', 'c'] when param is [['a', 'b', 'c'], 'x', y', 'z']", function(){
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
});