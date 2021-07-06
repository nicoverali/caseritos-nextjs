import TextInput from "components/TextInput";
import UnderlineButton from "components/UnderlinedButton";
import React from "react";
import SellersSVG from "components/SellersSVG";

export default function BecomeSeller() {
  return (
    <div className="w-full flex items-center flex-col md:flex-row justify-center">
      <SellersSVG className="max-w-sm md:max-w-md 2xl:max-w-2xl mb-8 md:mr-8 md:mb-0" />
      <div className="">
        <h2 className="text-2xl font-medium max-w-lg">
          ¿Te gustaría vender tus comidas a miles de personas?
        </h2>
        <p className="mt-6 max-w-md">
          Dejanos tu email para poder contactarte. Lorem ipsum dolor sit amet.
        </p>
        <div className="flex flex-col items-end sm:flex-row mt-12">
          <TextInput
            className="mb-4 sm:mb-0 sm:mr-6"
            width="w-full sm:w-96"
            name="seller-email"
            placeholder="Tu email"
            label="seller-email"
            hideLabel
          />
          <UnderlineButton secondary>Enviar</UnderlineButton>
        </div>
      </div>
    </div>
  );
}
