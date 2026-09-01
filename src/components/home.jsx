import { MorphText } from "@/components/ui/morph-text";

function Home() {
  return (
    <>
      <section className="bg-gray-900 dark:bg-gray-900 h-dvh w-full text-gray-200" >
        <MorphText
      
          words={["سلام", "خوش آمدید", "به پروژه شخصی من"]}
          interval={2500}
          // pause={1500}
     
          fontSize="clamp(2rem, 10vw, 8rem)"
           fontFamily='"sans", sans-serif'
        />

        سلام به همه دنیا 
      </section>
    </>
  );
}

export default Home;
