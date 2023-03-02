import portfolio from '../images/portfolio-image.png'
import Image from './Image';
const Offer = ({offerData}) => {
    return(
        <>
            {
                offerData.map((data) => {
                    return(
                        <>
                        <div className='col-lg-3'>
                            <div class="item">
                                <div class="hidden-content">
                                    <h4>{data.name}</h4>
                                    <p>{data.detail}</p>
                                </div>
                                <div class="showed-content">
                                    <Image path={portfolio}/>
                                </div>
                            </div>
                        </div>
                       
                        </>
                    )
                })
            }

        </>
    )
}
export default Offer;