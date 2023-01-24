function verify(){
    let arr=[28,9,1,9,8,5];
    let s = "hangnguyen";
    let list = ["jan", "feburary", "march", "april", "may"];

    describe("sum", function(){
        it("Sum all the numbers in an array of numbers", function(){
            assert.equal(sum(arr), 60);
        });
    });
    describe("multiply", function(){
        it("Multiply all the numbers in an array of numbers", function(){
            assert.equal(multiply(arr), 90720);
        });
    });
    describe("reverse", function(){
        it("Compute the reversal of a string ", function(){
            assert.equal(reverse(s), "neyugngnah");
        });
    });

    describe("filterLongWords", function(){
        it("Takes an array of words and an integer i and returns the array of words that are longer than i", function(){
            assert.deepEqual(filterLongWords(list,3),[ 'feburary', 'march', 'april' ]);
        });
    });
}