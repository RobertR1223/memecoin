import { Cross1Icon } from "@radix-ui/react-icons";

type Props = {
  modalOpen: boolean;
  closeModal: () => void;
};

export const GuideModal = ({ modalOpen, closeModal }: Props) => {
  return (
    <div
      id="popup-modal"
      className={`${
        modalOpen ? "block" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 max-h-full bg-black/50 h-screen z-[999]`}
    >
      <div className="relative w-[90%] max-w-3xl h-[90%] overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white">
        <div className="relative">
          <Cross1Icon
            className="absolute top-4 right-4 cursor-pointer"
            onClick={closeModal}
          />
          <div className="p-4 md:p-5 text-center">
            <div className="px-10">
              <img
                src="/buy/guide-back.png"
                alt="guide-back"
                className="w-full"
              />
              <h1 className="mb-5 text-4xl font-bold">
                The Story of Lucky: The Luckiest Dog in the World
              </h1>
            </div>
            <h3 className="mb-5 text-2xl font-bold">
              Chapter 1: Lucky Beginnings
            </h3>
            <div className="text-lg pb-6">
              <p>
                Lucky's journey began in the most unlikely of places—a cold and
                bustling street in Las Vegas.
              </p>
              <br />
              <p>
                Born to a stray mother who tragically passed away at his birth,
                tiny Lucky was left to fend for himself. Despite the harsh
                conditions, Lucky's incredible luck started to shine through.{" "}
              </p>
              <br />
              <p>
                On one occasion, while exploring the streets, Lucky wandered
                into a bakery. The baker, initially annoyed, noticed Lucky's
                endearing eyes and decided to give him a leftover loaf of bread.
                As Lucky left, a customer who had seen the interaction bought a
                large order of
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
