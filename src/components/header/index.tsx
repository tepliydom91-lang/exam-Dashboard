import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { useThemeContext } from '../../context/useThemeContext';

export const Header = () => {
    const { mode, toggleTheme } = useThemeContext()
    console.log(mode)
    return (
        <header>
            <button onClick={toggleTheme}>
                {mode === 'light' ?  <SunnyIcon />  : <BedtimeIcon />}
            </button>
        </header>
    )
}