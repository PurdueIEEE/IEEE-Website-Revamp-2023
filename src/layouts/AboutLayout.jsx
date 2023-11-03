import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"
// import { Carousel } from '@mantine/carousel';

export default function AboutLayout() {
  return (
    <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold mb-6">What is IEEE?</h1>
        <h2 className="text-xl w-1/3 mb-12">IEEE is the world's largest technical professional organization, dedicated to advancing technology for the benefit of humanity. IEEE publishes nearly one third of technical papers and research all across the realm of electronics.</h2>
        <h1 className="text-6xl font-bold mb-6">IEEE at Purdue</h1>
        <h2 className="text-xl w-1/3 mb-12">The Purdue IEEE Student Branch actually pre-dates the international IEEE! We were founded as a student chapter of the American Institute of Electrical Engineers (AIEE) in 1903. When the AIEE merged with other organizations in 1963 to create the IEEE, we were reborn as Purdue IEEE. Ever since that, we have been committeed to exploring technology and introducing Purdue students to opportunities to apply their knowledge in practical applications.</h2>
        <ContactUs />
        {/* <Carousel withIndicators height={200}></Carousel> */}
        <Footer />
    </div>
  )
}

