import serviceLeft from '../images/services-left-image.png'
import Heading from './Heading';
import Image from './Image';
import ProgressBar from './Progress';

const heading = [
    {
     name : `Grow your website with our SEO service Project Ideas`,
     para : "Space Dynamic HTML5 template is free to use for your website projects. However, you are not permitted to redistribute the template ZIP file on any CSS template collection websites. Please contact us for more information. Thank you for your kind cooperation."
    }
 ]

const progressData = [
    {
        name:"Website Analysis",
        percent: "84%"
    },
    {
        name:"SEO Reports",
        percent: "88%"
    },
    {
        name:"Page Optimizations",
        percent: "94%"
    },
]

const Service = () => {
    return(
        <>
              <div id="services" class="our-services section">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-6 align-self-center">
                        <div class="left-image">
                            <Image path={serviceLeft}/>
                        </div>
                        </div>
                        <div class="col-lg-6 wow fadeInRight" >
                            <Heading heading={heading} />
                            <ProgressBar progressData={progressData} />
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )
}

export default Service;