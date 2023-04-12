const index = (req, res) => res.render('index.html', {user : req.session.user });

module.exports =  {
  index,
}
