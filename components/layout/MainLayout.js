import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'


export function MainLayout({children, title = 'Page', description = '...'}) 
{

    const router = useRouter()

    return (
        <>
			<Head>
				<title>{title}</title>
                <meta name="description" content={description} />
			</Head>
            {children}
        </>
    )
}