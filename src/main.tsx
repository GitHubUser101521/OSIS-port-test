import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HalamanUtama, Tentang, Kontak, Karya } from './Pages/Pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LihatKarya from './Components/LihatKarya'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HalamanUtama />
    },
    {
        path: '/tentang',
        element: <Tentang />
    },
    {
        path: '/kontak',
        element: <Kontak />
    },
    {
        path: '/karya',
        element: <Karya />
    },
    {
        path: '/karya/detail/:id/:title',
        element: <LihatKarya />
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
