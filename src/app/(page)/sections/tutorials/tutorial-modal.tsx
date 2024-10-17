import { Cross1Icon } from "@radix-ui/react-icons";

type Props = {
  modalOpen: boolean;
  title: string;
  steps: string[];
  note: string | undefined;
  closeModal: () => void;
};

export const TutorialModal = ({
  modalOpen,
  title,
  steps,
  note,
  closeModal,
}: Props) => {
  return (
    <div
      id="popup-modal"
      className={`${
        modalOpen ? "block" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 max-h-full bg-black/50 h-screen z-[999]`}
    >
      <div className="relative lg:w-[30%] w-[90%] max-w-3xl overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white">
        <div className="relative">
          <Cross1Icon
            className="absolute top-4 right-4 cursor-pointer"
            onClick={closeModal}
          />
          <div className="p-4 md:p-5 text-center">
            <h1 className="mb-5 text-3xl font-bold">{title}</h1>
            {note ? (
              <h3 className="mb-5 font-medium text-md text-left">{note}</h3>
            ) : (
              <></>
            )}
            <div className="text-lg pb-6 text-left">
              {steps.map((step: string, idx: number) => (
                <p key={idx} className="pb-2">
                  <span className="font-bold">Step {idx + 1}: </span>
                  <span>{step}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
