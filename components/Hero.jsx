
import Image from 'next/image'

function Hero() {
    return (
        <div>
            <div className="carousel carousel-end rounded-box h-60 mt-10">

                <div className="carousel-item">
                    <Image src="https://images.pexels.com/photos/4187778/pexels-photo-4187778.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Drink"
                        height="100"
                        width="200" />
                </div>
                <div className="carousel-item">
                    <Image src="https://images.pexels.com/photos/4639785/pexels-photo-4639785.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Drink" height="100"
                        width="300" />
                </div>

                <div className="carousel-item">
                    <Image src="https://images.pexels.com/photos/4109938/pexels-photo-4109938.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Drink" height="50"
                        width="200" />
                </div>

                <div className="carousel-item">
                    <Image src="https://images.pexels.com/photos/8250416/pexels-photo-8250416.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Drink"
                        height="100"
                        width="300" />
                </div>
                {/*             <div className="carousel-item">
                <Image src="https://images.pexels.com/photos/6287519/pexels-photo-6287519.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Drink" height="100"
                    width="200" />
            </div> */}
                <div className="carousel-item">
                    <Image src="https://images.pexels.com/photos/5755518/pexels-photo-5755518.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Drink" height="100"
                        width="200" />
                </div>
                <div className="carousel-item">
                    <Image src="https://images.pexels.com/photos/3756498/pexels-photo-3756498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        height="100"
                        width="300"
                        alt="GFG logo served from external URL" />
                </div>

            </div>
        </div>
    )
}

export default Hero
