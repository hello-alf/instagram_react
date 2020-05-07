import React from 'react'
import {Anchor, Image} from './styles'
const DEFAULT_IMAGE = 'https://c7.uihere.com/files/600/208/1001/instagram-logo-on-instagram-gradient-background-thumb.jpg'

export const Category = ({ cover=DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)