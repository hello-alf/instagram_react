import React from 'react';
import { PhotoCard } from '../PhotoCard'
import {List, Item} from './styles'

export const ListOfPhotoCards = () => {
  return (
    <List>
      {
        [1,2,3].map((id) => (
          <Item key={id}>
            <PhotoCard />
          </Item>
        ))
      }
    </List>
  );
};