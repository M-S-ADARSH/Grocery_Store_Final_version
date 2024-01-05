import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80'
        heading="Privacy Policy"
      />
      <div className='pgcont1'>
        <h3>Policy:</h3>
        <p>Welcome to FreshGrocery, your go-to grocery application for a convenient and delightful shopping experience. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information. By using the FreshGrocery application, you agree to the terms outlined in this policy.</p>
      </div>
      <div className='pgcont1'>
        <h3>Information We Collect:</h3>
        <p>We collect both personal and non-personal information to provide you with a seamless shopping experience. Personal information may include your name, address, email, phone number, and payment details. Non-personal information includes device information, location data, and browsing preferences.</p>
      </div>

      <div className='pgcont1'>

        <h3>Data Security</h3>
        <p>We prioritize the security of your information. We employ industry-standard security measures to protect against unauthorized access, disclosure, alteration, and destruction of your personal data. Our payment processing is secured through encrypted connections.We may update this Privacy Policy to reflect changes in our practices or for legal reasons. We will notify you of any significant changes through the application or other means.</p>
      </div>

       <div className='pgcont1'>
        <h3>Cookies</h3>
        <p>We use cookies and similar technologies to enhance your browsing experience and collect information about how you use the application. You can manage your cookie preferences through your device settings.You have the right to access, correct, or delete your personal information. You can manage your communication preferences and opt-out of promotional emails through your account settings.</p>
      </div>

      {/* <div className='pgcont1'>
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

export default PrivacyPolicy