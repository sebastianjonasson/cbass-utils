var utils = require('../src/index.js')
var expect = require('expect.js')

var assert = require('assert');
describe('Array', function() {
  var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  var SUM = 0;
  for (var i = 0; i < list.length; i++) {
  	SUM += list[i]
  }

  
  /*
   *  Foreach
   */
  describe('foreach', function() {
    it('should return undefined', function() {
      
      
      var ret = utils.foreach(list, function(item) {
        // Do work
      })
      
      assert.equal(ret, undefined);
    });

    it(`should be able to set function context`, function() {
    	var context = { sum: 0 };
    	utils.foreach(list, function(value) {
    		this.sum += value
    	}, context)
    	assert.equal(context.sum, SUM);
    })

    //** TODO: Add test for param validator

  })

  /*
   *  Map
   */
  describe('map', function() {
  	it('should return array', function() {
  		var ret = utils.map([], function(value) {
  			return value
  		})
  		expect(ret).to.be.an('array')
  	})

  	it('should return mapped values array', function() {
  		var list2 = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]
  		var ret = utils.map(list, function(value) {
  			return value * 10
  		})

  		expect(ret).to.eql(list2)
  	})

  	it('should be able to set function context', function() {
  		var context = { sum: 0 };

  		utils.map(list, function(value) {
  			this.sum += value
  		}, context);

  		expect(context.sum).to.eql(SUM)
  	})
  })

  /*
   *  Find
   */
   describe('find', function() {
     it('should return value if match', function() {
     	var ret = utils.find(list, function(value) {
     		return value === 5
     	})
     	
     	expect(ret).to.eql(5)
     })

     it('should return null if no match', function() {
     	var ret = utils.find(list, function(value) {
     		return value === 1337
     	})
     	
     	expect(ret).to.eql(null)
     })

     it('should be able to set function context', function() {
  		var context = { sum: 0 };

  		utils.find(list, function(value) {
  			this.sum += value
  			return value === 20
  		}, context);

  		expect(context.sum).to.eql(SUM)
  	})

     describe('find', function() {
     	it('should return values ')
     })
   })

});