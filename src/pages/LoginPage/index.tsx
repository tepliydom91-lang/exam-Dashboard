import Typography from "@mui/material/Typography";
import { SingIn } from "../../components/SignIn";
import { Container, Content } from "./style";

export const LoginPage = () => {
    return (
        <Container>
            <Content>
                <Typography variant="h1">
                    Login
                </Typography>

                <SingIn />
            </Content>
        </Container>
    );
};