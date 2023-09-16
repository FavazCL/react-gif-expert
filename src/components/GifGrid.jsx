import React, { Fragment, useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  // Custom hook
  const { images, isLoading } = useFetchGifs(category);
  
  // Ocupar destructiration 
  return (
    <Fragment>
        <h3>{category}</h3>
        {
          isLoading && <h2>Cargando...</h2>
        }
        <div className='card-grid'>
            { images.map( (image) => (
                <GifItem 
                    key={image.id}
                    { ...image}
                />
            ))}
        </div>
    </Fragment>
  )
}
