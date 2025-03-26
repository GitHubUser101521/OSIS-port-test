import { Header } from '../Components/Components'
import { Link } from 'react-router-dom'
import { db } from '../services/datas'

function Karya() {
    // const [data, setDatas] = useState<detailKarya[]>([
    //     {
    //         "id": 1,
    //         "title": "Title 1",
    //         "description": "dabjkbfeialbsdkjlu",
    //         "creator": {
    //             "name": "creator1"
    //         }
    //     },
    //     {
    //         "id": 2,
    //         "title": "Title 2",
    //         "description": "dabjkbfeialbsdkjlu",
    //         "creator": {
    //             "name": "creator1"
    //         }
    //     },
    //     {
    //         "id": 3,
    //         "title": "Title 3",
    //         "description": "dabjkbfeialbsdkjlu",
    //         "creator": {
    //             "name": "creator1"
    //         }
    //     },
    //     {
    //         "id": 4,
    //         "title": "Title 4",
    //         "description": "dabjkbfeialbsdkjlu",
    //         "creator": {
    //             "name": "creator1"
    //         }
    //     },
    //     {
    //         "id": 5,
    //         "title": "Title 5",
    //         "description": "dabjkbfeialbsdkjlu",
    //         "creator": {
    //             "name": "creator1"
    //         }
    //     },
    //     {
    //         "id": 6,
    //         "title": "Title 6",
    //         "description": "dabjkbfeialbsdkjlu",
    //         "creator": {
    //             "name": "creator1"
    //         }
    //     },
    //     {
    //         "id": 7,
    //         "title": "Title 7",
    //         "description": "dabjkbfeialbsdkjlu",
    //         "creator": {
    //             "name": "creator1"
    //         }
    //     },{
    //         "id": 8,
    //         "title": "Title 8",
    //         "description": "dabjkbfeialbsdkjlu",
    //         "creator": {
    //             "name": "creator8"
    //         }
    //     }
    // ])

    return (
        <>
            <Header />

            <div className='grid grid-cols-4 px-30 pb-20 gap-4'>
            {
                db.map(karya => (
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
