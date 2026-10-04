import SunnyIcon from "@mui/icons-material/Sunny"
import BedtimeIcon from "@mui/icons-material/Bedtime"
import { Link } from "react-router-dom"

import { useThemeContext } from "../../context/useThemeContext"
import { useUserStore } from "../../store/userStore"

import {
    HeaderWrapper,
    HeaderActions,
    ThemeButton,
    CreateTaskLink,
} from "./style"

export const Header = () => {
    const { user } = useUserStore(state => state)
    const { mode, toggleTheme } = useThemeContext()

    return (
        <HeaderWrapper>
            <div />

            <HeaderActions>
                <ThemeButton onClick={toggleTheme}>
                    {mode === "light" ? <SunnyIcon /> : <BedtimeIcon />}
                </ThemeButton>

                {user?.role === "teamLead" && (
                    <CreateTaskLink as={Link} to="/create-task">
                        Create Task
                    </CreateTaskLink>
                )}
            </HeaderActions>
        </HeaderWrapper>
    )
}