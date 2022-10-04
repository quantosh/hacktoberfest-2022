
const PasswordBox = ({ password, isCopied, copyToClipboard }) => {
	if (!password) return <></>
	return (
		<div className='mt-3 grid grid-cols-3'>
			<div className='bg-gray-300 col-span-2 px-2 py-1'>{password}</div>
			<button
				className={(isCopied) ? 'bg-green-500 hover:opacity-75 text-white px-2 py-1' : 'bg-gray-600 hover:bg-gray-700 text-white px-2 py-1'}
				onClick={() => copyToClipboard(password)}
			>
				copy to clipboard
			</button>
		</div>
	)
}

export default PasswordBox
