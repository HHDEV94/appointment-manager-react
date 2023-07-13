/* eslint-disable react/prop-types */
import Patient from './Patient'

const PatientList = ({ patients, setPatientEdit, deleteAppointment }) => {
  if (patients.length === 0) {
    return (
      <div className='md:w-1/2 lg:w-3/5 '>
        <h2 className='font-black text-3xl text-center'>There are not Patients</h2>
        <p className='text-xl mt-5 mb-10 text-center'>
          Start Adding your{' '}
          <span className='text-indigo-600 font-bold'>Appointments & Patients</span>
        </p>
      </div>
    )
  }

  return (
    <div className='md:w-1/2 lg:w-3/5 '>
      <h2 className='font-black text-3xl text-center'>Patients List</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Manage your <span className='text-indigo-600 font-bold'>Appointments & Patients</span>
      </p>

      <div className='md:h-screen overflow-y-scroll'>
        {patients.map(patient => (
          <Patient
            key={patient.id}
            patient={patient}
            setPatientEdit={setPatientEdit}
            deleteAppointment={deleteAppointment}
          />
        ))}
      </div>
    </div>
  )
}

export default PatientList
