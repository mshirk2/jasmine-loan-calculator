
describe("Monthly payment calculation", function(){

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 20000, years: 20, rate: 7})).toEqual('155.06')
});

it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 3, years: 1, rate: 3})).toEqual('0.25');
});

it("should return 0 if loan amount is 0", function(){
  expect(calculateMonthlyPayment({amount: 0, years: 1, rate: 3})).toEqual('0.00');
})

it("should accept a rate of 0", function(){
  expect(calculateMonthlyPayment({amount: 25000, years: 20, rate: 0})).toEqual('2083.33');
})

it("should accept large amounts", function(){
  expect(calculateMonthlyPayment({amount: 1000000000, years: 20, rate: 20})).toEqual('16988246.08');
})

it("should accept small amounts", function(){
  expect(calculateMonthlyPayment({amount: 1, years: 1, rate: 1})).toEqual('0.08');
})

it("should return", function(){
  expect(calculateMonthlyPayment({amount: 800, years: 3, rate: 4})).toBeDefined();
})

});

