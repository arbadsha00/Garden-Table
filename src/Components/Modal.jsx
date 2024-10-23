
const Modal = () => {
    return (
        <div>
            <dialog id="modal" className="modal">
                <div className="modal-box text-center mx-auto">
                    <img className="w-40 mx-auto" src="https://i.ibb.co.com/nsLhVvq/cooking.jpg" alt="" />
    <h3 className="font-bold text-xl">Preparing!</h3>
    <p className="py-4">One recipe a a time</p>
    <div className="modal-action justify-center ">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-primary text-black border-none rounded-full hover:bg-black hover:text-primary px-8">
            Close
          </button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Modal;