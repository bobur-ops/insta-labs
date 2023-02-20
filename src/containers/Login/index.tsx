import { useState } from "react";
import Input from "@components/Input";
import Button from "@components/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="py-6 px-4">
      <div className="mb-8 flex justify-center">
        <img src="/img/logo.svg" alt="logo" className="w-[200px] h-[200px]" />
      </div>
      <div className="text-center font-bold text-2xl ">Insta Labs</div>
      <div className="mt-10 flex flex-col gap-10">
        <Input
          label="Username"
          onChange={(val: string) => setUsername(val)}
          value={username}
          isUpperCase
        />
        <Input
          label="Password"
          onChange={(val: string) => setPassword(val)}
          value={password}
          isUpperCase
        />
        <div className="mt-[20px]">
          <Button>LOGIN</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
