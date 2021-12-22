import {Registration, RegForm} from "./../components"
import * as ROUTES from "./../constants/routes"
import * as REGEX from './../constants/regex';
import {firebaseContext} from  "./../contexts/firebaseContext"
import {useContext} from "react"
/*================================================
COME BACK TO THIS valid fields and activate button
==================================================*/

export default function RegFormContainer(){
  const {state, dispatch} = useContext(firebaseContext)
  const {email, emailIsActive} = state
  const {password, passwordIsActive} = state
  const emailIsValid = REGEX.EMAIL_VALIDATION.test(email)
  const emailIsEmpty = email.length < 1
  const passwordIsValid = password.length > 6
  const passwordIsEmpty = password.length < 1

  return(
    <RegForm>
      <Registration.Title>Create a password to start your membership</Registration.Title>
      <Registration.SubTitle>
        step <span>1</span> of <span>3</span>
      </Registration.SubTitle>
      <Registration.Text lineHeight="1.7">Just a few more steps and you're done!
      We hate paperwork, too.</Registration.Text>
      <RegForm.Input
        placeholder="Email address"
        name="email"
        value={email}
        isValid ={emailIsValid}
        isEmpty = {emailIsEmpty}
        isActivated={emailIsActive}
        minLength={5}
        errorMessage1 = "Email is required!"
        errorMessage2 = "Please enter a valid email address"
        onChange={(event) =>
          dispatch({type: "input", payload: {email: event.target.value}})}
        onBlur={(event)=> email.length >= 1 &&
          dispatch({type:"blurred", payload: {emailIsActive: true}})}
      />

      <RegForm.Input
        placeholder="Add a password"
        name="password"
        value={password}
        isValid ={passwordIsValid}
        isEmpty={passwordIsEmpty}
        isActivated={passwordIsActive}
        minLength={1}
        errorMessage1 = "Password is required!"
        errorMessage2 = "Password must be between 6 and 60 characters"
        onChange={(event) =>{dispatch(
          {type: "input", payload: {password: event.target.value} }
        )}}
        onBlur={()=>dispatch({type:"blurred", payload: {passwordIsActive: true}})}
      />
      <RegForm.Checkbox>Please do not email me Netflix special offers</RegForm.Checkbox>

      <Registration.ButtonLink to={ROUTES.SIGN_UP_HOME}>Next</Registration.ButtonLink>
    </RegForm>
)}
