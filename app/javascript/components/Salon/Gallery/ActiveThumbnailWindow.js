import React from "react";

import styled from "styled-components";

const ActiveThumbnailWindow = ({ activeThumbnail }) => (
    <Window>
      <img src={activeThumbnail.imgUrl} />
    </Window>
  )

const Window = styled.div`
  height: 65%;
  width: 100%;
  background: #333;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`

export default ActiveThumbnailWindow