import Rating from '../Assets/rating (2).png';
import Testimony from './Testimony';
import './Testimony.css';
const data=[
    {image:Rating,
     name:"Micheal Caldwell",
     description:"This is the best Mediterranean food that I've ever had!"},
     {image:Rating,
     name:"Alan Chen",
     description:"My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."},
    {image:Rating,
     name:"Casey Lau",
     description:"I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture."},
     {image:Rating,
     name:"John Rosenblum",
      description:"Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."},
     {image:Rating,
      name: "Jim Reynor",
      description:"The food here really refreshed me after a late night shift at the local supply depot."},
    {image:Rating,
     name:"Brian Dean",
     description:"I came to Little Lemon after a 5 hour flight from the East Coast.The food here tasted so delicious after the trip here."},
    {image:Rating,
    name:"Tyler Tohmine",
     description:"The food here was fire!! Everyone should try this place out at least once if they live in Chicago."},
    {image:Rating,
    name:"Jack Hu",
     description:"This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!"}
]
const TestimonyData=()=>{
    const testimony=data.map((item)=>{
        return(
            <Testimony
            key={item.name}
            image={item.image}
            name={item.name}
            description={item.description}
            />
        )
    })
    return(
        <section className='testiment'>
            <h1>Testimonys</h1>
         <div className='testimonys'>
             {testimony}
         </div>
        </section>
    )
}
export default TestimonyData;