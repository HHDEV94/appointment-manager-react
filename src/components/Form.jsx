/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Error from './Error'

const Form = ({ patients, patientEdit, setPatients, setPatientEdit }) => {
  const [pet, setPet] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [release, setRelease] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(patientEdit).length > 0) {
      setPet(patientEdit.pet)
      setOwner(patientEdit.owner)
      setEmail(patientEdit.email)
      setRelease(patientEdit.release)
      setSymptoms(patientEdit.symptoms)
    }
  }, [patientEdit])

  const idGenerator = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return random + date
  }

  const handleSubmit = e => {
    e.preventDefault()

    if ([pet, owner, email, release, symptoms].includes('')) {
      setError(true)

      setTimeout(() => {
        setError(false)
      }, 2500)
      return
    }

    const patientOBJ = {
      pet,
      owner,
      email,
      release,
      symptoms
    }

    //Editing or saving an appointment
    if (patientEdit.id) {
      patientOBJ.id = patientEdit.id

      const updatedAppointment = patients.map(patient =>
        patient.id === patientEdit.id ? patientOBJ : patient
      )

      setPatients(updatedAppointment)
      setPatientEdit({})
    } else {
      patientOBJ.id = idGenerator()
      setPatients([...patients, patientOBJ])
    }

    setPet('')
    setOwner('')
    setEmail('')
    setRelease('')
    setSymptoms('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Follow-up Patients</h2>
      <p className='text-lg text-center mt-5 mb-10'>
        Add and Manage <span className='text-indigo-600 font-bold'>Patients</span>
      </p>

      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5'>
        {error && <Error msg='All fields are required!' />}
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='pet'>
            Pet Name
          </label>
          <input
            className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded'
            type='text'
            placeholder='max, hercules, etc.'
            id='pet'
            value={pet}
            onChange={e => setPet(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='owner'>
            Owner Name
          </label>
          <input
            className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded'
            type='text'
            placeholder='Owner Name'
            id='owner'
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='email'>
            Email
          </label>
          <input
            className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded'
            type='email'
            placeholder='example@email.com'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='release'>
            Release
          </label>
          <input
            className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded'
            type='date'
            id='release'
            value={release}
            onChange={e => setRelease(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='symptoms'>
            Symptoms
          </label>
          <textarea
            className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded'
            placeholder='Vomiting, dizziness, fever...'
            id='symptoms'
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
          />
        </div>

        <input
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all'
          type='submit'
          value={patientEdit.id ? 'Edit Appointment' : 'Add Appointment'}
        />
      </form>
    </div>
  )
}

export default Form
