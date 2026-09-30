
import { useForm, type SubmitHandler, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSheme } from "./signInSheme";
import { useUserStore } from "../../store/userStore";
import CircularProgress from '@mui/material/CircularProgress'
import { Input } from "../../components/Input";
 import { Button } from "../Button";
import type { SignInDTO } from "../../types";
import { useNavigate } from "react-router-dom";


export const SingIn = () => {
    const { loading, error,getUser } = useUserStore((state) => state)
    const formProps = useForm({
        defaultValues: {
            email: '',
            password:''
        },
        resolver: zodResolver(signInSheme)
    })

    const navigate = useNavigate();


    const onSubmit: SubmitHandler<SignInDTO> = async (data: SignInDTO) => {
        
        const user = await getUser(data)
            
        console.log(user,22)
        if (user) {
            navigate("/");
        }
    }

    if (loading) {
        return <div>
            <CircularProgress />
        </div>
    }
    return (
        <FormProvider {...formProps}>
            <form onSubmit={formProps.handleSubmit((data) => onSubmit(data))}>

                {
                    error && (
                        <div>
                            {error}
                        </div>
                    )
                }
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
                    label='Sign In'
                    type='submit'
                />
                
            </form>
        </FormProvider>
    )
}