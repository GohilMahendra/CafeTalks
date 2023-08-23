export const colors = {
    offWhite: "#FAF9F6",
    electricBlue: "#00E7F2",
    twitterBlack: "#192734",
    red: "#FF0000",
    white: "#FFF",
    black: "#010101",
    cream: "#FFFAF0",
    lightGrey: "gray",
    silver: "#C0C0C0",
    gold: "#FFD700",
    purple: "#4B0082",
    transparent: "transparent",
    violet:"#800080",
    lightSilver:"#d8d8d8",
    charcoal: "#2E4052",
    richBlack: "#0E131F",
    dreftBlue: "#38405F",
    hollywood: "#DE369D"
    
}
export const fontTypes = 
{
    CinzelBold:"Cinzel-Bold",
    CinzelRegular:"Cinzel-Regular",
    CormorantBold:"Cormorant-Bold",
    CormorantRegular:"Cormorant-Regular"
}

export interface FontFamilyType
{
    labelFont: string,
    labelFontBold: string,
    contentFont: string,
    contentFontBold: string
}

export const fontFamily:FontFamilyType = {
    labelFont: fontTypes.CinzelRegular,
    labelFontBold: fontTypes.CinzelBold,
    contentFont: fontTypes.CormorantRegular,
    contentFontBold: fontTypes.CormorantBold
}

interface colorsType
{
    ColorPrimary: string,
    ColorSecondary: string,
    ColorBackground: string,
    HighlightColor: string,
    ErrorColor: string,
    ButtonBackgroundColor: string,
    TextColor: string,
    PlaceHolderColor: string,
    TextColorSecondary: string,
    gradient_primary: string,
    gradient_secondry: string
}

export const LightColors:colorsType = {
    ColorPrimary:colors.hollywood,
    ColorSecondary:"#EEEEEE",
    ColorBackground:colors.white,
    HighlightColor:colors.transparent,
    ErrorColor:colors.red,
    ButtonBackgroundColor:colors.violet,
    TextColor:colors.black,
    PlaceHolderColor: colors.silver,
    TextColorSecondary: colors.lightGrey,
    gradient_primary: colors.hollywood,
    gradient_secondry: colors.white
}

export const DarkColors:colorsType = {
    ColorPrimary:colors.purple,
    ColorSecondary: colors.twitterBlack,
    ColorBackground:colors.black,
    HighlightColor:"transparent",
    ErrorColor:colors.red,
    ButtonBackgroundColor:colors.electricBlue,
    TextColor:colors.offWhite,
    PlaceHolderColor: colors.silver,
    TextColorSecondary: colors.lightGrey,
    gradient_primary: colors.purple,
    gradient_secondry: colors.black
}

export interface ThemeType {
    colors: colorsType,
    fonts: FontFamilyType,
    mode: string
}

export const DarkTheme : ThemeType = {
    colors:{
        ...DarkColors
    },
    fonts:{
        ...fontFamily
    },
    mode:"dark"
}

export const LightTheme : ThemeType= {
    colors:{
        ...LightColors
    },
    fonts:{
        ...fontFamily
    },
    mode:"light"
}

