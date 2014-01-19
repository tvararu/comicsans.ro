if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Lorem ipsum'
  });
  
  Posts.insert({
    title: 'Dolor sit'
  });
}