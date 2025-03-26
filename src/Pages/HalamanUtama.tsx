import { Link } from 'react-router-dom'
import { Header } from '../Components/Components'

function App() {
  return (
        <div>
            <Header />

            <div className='bg-dark-blue px-30 py-20'>
                <h1 className='font-bold text-5xl text-white mb-4'>Galeri SMK Tri Ratna</h1>
                <p className='text-white max-w-1/3 text-xl'>OSIS SMK Tri Ratna mendukung murid-murid untuk aktif mengembangkan dan memperlihatkan bakat mereka.</p>

                <button className='bg-yellow rounded-3xl px-4 py-2 font-bold mt-8 text-xl'>
                    Lihat lebih banyak 
                </button>
            </div>

            <div className='px-20 py-10 flex justify-around'>
                <Link to='/tentang'>
                <div className="flex flex-col items-center gap-8">
                    <p className="italic text-2xl">
                        Tentang Kami
                    </p>
                    <button className='bg-yellow px-8 py-2 rounded-3xl text-xl'>
                        Cari Tahu
                    </button>
                </div>
                </Link>

                <Link to='/tentang'>
                <div className="flex flex-col items-center gap-8">
                    <p className="italic text-2xl">
                        Visi & Misi
                    </p>
                    <button className='bg-yellow px-8 py-2 rounded-3xl text-xl'>
                        Cari Tahu
                    </button>
                </div>
                </Link>

                <Link to='/tentang'>
                <div className="flex flex-col items-center gap-8">
                    <p className="italic text-2xl">
                        Kontak Kami
                    </p>
                    <button className='bg-yellow px-8 py-2 rounded-3xl text-xl'>
                        Cari Tahu
                    </button>
                </div>
                </Link>
            </div>
        </div>
  )
}

export default App
