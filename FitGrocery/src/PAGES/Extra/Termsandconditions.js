import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const Termsandconditions = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        heading="Terms & Conditions"
      />


      <div className='pgcont1'>
        {/* <h3></h3> */}
        <p><h4>Welcome to FitGrocery, your online destination for fitness-focused grocery shopping. By accessing and using the FitGrocery website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use this website.</h4></p>
      </div>
      <div className='pgcont1'>
        <h3>Where does it come from?</h3>
        <p>a. FitGrocery strives to provide accurate and up-to-date information about products. However, we do not warrant the accuracy, completeness, or reliability of any product information on the website.<br/>
<br/>
b. Prices and availability are subject to change without notice.<br/>
<br/>
c. The content, design, and graphics on this website are owned by or licensed to FitGrocery and are protected by intellectual property laws.<br/>
<br/>
d. You may not reproduce, distribute, display, or create derivative works of any content on this website without the express written consent of FitGrocery.</p>
      </div>

      <div className='pgcont1'>

        <h3>Use of the Website</h3>
        <p><b>* </b> You must be 18 years or older to use this website.<br/>
<b>* </b>You are responsible for ensuring that the information you provide on the website is accurate and complete.<br/>
<b>* </b>Access to certain areas of the website may be restricted. FitGrocery reserves the right to restrict access to other areas of the website or the entire website at our discretion.</p>
      </div>

      {/* <div className='pgcont1'>
        <h3>Why do we use it?</h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>

      <div className='pgcont1'>
        <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>

      <div className='pgcont1'>
        <h3>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      </div> */}
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Termsandconditions