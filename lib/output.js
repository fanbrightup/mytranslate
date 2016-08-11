/**
 *
 * output.js
 *
 *
 * @author fantasy <fantasyshao@icloud.com>
 * @create 16/8/14
 * @update 16/8/14
 */
var colors = require('colors');

module.exports = function(data) {
  // Output
  var i, temp, word = data.query;

  console.log('\n ' + word.bold);

  if (data.basic != null) {
    var us = typeof data.basic['us-phonetic'] === 'string' ? '美音: [' + data.basic['us-phonetic'] + ']' : '',
        uk = typeof data.basic['uk-phonetic'] === 'string' ? '英音: [' + data.basic['uk-phonetic'] + ']' : '';

    if (uk && us) {
      console.log('       '+ us + '      ' + uk);
    } else if (typeof data.basic['phonetic'] == 'string') {
      console.log('\n ' + '拼音'.bold.underline.green + '：[' + data.basic['phonetic'] + ']');
    }
    for(let i = 0;i < data.basic['explains'].length;i++){
      console.log('\n ' + '翻译'.bold.underline.blue + '：' + data.basic['explains'][i] + '\n');
    }
    console.log('\n ' + '翻译'.bold.underline.blue + '：' + data.basic['explains'] + '\n');
  }
   if (data.web != null ) {
    console.log('\n ' + '网络释义:'.bold.underline.blue);

    for (i = 0; i < data.web.length; i++) {
      temp = data.web[i];

      console.log('\n  ' + (i+1) + '. ' + temp.key);
      console.log('\n  ' + temp.value);
    }

    console.log('');
  } else {
    console.log('\n ' + '暂无释义.'.bold.underline);
  }
  console.log(data);
};
