import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/button";
import { Checkbox } from "./components/checkbox";
import { Headin } from "./components/heading";
import { Text } from "./components/text";
import { TextInput } from "./components/textInput";
import { Logo } from "./Logo";

import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Headin size="lg" className="mt-4">
          Ignite Lab
        </Headin>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.root>
            <TextInput.icon>
              <Envelope />
            </TextInput.icon>

            <TextInput.input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text clas="font-semibold">Sua senha</Text>
          <TextInput.root>
            <TextInput.icon>
              <Lock />
            </TextInput.icon>

            <TextInput.input
              type="password"
              id="password"
              placeholder="******"
            />
          </TextInput.root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
