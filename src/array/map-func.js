function map(list, handler, context) {
  var item, output = [];
  
  if(Array.isArray(list) === false) {
    return undefined;
  }

  if(!list.length) {
    return output;
  }

  item = list.pop();
  output.push(
    handler.call(context, item)
  )

  return [...map(list, handler, context), ...output];
}

console.log(map([1,2,3], function(i) { return i * 2}))
