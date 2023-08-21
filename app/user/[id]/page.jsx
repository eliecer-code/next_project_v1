import React from 'react'
import Link from 'next/link'
import Button from '@/components/Buttons/Button'
const fecthUser = async (id) => {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

const ProfileUser = async ({ params }) => {
    const { id, first_name, email, last_name, avatar } = await fecthUser(params.id);

    return (
        <div className='flex justify-center items-center flex-col w-full h-screen'>
            <div className="flex items-center relative w-auto h-2/5 p-4 rounded-lg overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gray-50 opacity-20 blur-md"></div>
                <div className="relative w-2/4 h-full flex justify-center items-center">
                    <img src={avatar} alt="Foto de perfil" className="w-52 h-auto rounded-full" />
                </div>
                <div className="m-4 w-2/4 flex flex-col justify-around h-2/4">
                    <h2 className="text-2xl text-yellow-500 font-bold">{first_name} {last_name}</h2>
                    <p className="text-yellow-200">{email}</p>
                </div>
            </div>
            <Link href={"/"}>
                <Button
                    texto="Back"
                    className="bg-yellow-400 h-10 w-40 rounded-2xl transition-all duration-150 mt-5 font-bold hover:scale-105 hover:bg-yellow-200"
                />
            </Link>
        </div>


    )
}

export default ProfileUser