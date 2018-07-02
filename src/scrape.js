const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare

//credentials
.goto('https://www.instagram.com/accounts/login')
.click('._9nyy2')
.type('._9nyy2', 'josethepereira@gmail.com')

.click('input[type="password" i]')
.type('input[type="password" i]', 'Jose2811858')
  

.click('.yZn4P')

//explore page
.wait('.coreSpriteDesktopNavExplore')
.click('.coreSpriteDesktopNavExplore')

//explore a specific user
.wait(5000)
.click('.x3qfX:placeholder-shown')
.type('.x3qfX:placeholder-shown', 'amancodes.js')


.goto('https://www.instagram.com/amancodes.js/followers/')

//testing for the follow btn
.evaluate(function() {
  document.getElementsByName("k9GMp ")[0].li[3].selected = true;
})
.end()
.then(function(result) {
  console.log(result);
})
.catch(function(error) {
  console.error("Error:", error);
})





  .catch(error => {
    console.error('Search failed:', error)
  })
  