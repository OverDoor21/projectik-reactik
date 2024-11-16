import { TextUserInput, setTextUserInput } from './text';  // Import the variable and setter

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Welcome to Projectik!</h1>
      <p className="text-lg text-center">
        Get started by editing <code>src/app/page.tsx</code>
      </p>
      <UserTextInput />
    </div>
  );
}

function UserTextInput(){ 
  return (
    <input />
  )
}