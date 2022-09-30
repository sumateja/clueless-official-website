import Head from 'next/head'
import React from 'react'
import Clueless_Hacktoberfest from './components/Hacktoberfest/Clueless_Hacktoberfest'
import Projects from './components/Hacktoberfest/Projects'
import RewardsAndPerks from './components/Hacktoberfest/RewardsAndPerks'
import Navbar from './components/shared/Navbar/Navbar'

const hacktoberfest = () => {
    return (
        <div>
            <Head>
                <title>Hacktoberfest</title>
            </Head>
            <Navbar />
            <Clueless_Hacktoberfest />
            <RewardsAndPerks />
            <Projects />
        </div>
    )
}

export default hacktoberfest