
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'ご感想をリアルタイムにお聞かせください！' });
};