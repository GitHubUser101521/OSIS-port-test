import {} from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='flex items-center justify-between px-30 py-5'>
            <div className='flex gap-4'>
                <img src="/logo OSIS (compact).png" className='w-20' />

                <div className='flex flex-col justify-center'>
                    <h1 className='font-bold text-2xl'>OSIS SMK Tri Ratna</h1>
                    <p>Smart - Good - Mindfulness</p>
                </div>
            </div>

            <div className='flex gap-8 text-xl'>
                <NavLink to='/'>Halaman Utama</NavLink>
                <NavLink to='/karya'>Karya</NavLink>
                <NavLink to='/tentang'>Tentang</NavLink>
                <NavLink to='/kontak'>Kontak</NavLink>
            </div>
        </div>
    )
}

export default Header
