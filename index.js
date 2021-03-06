
var client = contentful.createClient({
  space: 's68hzlm32e9n',
  accessToken: '029c7bc880752bb7ef375f19c598b4a769deeca51ed847839f891bcc122c44a3'
})


let genericCroatiaImages = [];
let heroImages = {};

client.getAssets()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {

    let split = entry.fields.title.split(' ')[0] + entry.fields.title.split(' ')[1]
    console.log('split is: ', split)
    if(split === "CroatiaGeneric") {
      genericCroatiaImages.push(entry.fields.file.url)
    }

    if (split === "hero1") {
      heroImages["0"] = entry.fields.file.url
    }
    if (split === "hero2") {
      heroImages["1"] = entry.fields.file.url
    }
    if (split === "hero3") {
      heroImages["2"] = entry.fields.file.url
    }
  })
})
.then(function(result) {
  $('.genericCroatia').each(function(index) {
    let path = 'http:' + genericCroatiaImages[index];
    $(this).attr('src', path)
  })  


  $('.hero').each(function(index) {
    let path = 'http:' + heroImages[index];
    console.log('ok path for hero is: ', path)
    $(this).css('background-image', "url(" + path + ")")
  })
})

// About the House
client.getEntry('1oZPhoCtiMuQ8kcKOCI6UA')
.then((entry) => {
  $('#houseDescription').text(entry.fields.text)
})
.catch(console.error)

// About the host Marija
client.getEntry('2NcdcWnhSgwkO6IGgAYcK2')
.then((entry) => {
  $('#hostDescription').text(entry.fields.text)
})
.catch(console.error)

// Phone Number
client.getEntry('5yY1vewASs0kuQgaqyYgiK')
.then((entry) => {
  $('#phone').text(entry.fields.number)
})
.catch(console.error)





function myMap() {
  client.getEntry('k0wvRCwLssMaGIE8g0C2')
  .then((entry) => {
    const lat = entry.fields.lat;
    const long = entry.fields.long;
    myCenter=new google.maps.LatLng(lat,long);
    // myCenter=new google.maps.LatLng(45.363437,13.637642);
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
  })
  .catch(console.error)
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