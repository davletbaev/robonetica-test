import React, { Fragment } from 'react'

import { Socials, BackgroundVideo, Partners } from 'components'
import { Heading, Button, Paragraph } from 'uikit'

const RequestPage = () => {
  return (
    <main>
      <Socials />

      <Heading>
        Welcome to Robonetica Community! Be ready for the next great mission!
      </Heading>
      <Button>Join</Button>

      <Partners />

      <Paragraph>
        Robonetica AI Software and Virtual Platform help robots to get smart enough to be guided by you.
      </Paragraph>
      <Paragraph>
      Robonetica Robots are made to perform complex purpose defined by its creator. This robot is ready to perform its purpose – to explore the new territories.
      </Paragraph>
      <Paragraph>
      Explore new territories with Robonetica and became a creator of autonomous robots
      </Paragraph>
      
      <BackgroundVideo />
    </main>
  )
}

export default RequestPage