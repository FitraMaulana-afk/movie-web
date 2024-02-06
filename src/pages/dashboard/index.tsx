// import {
//     mdiAccountMultiple,
//     mdiCartOutline,
//     mdiChartPie,
//     mdiChartTimelineVariant,
//     mdiGithub,
//     mdiMonitorCellphone,
//     mdiReload,
// } from '@mdi/js'
// import Head from 'next/head'
import React from 'react'
import type { ReactElement } from 'react'
// import Button from '../../components/Button'
import LayoutAuthenticated from '../../layouts/Authenticated'
// import SectionMain from '../../components/Section/Main'
// import SectionTitleLineWithButton from '../../components/Section/TitleLineWithButton'
// import CardBoxWidget from '../../components/CardBox/Widget'
// import { useSampleClients, useSampleTransactions } from '../../hooks/sampleData'
// import CardBoxTransaction from '../../components/CardBox/Transaction'
// import { Client, Transaction } from '../../interfaces'
// import CardBoxClient from '../../components/CardBox/Client'
// import SectionBannerStarOnGitHub from '../../components/Section/Banner/StarOnGitHub'
// import CardBox from '../../components/CardBox'
// import { sampleChartData } from '../../components/ChartLineSample/config'
// import ChartLineSample from '../../components/ChartLineSample'
// import NotificationBar from '../../components/NotificationBar'
// import TableSampleClients from '../../components/Table/SampleClients'
// import { getPageTitle } from '../../config'
import DashboardView from '../../views/Dashboard'

const DashboardPage = () => {
    // const { clients } = useSampleClients()
    // const { transactions } = useSampleTransactions()

    // const clientsListed = clients.slice(0, 4)

    // const [chartData, setChartData] = useState(sampleChartData())

    // const fillChartData = (e: React.MouseEvent) => {
    //     e.preventDefault()

    //     setChartData(sampleChartData())
    // }

    return (
        <>
            <DashboardView />
        </>
    )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DashboardPage
