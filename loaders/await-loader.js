module.exports = function(content,map,meta) {
  /**
   * arg[0] 错误处理
   * content 处理后的内容
   * map source-map
   * meta 给下一个loader的参数
   */
   console.log('await test');
   console.log(content);
  this.callback(null,content,map,meta);
}

module.exports.raw = true;

module.exports.pitch = function(){
  console.log('await pitch');
}