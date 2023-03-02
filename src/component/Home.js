import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Heading from "./Heading";
import Offer from "./Offer";
import Popup from "./Popup";
import Service from "./Service";

const offerHeading = [
  {
   name : `See What Our Agency Offers & What We Provide`,
  }
]
const offerData= [
  {
      name: "SEO Analysis",
      detail : "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto."
  },
  {
    name: "Website Reporting",
    detail : "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto."
  },
  {
    name: "Performance Tests",
    detail : "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto."
  },
  {
    name: "Data Analysis",
    detail : "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto."
  },
]

const formHeading = [
  {
    name: "Feel Free To Send Us a Message About Your Website Needs",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor incididunt ut labore et dolores"
  }
]

const Home = () => {
    return(
        <>
          <Banner />
          <About />
          <Service />
          <div id="portfolio" class="our-portfolio section container">
              <Heading heading ={offerHeading} align="text-center"/>
              <div className="row">
                <Offer offerData={offerData}/>
              </div>
          </div>
          <div id="contact" class="contact-us section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                    <Heading heading={formHeading}/>
                </div>
                <div className="col-lg-6">
                    <Contact />
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Home;