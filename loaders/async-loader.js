module.exports = function (content, map, meta) {
  const callback = this.async();
  setTimeout(() => {
    console.log('async test');
    callback(null, content, map, meta);
  },1000);
};

module.exports.pitch = function(){
  console.log('async pitch');
}