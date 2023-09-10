import { render , screen,waitFor, fireEvent } from "@testing-library/react-native";
import SignUp from "../../../src/screens/Auth/SignUp"
import React from 'react'
import {ThemeContext} from "../../../src/globals/ThemeContext";
import { LightTheme } from "../../../src/globals/theme";
jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'), // Use the actual module for non-mocked functions
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      // Add other functions or properties you need for your test cases
    }),
  }));
  
describe("Sign Up flow test",()=>{
  let SignUpComponent:any;


  beforeEach(() => {
    // Render the SignUp component before each test
    SignUpComponent = render(
      <ThemeContext.Provider value={{theme:LightTheme,setTheme:jest.fn()}}>
        <SignUp/>
      </ThemeContext.Provider>
    );
  });

  afterEach(() => {
    // Clean up the component after each test
    SignUpComponent.unmount();
  });
  it('I can add userName into this', async () =>{
    const userName = SignUpComponent.getByTestId("input_userName")
    fireEvent.changeText(userName,"mahendra_gohil")
    expect(userName.props.value).toBe("mahendra_gohil")
  })
  it('I can add full Name into this', async () =>{
    const fullName = SignUpComponent.getByTestId("input_fullName")
    fireEvent.changeText(fullName,"Mahendra Gohil")
    expect(fullName.props.value).toBe("Mahendra Gohil")
  })
  it('I can add email into this', async () =>{
    const email = SignUpComponent.getByTestId("input_email")
    fireEvent.changeText(email,"mahendra@metafic.co")
    expect(email.props.value).toBe("mahendra@metafic.co")
  })
  it('I can add password into this', async () =>{
    const password = SignUpComponent.getByTestId("input_password")
    fireEvent.changeText(password,"King@123")
    expect(password.props.value).toBe("King@123")
  })
  it("I can submit the details",async()=>
  {
    const SignUpBtn = SignUpComponent.getByTestId("btn_signUp")
    fireEvent.press(SignUpBtn)
    
  })

})