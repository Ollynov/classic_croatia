
var client = contentful.createClient({
  space: 's68hzlm32e9n',
  accessToken: '029c7bc880752bb7ef375f19c598b4a769deeca51ed847839f891bcc122c44a3'
})

console.log('ok our client is: ', client)

let genericCroatiaImages = [];
let heroImages = [];

client.getAssets()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {

    let split = entry.fields.title.split(' ')[0] + entry.fields.title.split(' ')[1]
    if(split === "CroatiaGeneric") {
      genericCroatiaImages.push(entry.fields.file.url)
    }
  })
})
.then(function(result) {
  $('.genericCroatia').each(function(index) {
    let path = 'http:' + genericCroatiaImages[index];
    $(this).attr('src', path)
  })
})







function myMap()
{
  myCenter=new google.maps.LatLng(45.363437,13.637642);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {changeNavOnScroll()};
function changeNavOnScroll() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleNav() {
    var x = document.getElementById("smallNav");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}