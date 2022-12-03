import i1 from './i1.jpeg'
import i2 from './i2.jpeg'
import flash from './flash.jpg'

function Home(){
    return (
        <>
            <div className='content'>
                <p className='p1'><strong className='flash'>Are you Looking for an Job or what? </strong>
                I'm Sure you are looking for the job and I am here to help you out in this case Man! 
                <strong className='flash'> FLASH </strong> is here to help you out...Come let me take you to your deserved place!</p>
                <div className='man'>
                    <img src={flash} alt=""/>
                </div>
            </div>
            <img src={i1} alt=" "/>
            <div className='i2'>
                <img src={i2} alt=" "/>
            </div> 

            <div className='footer'>
                <p className='fc'>
                    Terms and Conditions Apply
                    <p className='copy'>All Rights Reserved &copy;</p>
                </p>
            </div>
        </>
    )
 }

 export default Home;