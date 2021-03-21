import React from "react";
import Chef from "../../assets/chef.png";
import { Button } from "../../lib/button";

import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const onRegisterClick = (e: React.MouseEvent<HTMLElement>) => {
    history.push("/register");
  };

  return (
    <>
      <div className="bg-gray-900 h-2/3">
        <img
          src={Chef}
          alt="delivery"
          className="w-full max-h-2/4 object-cover"
        />
      </div>
      <div className="text-center mx-8 mt-8 text-gray-800">
        <h1 className="font-bold text-xl">{t("pages.landing.header")}</h1>

        <p className="mt-4 mb-4 text-sm text-gray-700">
          {t("pages.landing.subheader")}
        </p>

        <Button
          label={t("buttons.register")}
          classes={`text-white text-xs font-bold py-2 px-4 mt-2 uppercase`}
          type={"button"}
          onClick={onRegisterClick}
        />

        <div className="mt-2">
          <a href="/hello" className="mt-4 text-xs text-gray-400">
            Have an account?{" "}
            <span className="text-brand uppercase">{t("buttons.login")}</span>
          </a>
        </div>
      </div>
    </>
  );
};

export { Landing };
