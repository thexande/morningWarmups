$.getJSON('https://www.reddit.com/r/aww.json', function(data){
  data.data.children.forEach(function(val, key) {
    var title = document.createElement("h1")
    title.innerHTML = val.data.title;
    var img = document.createElement('img')
    img.src = val.data.thumbnail
    $('#container').append(title, img)
  })
})
