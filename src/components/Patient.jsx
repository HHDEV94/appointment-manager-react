/* eslint-disable react/prop-types */
const Patient = ({ patient, setPatientEdit, deleteAppointment }) => {
  const { pet, owner, email, release, symptoms, id } = patient

  return (
    <div className='mx-3 mb-3 bg-white shadow-md px-5 py-10 rounded-lg'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Pet Name: <span className='font-normal normal-case'>{pet}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Owner: <span className='font-normal normal-case'>{owner}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email: <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Release: <span className='font-normal normal-case'>{release}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Symptoms: <span className='font-normal normal-case'>{symptoms}</span>
      </p>

      <div className='flex justify-center gap-4'>
        <button
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
          type='button'
          onClick={() => setPatientEdit(patient)}
        >
          Edit
        </button>

        <button
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
          type='button'
          onClick={() => deleteAppointment(id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Patient
