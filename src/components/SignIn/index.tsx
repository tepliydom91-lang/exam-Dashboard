import { useForm, type SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSheme } from "./signInSheme";
import { useUserStore } from "../../store/userStore";
import CircularProgress from "@mui/material/CircularProgress";
import { Input } from "../../components/Input";
import { Button } from "../Button";
import type { SignInDTO } from "../../types";
import { useNavigate } from "react-router-dom";

import {
    Form,
    Title,
    Subtitle,
    ErrorMessage,
} from "./style"


export const SingIn = () => {
    const { loading, error, getUser } = useUserStore((state) => state);

    const formProps = useForm<SignInDTO>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(signInSheme),
    });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<SignInDTO> = async (data) => {
        const user = await getUser(data);

        if (user) {
            navigate("/");
        }
    };

    if (loading) {
        return <CircularProgress />;
    }

    return (

            <FormProvider {...formProps}>
            <Form onSubmit={formProps.handleSubmit(onSubmit)}>
                
                <Title>Sign in</Title>

                <Subtitle>
                    Sign in to your account
                </Subtitle>

                    {error && (
                        <ErrorMessage>
                            {error}
                        </ErrorMessage>
                    )}

                    <Input
                        label="email"
                        type="email"
                        name="email"
                        placeholder="введи эмейл"
                    />

                    <Input
                        label="password"
                        type="password"
                        name="password"
                        placeholder="введи пароль"
                    />

                    <Button
                        label="Sign In"
                        type="submit"
                    />

                </Form>
            </FormProvider>
    );
};