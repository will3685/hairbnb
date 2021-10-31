import React from 'react'

import Thumbnail from './Thumbnail'

import styled from "styled-components";

const ThumbnailGrid = ({ thumbnails, onClick }) => (
  <Window>
    {thumbnails.map((thumbnail, i) => (
      <Thumbnail
        key={thumbnail.imgUrl}
        imgUrl={thumbnail.imgUrl}
        index={i}
        onClick={onClick}
      />
    ))}
    </Window>
  )

const Window = styled.div`
height: 35%;
width: 100%;
display: flex;
flex-wrap: wrap;
`

export default ThumbnailGrid