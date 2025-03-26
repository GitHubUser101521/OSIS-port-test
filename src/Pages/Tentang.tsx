import {} from 'react'
import { Header } from '../Components/Components'

type InfoCard = {
    title: string,
    content: string
}

function InfoCard({ title, content }: InfoCard) {
    return (
        <div className='flex justify-between items-center'>
            <div className='bg-dark-blue w-1/4 aspect-square'>
                <img src="/logo OSIS (compact).png"/>
            </div>

            <div className='text-right flex flex-col items-end gap-8 w-2/3'>
                <h1 className='font-bold text-4xl'>{ title }</h1>
                <p className='text-xl'>{ content }</p>
            </div>
        </div>
    )
}

function Tentang() {
    return (
        <>
            <Header />

            <div className='px-30 mt-10'>
                <InfoCard 
                    title="Title" 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id eros vitae ligula porta varius. Nam mattis diam ac hendrerit semper. Phasellus vel elit quam. In consequat accumsan quam, et lacinia lacus lacinia vel. Maecenas volutpat, turpis in molestie consequat, mauris metus congue nibh, eget consectetur ipsum dui nec odio."
                />
            </div>
        </>
    )
}

export default Tentang
