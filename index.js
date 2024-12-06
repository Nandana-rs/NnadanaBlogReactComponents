import React from 'react';
import {createRoot} from 'react-dom/client';
//semantic Ui Boostrap for react
import 'semantic-ui-css/semantic.min.css'

// import IncrementCounter from './components/stateWithFunction';
// import IncrementCounterClass from './components/stateWithClass';
// import Comp1 from './components/basicClassComp';
// import Text from './components/textBoxEvent';

// import { Car} from './components/carColor';
// import Card1 from './components/card';
// import dep1 from './components/images/dep1.jpg';
// import dep2 from './components/images/dep2.jpg';
// import dep3 from './components/images/dep3.jpg';

// import Website from './components/demoWebsite';
// import HeaderExampleImage from './components/header.js'
import Website from './components/demoWebsite';
import gallery1 from './components/images/gallery1.jpg'
import gallery3 from './components/images/gallery3.jpg'
import Gallery from './components/Gallery';










//common connecting for components

function App() {
  return (
    <div>
      <Website />
      <Gallery 
      pic= {gallery1}
      title = 'Sunset'
      description = 'A sunset is a breathtaking natural phenomenon that marks the end of the day and the transition into the night. As the sun dips below the horizon, it paints the sky with vibrant hues of orange, pink, purple, and red. This fleeting moment offers a sense of calm and reflection, reminding us of the beauty and transience of time. Whether viewed from a beach, a mountain peak, or in the middle of a bustling city, sunsets evoke feelings of peace and wonder. It’s a daily spectacle that serves as a reminder to pause and appreciate the simple pleasures of nature.'
       />

<Gallery 
      pic= {gallery3}
      title = 'Pineforest'
      description = 'A pine forest is a tranquil and scenic natural landscape dominated by tall, evergreen pine trees. These forests are known for their dense canopy of long, needle-like leaves that create a serene, almost mystical atmosphere. The air in a pine forest is often crisp and fresh, filled with the soothing scent of pine resin. These forests provide essential habitats for various wildlife species, including birds, mammals, and insects. The soft, pine-needle-covered ground is perfect for peaceful walks, where the rustling of the branches in the breeze adds to the calm ambiance. Pine forests are often associated with resilience and longevity, as the trees can survive in diverse climates, ranging from temperate to subarctic regions.'
       />
       
       <Footer/>








      {/* //card.js */}
      {/* <Card1
            pic ={dep1}
            title='Nandana'
            text ='Software engineer' />
      
            <Card1
            pic ={dep2}
            title='Naveen'
            text ='Professional Photographer' />
      
            <Card1
            pic ={dep3}
            title='Anoop'
            text ='Professional Editor' /> */}


    </div>
  );
}


const Footer =()=>
{
  return(
    <div>
 {/* Footer */}
 <footer style={{ textAlign: "center", marginTop: "20px" , backgroundColor: '#808080',  }}>
          <p>nandanars@gmail.com | About Me | Contact Me | Privacy Policy</p>
        </footer>


    </div>
  )
}

// basic Function Components

// const Comp1 =()=>
// {
//   return(
//     <div>
//       <h1>Register Here</h1>
//     </div>
//   )
// }

// const Comp2 =()=>
//   {
//     return(
//       <div>
//         <h2 style={{backgroundColor : "Cyan"}}>Hello World.....</h2>
//       </div>
//     )
//   }

// const Comp3 =()=>
// {
//   return(
//     <div>
//       <h3>RULES</h3>
//       <ol>
//         <li> Datas will be stored</li>
//         <li> Editing not allowed</li>
//         <li> Enter details correctly</li>
//       </ol>
//     </div>
//   )
// }

// const Comp4 =()=>
// {
//   return(
//     <div>
//       <form>
//         <label for="name">Name : </label>
//         <input type="text" id="name" ></input>
//       <br></br>
//       <br></br>
//         <label for="age">Age   : </label>
//         <input type="number" id="age" ></input>
      
//       </form>

//     </div>
//   )
// }

// const Comp5 =()=>
// {
//   return(
//     <div>
//       <button> Submit</button>

//     </div>
//   )
// }





const root = createRoot(document.getElementById('root'));
root.render(<App />);


// reportWebVitals();
