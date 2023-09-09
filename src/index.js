import React from 'react';
import  ReactDom from 'react-dom/client'; 
import './index.css'


function App(){
   return(
   <div className="card">
    
  <Avatar/>
      
      <div className="data">

 <Intro/>

 <SkillList/>
      </div>
      
   </div>

   )

}


function Avatar() {

return(
<div>

<img src='me.jpg' className='avatar' alt='Me'/>

</div> );
}

function Intro(){
    return (<div>
        <h1 >Arya Chaubey</h1>
<p >
        
        Hello I am currently a student who is eager to learn new things.Apart from coding I like playing chess and singing songs.

    </p>
    </div>) 
}



function SkillList (){
    return ( 
        <div className='skill-list '>

       <Skill name = "HTML+CSS✌"  color="#FF3371"/>
       <Skill name = "JavaScript😎"color="#33FFC4"/>
        <Skill name = "React📰"color="skyblue"/>
        <Skill name = "DSA+JAVA📊 "color="#A833FF"/>
        <Skill name = "Web Development💻"color="#FFE633"/>
        <Skill name = "Web Design🎬"color="#FF4A9D95"/>

        </div>
    );
}



function Skill(props){
    return (
        <div className='skill'style={{backgroundColor:props.color}}>
          <span>{props.name}</span>
        </div>
    )
}



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)