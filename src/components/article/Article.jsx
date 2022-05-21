import React from 'react'
import './article.css'
function Article({imgSrc}) {
  return (
    <div className="gpt3__article">
        <div className="gpt3__article__image">
         <img src={imgSrc} alt="article-img" />
        </div>
        <div className="gpt3__article__content">
         <h6>Sep 26, 2021</h6>
         <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
         <h6>Read Full Article</h6>
        </div>
    </div>
  )
}

export default Article