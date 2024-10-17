import { useState } from "react";
import { Button } from "@/components";
import { tutorialInfos, CardProps } from "./tutorial-info";
import { TutorialModal } from "./tutorial-modal";

export const Tutorials = () => {
  return (
    <div className="bg-[#4cb050] w-full pb-5 pt-24 relative">
      <div className="container">
        <div className="text-[54px] text-white text-center">
          LUCKY TUTORIALS
        </div>
        <div className="relative mt-20 flex items-center">
          <div className="relative w-full flex xl:flex-row flex-col xl:items-start items-center justify-between">
            {tutorialInfos.map((item: CardProps, idx: number) => (
              <div className="flex flex-col gap-10 xl:mb-24" key={idx}>
                <TutorialCard
                  title={item.title}
                  desc={item.desc}
                  steps={item.steps}
                  note={item.note}
                />
                <div className="min-h-[250px] xl:block hidden" />
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 w-full hidden xl:block pointer-events-none">
            <div className="relative grid grid-cols-7 justify-between items-end w-full">
              <div className="col-span-2 relative">
                <img
                  src="/tutorials/book.svg"
                  alt="Books"
                  className="w-auto h-auto max-h-[700px]"
                />
              </div>
              <div className="col-span-3 relative flex justify-center">
                <img
                  src="/tutorials/lucky.png"
                  alt="Dog"
                  className="w-auto h-auto max-h-[700px]"
                />
              </div>
              <div className="col-span-2 relative">
                <img
                  src="/tutorials/feed.png"
                  alt="Dog"
                  className="w-auto h-auto max-h-[700px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TutorialCard = ({ title, desc, steps, note }: CardProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-purple-600 text-white p-6 rounded-lg shadow-add-chain-shadow border-2 border-black text-center max-w-[551px] md:px-16 px-8 py-8 mb-10 xl:mb-0">
        <h2 className="text-2xl font-bold mb-5">{title}</h2>
        <p className="mb-4 px-1">{desc}</p>
        <Button
          className="text-base mt-5 text-black py-3 rounded-lg max-w-[340px] w-full cursor-pointer"
          variant="meme-yellow"
          onClick={() => setModalOpen(true)}
        >
          Read Tutorial
        </Button>
      </div>

      <TutorialModal
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        title={title}
        steps={steps}
        note={note}
      />
    </>
  );
};
