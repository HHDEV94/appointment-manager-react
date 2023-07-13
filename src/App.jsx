import { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

function App() {
  const [patients, setPatients] = useState(() => {
    const patientsLS = localStorage.getItem('patients')
    return patientsLS ? JSON.parse(patientsLS) : []
  })
  const [patientEdit, setPatientEdit] = useState({})

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deleteAppointment = id => {
    const confirmDelete = confirm('Are you sure you want to delete this appointment?')

    if (confirmDelete) {
      const updatedPatients = patients.filter(patient => patient.id !== id)

      setPatients(updatedPatients)
    }

    return
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />

      <div className='md:flex mt-12'>
        <Form
          patients={patients}
          patientEdit={patientEdit}
          setPatients={setPatients}
          setPatientEdit={setPatientEdit}
        />

        <PatientList
          patients={patients}
          setPatientEdit={setPatientEdit}
          deleteAppointment={deleteAppointment}
        />
      </div>
    </div>
  )
}

export default App
