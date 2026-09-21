import '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Palette {
        title: Palette['primary']
        body1: Palette['primary']
        body2: Palette['primary']
    }

    interface PaletteOptions {
        title?: PaletteOptions['primary']
        body1?: PaletteOptions['primary']
        body2?: PaletteOptions['primary']
    }
}