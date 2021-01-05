import React from 'react'
import styled from 'styled-components'

const NewsItemBlock = styled.div`
  display: flex;
  margin-top: 3rem;
`

const Thumbnail = styled.div`
  margin-right: 1rem;
  img {
    display: block;
    width: 160px;
    height: 160px;
    object-fit: cover;
  }
`

const Title = styled.h2`
  margin: 0;
  a {
    color: black;
  }
`

const Description = styled.p`
  margin: 0;
  line-height: 1.5;
  margin-top: 0.5rem;
  white-space: normal;
`

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article

  return (
    <NewsItemBlock>
      {urlToImage && (
        <Thumbnail>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage}  alt="thumbnail" />
          </a>
        </Thumbnail>
      )}
      <div>
        <Title>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </Title>
        <Description>{description}</Description>
      </div>
    </NewsItemBlock>
  )
}

export default NewsItem
