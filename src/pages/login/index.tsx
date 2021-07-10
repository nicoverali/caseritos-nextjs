import Action from "components/Action";
import AppContainer from "components/AppContainer";
import Button from "components/Button";
import ClientForm from "components/ClientForm";
import Header from "components/Header";
import HeaderLeft from "components/Header/HeaderLeft";
import TextInput from "components/TextInput";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Footer from "sections/Footer";
import { useForm } from "react-hook-form";
import { ClientSessionContext } from "context/ClientSessionProvider";
import clsx from "clsx";
import { Credentials, UnauthorizedError } from "services/SessionService";
import FormErrorBox from "components/FormErrorBox";
import FormErrorMessage from "components/FormErrorBox/FormErrorMessage";

const requiredRule = {
  value: true,
  message: "Por favor completa este campo",
};

const emailPatternRule = {
  value: /^\S+@\S+$/i,
  message: "Email invalido",
};

function LoginPage() {
  const [unexpectedError, setUnexpectedError] = useState(false);
  const [credentialsInvalid, setCredentialsInvalid] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useContext(ClientSessionContext);

  const onSubmit = async (data: Credentials) => {
    try {
      setCredentialsInvalid(false);
      setUnexpectedError(false);
      await login(data);
    } catch (err) {
      if (err instanceof UnauthorizedError) {
        setCredentialsInvalid(true);
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
            title="Ingresar"
            className="mx-auto"
            form={{ onSubmit: handleSubmit(onSubmit) }}
          >
            <FormErrorBox className="mb-4">
              <FormErrorMessage show={credentialsInvalid}>
                Email o contraseña incorrectos
              </FormErrorMessage>
              <FormErrorMessage show={unexpectedError}>
                ¡ Lo sentimos ! Ocurrió un error, por favor volvelo a intentar
                más tarde
              </FormErrorMessage>
            </FormErrorBox>

            <TextInput
              {...register("email", {
                required: requiredRule,
                pattern: emailPatternRule,
              })}
              label="Email"
              error={errors?.email?.message}
            />
            <TextInput
              {...register("password", { required: requiredRule })}
              type="password"
              label="Contraseña"
              className="mt-6"
              error={errors?.password?.message}
            />
            <Button type="submit" style="primary" className="mt-6">
              Ingresar
            </Button>
          </ClientForm>
          <p className="mx-auto text-center pt-6">
            ¿ No tenes una cuenta ?{" "}
            <Link href="/register" passHref>
              <Action className="text-primary font-medium">Registrate</Action>
            </Link>
          </p>
        </div>

        <Footer className="mt-auto w-full" />
      </AppContainer>
    </>
  );
}

export default LoginPage;
