'use client'
import Link from 'next/link'
import React from 'react'

const Users = ({ users }) => {
    return (
        <div className="flex flex-wrap justify-center gap-5 p-5 h-screen">
            {users.map(({ id, avatar, email, first_name, last_name }) => (
                <Link key={id} href={`/user/${id}`}>
                    <div
                        className="w-auto bg-slate-700 transition-all duration-150 ease-in hover:scale-105 hover:border-solid hover:border-2 cursor-pointer flex flex-col items-center h-72 p-10 rounded-xl"

                    >
                        <img className="rounded-full w-40 " src={avatar} />
                        <div className="flex flex-col items-center pt-5">
                            <h2 className="text-yellow-400 font-bold text-2xl">
                                {first_name} {last_name}
                            </h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Users