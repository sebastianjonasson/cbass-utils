function foreach(list, handler, context) {
  if(!list.length) {
    return undefined;
  }
  
  var item = list.pop();
  handler.call(context, item);
  foreach(list, handler, context);
}

module.exports = foreach
