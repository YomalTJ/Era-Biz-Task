import React from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import FormContainer from "@/components/auth/FormContainer";
import BlueContainer from "@/components/auth/BlueContainer";
import FormInput from "@/components/auth/FormInput";
import Button from "@/components/auth/Button";
import Link from "next/link";

const Register = () => {
  return (
    <AuthLayout>
      {/* Left side - Sign up form */}
      <FormContainer title="Create an account">
        <form className="w-full max-w-md space-y-4">
          <FormInput
            id="name"
            type="text"
            label="Name"
            placeholder="Enter your full name"
          />

          <FormInput
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email address"
          />

          <FormInput
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
          />

          <FormInput
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Re-enter your password"
          />

          <Link href="/auth/login">
            <div className="flex justify-center">
              <Button>Create Account</Button>
            </div>
          </Link>
        </form>
      </FormContainer>

      {/* Right side - Blue section with image */}
      <BlueContainer
        title="Already have an account ?"
        subtitle="Log in now to continue exploring your dashboard and manage your account with ease."
        buttonText="SIGN IN"
        buttonLink="/auth/login"
        imageSrc="/Auth/register.svg"
      />
    </AuthLayout>
  );
};

export default Register;
