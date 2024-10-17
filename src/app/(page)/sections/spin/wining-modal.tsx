type Props = {
  modalOpen: boolean;
  prize: number;
  closeModal: () => void;
};

export const WinningModal = ({ modalOpen, prize, closeModal }: Props) => {
  return (
    <div
      id="popup-modal"
      className={`${
        modalOpen && prize > 0 ? "block" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full bg-black/50 h-screen`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative bg-white rounded-lg shadow">
          <div className="p-4 md:p-5 text-center">
            <h1 className="mb-5 text-4xl font-bold">{prize + " $LUCKY"}</h1>
            <h3 className="mb-10 text-lg font-normal text-gray-500">
              Congratulations on winning {prize + " $LUCKY"}!<br />
              Don't forget to come back for more after a day!
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              onClick={() => closeModal()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
