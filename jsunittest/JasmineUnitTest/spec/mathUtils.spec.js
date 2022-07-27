describe("MathUtils", function() {
    var calculate;
 
    //This will be called before running each spec
    beforeEach(function() {
        calculate = new MathUtils();
    });
 
 
    describe("when calculate runs math operations", function(){
      
        //Spec for sum operation
        it("should be able to calculate sum of 10 and 5", function() {
            expect(calculate.sum(10,5)).toEqual(15);
        });
        //Spec for subtraction operation
        it("should be able to calculate the difference between 10 and 5", function() {
            expect(calculate.subtract(10,5)).toEqual(5);
        });
 
        //Spec for multiply operation
        it("should be able to multiply 10 and 5", function() {
            expect(calculate.multiply(10, 5)).toEqual(50);
        });
          
        //Spec for division operation
        it("should be able to calculate 10 divided by 5", function() {
            expect(calculate.divide(10,5)).toEqual(2);
        });

        //Spec for average operation
        it("should be able to find the average of 10 and 20", function() {
            expect(calculate.average(10, 20)).toEqual(15);
        });
 
    });
 
});