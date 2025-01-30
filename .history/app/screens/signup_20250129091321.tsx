import { View, Text, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ControlledInput from "@/shared/input/ControlledInput";

import { useForm } from "react-hook-form";

import Button from "@/shared/Button";

export default function Signup() {
  const { control } = useForm();
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View className="flex-1  pt-[87px] px-[21px] ">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-[32px] font-extrabold text-[#212121]">
              Sign Up
            </Text>
            <AntDesign name="closecircleo" size={24} color="black" />
          </View>
          <Text className="text-[16px] text-[#212121]/50 pt-[12px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad magnam
          </Text>
          <View className="pt-[42px]">
            <Text className="uppercase text-[10px] text-[#212121]/50 font-extrabold pb-[9px]">
              Personal Details
            </Text>

            <View>
              <ControlledInput
                control={control}
                name="first_name"
                placeholder="First Name"
                iconName="person"
                iconColor="black"
                label="First Name"
              />
              <ControlledInput
                control={control}
                name="last_name"
                placeholder="Last Name"
                iconName="person"
                iconColor="black"
                label="Last Name"
              />
              <ControlledInput
                control={control}
                name="phone_number"
                placeholder="Phone Number"
                iconName="call-"
                iconColor="black"
                label="Phone Number"
              />
              <ControlledInput
                control={control}
                name="date_of_birth"
                placeholder="Date of Birth"
                iconName="person"
                iconColor="black"
                label="Date of Birth"
              />
            </View>
            <View className="mt-[15px] mb-[30px]">
              <Text className="uppercase text-[10px] text-[#212121]/50 font-extrabold pb-[9px]">
                SECURITY
              </Text>
              <ControlledInput
                control={control}
                name="password"
                placeholder="Password"
                iconName="person"
                iconColor="black"
                label="Password"
                secureTextEntry={true}
              />
              <ControlledInput
                control={control}
                name="confirmPassword"
                placeholder="Confirm Password"
                iconName="person"
                iconColor="black"
                label="Confirm Password"
                secureTextEntry={true}
              />
            </View>

            <Button buttonText="Sign Up" buttonSideText={6} />

            <Text className="text-[#100a2c]/60 text-[10px] leading-[15px] text-center">
              By signing up, I agree to CrowdCargo{" "}
              <Text className="text-[#1074fd] underline ">
                Terms of Service, Safety Policy
              </Text>{" "}
              and{" "}
              <Text className="text-[#1074fd] underline">Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
