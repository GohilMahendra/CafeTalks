export const colors = {
    offWhite: "#FAF9F6",
    electricBlue: "#00E7F2",
    twitterBlack: "#192734",
    red: "#FF0000",
    white: "#FFF",
    black: "#010101",
    cream: "#FFFAF0",
    lightGrey: "#F5F5F5",
    silver: "#C0C0C0",
    gold: "#FFD700",
    purple: "#6528F7",
    transparent: "transparent"

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
}

export const LightColors:colorsType = {
    ColorPrimary:colors.electricBlue,
    ColorSecondary:colors.white,
    ColorBackground:colors.white,
    HighlightColor:colors.electricBlue,
    ErrorColor:colors.red,
    ButtonBackgroundColor:colors.electricBlue,
    TextColor:colors.black,
    PlaceHolderColor: colors.silver
}

export const DarkColors:colorsType = {
    ColorPrimary:colors.electricBlue,
    ColorSecondary: colors.twitterBlack,
    ColorBackground:colors.twitterBlack,
    HighlightColor:"transparent",
    ErrorColor:colors.red,
    ButtonBackgroundColor:colors.electricBlue,
    TextColor:colors.offWhite,
    PlaceHolderColor: colors.silver
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

