import React from "react";
import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import FormContainer from "@/components/auth/FormContainer";
import BlueContainer from "@/components/auth/BlueContainer";
import FormInput from "@/components/auth/FormInput";
import Button from "@/components/auth/Button";

const Login = () => {
  return (
    <AuthLayout>
      {/* Left side */}
      <BlueContainer
        title="Don't have an account?"
        subtitle="Sign up now to unlock your dashboard, manage your workspace, and stay connected effortlessly."
        buttonText="SIGN Up"
        buttonLink="/auth/signup"
        imageSrc="/Auth/log.svg"
      />

      {/* Right side */}
      <FormContainer title="Log in to your account">
        <form className="w-full max-w-md space-y-4">
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

          <div className="flex justify-end">
            <Link href="/auth/forgot-password">
              <p className="text-sm text-[#5995fd] hover:underline">
                Forgot your password?
              </p>
            </Link>
          </div>

          <Link href="/calendar-view">
            <div className="flex justify-center">
              <Button>Log In</Button>
            </div>
          </Link>
        </form>
      </FormContainer>
    </AuthLayout>
  );
};

export default Login;
