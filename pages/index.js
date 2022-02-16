import AboutAuthor from "../components/patials/author/AboutAuthor";
import Author from "../components/patials/author/Author";
import IntroArea from "../components/IntroArea";
import Questions from "../components/Questions";
import Syllabus from "../components/Syllabus";

export default function Home() {
  return (
    <>
      <IntroArea />
      <Author />
      <Syllabus />
      <Questions />
      <AboutAuthor />
      
    </>
  )
}