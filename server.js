// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

//Hier komen de routes voor onze website. MARK: API
const api = "https://fdnd-agency.directus.app/items/tm_"
const api_users = "users"
const api_profile = "profile"
const api_buddy = "buddy"
const api_lang = "language"
const api_audio = "audio"
const api_playlist = "playlist"
const api_speaker_profile = "preview"
const api_story = "story"
const api_animal = "animal"
const api_season = "season"
const api_likes = "likes" 
const api_segments = "segments"
const api_events = "events"
const api_results = "results"

//Hier komen de fetches naar de API. MARK: Fetch API
const usersResponse = await fetch(`${api}${api_users}`)
const profileResponse = await fetch(`${api}${api_profile}`)
const buddyResponse = await fetch(`${api}${api_buddy}`)
const languageResponse = await fetch(`${api}${api_lang}`)
const audioResponse = await fetch(`${api}${api_audio}`)
const playlistResponse = await fetch(`${api}${api_playlist}`)
const previewResponse = await fetch (`${api}${api_speaker_profile}`)
const storyResponse = await fetch(`${api}${api_story}`)
const animalReponse = await fetch(`${api}${api_animal}`)
const seasonResponse = await fetch(`${api}${api_season}`)
const likesResponse = await fetch(`${api}${api_likes}`)
const segmentsResponse = await fetch (`${api}${api_segments}`)
const eventsResponse = await fetch (`${api}${api_events}`)
const resultsResponse = await fetch (`${api}${api_results}`)


//Hier wordt de data opgehaald en vertaald in JSON. MARK: JSON DATA
const usersResponseJSON = await usersResponse.json()
const profileResponseJSON = await profileResponse.json()
const buddyResponseJSON = await buddyResponse.json()
const languageResponseJSON = await languageResponse.json()
const audioResponseJSON = await audioResponse.json()
const playlistResponseJSON = await playlistResponse.json()
const previewResponseJSON = await previewResponse.json()
const storyResponseJSON = await storyResponse.json()
const animalReponseJSON = await animalReponse.json()
const seasonResponseJSON = await seasonResponse.json()
const likesResponseJSON = await likesResponse.json()
const segmentsResponseJSON = await segmentsResponse.json()
const eventsResponseJSON = await eventsResponse.json()
const resultsResponseJSON = await resultsResponse.json()
// console.log(likesResponseJSON)
// console.log(segmentsResponseJSON)
// console.log(eventsResponseJSON)
// console.log(resultsResponseJSON)



// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid()
app.engine('liquid', engine.express())

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// MARK: Homepage
app.get('/', async function (request, response) {
  response.render('index.liquid')
})

// MARK: Lessons
app.get('/lessons', async function (request, response) {
  response.render('lessons.liquid')
})

//MARK: Profilepage
app.get('/profile', async function (request, response) {
  response.render('profilepagina.liquid')
})

// MARK: Statistics
app.get('/statistics', async function (request, response) {
  response.render('statistics.liquid')
})

// MARK: Story settings
app.get('/story-settings', async function (request, response) {
  const previewResponse = await fetch (`${api}${api_speaker_profile}`)

  const previewResponseJSON = await previewResponse.json()

  
  
  response.render('storysettings.liquid', {
    preview: previewResponseJSON.data

  })
})

app.get('/all-stories', async function (request, response) {

  const language = await fetch('https://fdnd-agency.directus.app/items/tm_language');
  const stories = await fetch('https://fdnd-agency.directus.app/items/tm_story?fields=*,audio.audio_file,audio.transcript');
  
  const languageJSON = await language.json();
  const storiesJSON = await stories.json();

 
  // Zie https://expressjs.com/en/5x/api.html#res.render over response.render()
  response.render('all-stories.liquid', { language: languageJSON.data, stories: storiesJSON.data })
})

// MARK: tekstwolkje
app.get('/tekstwolkje', async function (request, response) {
  response.render('tekstwolkje.liquid')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  console.log(`http://localhost:${app.get('port')}`)
})