import { useParams } from "react-router-dom"
import Header from "./Header"
import { useEffect, useState } from "react"
import { detailKarya } from "../services/Type"

function LihatKarya() {
    const { id } = useParams()
    const [ data, setData ] = useState<detailKarya>({
        id: 0o0,
        title: '',
        description: '',
        creator: {
            name: ''
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json')
            const fetchedData = await response.json()

            if (!id) return

            setData(fetchedData.data[parseInt(id) - 1])
        }

        fetchData()
    }, [])

    return (
        <>
            <Header />
            <div className="px-30 flex pt-20 gap-12">
                <img src={`/karya-karya/${id}.png`} className="w-1/3"/>

                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="detail-title">{ data.title }</h1>
                        <p>By { data.creator.name }</p>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default LihatKarya
