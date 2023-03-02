import Image from "./Image";
import aboutLeft from '../images/about-left-image.png'
import service1 from '../images/service-icon-01.png'
import service2 from '../images/service-icon-02.png'
import service3 from '../images/service-icon-03.png'
import service4 from '../images/service-icon-04.png'

const serviceData = [
    {
        name : "Data Analysis",
        para: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter" ,
        image: service1
    },
    {
        name : "Data Reporting",
        para: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter" ,
        image: service2
    },
    {
        name : "Web Analytics",
        para: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter" ,
        image: service3
    },
    {
        name : "SEO Suggestions",
        para: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter" ,
        image: service4
    },
]
const About = () => {
    const renderService = (data) => {
        console.log(data)
        return(
            <>
                <div class="col-lg-6">
                    <div class="item">
                        <div class="icon">
                            <Image path={data.image}/>
                        </div>
                        <div class="right-text">
                            <h4>{data.name}</h4>
                            <p>{data.para}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
              <div class="about-us section">
                <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                    <div class="left-image ">
                        <Image path={aboutLeft} name="serviceImage"/>
                    </div>
                    </div>
                    <div class="col-lg-8 align-self-center">
                    <div class="services">
                        <div class="row">
                            {
                                serviceData.map((data) => renderService(data))
                            }
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default About;