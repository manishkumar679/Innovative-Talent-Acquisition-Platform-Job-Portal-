import { Button, LoadingOverlay, PasswordInput, TextInput, Paper, Text, Divider } from "@mantine/core";
import { IconAt, IconLock, IconInfoCircle } from "@tabler/icons-react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { loginValidation } from "../../Services/FormValidation";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useDispatch } from "react-redux";
import { setUser } from "../../Slices/UserSlice";
import { setJwt } from "../../Slices/JwtSlice";
import { loginUser } from "../../Services/AuthService";
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const dispatch = useDispatch();
    const form = {
        email: "",
        password: "",
    }
    const [opened, { open, close }] = useDisclosure(false);
    const [data, setData] = useState(form);
    const [formError, setFormError] = useState(form);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (event) => {
        setFormError({...formError, [event.target.name]:""});
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const handleSubmit = () => {
        let valid = true, newFormError = {};
        for (let key in data) {
            newFormError[key] = loginValidation(key, data[key]);
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);
        if (valid) {
            setLoading(true);
            loginUser(data).then((res) => {
                successNotification("Login Successful", "Redirecting to home page...");
                dispatch(setJwt(res.jwt));
                const decoded=jwtDecode(res.jwt);
                dispatch(setUser({...decoded, email:decoded.sub}));
                setTimeout(() => {
                    navigate("/");
                }, 4000)
            }).catch((err) => {
                console.log(err);
                    errorNotification("Login Failed", err.response.data.errorMessage);
                    setLoading(false);
            });

        }
    }
    return <>   <LoadingOverlay
    visible={loading}
    zIndex={1000}
    overlayProps={{ radius: 'sm', blur: 2 }}
    loaderProps={{ color: 'brightSun.4', type: 'bars' }}
  />
  
  <Paper withBorder p="xs" radius="md" shadow="md" className="absolute top-20 left-5 z-10" style={{ maxWidth: '250px' }}>
    <div className="flex items-center mb-1">
      <IconInfoCircle size={16} className="text-[#0275d8] mr-1" />
      <Text fw={600} size="sm" className="text-[#0275d8]">Demo Credentials</Text>
    </div>
    <Divider my="xs" />
    <Text size="xs" fw={500}>Applicant:</Text>
    <Text size="xs">john@example.com Pass: Appl@1234</Text>
    
    <Text size="xs" fw={500}>Employer:</Text>
    <Text size="xs">hr@google.com Pass: Empl1234@</Text>
  </Paper>
  
  <div data-aos="zoom-out" className="w-1/2 sm-mx:w-full px-20  bs-mx:px-10 md-mx:px-5  flex flex-col gap-3 justify-center">
        <div className="text-2xl font-semibold">Login</div>
        <TextInput value={data.email} error={formError.email} name="email" onChange={handleChange} leftSection={<IconAt size={16} />} label="Email" withAsterisk placeholder="Your email" />
        <PasswordInput value={data.password} error={formError.password} name="password" onChange={handleChange} leftSection={<IconLock size={16} />} label="Password" withAsterisk placeholder="Password" />
        <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Login</Button>
        <div className="text-center sm-mx:text-sm xs-mx:text-xs">Don't have an account? <span className="text-[#4682B4] hover:underline cursor-pointer" onClick={()=>{navigate("/signup");setFormError(form) ;setData(form)}}>SignUp</span> </div>
        <div className="text-[#4682B4] sm-mx:text-sm xs-mx:text-xs hover:underline cursor-pointer text-center" onClick={open}>Forget Password?</div>

    </div>
    
    
    <ResetPassword opened={opened} close={close} />
    </>
}
export default Login;