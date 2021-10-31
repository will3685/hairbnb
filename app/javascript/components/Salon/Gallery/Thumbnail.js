import React from 'react'

import styled from "styled-components";

const Thumbnail = ({ imgUrl, index, onClick }) => (
  <Window>
    <img src={imgUrl} data-index={index} onClick={onClick} />
  </Window>
)

const Window = styled.div`
  height: 50%;
  width: 25%;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
}
`

export default Thumbnail