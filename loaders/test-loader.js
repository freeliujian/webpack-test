
module.exports = function(content){
  console.log(content);
  this.emitFile('刘坚是个大帅哥',content);
  console.log(this.getOptions());
  console.log(this.utils.contextify(
    this.context,
    this.utils.absolutify(this.context, './index.js')
  ))
  console.log(this.context)
  console.log(this.utils.absolutify('1','1'));
  return content;
}