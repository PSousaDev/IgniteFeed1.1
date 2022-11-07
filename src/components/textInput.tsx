import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";
// parte da div superior do input
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface textInputRootProps {
  children: ReactNode;
}
export function textInputRoot(props: TextInputProps) {
  return (
    <div className=" flex intens-center gap-3 px-4 py-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 ">
      {props.children}
    </div>
  );
}
// adicao do icone do input
export interface TextInputIconprops {
  children: ReactNode;
}
function textInputIcon(props: TextInputIconprops) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}
textInputIcon.displayName = "TextInputIcon";
// parte do input fragmentada
export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}
function TextInputIput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}
// exportacao geral dos conponentes do input
export const TextInput = {
  root: textInputRoot,
  input: TextInputIput,
  icon: textInputIcon,
};
