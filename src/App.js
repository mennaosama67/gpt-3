import {Navbar,CTA,Brand} from './components'
import {Header,Footer,Possibility,WhatGPT3,Blog,Features} from './containers'
import './app.css'
function App() {
  return (
    <div className="App">
        <div className="gradient__bg">
         <Navbar/>
         <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
