import { useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import Logo from "../icons/Logo.png";
import { useNavigate } from "react-router-dom";
import { useRedirect } from "../hooks/useRedirect";
import { z, ZodIssue } from "zod";

const switchPage = {
  signup: {
    head: "Create Account",
    ask: "Already have an account ?",
    redirect: "Login",
    btn: "Create Account",
  },
  login: {
    head: "Welcome back !",
    ask: "New to Wow ?",
    redirect: "Sign-Up",
    btn: "Login",
  },
};

export const UserZodSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email().min(10).max(40),
  password: z.string().min(3).max(20),
});

interface ZError {
  status: boolean;
  msg: ZodIssue[];
}

export const Signup = () => {
  useRedirect();
  const navigate = useNavigate();
  const [login, setToLogin] = useState(false);

  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  // const emailRefLogin = useRef<HTMLInputElement>();
  // const passwordRefLogin = useRef<HTMLInputElement>();
  const [parsedError, setParsedError] = useState<ZError>({
    status: false,
    msg: [],
  });

  const createAccount = async () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const parsedUser = UserZodSchema.safeParse({ name, email, password });

    if (!parsedUser.success) {
      // console.log(parsedUser.error.errors)
      return setParsedError({ status: true, msg: parsedUser.error.errors });
    }

    await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
      name,
      email,
      password,
    });
    navigate("/dashboard");
  };

  const loginToAccount = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const parsedUser = UserZodSchema.safeParse({ email, password });

    if (!parsedUser.success) {
      // console.log(parsedUser.error.errors)
      return setParsedError({ status: true, msg: parsedUser.error.errors });
    }

    const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
      email,
      password,
    });
    const jwtToken = response.data.token;
    localStorage.setItem("token", jwtToken);
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex justify-center md:justify-start items-center bg-gradient-to-br from-gray-100 to-gray-200 ">
      <div className="hidden md:w-9/12 md:flex md:justify-center md:items-center bg-gradient-to-l from-gray-100 to-gray-300 h-screen">
        <img src={Logo} alt="" />
      </div>
      <div className="m-4 md:w-3/12 flex flex-col justify-end items-center p-4 gap-2 rounded-sm md:bg-none ">
        {/* <div className="m-4 w-full md:w-3/12  border border-gray-300  flex flex-col justify-end items-center p-4 gap-2 rounded-sm bg-gradient-to-br from-white to-slate-100"> */}
        <div className="mb-5 md:hidden w-2/12">
          <img src={Logo} alt="WOW" />
        </div>
        <div className=" w-full">
          <h1 className="font-bold text-2xl py-2 font-serif">
            {login ? switchPage.login.head : switchPage.signup.head}
          </h1>
        </div>
        <div className="flex flex-col gap-3 w-full h-full font-mono">
          {login ? (
            <>
              <Input
                placeholder="Email or Mobile Number"
                type="text"
                reference={emailRef}
              />
              {parsedError?.msg?.some((error) => error.path[0] === "email") && (
                <p className="text-red-500 text-xs md:text-sm -mt-2">
                  - Invalid Email
                </p>
              )}
              <Input
                placeholder="Password"
                type="password"
                reference={passwordRef}
              />
              {parsedError?.msg?.map(
                (error) =>
                  error.path[0] === "password" && (
                    <p className="text-red-500 text-xs md:text-sm -mt-2">
                      - Password must be greater that 3* digits
                    </p>
                  )
              )}
            </>
          ) : (
            <>
              <Input placeholder="Full Name" type="text" reference={nameRef} />
              {parsedError?.msg?.map(
                (error) =>
                  error.path[0] === "name" && (
                    <p className="text-red-500 text-xs md:text-sm -mt-2">
                      - Name must be greater that 3* digits
                    </p>
                  )
              )}

              <Input
                placeholder="Email or Mobile Number"
                type="text"
                reference={emailRef}
              />
              {parsedError?.msg?.some((error) => error.path[0] === "email") && (
                <p className="text-red-500 text-xs md:text-sm -mt-2">
                  - Invalid Email
                </p>
              )}
              <Input
                placeholder="Password"
                type="password"
                reference={passwordRef}
              />
              {parsedError?.msg?.map(
                (error) =>
                  error.path[0] === "password" && (
                    <p className="text-red-500 text-xs md:text-sm -mt-2">
                      - Password must be greater that 3* digits
                    </p>
                  )
              )}
            </>
          )}
        </div>
        <div className="mt-6 w-full font-mono">
          <Button
            text={login ? switchPage.login.btn : switchPage.signup.btn}
            variant="primary"
            size="md"
            onClick={login ? loginToAccount : createAccount}
          />
        </div>
        <div className="w-full text-start mt-1 pl-1">
          <span className="font-medium">
            {login ? switchPage.login.ask : switchPage.signup.ask}
            <span
              className="pl-2 font-bold text-blue-700 hover:underline cursor-pointer"
              onClick={() => setToLogin(!login)}
            >
              {login ? switchPage.login.redirect : switchPage.signup.redirect}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
