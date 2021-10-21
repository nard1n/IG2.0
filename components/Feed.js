import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'
import { useSession } from "next-auth/react";

const Feed = () => {
    const { data: session } = useSession();

    return (
        <div>
            <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>

                {/* Left Section */}
                <section className='col-span-2'>
                    <Stories />
                    <Posts />
                </section>
                
                {/* Right Section */}
                {session && (
                    <section className="hidden xl:inline-grid md:col-span-1">
                        <div className="fixed top-20">
                            <MiniProfile />
                            <Suggestions />
                        </div>
                    </section>

                )}

            </main>
        </div>
    )
}

export default Feed
