import { mediaSelected } from "./Post/UploadTypes"

export type RootStackRoutesParams = {
    SignIn:undefined,
    SignUp:undefined,
    ForgotPassword: undefined,
    Otpverification:{
        userName: string,
        fullName: string,
        email: string,
        sub: string,
        password: string
    },
    ResetPassword:{
        userName: string
    }
    UserTab: undefined,
    AddPost: {
        images: mediaSelected[],
        video: mediaSelected | null
    },
    SplashScreen:undefined,
    StoryViewer: undefined,
    SelectMedia: undefined
}

export type ProfileStackParams = {
    EditProfile: {
        user_name: string,
        full_name: string,
        bio: string,
        email: string,
        profile_picture: string | null
    },
    Profile: undefined
}

export type UserTabNavigationParams = 
{
    Home: undefined,
    Search: undefined,
    ChatStack: undefined,
    ProfileStack: undefined
}

export type ChatStackParams = {
    Chat: undefined,
    PrivateChat: undefined
}



