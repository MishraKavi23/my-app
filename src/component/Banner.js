import Image from "./Image";
import banner from '../images/banner-right-image.png'
import bannerLeft from '../images/baner-dec-left.png'
import bannerRight from '../images/baner-dec-right.png'

const Banner = () => {

    return(
        <>
        <div className="main-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                    <div class="left-content header-text" >
                    <h6>Welcome to Space Dynamic</h6>
                    <h2>We Make <em>Digital Ideas</em> &amp; <span>SEO</span> Marketing</h2>
                    <p>Space Dynamic is a professional looking HTML template using a Bootstrap 5 (beta 2). This CSS template is free for you provided by </p>
                    <form id="search" action="#" method="GET">
                    <fieldset>
                        <input type="address" name="address" class="email" placeholder="Your website URL..." autocomplete="on" required />
                    </fieldset>
                    <fieldset>
                        <button type="submit" class="main-button">Analyze Site</button>
                    </fieldset>
                    </form>
                </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <Image path={banner} name="bannerImage"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner;