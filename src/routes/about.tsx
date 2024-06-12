import { createFileRoute } from '@tanstack/react-router'
import '../index.css'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className='main-container'>
      <h2>About this page</h2>
      <p>Created by Liena Ritere.</p>
      <p>Your Year Song App was created with Spotify API, using a very nice Java wrapper/client "Spotify Web API Java". Find it on Github <a href="https://github.com/spotify-web-api-java/spotify-web-api-java">here</a>.</p>
      <p>Disclaimer: search results may be inaccurate due to the weird way the Spotify API filters work.</p>
    </div>
  )
}
