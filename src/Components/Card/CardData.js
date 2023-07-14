import greek_salad from '../Assets/icons_assets/greek salad.jpg';
import bruchetta from '../Assets/icons_assets/bruchetta.svg';
import lemon from '../Assets/icons_assets/lemon.jpg';
import Card from './Card';
export const data=[
    {
        img: greek_salad,
        title:'greek salad',
        price:'$12.00',
        description:"Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.",
    },
    {
        img: bruchetta,
        title:'bruchetta',
        price:'$15.00',
        description:"Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
    },
    {
        img: lemon,
        title:'lemon dessert',
        price:'$13.00',
        description:"Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.",
    }
];
const CardData=()=>
{
    const special=data.map((item)=>{
        return(
            <Card
             key={item.title}
             image={item.img}
             title={item.title}
             price={item.price}
             description={item.description}
            />
        )
    })
    return(
     <main>
        <section className='special'>
            <div>
            <h1 className='heading ' id='orderOnline-section'>This weeks specials!</h1>
            </div>
            <div className='btn1'>
             Order Online
            </div>
            <div className='cards'>{special}</div>
        </section>
     </main>
    )
}
export default CardData;