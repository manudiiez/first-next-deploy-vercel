import { map } from 'lodash'
import React from 'react'

const page = async () => {

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/account')
            const result = await response.json()
            return result
        } catch (error) {
            console.log(error);
        }
    }

    const data = await getData()

    return (
        <div>
            {
                map(data, (item) => (
                    <div>
                        <p>{item.name}</p>
                        <p>{item.species}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default page