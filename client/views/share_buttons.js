Template.shareButtons.events({
  'click .btn-facebook': function () {
    FB.ui({
      method: 'share',
      href: 'http://comicsans.ro/',
    }, function(){});
  }
});
