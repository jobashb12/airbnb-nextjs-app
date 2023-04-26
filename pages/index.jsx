import Live from '@/components/Live';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Explore from '@/components/Explore';
import LargeCard from '@/components/LargeCard';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <Explore />
        <Live />
        <LargeCard />
      </main>
      <Footer /> 
    </div>
  )
}

export default Home;