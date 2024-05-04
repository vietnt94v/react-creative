import { IPopup } from '@/models/Popup'

const Popup = ({ title, message, size = 'md', onSubmit, onCancel }: IPopup) => {
  const sizeClass = {
    sm: 'w-100',
    md: 'w-160',
    lg: 'w-200',
  }[size]

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div
        className={`bg-black/50 rounded-lg p-4 shadow-lg text-center border border-white/50 ${sizeClass}`}
      >
        <h2 className='text-xl font-semibold'>{title}</h2>
        <div className='p-5'>
          {message && <p className='my-2'>{message}</p>}
        </div>
        <div className='space-x-5'>
          <button
            className='bg-green-500 text-white py-2 px-4 rounded mt-2'
            onClick={onSubmit}
          >
            Submit
          </button>
          <button
            className='bg-red-500 text-white py-2 px-4 rounded mt-2'
            onClick={onCancel}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
