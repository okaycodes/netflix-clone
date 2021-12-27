import {SignupHeader, Footer} from "./../components"
import {Routes, Route} from 'react-router-dom'
import RegistrationContainer from "./../containers/registration"
import RegFormContainer from "./../containers/regform"
import RegStepContainer from "./../containers/regstep"
import PlanFormContainer from "./../containers/planform"
import PaymentStepContainer from "./../containers/payment"
import PaymentFormContainer from "./../containers/paymentform"
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {useState} from "react"



/*====================
COME BACK TO THIS
=====================*/
// import * as ROUTES from "./../constants/routes"

export default function SignUp({children}){
  const [isLoggedin, setIsLoggedin] = useState(false)
  const auth = getAuth()

  onAuthStateChanged(auth, (user)=>{
    user && setIsLoggedin(true)
  })
  // auth is used here for determining logged if user is logged in
  // because it causes the whole page to refresh allowing for UI changes
  // to be rendered in the header that will otherwise not render. the use
  // of nomal href link in linking to this page will have similar effects.

  return (
    <>
      <SignupHeader>
          <SignupHeader.Logo src="./../../images/misc/logo.svg" alt="Netflix"/>
          { isLoggedin ? <SignupHeader.SignOutLink /> : <SignupHeader.SignInLink />}
      </SignupHeader>

    <Routes>
      <Route exact path="/" element={<RegStepContainer />} />
      <Route exact path="/registration" element={<RegistrationContainer />}/>
      <Route exact path="/regform" element={<RegFormContainer />} />
      <Route exact path="/planform" element={<PlanFormContainer />} />
      <Route exact path="/payment" element={<PaymentStepContainer />} />
      <Route exact path="/payment-form" element={<PaymentFormContainer />} />
    </Routes>

    <Footer backgroundColor="#ededed" padding="2em 3em">
      <Footer.Title>Questions? Contact Us</Footer.Title>
      <Footer.Row>
        <Footer.Link href="#">FAQs</Footer.Link>
        <Footer.Link href="#">Help Center</Footer.Link>
        <Footer.Link href="#">Terms of Use</Footer.Link>
        <Footer.Link href="#">Privacy</Footer.Link>
        <Footer.Link href="#">Cookie Preferences</Footer.Link>
        <Footer.Link href="#">Corporate Information</Footer.Link>
      </Footer.Row>
    </Footer>
    </>
  )
}
