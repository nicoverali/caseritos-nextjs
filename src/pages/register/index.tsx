import Action from "components/Action";
import AppContainer from "components/AppContainer";
import Button from "components/Button";
import ClientForm from "components/ClientForm";
import Header from "components/Header";
import HeaderLeft from "components/Header/HeaderLeft";
import TextInput from "components/TextInput";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "sections/Footer";
import ClientService, { ClientRegisterRequest } from "services/ClientService";
import { useForm } from "react-hook-form";
import SessionService from "services/SessionService";
import MessageBox from "components/MessageBox";
import Message from "components/MessageBox/Message";
import { UnavailableEmail } from "services/apiErrors";

const requiredRule = {
  required: {
    value: true,
    message: "Por favor completa este campo",
  },
};

const emailRule = {
  ...requiredRule,
  pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
};

const phoneRule = {
  ...requiredRule,
  pattern: { value: /^[0-9]+$/i, message: "Teléfono inválido" },
};

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [unavailableEmail, setUnavailableEmail] = useState(false);
  const [unexpectedError, setUnexpectedError] = useState(false);
  const onSubmit = async (data: ClientRegisterRequest) => {
    try {
      await ClientService.register(data);
      setUnavailableEmail(false);
      setUnexpectedError(false);
      await SessionService.login(data);
    } catch (err) {
      if (err instanceof UnavailableEmail) {
        setUnavailableEmail(true);
      } else {
        setUnexpectedError(true);
      }
    }
  };

  return (
    <>
      <Header>
        <HeaderLeft className="flex items-center">
          <p>CASERITOS</p>
        </HeaderLeft>
      </Header>
      <AppContainer className="h-[calc(100vh-80px)] flex flex-col items-center">
        <div className="m-auto w-full">
          <ClientForm
            title="Registrarse"
            className="mx-auto"
            form={{ onSubmit: handleSubmit(onSubmit) }}
          >
            <MessageBox className="mb-4">
              <Message show={unexpectedError}>
                ¡ Lo sentimos ! Ocurrió un error, por favor volvelo a intentar
                más tarde
              </Message>
            </MessageBox>

            <TextInput
              {...register("name", requiredRule)}
              label="Nombre"
              error={errors?.name?.message}
            />
            <TextInput
              {...register("email", emailRule)}
              label="Email"
              error={
                errors?.email?.message ||
                (unavailableEmail && "Este email ya existe")
              }
              className="mt-6"
            />
            <TextInput
              {...register("password", requiredRule)}
              label="Contraseña"
              type="password"
              error={errors?.password?.message}
              className="mt-6"
            />
            <div className="flex mt-6">
              <TextInput
                {...register("phone", phoneRule)}
                label="Teléfono"
                error={errors?.phone?.message}
                className="mr-6"
              />
              <TextInput
                {...register("address", requiredRule)}
                label="Dirección"
                error={errors?.address?.message}
              />
            </div>
            <Button style="primary" className="mt-6" type="submit">
              Regitrarse
            </Button>
          </ClientForm>

          <p className="mx-auto text-center pt-6">
            ¿ Ya tenes una cuenta ?{" "}
            <Link href="/login" passHref>
              <Action className="text-primary font-medium">Ingresa</Action>
            </Link>
          </p>
        </div>

        <Footer className="mt-auto w-full" />
      </AppContainer>
    </>
  );
}
export default RegisterPage;
