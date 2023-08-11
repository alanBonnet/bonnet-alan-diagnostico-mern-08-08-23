// eslint-disable-next-line react/prop-types
const BTNModal = ({ setModalHidden, modalHidden }) => {
    return (
        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-md mx-auto md:ms-5 px-5 py-4 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800 mb-4
        max-w-full w-96 md:w-auto" type="button" onClick={() => { setModalHidden(!modalHidden) }}>
            Agregar Tarea
        </button>
    )
}

export default BTNModal