import { render , screen , fireEvent } from "@testing-library/react-native";
import {  } from "module";
import SignUp from "../../src/screens/SignUp";

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'), // Use the actual module for non-mocked functions
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      // Add other functions or properties you need for your test cases
    }),
  }));
  
describe("Sign Up flow test",()=>{

    const signUpWrapper = render(<SignUp/>)

})