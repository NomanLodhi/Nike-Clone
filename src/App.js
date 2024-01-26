
import './index.css'
import Footer from './Components/Footer'
import CustomerReviews from './Components/CustomerReviews'
import Hero from './Components/Hero'
import SuperOffer from './Components/SuperOffer'
import SpecialOffer from './Components/SpecialOffer'
import Subscribe from './Components/Subscribe'
import Services from './Components/Services'
import PopularProducts from './Components/PopularProducts'
import Nav from './Components/Nav'


const App=()=>(<>
<main className='relative wide:mx-auto wide:w-[1200px]'>
<Nav/>

<section className='xl:padding-1 wide:padding-r padding-b '>
<Hero/>
</section>
<section className="padding" id='products'>
  <PopularProducts/>
</section>
<section className="padding" id='quality'>
  <SpecialOffer/>
</section>
<section className="padding">
  <Services/>
</section>
<section className='padding'>
  <SuperOffer/>
</section>
<section className="bg-pale-blue padding">
<CustomerReviews/>
</section> 
<section className="padding-x sm:py-32 py-16 w-full">
 <Subscribe/>
</section>
<section className="padding-x padding-t pb-8 bg-black">
<Footer/>
</section>
</main>
</>
)

export default App;
