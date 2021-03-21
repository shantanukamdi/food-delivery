import React from "react";
import { Input, VSpacer, Button, BackArrowButton } from "../../lib";
import { useHistory } from "react-router-dom";

interface Props {}

const Register = (props: Props) => {
  const history = useHistory();

  const onGoToBackClick = (e: React.FormEvent<SVGSVGElement> | undefined) => {
    history.goBack();
  };
  return (
    <>
      <div className="pt-4 pl-2">
        <BackArrowButton onClick={onGoToBackClick} />
      </div>
      <h1 className="pt-2 pl-4">New User?</h1>
      <div className="px-4 mt-4">
        <Input
          id="firstName"
          name="firstName"
          onChange={(e) => console.log(e)}
          label={`First Name (Required)`}
          classes=""
          type="text"
        />
        <VSpacer value="4" />
        <Input
          id="lastName"
          name="lastName"
          onChange={(e) => console.log(e)}
          label={`Last Name`}
          classes=""
          type="text"
        />
        <VSpacer value="4" />
        <Input
          id="email"
          name="email"
          onChange={(e) => console.log(e)}
          label={`Email (Required)`}
          classes=""
          type="email"
        />

        <VSpacer value="8" />

        <Button
          label="Register"
          type="submit"
          classes="w-full p-2 text-white font-bold"
          onClick={(e) => {}}
        />
      </div>
    </>
  );
};

export { Register };
