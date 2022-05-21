import React from 'react'
import Article from '../../components/article/Article'
import './blog.css'
import {article1,article2,article3,article4,article5} from './imports'
function Blog() {
  return (
    <div className="gpt3__blogs section__padding" id='blog'>
     <h1 className="gradient__text">A lot is happening, <br/>
     We are blogging about it.</h1>
     <div className="gpt3__blogs__container">
     <div className="gpt3__blogs__container__groupA">
     <Article imgSrc={article1}  />
     </div>
     <div className="gpt3__blogs__container__groupB">
     <Article imgSrc={article2} />
     <Article imgSrc={article3} />
     <Article imgSrc={article4} />
     <Article imgSrc={article5}/>
     </div>
      
     </div>
    </div>
  )
}

export default Blog