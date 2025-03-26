import { useEffect, useState } from 'react'
import { Header } from '../Components/Components'
import { detailKarya } from '../services/Type'
import { Link } from 'react-router-dom'

function Karya() {
    const [data, setDatas] = useState<detailKarya[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json')
            const fetchedData = await response.json()

            setDatas(fetchedData.data)
        }

        fetchData()
    }, [])

    return (
        <>
            <Header />

            <div className='grid grid-cols-4 px-30 pb-20 gap-4'>
            {
                data.map(karya => (
                    <Link to={`/karya/detail/${karya.id}/${karya.title}`} key={karya.title}>
                        <div className='flex flex-col gap-4 items-center' >
                            <img src={`/karya-karya/${karya.id}.png`} />
                            <p className='title'>{ karya.title }</p>
                        </div>
                    </Link>
                ))
            }
            </div>
        </>
    )
}

export default Karya
