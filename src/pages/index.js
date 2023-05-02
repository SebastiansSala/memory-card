import Main from "./components/main";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="container mx-auto gap-14 w-9/12 h-auto bg-red-500">
      <Header></Header>
      <Main></Main>
    </div>
  );
}
