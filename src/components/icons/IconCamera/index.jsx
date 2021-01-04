import React from 'react'

const IconCamera = ({ classNames }) => {
	return (
		<svg
			width='5rem'
			height='5rem'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={classNames ? classNames.join(' ') : ''}
		>
			<g id='photo_camera_24px'>
				<path
					id='icon/image/photo_camera_24px'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M20 5H16.83L15.59 3.64999C15.22 3.24001 14.68 3 14.12 3H9.88C9.32001 3 8.78003 3.24001 8.40002 3.64999L7.16998 5H4C2.90002 5 2 5.89999 2 7V19C2 20.1 2.90002 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.89999 21.1 5 20 5ZM12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10ZM7 13C7 15.76 9.23999 18 12 18C14.76 18 17 15.76 17 13C17 10.24 14.76 8 12 8C9.23999 8 7 10.24 7 13Z'
					fill='#000'
					fillOpacity='1'
				/>
			</g>
		</svg>
	)
}

export default IconCamera
